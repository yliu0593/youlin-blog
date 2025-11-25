import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate, r as renderComponent, a as renderHead } from '../chunks/astro/server_kJn7Uhh8.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_PCZMHGvl.mjs';
import { $ as $$BaseHead, a as $$SiteLayout } from '../chunks/SiteLayout_DZZvHzCr.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_C1-0uXX-.mjs';
import 'clsx';
/* empty css                                 */
import { a as SITE_DESCRIPTION, S as SITE_TITLE } from '../chunks/consts_D5zLN5WR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://example.com");
const $$TagSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TagSidebar;
  const { allTags, activeTag } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<aside class="tag-sidebar meta-card" data-astro-cid-3sf3et5e> <h3 data-astro-cid-3sf3et5e>标签</h3> <ul class="tag-list" data-astro-cid-3sf3et5e> <li data-astro-cid-3sf3et5e> <a href="/blog"${addAttribute(["tag-chip", { active: activeTag === null }], "class:list")} data-astro-cid-3sf3et5e>
全部
</a> </li> ${allTags.map((tag) => renderTemplate`<li data-astro-cid-3sf3et5e> <a${addAttribute(`/blog?tag=${encodeURIComponent(tag)}`, "href")}${addAttribute(["tag-chip", { active: activeTag === tag }], "class:list")} data-astro-cid-3sf3et5e> ${tag} </a> </li>`)} </ul> </aside> `;
}, "/Users/yliu/code/youlin-blog/src/components/TagSidebar.astro", void 0);

const $$Astro = createAstro("https://example.com");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await getCollection("blog");
  const activeTag = Astro2.url.searchParams.get("tag");
  const allTags = Array.from(
    new Set(allPosts.flatMap((post) => post.data.tags || []))
  ).sort();
  const posts = (activeTag ? allPosts.filter((post) => post.data.tags?.includes(activeTag)) : allPosts).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`<html lang="zh" data-astro-cid-5tznm7mj> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": `${SITE_TITLE} | \u535A\u5BA2`, "description": SITE_DESCRIPTION, "data-astro-cid-5tznm7mj": true })}${renderHead()}</head> <body data-astro-cid-5tznm7mj> ${renderComponent($$result, "SiteLayout", $$SiteLayout, { "data-astro-cid-5tznm7mj": true }, { "aside": async ($$result2) => renderTemplate`${renderComponent($$result2, "TagSidebar", $$TagSidebar, { "slot": "aside", "allTags": allTags, "activeTag": activeTag, "data-astro-cid-5tznm7mj": true })}`, "default": async ($$result2) => renderTemplate` <section class="page-panel" data-astro-cid-5tznm7mj> <div class="blog-header" data-astro-cid-5tznm7mj> <p class="eyebrow" data-astro-cid-5tznm7mj>Archive</p> <h1 data-astro-cid-5tznm7mj>博客文章</h1> <p class="blog-header__meta" data-astro-cid-5tznm7mj> ${activeTag ? `\u6807\u7B7E\uFF1A${activeTag} \xB7 ` : ""}共 ${posts.length} 篇
</p> </div> ${posts.length === 0 ? renderTemplate`<p class="blog-empty" data-astro-cid-5tznm7mj>没有找到对应标签的文章。</p>` : renderTemplate`<ul class="post-list" data-astro-cid-5tznm7mj> ${posts.map((post) => renderTemplate`<li class="post-card" data-astro-cid-5tznm7mj> <div class="post-card__meta" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.date, "data-astro-cid-5tznm7mj": true })} </div> <h2 class="post-card__title" data-astro-cid-5tznm7mj> <a${addAttribute(`/blog/${post.id}`, "href")} data-astro-cid-5tznm7mj>${post.data.title}</a> </h2> ${post.data.summary && renderTemplate`<p class="post-card__summary" data-astro-cid-5tznm7mj>${post.data.summary}</p>`} ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="post-card__tags" data-astro-cid-5tznm7mj> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/blog?tag=${encodeURIComponent(tag)}`, "href")} class="tag-pill" data-astro-cid-5tznm7mj>
#${tag} </a>`)} </div>`} </li>`)} </ul>`} </section>  ` })} </body></html>`;
}, "/Users/yliu/code/youlin-blog/src/pages/blog/index.astro", void 0);

const $$file = "/Users/yliu/code/youlin-blog/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
