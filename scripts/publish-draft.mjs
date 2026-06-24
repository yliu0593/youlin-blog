#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const inboxDir = path.join(root, 'blog-inbox');
const draftPath = path.join(inboxDir, 'draft.md');
const postsDir = path.join(root, 'src/content/blog');
const imagesDir = path.join(root, 'public/images');
const imageExtensions = new Set(['.avif', '.gif', '.heic', '.heif', '.jpeg', '.jpg', '.png', '.webp']);

function today() {
	return new Date().toISOString().slice(0, 10);
}

function slugify(value) {
	const slug = value
		.normalize('NFKD')
		.toLowerCase()
		.replace(/['"]/g, '')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-+|-+$/g, '');

	return slug || 'draft';
}

function yamlString(value) {
	return `"${String(value).replaceAll('\\', '\\\\').replaceAll('"', '\\"')}"`;
}

function parseFrontmatter(markdown) {
	const match = markdown.match(/^---\s*\n([\s\S]*?)\n---\s*\n?/);
	if (!match) return { data: {}, body: markdown.trim() };

	const data = {};
	for (const line of match[1].split('\n')) {
		const field = line.match(/^([A-Za-z][\w-]*):\s*(.*)$/);
		if (!field) continue;

		const [, key, rawValue] = field;
		const value = rawValue.trim();
		if (value.startsWith('[') && value.endsWith(']')) {
			data[key] = value
				.slice(1, -1)
				.split(',')
				.map((item) => item.trim().replace(/^["']|["']$/g, ''))
				.filter(Boolean);
		} else {
			data[key] = value.replace(/^["']|["']$/g, '');
		}
	}

	return { data, body: markdown.slice(match[0].length).trim() };
}

function titleFromMarkdown(markdown) {
	return markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
}

function uniquePath(targetPath) {
	if (!fs.existsSync(targetPath)) return targetPath;

	const extension = path.extname(targetPath);
	const base = targetPath.slice(0, -extension.length);
	let index = 2;
	let nextPath = `${base}-${index}${extension}`;
	while (fs.existsSync(nextPath)) {
		index += 1;
		nextPath = `${base}-${index}${extension}`;
	}
	return nextPath;
}

function listInboxImages() {
	return fs
		.readdirSync(inboxDir)
		.filter((entry) => imageExtensions.has(path.extname(entry).toLowerCase()))
		.map((entry) => path.join(inboxDir, entry))
		.sort();
}

function copyImage(sourcePath, postSlug, count) {
	const extension = path.extname(sourcePath).toLowerCase() || '.jpg';
	const targetPath = uniquePath(path.join(imagesDir, `${postSlug}-${String(count).padStart(2, '0')}${extension}`));
	fs.copyFileSync(sourcePath, targetPath);
	return `/images/${path.basename(targetPath)}`;
}

function rewriteReferencedImages(markdown, postSlug, copiedSources) {
	let imageCount = 1;
	const body = markdown.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, rawUrl) => {
		const cleanUrl = rawUrl.trim().replace(/^<|>$/g, '');
		if (/^(https?:)?\/\//.test(cleanUrl) || cleanUrl.startsWith('/images/')) return match;

		const decoded = decodeURIComponent(cleanUrl.split('#')[0].split('?')[0]);
		const sourcePath = path.resolve(inboxDir, decoded);
		if (!fs.existsSync(sourcePath) || !imageExtensions.has(path.extname(sourcePath).toLowerCase())) return match;

		copiedSources.add(sourcePath);
		const publicPath = copyImage(sourcePath, postSlug, imageCount);
		imageCount += 1;
		return `![${alt}](${publicPath})`;
	});

	return { body, nextImageCount: imageCount };
}

function appendUnlinkedImages(markdown, postSlug, copiedSources, startCount) {
	let imageCount = startCount;
	const imageLines = [];

	for (const imagePath of listInboxImages()) {
		if (copiedSources.has(imagePath)) continue;
		const publicPath = copyImage(imagePath, postSlug, imageCount);
		imageCount += 1;
		imageLines.push(`![](${publicPath})`);
	}

	if (imageLines.length === 0) return markdown;
	return [markdown.trim(), imageLines.join('\n\n')].filter(Boolean).join('\n\n');
}

if (!fs.existsSync(draftPath)) {
	console.error('Missing blog-inbox/draft.md. Create that file, write your post, drop photos beside it, then run npm run publish-draft.');
	process.exit(1);
}

const draft = fs.readFileSync(draftPath, 'utf8');
const { data, body } = parseFrontmatter(draft);
const title = data.title || titleFromMarkdown(body);

if (!title) {
	console.error('Please add a title as either "# Title" or frontmatter: title: "Title"');
	process.exit(1);
}

const date = data.date || today();
const tags = Array.isArray(data.tags) ? data.tags : ['journal'];
const postSlug = `${date}-${data.slug || slugify(title)}`;
const bodyWithoutTitle = body.replace(/^#\s+.+\n?/, '').trim();
const copiedSources = new Set();
const { body: bodyWithImageLinks, nextImageCount } = rewriteReferencedImages(bodyWithoutTitle, postSlug, copiedSources);
const finalBody = appendUnlinkedImages(bodyWithImageLinks, postSlug, copiedSources, nextImageCount);
const targetPost = uniquePath(path.join(postsDir, `${postSlug}.md`));
const summary = data.summary ? `summary: ${yamlString(data.summary)}\n` : '';
const frontmatter = `---\ntitle: ${yamlString(title)}\ndate: ${date}\ntags: [${tags.map(yamlString).join(', ')}]\n${summary}---`;
const markdown = `${frontmatter}\n\n${finalBody || 'Start writing here.'}\n`;

fs.mkdirSync(postsDir, { recursive: true });
fs.mkdirSync(imagesDir, { recursive: true });
fs.writeFileSync(targetPost, markdown, 'utf8');

console.log(`Published ${path.relative(root, targetPost)}`);
console.log('Your blog-inbox files were left untouched.');
