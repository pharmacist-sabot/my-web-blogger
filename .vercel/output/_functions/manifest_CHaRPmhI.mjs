import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_e6GfZgpN.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_BJZmAUmz.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/suradetpratomsak/Desktop/my-web-blogger/","cacheDir":"file:///Users/suradetpratomsak/Desktop/my-web-blogger/node_modules/.astro/","outDir":"file:///Users/suradetpratomsak/Desktop/my-web-blogger/dist/","srcDir":"file:///Users/suradetpratomsak/Desktop/my-web-blogger/src/","publicDir":"file:///Users/suradetpratomsak/Desktop/my-web-blogger/public/","buildClientDir":"file:///Users/suradetpratomsak/Desktop/my-web-blogger/dist/client/","buildServerDir":"file:///Users/suradetpratomsak/Desktop/my-web-blogger/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".card[data-astro-cid-f45vxlzk]{border:1px solid var(--card-border-color);border-radius:8px;padding:1.5rem;background-color:var(--card-bg-color);transition:box-shadow .2s ease-in-out}.card[data-astro-cid-f45vxlzk]:hover{box-shadow:0 4px 12px #0000001a}.card[data-astro-cid-f45vxlzk] a[data-astro-cid-f45vxlzk]{text-decoration:none;color:inherit}h3[data-astro-cid-f45vxlzk]{margin-top:0;color:var(--font-color)}time[data-astro-cid-f45vxlzk]{font-size:.875rem;color:#666}\n.post-list[data-astro-cid-5tznm7mj]{display:grid;gap:1rem;margin-top:2rem}\n#theme-toggle-button[data-astro-cid-vwmlrl6u]{background:none;border:none;cursor:pointer;padding:.5rem;border-radius:999px}#theme-toggle-button[data-astro-cid-vwmlrl6u]:hover{background-color:var(--card-border-color)}.icon[data-astro-cid-vwmlrl6u]{color:var(--font-color)}html.dark #sun-icon[data-astro-cid-vwmlrl6u]{display:block}html.dark #moon-icon[data-astro-cid-vwmlrl6u]{display:none}html:not(.dark) #sun-icon[data-astro-cid-vwmlrl6u]{display:none}html:not(.dark) #moon-icon[data-astro-cid-vwmlrl6u]{display:block}:root{--brand-color: #7c3aed;--font-color: #111827;--bg-color: #f3f4f6;--card-bg-color: #ffffff;--card-border-color: #e5e7eb}html.dark{--brand-color: #a78bfa;--font-color: #e5e7eb;--bg-color: #111827;--card-bg-color: #1f2937;--card-border-color: #374151}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;margin:0;background-color:var(--bg-color);color:var(--font-color);transition:background-color .2s ease-in-out,color .2s ease-in-out}.container{max-width:800px;margin:0 auto;padding:2rem}a{color:var(--brand-color);text-decoration:none}a:hover{text-decoration:underline}h1,h2,h3,h4,h5,h6{margin:0 0 1rem;line-height:1.2}img{max-width:100%;height:auto}@media (max-width: 700px){.container{padding-left:1rem;padding-right:1rem}}.site-header[data-astro-cid-37fxchfa]{border-bottom:1px solid var(--card-border-color);background-color:var(--card-bg-color);position:sticky;top:0;z-index:10;transition:background-color .2s ease-in-out,border-color .2s ease-in-out}.header-content[data-astro-cid-37fxchfa]{display:flex;justify-content:space-between;align-items:center;padding-top:1rem;padding-bottom:1rem}.site-title[data-astro-cid-37fxchfa]{font-weight:700;font-size:1.25rem;color:var(--font-color);text-decoration:none}.site-title[data-astro-cid-37fxchfa]:hover{color:var(--brand-color);text-decoration:none}.site-footer[data-astro-cid-37fxchfa]{margin-top:4rem;padding:2rem 0;border-top:1px solid var(--card-border-color);text-align:center;font-size:.875rem;color:var(--font-color);opacity:.7}\n"}],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".hero-image[data-astro-cid-2q5oecfc]{width:100%;height:auto;border-radius:8px;margin-bottom:1rem}.title[data-astro-cid-2q5oecfc]{margin-bottom:2rem;text-align:center}.title[data-astro-cid-2q5oecfc] h1[data-astro-cid-2q5oecfc]{font-size:2rem}.title[data-astro-cid-2q5oecfc] p[data-astro-cid-2q5oecfc]{font-size:1.25rem;color:#555}time[data-astro-cid-2q5oecfc]{color:#666}.prose[data-astro-cid-2q5oecfc] h2{font-size:2rem;margin-top:2.5rem}.prose[data-astro-cid-2q5oecfc] p{line-height:1.6}.prose[data-astro-cid-2q5oecfc] pre{background-color:#282c34;color:#abb2bf;padding:1em;border-radius:8px;overflow-x:auto}.prose[data-astro-cid-2q5oecfc] code{font-family:Fira Code,Courier New,monospace}@media (max-width: 700px){.title[data-astro-cid-2q5oecfc] h1[data-astro-cid-2q5oecfc]{font-size:2.25rem}.title[data-astro-cid-2q5oecfc] p[data-astro-cid-2q5oecfc]{font-size:1.1rem}}\n#theme-toggle-button[data-astro-cid-vwmlrl6u]{background:none;border:none;cursor:pointer;padding:.5rem;border-radius:999px}#theme-toggle-button[data-astro-cid-vwmlrl6u]:hover{background-color:var(--card-border-color)}.icon[data-astro-cid-vwmlrl6u]{color:var(--font-color)}html.dark #sun-icon[data-astro-cid-vwmlrl6u]{display:block}html.dark #moon-icon[data-astro-cid-vwmlrl6u]{display:none}html:not(.dark) #sun-icon[data-astro-cid-vwmlrl6u]{display:none}html:not(.dark) #moon-icon[data-astro-cid-vwmlrl6u]{display:block}:root{--brand-color: #7c3aed;--font-color: #111827;--bg-color: #f3f4f6;--card-bg-color: #ffffff;--card-border-color: #e5e7eb}html.dark{--brand-color: #a78bfa;--font-color: #e5e7eb;--bg-color: #111827;--card-bg-color: #1f2937;--card-border-color: #374151}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;margin:0;background-color:var(--bg-color);color:var(--font-color);transition:background-color .2s ease-in-out,color .2s ease-in-out}.container{max-width:800px;margin:0 auto;padding:2rem}a{color:var(--brand-color);text-decoration:none}a:hover{text-decoration:underline}h1,h2,h3,h4,h5,h6{margin:0 0 1rem;line-height:1.2}img{max-width:100%;height:auto}@media (max-width: 700px){.container{padding-left:1rem;padding-right:1rem}}.site-header[data-astro-cid-37fxchfa]{border-bottom:1px solid var(--card-border-color);background-color:var(--card-bg-color);position:sticky;top:0;z-index:10;transition:background-color .2s ease-in-out,border-color .2s ease-in-out}.header-content[data-astro-cid-37fxchfa]{display:flex;justify-content:space-between;align-items:center;padding-top:1rem;padding-bottom:1rem}.site-title[data-astro-cid-37fxchfa]{font-weight:700;font-size:1.25rem;color:var(--font-color);text-decoration:none}.site-title[data-astro-cid-37fxchfa]:hover{color:var(--brand-color);text-decoration:none}.site-footer[data-astro-cid-37fxchfa]{margin-top:4rem;padding:2rem 0;border-top:1px solid var(--card-border-color);text-align:center;font-size:.875rem;color:var(--font-color);opacity:.7}\n"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":".card[data-astro-cid-f45vxlzk]{border:1px solid var(--card-border-color);border-radius:8px;padding:1.5rem;background-color:var(--card-bg-color);transition:box-shadow .2s ease-in-out}.card[data-astro-cid-f45vxlzk]:hover{box-shadow:0 4px 12px #0000001a}.card[data-astro-cid-f45vxlzk] a[data-astro-cid-f45vxlzk]{text-decoration:none;color:inherit}h3[data-astro-cid-f45vxlzk]{margin-top:0;color:var(--font-color)}time[data-astro-cid-f45vxlzk]{font-size:.875rem;color:#666}\n.hero[data-astro-cid-j7pv25f6]{text-align:center;padding:2rem 0;margin-bottom:1rem}.post-list[data-astro-cid-j7pv25f6]{display:grid;gap:1rem}.all-posts-link[data-astro-cid-j7pv25f6]{text-align:right;margin-top:2rem}\n#theme-toggle-button[data-astro-cid-vwmlrl6u]{background:none;border:none;cursor:pointer;padding:.5rem;border-radius:999px}#theme-toggle-button[data-astro-cid-vwmlrl6u]:hover{background-color:var(--card-border-color)}.icon[data-astro-cid-vwmlrl6u]{color:var(--font-color)}html.dark #sun-icon[data-astro-cid-vwmlrl6u]{display:block}html.dark #moon-icon[data-astro-cid-vwmlrl6u]{display:none}html:not(.dark) #sun-icon[data-astro-cid-vwmlrl6u]{display:none}html:not(.dark) #moon-icon[data-astro-cid-vwmlrl6u]{display:block}:root{--brand-color: #7c3aed;--font-color: #111827;--bg-color: #f3f4f6;--card-bg-color: #ffffff;--card-border-color: #e5e7eb}html.dark{--brand-color: #a78bfa;--font-color: #e5e7eb;--bg-color: #111827;--card-bg-color: #1f2937;--card-border-color: #374151}body{font-family:system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;margin:0;background-color:var(--bg-color);color:var(--font-color);transition:background-color .2s ease-in-out,color .2s ease-in-out}.container{max-width:800px;margin:0 auto;padding:2rem}a{color:var(--brand-color);text-decoration:none}a:hover{text-decoration:underline}h1,h2,h3,h4,h5,h6{margin:0 0 1rem;line-height:1.2}img{max-width:100%;height:auto}@media (max-width: 700px){.container{padding-left:1rem;padding-right:1rem}}.site-header[data-astro-cid-37fxchfa]{border-bottom:1px solid var(--card-border-color);background-color:var(--card-bg-color);position:sticky;top:0;z-index:10;transition:background-color .2s ease-in-out,border-color .2s ease-in-out}.header-content[data-astro-cid-37fxchfa]{display:flex;justify-content:space-between;align-items:center;padding-top:1rem;padding-bottom:1rem}.site-title[data-astro-cid-37fxchfa]{font-weight:700;font-size:1.25rem;color:var(--font-color);text-decoration:none}.site-title[data-astro-cid-37fxchfa]:hover{color:var(--brand-color);text-decoration:none}.site-footer[data-astro-cid-37fxchfa]{margin-top:4rem;padding:2rem 0;border-top:1px solid var(--card-border-color);text-align:center;font-size:.875rem;color:var(--font-color);opacity:.7}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/suradetpratomsak/Desktop/my-web-blogger/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/suradetpratomsak/Desktop/my-web-blogger/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/suradetpratomsak/Desktop/my-web-blogger/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CHaRPmhI.mjs","/Users/suradetpratomsak/Desktop/my-web-blogger/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_B5ZUnzpu.mjs","/Users/suradetpratomsak/Desktop/my-web-blogger/.astro/content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","/Users/suradetpratomsak/Desktop/my-web-blogger/.astro/content-modules.mjs":"chunks/content-modules_XOizPyhW.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DlL5UPyN.mjs","/Users/suradetpratomsak/Desktop/my-web-blogger/src/content/blog/frontend-developer-roadmap-part-1.mdx?astroPropagatedAssets":"chunks/frontend-developer-roadmap-part-1_kfMjUjix.mjs","/Users/suradetpratomsak/Desktop/my-web-blogger/src/content/blog/frontend-developer-roadmap-part-1.mdx":"chunks/frontend-developer-roadmap-part-1_CZKXJg9g.mjs","/Users/suradetpratomsak/Desktop/my-web-blogger/src/components/ThemeToggleButton.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggleButton.astro_astro_type_script_index_0_lang.jRbwuRwg.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/suradetpratomsak/Desktop/my-web-blogger/src/components/ThemeToggleButton.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"theme-toggle-button\");t&&t.addEventListener(\"click\",()=>{const e=document.documentElement.classList.toggle(\"dark\");localStorage.setItem(\"theme\",e?\"dark\":\"light\")});"]],"assets":["/apple-touch-icon.png","/blog-placeholder-1.png","/favicon.ico","/manifest.webmanifest","/pwa-192x192.png","/pwa-512x512.png","/registerSW.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"BASo3yXULlwclC/OdHf1sjaXVeg7t25nWAGJjG71xBI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
