# CLAUDE.md — Sourav's Portfolio Website

## Project Overview

Personal portfolio and blog for Sourav Adhikari (Data Scientist / Systems Thinker). Built with Next.js (App Router), TypeScript, Tailwind CSS v4, and MDX for blog content. Deployed via Docker; analytics via Vercel.

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js (canary, App Router) |
| Language | TypeScript 5.3 |
| Styling | Tailwind CSS v4 (alpha) |
| Blog content | MDX via `next-mdx-remote` |
| Fonts | Geist (Sans + Mono) |
| Icons | Font Awesome (CDN kit) |
| Analytics | @vercel/analytics, @vercel/speed-insights |
| Runtime | Node.js (Docker) |

## Key Commands

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build
pnpm start        # Start production server

# Docker (dev)
docker compose -f compose.dev.yaml up

# Docker (prod)
docker compose -f compose.prod.yaml up
```

## Project Structure

```
app/
  blog/
    posts/        # MDX blog posts (*.mdx)
    utils.ts      # parseFrontmatter, getBlogPosts, formatDate
    page.tsx      # /blog listing page
    [slug]/       # Dynamic blog post route
  components/
    nav.tsx       # Top navbar
    footer.tsx    # Footer
    posts.tsx     # BlogPosts component
    mdx.tsx       # MDX renderer
    headshot.tsx  # Profile image component
  layout.tsx      # Root layout (fonts, nav, footer, analytics)
  page.tsx        # Home page (profile card + recent posts)
  global.css      # Global styles
public/
  images/         # Static images (headshots etc.)
```

## Blog Post Format

Blog posts live in `app/blog/posts/` as `.mdx` files. Required frontmatter:

```mdx
---
title: 'Post Title'
publishedAt: '2024-08-07'
summary: 'One-sentence description shown in listings.'
image: '/images/optional-og-image.png'  # optional
---

## Heading

Content here...
```

The `getBlogPosts()` utility in `app/blog/utils.ts` reads all `.mdx` files from that directory automatically — no registration needed.

## Working Conventions

### Branching
- `main` — production-ready code
- Create a feature branch for every major change: `git checkout -b feature/<short-description>`
- Merge back to `main` via PR or direct merge once reviewed

### Changelog
- Maintain `CHANGELOG.md` at the repo root
- Follow [Keep a Changelog](https://keepachangelog.com) format (`Added`, `Changed`, `Fixed`, `Removed`)
- Update it with every meaningful commit before merging to `main`

### Commit Style
- Use present-tense imperative: `add hero section`, `fix mobile nav overflow`
- Keep subject line under 72 chars
- Reference the area changed: `blog:`, `layout:`, `styles:`, `nav:`

### Responsiveness
- Mobile-first: design for small screens, then scale up with `md:` and `lg:` breakpoints
- Max content width is constrained in `layout.tsx`: `md:max-w-4xl lg:max-w-6xl`
- Test at 375px (mobile), 768px (tablet), 1280px (desktop) before declaring done

## Agents

Three sub-agents are defined in `.claude/agents/`:

| Agent | Purpose |
|---|---|
| `responsiveness-reviewer` | Audits components for mobile/responsive issues and suggests fixes |
| `blog-pipeline` | Converts a plain Markdown file into a properly formatted MDX blog post |
| `changelog-maintainer` | Updates CHANGELOG.md based on staged git changes |

Invoke them by name when the task matches.
