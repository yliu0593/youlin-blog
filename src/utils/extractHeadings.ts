import type { Root } from 'hast';
import { visit } from 'unist-util-visit';

export interface Heading {
	depth: number;
	text: string;
	slug: string;
}

// Store headings globally per render (will be cleared after each render)
let extractedHeadings: Heading[] = [];

/**
 * Rehype plugin to extract headings (h2 and h3) from the document
 */
export function rehypeExtractHeadings() {
	return (tree: Root, file: any) => {
		extractedHeadings = [];
		
		visit(tree, 'element', (node) => {
			if (node.tagName === 'h2' || node.tagName === 'h3') {
				const depth = parseInt(node.tagName.charAt(1));
				const text = extractText(node);
				const id = node.properties?.id as string;
				
				if (id) {
					extractedHeadings.push({
						depth,
						text,
						slug: id,
					});
				}
			}
		});
		
		// Store headings in the file data for Astro to access
		if (!file.data.astro) {
			file.data.astro = {};
		}
		file.data.astro.headings = extractedHeadings;
	};
}

/**
 * Get the extracted headings (call this after render)
 */
export function getExtractedHeadings(): Heading[] {
	return extractedHeadings;
}

/**
 * Extract text content from a node
 */
function extractText(node: any): string {
	if (node.type === 'text') {
		return node.value;
	}
	
	if (node.children) {
		return node.children.map((child: any) => extractText(child)).join('');
	}
	
	return '';
}

