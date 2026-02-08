import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import MarkdownIt from 'markdown-it';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';

const md = new MarkdownIt();

export async function GET(context) {
	const posts = await getCollection('blog');
	const rssFeed = await rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		customData: '<language>zh-cn</language>',
		items: posts.map((post) => {
			const html = md.render(post.body ?? '');
			const text = html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
			const excerpt =
				text.length > 150 ? `${text.slice(0, 150).trim()}…` : text || SITE_DESCRIPTION;

			return {
				title: post.data.title,
				pubDate: post.data.date,
				link: `/blog/${post.id}/`,
				description: excerpt,
			};
		}),
	});
	const rssXml = await rssFeed.text();
	return new Response(rssXml, {
		headers: {
			'Content-Type': 'application/rss+xml; charset=utf-8',
		},
	});
}
