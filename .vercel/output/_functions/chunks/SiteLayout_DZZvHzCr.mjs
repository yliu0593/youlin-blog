import { d as createAstro, c as createComponent, e as addAttribute, b as renderTemplate, m as maybeRenderHead, s as spreadAttributes, f as renderSlot, r as renderComponent } from './astro/server_kJn7Uhh8.mjs';
import 'piccolore';
import 'clsx';
/* empty css                         */
import { S as SITE_TITLE, a as SITE_DESCRIPTION } from './consts_D5zLN5WR.mjs';

const FallbackImage = new Proxy({"src":"/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","width":960,"height":480,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/yliu/code/youlin-blog/src/assets/blog-placeholder-1.jpg";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://example.com");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const { title, description, image = FallbackImage } = Astro2.props;
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(SITE_TITLE, "title")}${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(new URL(image.src, Astro2.url), "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(new URL(image.src, Astro2.url), "content")}>`;
}, "/Users/yliu/code/youlin-blog/src/components/BaseHead.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$HeaderLink;
  const { href, class: className, ...props } = Astro2.props;
  const pathname = Astro2.url.pathname.replace("/", "");
  const subpath = pathname.match(/[^\/]+/g);
  const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-eimmu3lg> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/yliu/code/youlin-blog/src/components/HeaderLink.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`---
${maybeRenderHead()}<header class="site-nav" data-astro-cid-3ef6ksr2> <p class="site-nav__eyebrow" data-astro-cid-3ef6ksr2>个人博客</p> <a class="site-nav__title" href="/" data-astro-cid-3ef6ksr2>${SITE_TITLE}</a> <p class="site-nav__description" data-astro-cid-3ef6ksr2> ${SITE_DESCRIPTION} </p> <nav class="site-nav__links" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/", "class": "site-nav__link", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`首页` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/blog", "class": "site-nav__link", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`文章` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/about", "class": "site-nav__link", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`关于` })} ${renderComponent($$result, "HeaderLink", $$HeaderLink, { "href": "/now", "class": "site-nav__link", "data-astro-cid-3ef6ksr2": true }, { "default": ($$result2) => renderTemplate`Now` })} </nav> <div class="site-nav__meta" data-astro-cid-3ef6ksr2> <a href="/rss.xml" class="site-nav__rss" data-astro-cid-3ef6ksr2>RSS 订阅</a> </div> </header> `;
}, "/Users/yliu/code/youlin-blog/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>
&copy; ${today.getFullYear()} yona. All rights reserved.
</footer> `;
}, "/Users/yliu/code/youlin-blog/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://example.com");
const $$SiteLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SiteLayout;
  const hasAside = Astro2.slots.has("aside");
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["site-shell", { "site-shell--has-aside": hasAside }], "class:list")} data-astro-cid-7frwrakd> <aside class="site-shell__nav" data-astro-cid-7frwrakd> ${renderComponent($$result, "Header", $$Header, { "data-astro-cid-7frwrakd": true })} </aside> <main class="site-shell__content" data-astro-cid-7frwrakd> ${renderSlot($$result, $$slots["default"])} </main> ${hasAside && renderTemplate`<aside class="site-shell__aside" data-astro-cid-7frwrakd> ${renderSlot($$result, $$slots["aside"])} </aside>`} </div> ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-7frwrakd": true })} `;
}, "/Users/yliu/code/youlin-blog/src/components/SiteLayout.astro", void 0);

export { $$BaseHead as $, $$SiteLayout as a };
