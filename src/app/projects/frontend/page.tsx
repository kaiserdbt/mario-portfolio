import Link from "next/link";
import Image from "next/image";
import ContactCta from "@/components/ContactCta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Frontend & Landings",
  description:
    "Páginas y landings diseñadas y construidas desde cero, sin plantillas: animación con GSAP y Three.js, rendimiento real, accesibilidad y SEO. React, Next.js, TypeScript y Tailwind.",
  path: "/projects/frontend",
});

const meta = [
  { label: "Disciplina", value: "Frontend · Diseño" },
  { label: "Desde", value: "2023" },
  { label: "Enfoque", value: "Landings y webs" },
  { label: "Plantillas", value: "Cero" },
];

const stats = [
  { label: "En frontend desde", value: "2023" },
  { label: "A medida", value: "100%" },
  { label: "Animaciones fluidas", value: "60 fps" },
  { label: "Accesibilidad WCAG", value: "AA" },
];

const work = [
  {
    area: "Diseño",
    stack: ["Figma", "Design systems", "UI", "Prototipado"],
    body: "Empiezo por el diseño, no por el código. Defino dirección visual, jerarquía, tipografía y retícula en Figma, y construyo un sistema de tokens y componentes para que todo sea coherente y fácil de ampliar. Nada de plantillas: cada landing nace de una hoja en blanco pensada para su mensaje y su público.",
    points: [
      "Dirección visual, jerarquía y tipografía definidas desde cero.",
      "Sistema de diseño con tokens y componentes reutilizables.",
      "Prototipado en Figma antes de tocar una línea de código.",
    ],
  },
  {
    area: "Interacción y movimiento",
    stack: ["GSAP", "Three.js", "Framer Motion", "WebGL"],
    body: "El movimiento cuenta algo, no decora. Trabajo animación con GSAP y ScrollTrigger, transiciones con Framer Motion y escenas 3D con Three.js cuando aportan de verdad. Todo medido para ir fluido y para respetar a quien prefiere menos movimiento.",
    points: [
      "Animación con GSAP y ScrollTrigger: scroll-driven y microinteracciones.",
      "Escenas y efectos 3D con Three.js y WebGL cuando suman al mensaje.",
      "Rendimiento y respeto por reduced motion cuidados desde el inicio.",
    ],
  },
  {
    area: "Base técnica y rendimiento",
    stack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    body: "El diseño se sostiene en código limpio: React y Next.js con TypeScript, estilos con Tailwind y una arquitectura de componentes que se mantiene sola. Cuido las Core Web Vitals, la accesibilidad y el SEO técnico, para que la página no solo se vea bien, sino que cargue rápido y la encuentren.",
    points: [
      "React, Next.js y TypeScript con componentes tipados y reutilizables.",
      "Core Web Vitals, diseño responsive y compatibilidad entre navegadores.",
      "Accesibilidad (WCAG AA, ARIA) y SEO técnico resueltos de base.",
    ],
  },
];

const deliver = [
  {
    title: "Diseño a medida",
    body: "Cada proyecto se diseña desde cero, alineado con la marca, el mensaje y el objetivo de conversión. Sin plantillas ni temas reciclados.",
  },
  {
    title: "Animación con criterio",
    body: "Movimiento que guía la mirada y refuerza la propuesta, con GSAP, scroll-driven y 3D cuando el proyecto lo pide.",
  },
  {
    title: "Rendimiento real",
    body: "Páginas que abren rápido y puntúan bien en Core Web Vitals, optimizadas en imágenes, fuentes y JavaScript.",
  },
  {
    title: "Responsive de verdad",
    body: "Diseño mobile-first que funciona en cualquier pantalla, probado en distintos tamaños y navegadores.",
  },
  {
    title: "Accesible y con SEO",
    body: "HTML semántico, cumplimiento WCAG AA y SEO técnico resuelto: metadatos, datos estructurados y URLs limpias.",
  },
  {
    title: "Lista para entregar",
    body: "Código ordenado y documentado, fácil de mantener o ampliar, con el despliegue resuelto en Vercel u otro proveedor.",
  },
];

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Sass",
  "GSAP",
  "Three.js",
  "Framer Motion",
  "WebGL",
  "Astro",
  "Figma",
  "Diseño responsive",
  "Accesibilidad (WCAG)",
  "SEO técnico",
  "Core Web Vitals",
  "Vite",
  "Git",
  "Vercel",
];

