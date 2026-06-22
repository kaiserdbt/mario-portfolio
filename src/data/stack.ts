export type StackCategory = {
  title: string;
  items: string[];
};

// stack real extraido de mis proyectos (Marai, Olunae, Qoniar): frameworks,
// servicios, IA y testing que uso de verdad, sin las librerias de pegamento
export const stack: StackCategory[] = [
  {
    title: "Lenguajes",
    items: ["TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "Astro",
      "Vite",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "React Router",
      "React Hook Form",
      "Framer Motion",
      "GSAP",
      "FullCalendar",
      "Recharts",
      "i18next",
    ],
  },
  {
    title: "Backend y datos",
    items: [
      "NestJS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Drizzle",
      "Neon",
      "Redis",
      "Upstash",
      "Stripe",
      "Bull",
      "Socket.IO",
      "Zod",
      "Nodemailer",
      "AWS S3",
    ],
  },
  {
    title: "Infra, IA y testing",
    items: [
      "Vercel",
      "Docker",
      "PM2",
      "GitHub Actions",
      "Sentry",
      "PostHog",
      "Claude",
      "Gemini",
      "Vercel AI SDK",
      "Vertex AI",
      "MediaPipe",
      "Vitest",
      "Jest",
      "Playwright",
      "Testing Library",
    ],
  },
];
