import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent, a as renderHead } from '../../chunks/astro/server_kJn7Uhh8.mjs';
import 'piccolore';
import { g as getCollection, r as renderEntry } from '../../chunks/_astro_content_PCZMHGvl.mjs';
import { $ as $$BaseHead, a as $$SiteLayout } from '../../chunks/SiteLayout_DZZvHzCr.mjs';
import { $ as $$FormattedDate } from '../../chunks/FormattedDate_C1-0uXX-.mjs';
import 'clsx';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$TableOfContents = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TableOfContents;
  const { headings } = Astro2.props;
  if (headings.length === 0) {
    return null;
  }
  return renderTemplate`${maybeRenderHead()}<aside class="toc meta-card" data-astro-cid-xvrfupwn> <nav data-astro-cid-xvrfupwn> <ul class="toc-list" data-astro-cid-xvrfupwn> ${headings.map((heading) => renderTemplate`<li${addAttribute(`toc-item toc-depth-${heading.depth}`, "class")} data-astro-cid-xvrfupwn> <a${addAttribute(`#${heading.slug}`, "href")} data-astro-cid-xvrfupwn>${heading.text}</a> </li>`)} </ul> </nav> </aside> `;
}, "/Users/yliu/code/youlin-blog/src/components/TableOfContents.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const allPosts = await getCollection("blog");
  const post = allPosts.find((entry) => entry.id === slug);
  if (!post) {
    return new Response("Not found", { status: 404 });
  }
  const { Content, headings } = await renderEntry(post);
  const tocHeadings = headings.filter((h) => h.depth === 2 || h.depth === 3);
  const hasToc = tocHeadings.length > 0;
  return renderTemplate`<html lang="zh" data-astro-cid-4sn4zg3r> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": post.data.title, "description": post.data.summary || "", "data-astro-cid-4sn4zg3r": true })}${renderHead()}</head> <body data-astro-cid-4sn4zg3r> ${renderComponent($$result, "SiteLayout", $$SiteLayout, { "data-astro-cid-4sn4zg3r": true }, { "aside": async ($$result2) => renderTemplate`${hasToc && renderTemplate`${renderComponent($$result2, "TableOfContents", $$TableOfContents, { "slot": "aside", "headings": tocHeadings, "data-astro-cid-4sn4zg3r": true })}`}`, "default": async ($$result2) => renderTemplate` <article class="page-panel post-panel" data-astro-cid-4sn4zg3r> <header class="post-header" data-astro-cid-4sn4zg3r> <h1 class="post-title" data-astro-cid-4sn4zg3r>${post.data.title}</h1> <div class="post-meta" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.date, "data-astro-cid-4sn4zg3r": true })} </div> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="post-tags" data-astro-cid-4sn4zg3r> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/blog?tag=${encodeURIComponent(tag)}`, "href")} class="tag-pill" data-astro-cid-4sn4zg3r>
#${tag} </a>`)} </div>`} </header> <div class="post-content" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-4sn4zg3r": true })} </div> </article> ` })} </body></html>`;
}, "/Users/yliu/code/youlin-blog/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/yliu/code/youlin-blog/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$slug,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
