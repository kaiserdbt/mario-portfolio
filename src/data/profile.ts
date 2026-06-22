// mis datos: edito aquí el hero, el contacto y el seo

export type Profile = {
  name: string;
  role: string;
  headline: string;
  summary: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl: string;
  cvUrl: string;
  available: boolean;
};

export const profile: Profile = {
  name: "Mario Cava Avila",
  role: "Ingeniero de software full-stack",
  headline:
    "Construyo el producto entero, del modelo de datos al despliegue, con la seguridad y las pruebas que exige sostenerlo en producción.",
  summary:
    "Soy desarrollador full-stack y construyo sistemas que llegan a producción: un SaaS B2B multi-tenant de gestión de citas (NestJS, PostgreSQL con Row-Level Security, Stripe, 33 idiomas) y plataformas de SEO programático con IA (Next.js 16, React 19, Drizzle). Uso la IA dentro del producto, en clasificadores y bots con guardrails, y también en mi día a día como desarrollador. Siempre con seguridad, pruebas y CI/CD.",
  location: "Premià de Mar, Barcelona",
  email: "mariocavaavila@gmail.com",
  githubUrl: "https://github.com/kaiserdbt",
  linkedinUrl: "https://www.linkedin.com/in/mariocavaavila/",
  portfolioUrl: "https://mario-portfolio.vercel.app",
  cvUrl: "/cv-mario-cava-avila.pdf",
  available: true,
};
