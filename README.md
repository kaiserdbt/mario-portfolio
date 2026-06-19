# mario-portfolio

> Personal portfolio built with the bleeding edge of the Next.js ecosystem.

<p>
  <img src="https://img.shields.io/badge/Next.js-16.2-black?style=flat-square&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TypeScript-strict-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" />
</p>

---

## Stack

| Layer | Tech | Notes |
|-------|------|-------|
| Framework | Next.js 16 (App Router) | No Pages Router — App Router only |
| Language | TypeScript 5, strict mode | Zero `any`, zero type assertions |
| Styling | Tailwind CSS v4 | Config-less — pure CSS `@theme` block |
| Compiler | React Compiler (babel-plugin-react-compiler) | Auto-memoization, no manual `useMemo` |
| Runtime | React 19, Server Components by default | `"use client"` only when strictly needed |
| Font | Geist Sans + Geist Mono | Loaded as CSS variables via `next/font` |
| Lint | ESLint flat config (`eslint-config-next` + TS) | — |

---

## Project structure

```
src/
└── app/
    ├── layout.tsx      # Root layout — font vars, flex container
    ├── page.tsx        # Home route
    ├── globals.css     # Tailwind v4 @import + @theme inline tokens
    └── favicon.ico
```

> Path alias `@/*` maps to `src/*` (see `tsconfig.json`).

---

## Local development

```bash
# Install dependencies
npm install

# Start dev server (Turbopack)
npm run dev
# → http://localhost:3000

# Production build
npm run build
npm run start

# Lint
npm run lint
```

---

## Key design decisions

**Tailwind v4** is configured entirely in CSS — no `tailwind.config.js`. All design tokens live in a `@theme inline { … }` block inside `globals.css`. Dark mode uses CSS variables scoped to `@media (prefers-color-scheme: dark)`.

**React Compiler** is enabled via `reactCompiler: true` in `next.config.ts`. The compiler handles all memoization automatically, so `useMemo` / `useCallback` are intentionally absent.

**Server Components first** — every component is a Server Component unless it explicitly needs browser APIs, state, or effects.
