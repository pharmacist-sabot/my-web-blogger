import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as renderSlot, e as addAttribute } from '../../chunks/astro/server_e6GfZgpN.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, g as getCollection } from '../../chunks/BaseLayout_Cv3SKZh1.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogPostLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPostLayout;
  const { frontmatter } = Astro2.props;
  const { title, description, pubDate, heroImage } = frontmatter;
  const formattedDate = new Date(pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": title, "data-astro-cid-2q5oecfc": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article data-astro-cid-2q5oecfc> <div class="prose" data-astro-cid-2q5oecfc> <div class="title" data-astro-cid-2q5oecfc> ${heroImage && renderTemplate`<img${addAttribute(720, "width")}${addAttribute(360, "height")}${addAttribute(heroImage, "src")} alt="" class="hero-image" data-astro-cid-2q5oecfc>`} <h1 data-astro-cid-2q5oecfc>${title}</h1> <p data-astro-cid-2q5oecfc>${description}</p> <time data-astro-cid-2q5oecfc>${formattedDate}</time> </div> <hr data-astro-cid-2q5oecfc> ${renderSlot($$result2, $$slots["default"])} </div> </article> ` })} `;
}, "/Users/suradetpratomsak/Desktop/my-web-blogger/src/layouts/BlogPostLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: post
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const post = Astro2.props;
  const { Content } = await post.render();
  return renderTemplate`${renderComponent($$result, "BlogPostLayout", $$BlogPostLayout, { "frontmatter": post.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/suradetpratomsak/Desktop/my-web-blogger/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Users/suradetpratomsak/Desktop/my-web-blogger/src/pages/blog/[...slug].astro";
const $$url = "/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
