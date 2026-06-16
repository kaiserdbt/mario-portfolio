// mis proyectos. para añadir otro, copio un bloque y le cambio el slug

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  year: string;
  featured: boolean;
  image: string;
  stack: string[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  repoPrivate: boolean;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "marai-agenda",
    title: "Marai Agenda",
    tagline:
      "SaaS B2B multi-tenant para gestionar la agenda y el cobro de negocios de servicios.",
    summary:
      "Plataforma de reservas y operaciones para peluquerías, clínicas y profesionales con agenda. Cubre el ciclo completo: reserva online, calendario, recordatorios, cobro de señales con Stripe y un bot de WhatsApp que gestiona las reservas. Cada negocio queda aislado a nivel de base de datos con Row-Level Security de PostgreSQL.",
    role: "Full-stack, en solitario",
    year: "2026",
    featured: true,
    stack: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "React",
      "Astro",
      "Stripe",
      "Redis",
      "Claude (IA)",
    ],
    metrics: [
      { label: "Líneas de código", value: "~553K" },
      { label: "Tests", value: "432 archivos" },
      { label: "Modelo de datos", value: "90 tablas con RLS" },
      { label: "Idiomas", value: "33" },
    ],
    links: [{ label: "Ver en vivo", href: "https://maraiagenda.com" }],
    image: "/projects/marai-agenda.jpg",
    repoPrivate: true,
    highlights: [
      "Multi-tenancy en profundidad: Row-Level Security en PostgreSQL más aislamiento por negocio en la aplicación, con protección contra accesos cruzados (IDOR).",
      "Cobros con Stripe: señales, penalizaciones por no presentarse y webhooks firmados e idempotentes.",
      "Bot de WhatsApp con Claude para reservar, con detección de intención tipada y barreras contra inyección de prompts.",
      "Internacionalización a 33 idiomas y manejo de zonas horarias a prueba de cambios de hora.",
      "CI/CD con análisis de seguridad (Trivy, Gitleaks) y revisión de código por IA en cada pull request.",
    ],
  },
  {
    slug: "olunae",
    title: "Olunae",
    tagline:
      "Motor de SEO con análisis facial por IA, donde el modelo clasifica pero nunca redacta.",
    summary:
      "El usuario sube una foto y Gemini la clasifica en un conjunto cerrado de patrones de piel. A partir de ahí, el servidor decide la categoría y genera la página desde plantillas en base de datos. El tráfico llega por SEO programático y se monetiza con afiliación y anuncios. Como la IA nunca escribe texto libre, el contenido es consistente y el coste queda bajo control.",
    role: "Full-stack, en solitario",
    year: "2026",
    featured: true,
    stack: ["Next.js 16", "React 19", "Drizzle", "Neon", "Gemini", "Vercel"],
    metrics: [
      { label: "Líneas de código", value: "~80K" },
      { label: "Tests", value: "54 suites" },
      { label: "Auditorías en CI", value: "~50" },
      { label: "IA-Likeness del corpus", value: "2,57/10" },
    ],
    links: [{ label: "Ver en vivo", href: "https://olunae.com" }],
    image: "/projects/olunae.jpg",
    repoPrivate: true,
    highlights: [
      "El endpoint de IA tiene una defensa en 15 capas con política «fail-closed» para no disparar el coste de Gemini.",
      "La salida del modelo va siempre contra un esquema Zod cerrado: si el modelo se sale, falla la validación, no el usuario.",
      "Metodología empírica: set de evaluación estratificado, fixtures de referencia y criterios numéricos de aceptación (sesgo por tono de piel ≤10 puntos).",
      "Minimización de datos por diseño: de cada clic de afiliado solo se guarda un hash truncado, sin IP.",
      "Optimización para buscadores y para IA generativa (llms.txt, datos estructurados, seguimiento de citas).",
    ],
  },
  {
    slug: "qoniar",
    title: "Qoniar",
    tagline:
      "SEO programático de reviews y comparativas de herramientas de IA en castellano.",
    summary:
      "Plataforma que publica a escala reviews, comparativas, listas y tutoriales sobre herramientas de IA para el mercado hispanohablante. Cada página nace de un borrador en JSON, pasa por una fase de humanización del texto y solo se aprueba si supera 41 validadores de calidad. La IA redacta contra un contrato estricto y un humano prueba la herramienta y firma el contenido.",
    role: "Full-stack, en solitario",
    year: "2026",
    featured: true,
    stack: ["Next.js 16", "React 19", "Drizzle", "Neon", "Gemini", "Vercel"],
    metrics: [
      { label: "Casos de test", value: "~1.288" },
      { label: "Validadores de contenido", value: "41" },
      { label: "Páginas modeladas", value: "66" },
      { label: "Tipos de página", value: "5" },
    ],
    links: [{ label: "Ver en vivo", href: "https://qoniar.com" }],
    image: "/projects/qoniar.jpg",
    repoPrivate: true,
    highlights: [
      "Motor de plantillas con 5 tipos de página y ramificación exhaustiva por tipo (falta un caso y el proyecto no compila).",
      "Pipeline editorial en 4 fases: borrador, humanización, aprobación con validadores y auditoría del corpus.",
      "41 validadores con códigos estables: frescura ≤180 días, prueba práctica, divulgación de afiliados y vocabulario prohibido por normativa.",
      "CI con privilegio mínimo y rol de solo lectura en la base de datos; los secretos se escanean antes de cada push.",
      "Salvaguardas contra el contenido pobre y la canibalización entre páginas.",
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
