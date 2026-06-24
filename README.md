# Youlin Blog

## Photo-first writing workflow

Use `blog-inbox/` as the one-post-at-a-time draft space.

1. Open `blog-inbox/draft.md` and write the post.
2. Drop photos directly into `blog-inbox/`.
3. Run:

```sh
npm run publish-draft
```

That command creates the correctly named post in `src/content/blog/`, copies photos into `public/images/`, and rewrites image links so the blog can publish them.

The draft can be as simple as:

```md
# 四月和春天

今天出去走了走。
```

If you mention a local image in the draft, the command rewrites it:

```md
![](photo.jpg)
```

If you do not mention the images, the command appends all photos in `blog-inbox/` to the end of the post in filename order.

Optional frontmatter works when you want it:

```md
---
title: "四月和春天"
date: 2026-04-15
tags: ["journal", "photos"]
slug: april-and-spring
summary: "四月的一些照片和小记"
---

正文从这里开始。
```

The command leaves `blog-inbox/draft.md` and the original photos untouched, so nothing disappears after publishing.

---

# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Credit

This theme is based off of the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/).
