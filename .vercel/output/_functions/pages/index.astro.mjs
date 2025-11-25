import { c as createComponent, r as renderComponent, a as renderHead, b as renderTemplate, e as addAttribute } from '../chunks/astro/server_kJn7Uhh8.mjs';
import 'piccolore';
import { g as getCollection } from '../chunks/_astro_content_PCZMHGvl.mjs';
import { $ as $$BaseHead, a as $$SiteLayout } from '../chunks/SiteLayout_DZZvHzCr.mjs';
import { $ as $$FormattedDate } from '../chunks/FormattedDate_C1-0uXX-.mjs';
import { a as SITE_DESCRIPTION, S as SITE_TITLE } from '../chunks/consts_D5zLN5WR.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return renderTemplate`<html lang="zh" data-astro-cid-j7pv25f6> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": SITE_TITLE, "description": SITE_DESCRIPTION, "data-astro-cid-j7pv25f6": true })}${renderHead()}</head> <body data-astro-cid-j7pv25f6> ${renderComponent($$result, "SiteLayout", $$SiteLayout, { "data-astro-cid-j7pv25f6": true }, { "aside": async ($$result2) => renderTemplate`<div class="meta-card home-aside" data-astro-cid-j7pv25f6> <p data-astro-cid-j7pv25f6>${SITE_DESCRIPTION}</p> <p data-astro-cid-j7pv25f6> <a href="/about" data-astro-cid-j7pv25f6>关于我</a> · <a href="/now" data-astro-cid-j7pv25f6>Now 页面</a> </p> <p data-astro-cid-j7pv25f6> <a href="/rss.xml" data-astro-cid-j7pv25f6>RSS 订阅</a> </p> </div>`, "default": async ($$result2) => renderTemplate` <section class="page-panel" data-astro-cid-j7pv25f6> <p class="eyebrow" data-astro-cid-j7pv25f6>Latest writing</p> <h1 data-astro-cid-j7pv25f6>博客文章</h1> <ul class="post-list" data-astro-cid-j7pv25f6> ${posts.map((post) => renderTemplate`<li class="post-card" data-astro-cid-j7pv25f6> <div class="post-card__meta" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "FormattedDate", $$FormattedDate, { "date": post.data.date, "data-astro-cid-j7pv25f6": true })} </div> <h2 class="post-card__title" data-astro-cid-j7pv25f6> <a${addAttribute(`/blog/${post.id}`, "href")} data-astro-cid-j7pv25f6>${post.data.title}</a> </h2> ${post.data.summary && renderTemplate`<p class="post-card__summary" data-astro-cid-j7pv25f6>${post.data.summary}</p>`} ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="post-card__tags" data-astro-cid-j7pv25f6> ${post.data.tags.map((tag) => renderTemplate`<a${addAttribute(`/blog?tag=${encodeURIComponent(tag)}`, "href")} class="tag-pill" data-astro-cid-j7pv25f6>
#${tag} </a>`)} </div>`} </li>`)} </ul> </section>  ` })} </body></html>`;
}, "/Users/yliu/code/youlin-blog/src/pages/index.astro", void 0);

const $$file = "/Users/yliu/code/youlin-blog/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
