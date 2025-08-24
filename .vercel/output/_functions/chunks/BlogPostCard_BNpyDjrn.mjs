import { c as createComponent, b as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate } from './astro/server_BAthJS93.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BlogPostCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogPostCard;
  const { post } = Astro2.props;
  const { title, description, pubDate } = post.data;
  const formattedDate = new Date(pubDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
  return renderTemplate`${maybeRenderHead()}<article class="card" data-astro-cid-f45vxlzk> <a${addAttribute(`/blog/${post.slug}`, "href")} data-astro-cid-f45vxlzk> <h3 data-astro-cid-f45vxlzk>${title}</h3> <p data-astro-cid-f45vxlzk>${description}</p> <time${addAttribute(pubDate.toISOString(), "datetime")} data-astro-cid-f45vxlzk>${formattedDate}</time> </a> </article> `;
}, "/Users/suradetpratomsak/Desktop/my-web-blogger/src/components/BlogPostCard.astro", void 0);

export { $$BlogPostCard as $ };
