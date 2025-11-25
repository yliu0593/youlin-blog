import { d as createAstro, c as createComponent, m as maybeRenderHead, e as addAttribute, b as renderTemplate } from './astro/server_kJn7Uhh8.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FormattedDate;
  const { date } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<time${addAttribute(date.toISOString(), "datetime")}> ${date.toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })} </time>`;
}, "/Users/yliu/code/youlin-blog/src/components/FormattedDate.astro", void 0);

export { $$FormattedDate as $ };
