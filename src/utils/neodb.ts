const NEODB_ORIGIN = 'https://neodb.social';
const NEODB_RSS_URL = `${NEODB_ORIGIN}/@huaer620@neodb.social/rss/`;
const NEODB_PROFILE_URL = `${NEODB_ORIGIN}/users/huaer620/`;

export interface NeoDBItem {
	title: string;
	link: string;
	description: string;
	publishedAt: Date;
	category: string;
	action: string;
	workTitle: string;
}

export interface NeoDBFeed {
	items: NeoDBItem[];
	sourceUrl: string;
	profileUrl: string;
	lastBuildDate: Date | null;
	error: string | null;
}

const actionLabels: Record<string, string> = {
	'finished reading': '读完',
	'wants to read': '想读',
	'started reading': '在读',
	'stopped reading': '搁置',
	'finished watching': '看过',
	'wants to watch': '想看',
	'started watching': '在看',
	'finished listening': '听完',
	'wants to listen': '想听',
	'started listening': '在听',
};

const categoryLabels: Record<string, string> = {
	read: '书',
	reading: '书',
	watch: '影',
	watching: '影',
	listen: '听',
	listening: '听',
};

function readTag(source: string, tag: string) {
	const match = source.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i'));
	return match ? decodeXml(match[1].trim()) : '';
}

function decodeXml(value: string) {
	return value
		.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/&apos;/g, "'")
		.replace(/&amp;/g, '&');
}

function normalizeUrl(value: string) {
	if (value.startsWith('/')) return `${NEODB_ORIGIN}${value}`;
	return value;
}

function stripHtml(value: string) {
	return value
		.replace(/<br\s*\/?>/gi, ' ')
		.replace(/<[^>]+>/g, ' ')
		.replace(/\s+/g, ' ')
		.trim();
}

function sanitizeDescription(value: string) {
	const cleaned = value
		.replace(/<script[\s\S]*?<\/script>/gi, '')
		.replace(/<style[\s\S]*?<\/style>/gi, '')
		.replace(/\s(on\w+|style)=("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
		.replace(/\s(target|rel)=("[^"]*"|'[^']*'|[^\s>]+)/gi, '')
		.replace(/href=(["'])\/([^"']*)\1/gi, `href=$1${NEODB_ORIGIN}/$2$1`)
		.replace(/<(?!\/?(a|p|br)\b)[^>]*>/gi, '');

	return cleaned.replace(
		/<a\s+([^>]*href=["']https:\/\/neodb\.social\/[^"']+["'][^>]*)>/gi,
		'<a $1 target="_blank" rel="noopener noreferrer">'
	);
}

function inferItem(title: string) {
	const action = Object.keys(actionLabels).find((candidate) => title.startsWith(candidate));
	if (!action) {
		return {
			action: 'NeoDB',
			category: '记录',
			workTitle: title,
		};
	}

	const categoryKey = action.split(' ').at(-1) || '';
	const workTitle = title
		.slice(action.length)
		.replace(/[🌑🌒🌓🌔🌕🌖🌗🌘]+/gu, '')
		.trim();

	return {
		action: actionLabels[action],
		category: categoryLabels[categoryKey] || '记录',
		workTitle,
	};
}

export async function getNeoDBFeed(limit = 24): Promise<NeoDBFeed> {
	try {
		const response = await fetch(NEODB_RSS_URL);
		if (!response.ok) {
			throw new Error(`NeoDB returned ${response.status}`);
		}

		const rss = await response.text();
		const channel = rss.match(/<channel>([\s\S]*?)<\/channel>/i)?.[1] || rss;
		const lastBuildDate = readTag(channel, 'lastBuildDate');
		const rawItems = [...rss.matchAll(/<item>([\s\S]*?)<\/item>/gi)].slice(0, limit);

		const items = rawItems.map((match) => {
			const itemXml = match[1];
			const title = readTag(itemXml, 'title');
			const description = sanitizeDescription(readTag(itemXml, 'description'));
			const inferred = inferItem(title || stripHtml(description));

			return {
				title,
				link: normalizeUrl(readTag(itemXml, 'link')),
				description,
				publishedAt: new Date(readTag(itemXml, 'pubDate')),
				...inferred,
			};
		});

		return {
			items,
			sourceUrl: NEODB_RSS_URL,
			profileUrl: NEODB_PROFILE_URL,
			lastBuildDate: lastBuildDate ? new Date(lastBuildDate) : null,
			error: null,
		};
	} catch (error) {
		return {
			items: [],
			sourceUrl: NEODB_RSS_URL,
			profileUrl: NEODB_PROFILE_URL,
			lastBuildDate: null,
			error: error instanceof Error ? error.message : 'Unable to load NeoDB feed',
		};
	}
}
