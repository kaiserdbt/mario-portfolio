"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { profile } from "@/data/profile";

const social = [
  {
    label: "GitHub",
    href: profile.githubUrl,
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
  {
    label: "LinkedIn",
    href: profile.linkedinUrl,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Correo",
    href: `mailto:${profile.email}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
];

// disuelve la foto en el fondo por abajo y por los lados (interseccion de gradientes)
const portraitMask = {
  maskImage:
    "linear-gradient(to bottom, #000 80%, transparent 100%), linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, #000 80%, transparent 100%), linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
} as const;

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // el nombre se acerca a la cara con el scroll: las dos mitades convergen hacia el centro
  const leftX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rightX = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="about"
      ref={ref}
      className="mx-auto w-full max-w-[1400px] overflow-hidden px-6 py-24 sm:px-8"
    >
      <p className="mb-7 text-center font-display text-[36px] font-light italic leading-none text-accent min-[480px]:text-[44px] min-[810px]:text-[56px] min-[1200px]:hidden">
        Mario Cava Ávila
      </p>

      <div className="relative grid grid-cols-[1fr_auto_1fr] items-center gap-3 min-[810px]:gap-6">
        <motion.span
          aria-hidden
          style={{ x: leftX }}
          className="pointer-events-none hidden min-w-0 justify-self-end font-display font-light italic leading-none text-accent min-[1200px]:block min-[1200px]:text-[88px]"
        >
          Mario
        </motion.span>

        <div
          className="relative z-10 col-start-2 w-[230px] min-[810px]:w-[322px] min-[1200px]:w-[391px]"
          style={portraitMask}
        >
          <Image
            src="/about-portrait.png"
            alt={profile.name}
            width={1122}
            height={1402}
            unoptimized
            className="h-auto w-full object-contain"
          />
        </div>

        <motion.span
          aria-hidden
          style={{ x: rightX }}
          className="pointer-events-none hidden min-w-0 justify-self-start whitespace-nowrap pl-[2%] font-display font-light italic leading-none text-accent min-[1200px]:block min-[1200px]:text-[88px]"
        >
          Cava Ávila
        </motion.span>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-10 md:grid-cols-2 md:items-start md:gap-20">
        <h2 className="font-display font-light leading-[1.15] text-accent md:pl-[10%]">
          <span className="block text-[28px] min-[810px]:text-[36px] min-[1200px]:text-[40px]">
            Desarrollador por oficio,
          </span>
          <span className="block italic text-[34px] min-[810px]:text-[44px] min-[1200px]:text-[48px]">
            fundador en la práctica
          </span>
        </h2>

        <div>
          <p className="font-soft text-[18px] leading-[1.6] text-accent">
            Soy Mario Cava Ávila, desarrollador full-stack desde Premià de Mar,
            Barcelona. Construyo productos propios porque es la forma más
            exigente de aprender: decidir qué merece la pena, convertirlo en
            sistema, desplegarlo y responder por lo que ocurre después.
          </p>
          <p className="mt-5 font-soft text-[18px] leading-[1.6] text-accent">
            MARAI, OLUNAE y QONIAR son mi campo de trabajo real: producto,
            código, datos, contenido, automatización, SEO y operación
            conviviendo en sistemas vivos. Me interesa una ingeniería que no se
            queda en el repositorio: que resuelve, se mantiene y deja margen
            para seguir creciendo.
          </p>

          <div className="mt-8 flex gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                aria-label={item.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/25 text-accent/70 transition-colors duration-300 hover:border-accent/60 hover:text-accent"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
