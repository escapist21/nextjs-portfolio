# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased] - 2026-05-29

### Migration: Next.js → Astro

- Replaced Next.js 14 canary with Astro v6 — eliminates client-side hydration entirely, fixing persistent production issues (high load times, intermittent link failures, click events not registering).
- Output is now zero JavaScript (was ~101 kB JS per page); only a 24 KB CSS bundle ships to the browser.
- Docker image reduced from ~300 MB (Node.js standalone) to ~21 MB (Nginx alpine); memory limit reduced from 512 MB to 128 MB.
- Replaced `@fortawesome/react-fontawesome` with 5 inline SVG `.astro` components — eliminates the React runtime from production output entirely.
- Geist font self-hosted from `public/fonts/` (variable woff2); removes the `geist` npm package (Next.js font loader).
- Blog posts migrated to Astro Content Collections (`src/content/blog/`); MDX files and frontmatter unchanged.
- OG images pre-generated at build time via `satori` + `@resvg/resvg-js` + `sharp`; no longer generated on-demand by a server route.
- Added `nginx.conf` with gzip, immutable cache headers for hashed assets, and security headers (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`).
- Traefik routing unchanged except container port updated from 3000 to 80.
- Removed `@vercel/analytics`, `@vercel/speed-insights`, `next-mdx-remote`, `postcss`, and all `@fortawesome/*` npm packages.

## [Unreleased] - 2026-05-28

### Added

- Added CLAUDE.md with project documentation covering architecture, components, and development workflows.
- Added `.claude/agents/` directory with sub-agent definitions for blog pipeline, changelog maintenance, and responsiveness review.
- Added blog post: "Your Netflix auto-payment is not AI" — on why automated payments and AI agents are not analogous.

### Performance

- Replaced Font Awesome CDN kit with `@fortawesome/react-fontawesome` npm packages — eliminates external network request and ~3.5s post-load script execution; icons are now bundled as inline SVGs, tree-shaken to the 5 icons in use.
- Load time reduced from 3,612ms → 315ms (91% improvement); FCP improved from 568ms → 128ms (4.4× faster).
- Fixed nav icon sizing to scale with parent font size (`w-[1em] h-[1em]`) so icons are consistent across all pages.

### Removed

- Removed dummy blog posts: "Static Typing", "Spaces vs Tabs", and "Vim" (placeholder content).
- Untracked `.claude/`, `context.md`, `CLAUDE.md`, and `app/blog/markdown-posts/` from git via `.gitignore`.

### Changed

- Scaled page padding responsively (`px-4` → `lg:px-10`) in `layout.tsx` to improve mobile layout.
- Added `sm:`/`md:` breakpoints to hero section headings to prevent text overflow on 320–375 px viewports.
- Reduced hero section vertical gap on mobile (`space-y-6 md:space-y-10`).
- Scaled nav right padding responsively (`pr-4` → `md:pr-10`).
- Scaled nav icon size responsively (`sm:text-xl`) to meet 44 px minimum touch target requirement.
- Fixed blog post date column width (`w-24 md:w-[150px] flex-shrink-0`) to prevent layout shift on small screens.
- Updated profile image dimensions, height, and crop-fill settings in `app/page.tsx`.
