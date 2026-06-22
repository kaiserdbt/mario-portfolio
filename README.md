# mario-portfolio

> Portfolio of Mario Cava Avila, full-stack developer. Built end to end with the current Next.js ecosystem and deployed on Vercel.

<p>
  <img src="https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/Three.js-r3f-000000?style=flat-square&logo=threedotjs&logoColor=white" />
</p>

**Live:** https://mario-portfolio.vercel.app

---

## Overview

Personal portfolio designed and built from scratch as a small, maintainable system rather than a single page. Content lives in a typed data layer (`src/data/`), kept apart from presentation, so updating projects or copy means editing data, not components. The interface combines Server Components, a React Three Fiber 3D hero, dynamic Open Graph images and a rate-limited contact form.

---

## Stack

| Layer | Tech | Notes |
|-------|------|-------|
| Framework | Next.js 16 (App Router) | App Router only, no Pages Router |
| Language | TypeScript 5, strict mode | Typed data layer, no loose `any` |
| Styling | Tailwind CSS v4 | Config-less, tokens in a CSS `@theme` block |
| Compiler | React Compiler | Automatic memoization, no manual `useMemo` |
| Runtime | React 19, Server Components by default | `"use client"` only when strictly needed |
| 3D | three.js + React Three Fiber + drei | Interactive laptop hero |
| Animation | Motion (Framer Motion) | Scroll and reveal transitions |
| Fonts | Satoshi, Gambetta (italic), Chillax, Geist Mono | Self-hosted via `next/font/local` |
| Contact | Resend + Upstash rate limit | Email delivery and abuse protection |
| Validation | Zod | Schema for the contact form |
| SEO | next/og, JSON-LD (ProfilePage + Person) | Dynamic OG images, structured data |
| Deploy | Vercel | Push to deploy |

---

## Project structure

```
src/
  app/                    App Router
    layout.tsx            Root layout: fonts, header/footer, JSON-LD
    page.tsx              Home
    about/  services/     Content pages
    projects/             Projects index
    projects/[slug]/      Per-project case study (SSG + generateMetadata)
    contact/              Contact page + server action
    privacidad/           Privacy policy (GDPR)
    opengraph-image.tsx   Dynamic OG / social images (next/og)
  components/             UI (Hero, LaptopHero, FeaturedProjects, Header, ...)
  data/                   Single source of truth
    profile.ts            Profile, contact, positioning
    projects.ts           Project catalogue (cards + detail)
    stack.ts              Tech stack by category
  lib/
    seo.ts                Base metadata, per-page SEO helper, JSON-LD
    contact-schema.ts     Zod schema for the contact form
```

> Path alias `@/*` maps to `src/*` (see `tsconfig.json`).

---

## Local development

> All commands run from the `mario-portfolio/` subdirectory.

```bash
npm install

npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint (core-web-vitals + TypeScript)
```

---

## Design decisions

**Data-driven content.** Projects, stack and profile live in `src/data/` as typed modules. Cards, case studies and metadata are derived from there, so the site stays consistent and easy to update.

**Tailwind v4, config-less.** No `tailwind.config.js`. Design tokens live in a `@theme` block inside `globals.css`, with dark mode driven by CSS variables.

**React Compiler.** Enabled in `next.config.ts`, so memoization is automatic and `useMemo` / `useCallback` are intentionally absent.

**Server Components first.** Every component is a Server Component unless it needs browser APIs, state or effects.

---

## Content rules

Every human-facing string follows the same pipeline before shipping: AI-pattern review, professional rewrite, lexical and spelling check, and Spanish RAE conventions (correct punctuation, no em dash). The full rules live in `CLAUDE.md` and `AGENTS.md`.

---

## Deployment

Connected to Vercel: every push to the main branch triggers a deploy. Set `NEXT_PUBLIC_SITE_URL` to the production domain so canonical and Open Graph URLs are absolute.

---

## License

Code and content © Mario Cava Avila. All rights reserved.
