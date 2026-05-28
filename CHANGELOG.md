# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased] - 2026-05-28

### Added

- Added CLAUDE.md with project documentation covering architecture, components, and development workflows.
- Added `.claude/agents/` directory with sub-agent definitions for blog pipeline, changelog maintenance, and responsiveness review.
- Added blog post: "Your Netflix auto-payment is not AI" — on why automated payments and AI agents are not analogous.

### Performance

- Replaced Font Awesome CDN kit with `@fortawesome/react-fontawesome` npm packages — eliminates external network request and ~3.5s post-load script execution; icons are now bundled as inline SVGs, tree-shaken to the 5 icons in use.

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
