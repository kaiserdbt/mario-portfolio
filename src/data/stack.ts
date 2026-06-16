export type StackCategory = {
  title: string;
  items: string[];
};

export const stack: StackCategory[] = [
  {
    title: "Lenguajes",
    items: ["TypeScript", "JavaScript", "SQL"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Astro", "Tailwind CSS"],
  },
  {
    title: "Backend y datos",
    items: ["NestJS", "Node.js", "PostgreSQL", "Prisma", "Drizzle"],
  },
  {
    title: "Infra, IA y testing",
    items: ["Vercel", "Neon", "Stripe", "Gemini", "Claude", "Playwright"],
  },
];
