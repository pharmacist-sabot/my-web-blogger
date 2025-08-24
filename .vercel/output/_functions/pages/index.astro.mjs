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
  const latestPosts = sortedPosts.slice(0, 5);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "My Awesome Blog - Home", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="hero" data-astro-cid-j7pv25f6> <h1 data-astro-cid-j7pv25f6>👋 Welcome to my Blog!</h1> <p data-astro-cid-j7pv25f6>
This is where I share my programming journey, tips, and tutorials.
</p> </div> <h2 data-astro-cid-j7pv25f6>Latest Articles</h2> <div class="post-list" data-astro-cid-j7pv25f6> <!-- 2. Use the BlogPostCard component in a loop --> ${latestPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPostCard", $$BlogPostCard, { "post": post, "data-astro-cid-j7pv25f6": true })}`)} </div> <div class="all-posts-link" data-astro-cid-j7pv25f6> <a href="/blog" data-astro-cid-j7pv25f6>View all articles &rarr;</a> </div> ` })} `;
}, "/Users/suradetpratomsak/Desktop/my-web-blogger/src/pages/index.astro", void 0);

const $$file = "/Users/suradetpratomsak/Desktop/my-web-blogger/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
