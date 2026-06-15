# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## ⚠️ Lee esto primero

`AGENTS.md` (importado arriba) advierte que esto es **Next.js 16** — las APIs, convenciones y estructura de archivos difieren de versiones anteriores que quizá conozcas. Antes de escribir código del framework, lee la guía correspondiente en `node_modules/next/dist/docs/01-app/` (la documentación del App Router está bajo `01-app/`). Presta atención a los avisos de obsolescencia (deprecation).

## Comandos

Ejecuta todos los comandos desde el subdirectorio `mario-portfolio/` (no desde la raíz del repositorio).

- `npm run dev` — inicia el servidor de desarrollo en http://localhost:3000
- `npm run build` — build de producción
- `npm run start` — sirve el build de producción
- `npm run lint` — ESLint (configuración flat, `eslint-config-next` core-web-vitals + typescript)

Todavía no hay un runner de tests configurado.

## Arquitectura

Una aplicación Next.js de un solo paquete con **App Router** (el proyecto real vive en `mario-portfolio/`, un nivel por debajo de la raíz del repositorio).

- **`src/app/`** — raíz del App Router. `layout.tsx` es el layout raíz (carga las fuentes Geist como variables CSS `--font-geist-sans` / `--font-geist-mono` y define el contenedor flex de la página); `page.tsx` es la ruta de inicio. Agrega rutas como carpetas anidadas aquí.
- **`src/app/globals.css`** — estilos globales. Se importa una sola vez en `layout.tsx`.
- El alias de ruta **`@/*`** apunta a `src/*` (ver `tsconfig.json`).

### Particularidades del stack que cambian cómo escribes el código

- **Tailwind v4** — se configura completamente en CSS, no en un archivo de configuración JS. `globals.css` usa `@import "tailwindcss"` y un bloque `@theme inline { … }` para definir los tokens de diseño (colores, fuentes). El modo oscuro se controla con variables CSS en `@media (prefers-color-scheme: dark)` junto con las variantes `dark:` de Tailwind. No hay `tailwind.config.js`.
- **React Compiler** está habilitado (`reactCompiler: true` en `next.config.ts`, vía `babel-plugin-react-compiler`). Evita micro-optimizaciones manuales con `useMemo`/`useCallback` — el compilador maneja la memoización.
- **React 19 / Server Components** — los componentes en `src/app/` son Server Components por defecto; añade `"use client"` solo cuando un componente necesite APIs del navegador, estado o efectos.
