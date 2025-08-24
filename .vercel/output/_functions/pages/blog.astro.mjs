import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_e6GfZgpN.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseLayout } from '../chunks/BaseLayout_Cv3SKZh1.mjs';
import { $ as $$BlogPostCard } from '../chunks/BlogPostCard_DokCbf6h.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Blog Articles", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-5tznm7mj>All Articles</h1> <p data-astro-cid-5tznm7mj>Here are all the articles I've written on my journey.</p> <div class="post-list" data-astro-cid-5tznm7mj> ${sortedPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPostCard", $$BlogPostCard, { "post": post, "data-astro-cid-5tznm7mj": true })}`)} </div> ` })} `;
}, "/Users/suradetpratomsak/Desktop/my-web-blogger/src/pages/blog/index.astro", void 0);

const $$file = "/Users/suradetpratomsak/Desktop/my-web-blogger/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
