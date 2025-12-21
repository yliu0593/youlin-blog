/**
 * Calculate word count from markdown content
 * Removes frontmatter, code blocks, and HTML tags
 */
export function getWordCount(content: string): number {
	// Remove frontmatter (between --- markers)
	let text = content.replace(/^---[\s\S]*?---\n/, '');

	// Remove code blocks
	text = text.replace(/```[\s\S]*?```/g, '');

	// Remove inline code
	text = text.replace(/`[^`]+`/g, '');

	// Remove HTML tags
	text = text.replace(/<[^>]+>/g, '');

	// Remove markdown links but keep text
	text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

	// Remove images
	text = text.replace(/!\[([^\]]*)\]\([^)]+\)/g, '');

	// Remove headers, bold, italic markers
	text = text.replace(/#+\s/g, '');
	text = text.replace(/\*\*/g, '');
	text = text.replace(/\*/g, '');
	text = text.replace(/__/g, '');
	text = text.replace(/_/g, '');

	const normalized = text.trim();

	if (!normalized) {
		return 0;
	}

	// Match CJK characters individually so Chinese/Japanese/Korean text is counted
	const cjkMatches = normalized.match(/[\p{Script=Han}]/gu) ?? [];
	let count = cjkMatches.length;

	// Match groups of Latin/number characters for English-like words
	const latinWordRegex = /[A-Za-z0-9]+(?:'[A-Za-z0-9]+)*/g;
	const latinMatches = normalized.match(latinWordRegex) ?? [];
	count += latinMatches.length;

	return count;
}

/**
 * Calculate reading time in minutes
 * Assumes average reading speed of 200 words per minute
 */
export function getReadingTime(wordCount: number): number {
	const wordsPerMinute = 200;
	return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * Extract the first image URL from markdown content
 * Returns null if no image is found
 */
export function getFirstImage(content: string): string | null {
	// Remove frontmatter first
	const text = content.replace(/^---[\s\S]*?---\n/, '');

	// Match markdown image syntax: ![alt](url)
	const imageMatch = text.match(/!\[[^\]]*\]\(([^)]+)\)/);

	if (imageMatch && imageMatch[1]) {
		return imageMatch[1];
	}

	return null;
}