export default function FrontendPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1400px] px-6 pt-16 sm:px-8 sm:pt-24">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2.5 font-heading text-[13px] uppercase tracking-[0.115em] text-accent transition-colors hover:text-accent-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/10">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </span>
          Volver a proyectos
        </Link>

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <h1 className="font-display text-[56px] font-light leading-[1.1] text-accent min-[810px]:text-[80px] xl:text-[96px]">
            Frontend &amp; Landings
          </h1>
          <p className="mx-auto mt-6 max-w-[640px] font-soft text-[18px] font-light leading-[1.5] text-accent min-[810px]:text-[22px] min-[810px]:leading-[33px]">
            Páginas y landings diseñadas y construidas desde cero: animación con
            criterio, rendimiento real y atención al detalle en cada sección.
          </p>
        </div>

        <dl className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label} className="rounded-xs bg-accent/5 p-4 text-center">
              <dt className="font-heading text-[13px] uppercase tracking-[1.5px] text-accent/60">
                {item.label}
              </dt>
              <dd className="mt-2 font-heading text-[13px] uppercase tracking-[1.5px] text-accent">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2.5 font-heading text-[13px] uppercase tracking-[0.115em] text-accent transition-colors hover:text-accent-2"
          >
            Hablemos
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/10">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </span>
          </Link>
          <Link
            href="/services#webs"
            className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent/60 transition-colors hover:text-accent"
          >
            Ver capacidades
          </Link>
        </div>

        <div className="mx-auto mt-12 w-full max-w-[935px] overflow-hidden rounded-xs border border-accent/20">
          <Image
            src="/work/frontend-landing-v2.webp"
            alt="Frontend y landings a medida"
            width={1448}
            height={1086}
            sizes="(max-width: 935px) 92vw, 935px"
            quality={95}
            className="w-full"
            priority
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20">
        <p className="mx-auto max-w-4xl text-balance text-center font-soft text-[18px] leading-[1.7] text-accent min-[810px]:text-[20px]">
          Desde 2023 diseño y desarrollo páginas y landings a medida, sin
          plantillas. Parto de una hoja en blanco, defino la dirección visual y
          la llevo a código con interacción y movimiento que suman, no que
          estorban. El objetivo es siempre el mismo: que la página se vea
          impecable, cargue rápido y convierta.
        </p>

        <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dd className="font-display text-[28px] font-light leading-none text-accent sm:text-[32px]">
                {stat.value}
              </dd>
              <dt className="mt-2 font-heading text-[11px] uppercase tracking-[0.12em] text-accent/60">
                {stat.label}
              </dt>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
            Cómo trabajo
          </p>
          <p className="mt-5 text-balance font-soft text-[18px] leading-[1.7] text-accent/80 min-[810px]:text-[20px]">
            Tres planos que cuido en cada proyecto: el diseño, la interacción y
            la base técnica. El orden importa, y empieza siempre por el diseño.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {work.map((area) => (
            <article
              key={area.area}
              className="flex h-full flex-col rounded-xs border border-accent/15 bg-accent/5 p-6 sm:p-8"
            >
              <h2 className="font-display text-[22px] font-light leading-tight text-accent">
                {area.area}
              </h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {area.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-xs bg-accent/10 px-2.5 py-1 font-soft text-[14px] leading-none text-accent"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-soft text-[17px] leading-[1.6] text-accent/80">
                {area.body}
              </p>
              <ul className="mt-4 space-y-2.5">
                {area.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 font-soft text-[16px] leading-[1.55] text-accent"
                  >
                    <span
                      aria-hidden
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
        <p className="text-center font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
          Qué entrego
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliver.map((item) => (
            <div
              key={item.title}
              className="rounded-xs border border-accent/15 bg-accent/5 p-6"
            >
              <h3 className="font-heading text-[14px] uppercase tracking-[0.12em] text-accent">
                {item.title}
              </h3>
              <p className="mt-2.5 font-soft text-[17px] leading-[1.6] text-accent/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-8 text-center sm:px-8 sm:pb-24">
        <p className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
          Herramientas y skills
        </p>
        <ul className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2.5 sm:gap-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 font-soft text-[14px] leading-none text-accent transition-colors duration-300 hover:border-accent/40 hover:bg-accent/10 sm:px-5 sm:py-2.5 sm:text-[15px]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <ContactCta />
    </>
  );
}
