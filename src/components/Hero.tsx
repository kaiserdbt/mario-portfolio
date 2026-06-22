import Link from "next/link";
import HeroPortrait from "@/components/HeroPortrait";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-4 text-center sm:px-8 sm:pt-6"
    >
      {/* retrato con parallax ligado al scroll */}
      <HeroPortrait alt={profile.name} />

      {/* el titular sube a la zona inferior ya transparente del retrato (sin tapar la cara) */}
      <h1 className="relative z-10 mx-auto -mt-4 font-display text-[clamp(2.5rem,6.5vw,5rem)] font-light leading-[1.05] tracking-tight text-balance text-accent sm:-mt-12">
        Full-Stack
        <span className="mt-1 block italic">Developer</span>
      </h1>

      <p className="mx-auto mt-5 max-w-2xl font-soft text-xl leading-relaxed text-muted sm:text-[22px]">
        {profile.headline}
      </p>

      {/* CTA estilo Arik: circulo con flecha abajo + etiqueta, hace scroll a proyectos */}
      <div className="mt-7 flex justify-center">
        <Link
          href="/#work"
          className="group inline-flex items-center gap-4"
          aria-label="Ir a mis proyectos"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/10">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent transition-transform duration-300 group-hover:translate-y-0.5"
              aria-hidden
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </span>
          <span className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
            Mis proyectos
          </span>
        </Link>
      </div>
    </section>
  );
}
