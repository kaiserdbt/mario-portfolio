# Portfolio · Mario Cava Avila

Portfolio personal de **Mario Cava Avila**, desarrollador full-stack AI-native. Diseño y construyo productos de principio a fin: SaaS B2B multi-tenant, plataformas de SEO programático e integraciones de IA, de la base de datos al despliegue.

**En vivo:** https://mario-portfolio.vercel.app

## Stack

- **Next.js 16** (App Router, React Compiler) y **React 19**
- **TypeScript** en modo estricto
- **Tailwind CSS v4** (configurado en CSS, sin archivo de configuración JS)
- Imágenes Open Graph dinámicas con **`next/og`**
- Tipografía: **Fraunces** (titulares) + **Geist Sans/Mono** vía `next/font`
- Desplegado en **Vercel**

## Arquitectura

No es una página suelta, sino un mini-sistema mantenible. Los datos viven separados de la presentación:

```
src/
  app/                 App Router (layout, home, rutas dinámicas, OG, iconos)
    projects/[slug]/   Caso de estudio por proyecto (SSG + generateMetadata)
  components/          Componentes de UI (Hero, ProjectCard, Section, ...)
  data/                Fuente única de datos
    profile.ts         Perfil, contacto y posicionamiento
    projects.ts        Catálogo de proyectos (genera tarjetas y detalles)
    stack.ts           Stack técnico por categorías
  lib/
    seo.ts             Metadata base y helper de SEO por página
```

Para actualizar el contenido normalmente basta con editar `src/data/`.

## Desarrollo

> Todos los comandos se ejecutan desde el subdirectorio `mario-portfolio/`.

```bash
npm install
npm run dev      # servidor de desarrollo en http://localhost:3000
npm run build    # build de producción
npm run start    # sirve el build de producción
npm run lint     # ESLint (core-web-vitals + typescript)
```

## Reglas de contenido

Todo texto visible para una persona pasa por un mismo proceso antes de publicarse: revisión de patrones de IA, reescritura natural y profesional, control de léxico y ortografía, y normas de la RAE (puntuación correcta y sin uso de la raya «—»). Las reglas completas están en `CLAUDE.md` y `AGENTS.md`.

## Despliegue

Conectado a Vercel: cada push a la rama principal genera un despliegue. Define `NEXT_PUBLIC_SITE_URL` con el dominio de producción para que las URLs canónicas y de Open Graph sean absolutas.

## Licencia

Código y contenido © Mario Cava Avila. Todos los derechos reservados.
