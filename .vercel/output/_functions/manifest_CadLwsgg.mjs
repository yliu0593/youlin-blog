import 'piccolore';
import { j as decodeKey } from './chunks/astro/server_kJn7Uhh8.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Bw9dsSEu.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/yliu/code/youlin-blog/","cacheDir":"file:///Users/yliu/code/youlin-blog/node_modules/.astro/","outDir":"file:///Users/yliu/code/youlin-blog/dist/","srcDir":"file:///Users/yliu/code/youlin-blog/src/","publicDir":"file:///Users/yliu/code/youlin-blog/public/","buildClientDir":"file:///Users/yliu/code/youlin-blog/dist/client/","buildServerDir":"file:///Users/yliu/code/youlin-blog/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DO3kq2dB.css"},{"type":"inline","content":".about-content[data-astro-cid-kh7btl4r] p[data-astro-cid-kh7btl4r]{line-height:1.7;color:rgba(var(--gray-dark),.9);margin-bottom:1em}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DO3kq2dB.css"},{"type":"inline","content":".toc[data-astro-cid-xvrfupwn]{font-size:.85em;padding:1.25rem}.toc-list[data-astro-cid-xvrfupwn]{list-style:none;padding:0;margin:0}.toc-item[data-astro-cid-xvrfupwn]{margin-bottom:.4em}.toc-item[data-astro-cid-xvrfupwn] a[data-astro-cid-xvrfupwn]{text-decoration:none;color:rgb(var(--gray-dark));display:block;padding:.2em 0;transition:color .2s}.toc-item[data-astro-cid-xvrfupwn] a[data-astro-cid-xvrfupwn]:hover{color:rgb(var(--accent))}.toc-depth-2[data-astro-cid-xvrfupwn]{padding-left:0}.toc-depth-3[data-astro-cid-xvrfupwn]{padding-left:1em}@media(max-width:720px){.toc[data-astro-cid-xvrfupwn]{margin-bottom:1em}}.post-panel[data-astro-cid-4sn4zg3r]{padding:clamp(1.5rem,3vw,3rem)}.post-header[data-astro-cid-4sn4zg3r]{margin-bottom:2rem}.post-title[data-astro-cid-4sn4zg3r]{margin:0 0 .3em;font-size:clamp(2rem,4vw,2.5rem)}.post-meta[data-astro-cid-4sn4zg3r]{color:rgba(var(--gray-dark),.65);margin-bottom:1rem;font-size:.95rem}.post-tags[data-astro-cid-4sn4zg3r]{display:flex;flex-wrap:wrap;gap:.4rem}.post-content[data-astro-cid-4sn4zg3r]{line-height:1.75;color:rgb(var(--gray-dark))}.post-content[data-astro-cid-4sn4zg3r] h2,.post-content[data-astro-cid-4sn4zg3r] h3{scroll-margin-top:1.5rem}\n"}],"routeData":{"route":"/blog/[slug]","isIndex":false,"type":"page","pattern":"^\\/blog\\/([^/]+?)\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/blog/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DO3kq2dB.css"},{"type":"inline","content":".tag-sidebar[data-astro-cid-3sf3et5e] h3[data-astro-cid-3sf3et5e]{margin:0 0 1em;font-size:1rem;font-weight:600;color:rgb(var(--black))}.tag-list[data-astro-cid-3sf3et5e]{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:.35rem}.tag-list[data-astro-cid-3sf3et5e] li[data-astro-cid-3sf3et5e]{margin:0}.tag-list[data-astro-cid-3sf3et5e] a[data-astro-cid-3sf3et5e]{display:inline-block;text-decoration:none}.tag-chip[data-astro-cid-3sf3et5e]{padding:.35rem .75rem;border-radius:999px;background:rgba(var(--accent),.08);color:rgb(var(--gray-dark));font-size:.85rem;transition:background-color .2s,color .2s}.tag-chip[data-astro-cid-3sf3et5e].active{background:rgba(var(--accent),.16);color:rgb(var(--accent));font-weight:600}.tag-chip[data-astro-cid-3sf3et5e]:hover{background:rgba(var(--accent),.22)}.post-list[data-astro-cid-5tznm7mj]{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1.8rem}.post-card[data-astro-cid-5tznm7mj]{border-bottom:1px solid rgba(var(--gray-light),.9);padding-bottom:1.8rem}.post-card[data-astro-cid-5tznm7mj]:last-child{border-bottom:none;padding-bottom:0}.post-card__meta[data-astro-cid-5tznm7mj]{color:rgba(var(--gray-dark),.6);font-size:.9rem;margin-bottom:.35rem}.post-card__title[data-astro-cid-5tznm7mj]{margin:0 0 .5rem;font-size:1.5rem}.post-card__title[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]{text-decoration:none;color:rgb(var(--black))}.post-card__title[data-astro-cid-5tznm7mj] a[data-astro-cid-5tznm7mj]:hover{color:rgb(var(--accent))}.post-card__summary[data-astro-cid-5tznm7mj]{margin:0 0 .75rem;color:rgba(var(--gray-dark),.85)}.post-card__tags[data-astro-cid-5tznm7mj]{display:flex;gap:.4rem;flex-wrap:wrap}.blog-empty[data-astro-cid-5tznm7mj]{margin:0;color:rgba(var(--gray-dark),.7)}.blog-header[data-astro-cid-5tznm7mj]{margin-bottom:1.5rem}.blog-header__meta[data-astro-cid-5tznm7mj]{color:rgba(var(--gray-dark),.6);font-size:.9rem}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DO3kq2dB.css"},{"type":"inline","content":".now-content[data-astro-cid-lfnvi74r] p[data-astro-cid-lfnvi74r]{line-height:1.7;color:rgba(var(--gray-dark),.9);margin-bottom:1em}.now-list[data-astro-cid-lfnvi74r]{padding-left:1.4rem;color:rgba(var(--gray-dark),.9)}\n"}],"routeData":{"route":"/now","isIndex":false,"type":"page","pattern":"^\\/now\\/?$","segments":[[{"content":"now","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/now.astro","pathname":"/now","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DO3kq2dB.css"},{"type":"inline","content":".post-list[data-astro-cid-j7pv25f6]{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:1.75rem}.post-card[data-astro-cid-j7pv25f6]{border-bottom:1px solid rgba(var(--gray-light),.9);padding-bottom:1.75rem}.post-card[data-astro-cid-j7pv25f6]:last-child{border-bottom:none;padding-bottom:0}.post-card__meta[data-astro-cid-j7pv25f6]{color:rgba(var(--gray-dark),.6);font-size:.9rem;margin-bottom:.35rem}.post-card__title[data-astro-cid-j7pv25f6]{margin:0 0 .5rem;font-size:1.6rem}.post-card__title[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{text-decoration:none;color:rgb(var(--black))}.post-card__title[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]:hover{color:rgb(var(--accent))}.post-card__summary[data-astro-cid-j7pv25f6]{margin:0 0 .75rem;color:rgba(var(--gray-dark),.85)}.post-card__tags[data-astro-cid-j7pv25f6]{display:flex;gap:.4rem;flex-wrap:wrap}.home-aside[data-astro-cid-j7pv25f6] p[data-astro-cid-j7pv25f6]{margin:0 0 .75rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/yliu/code/youlin-blog/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/yliu/code/youlin-blog/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/yliu/code/youlin-blog/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/yliu/code/youlin-blog/src/pages/now.astro",{"propagation":"none","containsHead":true}],["/Users/yliu/code/youlin-blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/yliu/code/youlin-blog/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/now@_@astro":"pages/now.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CadLwsgg.mjs","/Users/yliu/code/youlin-blog/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BlE4xYOW.mjs","/Users/yliu/code/youlin-blog/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/yliu/code/youlin-blog/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_Cfdljx4i.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/blog-placeholder-1.Bx0Zcyzv.jpg","/_astro/about.DO3kq2dB.css","/favicon.svg","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/images/2025-11-24-1.png","/images/2025-11-24-2.png"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"Ue5s8lWG0nyapWds33NQo/qMIS1xXoeiPva+fNtMBog="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
