# Jiaqing Li Academic Blog

Personal academic website for Jiaqing Li, an undergraduate student in Software
Engineering at Harbin Institute of Technology, Weihai.

The site includes:

- About
- Publications
- Projects
- News
- Experiences

## Local development

Install Hugo Extended 0.162.0 and pnpm, then run:

```bash
pnpm install
pnpm dev
```

Create a production build with:

```bash
pnpm build
```

All site content is stored as Markdown and YAML under `content/`, `data/`, and
`config/`.

## Publishing News and Project posts

News and Projects are Markdown article collections. Create a draft page bundle
with Hugo:

```bash
hugo new content/news/my-update/index.md
hugo new content/projects/my-project/index.md
```

Edit the generated `index.md`, add any article images to the same folder, and
set `draft: false` when the post is ready. The section page and homepage update
automatically after the site is published.
