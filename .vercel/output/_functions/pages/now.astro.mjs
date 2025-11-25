import { c as createComponent, r as renderComponent, a as renderHead, b as renderTemplate } from '../chunks/astro/server_kJn7Uhh8.mjs';
import 'piccolore';
import { $ as $$BaseHead, a as $$SiteLayout } from '../chunks/SiteLayout_DZZvHzCr.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$Now = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="zh" data-astro-cid-lfnvi74r> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": "\u73B0\u5728", "description": "\u6211\u73B0\u5728\u5728\u505A\u4EC0\u4E48", "data-astro-cid-lfnvi74r": true })}${renderHead()}</head> <body data-astro-cid-lfnvi74r> ${renderComponent($$result, "SiteLayout", $$SiteLayout, { "data-astro-cid-lfnvi74r": true }, { "aside": ($$result2) => renderTemplate`<div class="meta-card" data-astro-cid-lfnvi74r> <p data-astro-cid-lfnvi74r>回顾：</p> <p data-astro-cid-lfnvi74r> <a href="/blog" data-astro-cid-lfnvi74r>最近文章</a><br data-astro-cid-lfnvi74r> <a href="/about" data-astro-cid-lfnvi74r>关于我</a> </p> </div>`, "default": ($$result2) => renderTemplate` <section class="page-panel now-content" data-astro-cid-lfnvi74r> <p class="eyebrow" data-astro-cid-lfnvi74r>Now</p> <h1 data-astro-cid-lfnvi74r>我现在在忙什么</h1> <p data-astro-cid-lfnvi74r>
Now 页面是生活快照：眼前的项目、关注的主题、让人快乐的小事。这个列表会随季节更新。
</p> <ul class="now-list" data-astro-cid-lfnvi74r> <li data-astro-cid-lfnvi74r>记录 endmyopia 训练，跟踪度数变化。</li> <li data-astro-cid-lfnvi74r>保持写作频率，练习把想法快速落到文字。</li> <li data-astro-cid-lfnvi74r>减脂和力量训练同步进行，实验不同的饮食结构。</li> <li data-astro-cid-lfnvi74r>调整博客布局、打磨写作工作流。</li> </ul> </section>  ` })} </body></html>`;
}, "/Users/yliu/code/youlin-blog/src/pages/now.astro", void 0);

const $$file = "/Users/yliu/code/youlin-blog/src/pages/now.astro";
const $$url = "/now";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Now,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
