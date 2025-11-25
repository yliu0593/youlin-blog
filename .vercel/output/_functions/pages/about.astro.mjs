import { c as createComponent, r as renderComponent, a as renderHead, b as renderTemplate } from '../chunks/astro/server_kJn7Uhh8.mjs';
import 'piccolore';
import { $ as $$BaseHead, a as $$SiteLayout } from '../chunks/SiteLayout_DZZvHzCr.mjs';
import { S as SITE_TITLE } from '../chunks/consts_D5zLN5WR.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="zh" data-astro-cid-kh7btl4r> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "\u5173\u4E8E\u6211", "description": "\u5173\u4E8E\u6211", "data-astro-cid-kh7btl4r": true })}${renderHead()}</head> <body data-astro-cid-kh7btl4r> ${renderComponent($$result, "SiteLayout", $$SiteLayout, { "data-astro-cid-kh7btl4r": true }, { "aside": ($$result2) => renderTemplate`<div class="meta-card" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>常见去处：</p> <p data-astro-cid-kh7btl4r> <a href="/now" data-astro-cid-kh7btl4r>Now 页面</a><br data-astro-cid-kh7btl4r> <a href="/rss.xml" data-astro-cid-kh7btl4r>RSS 订阅</a> </p> </div>`, "default": ($$result2) => renderTemplate` <section class="page-panel about-content" data-astro-cid-kh7btl4r> <p class="eyebrow" data-astro-cid-kh7btl4r>About</p> <h1 data-astro-cid-kh7btl4r>你好，我是 ${SITE_TITLE}</h1> <p data-astro-cid-kh7btl4r>对抗信息碎片化的一点长期主义，文字帮我留住情绪和思考。</p> <p data-astro-cid-kh7btl4r>
喜欢把实验精神用在生活里：修视力、整理财务、折腾旅行路线。写作是记录进展、
					也是和朋友分享链接的方式。
</p> </section>  ` })} </body></html>`;
}, "/Users/yliu/code/youlin-blog/src/pages/about.astro", void 0);

const $$file = "/Users/yliu/code/youlin-blog/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
