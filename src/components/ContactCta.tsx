import Link from "next/link";
import { profile } from "@/data/profile";

export default function ContactCta() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1400px] px-6 py-32 sm:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center gap-2.5 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 font-heading text-[13px] uppercase tracking-[0.18em] text-accent">
          <span
            aria-hidden
            className="h-1.5 w-1.5 rounded-full bg-accent-2 animate-pulse-dot"
          />
          Disponible
        </span>

        <h2 className="mt-7 font-display text-[40px] font-light leading-[1.1] text-accent sm:text-[64px]">
          <span className="block">¿Buscáis a alguien</span>
          <span className="block">que entregue producto real,</span>
          <span className="block italic">no solo código?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl font-soft text-[18px] leading-relaxed text-accent">
          Desarrollador full-stack disponible para incorporación inmediata, en
          remoto, híbrido o asíncrono. Me responsabilizo del sistema, desde la
          arquitectura hasta el mantenimiento en producción, con seguridad,
          pruebas y despliegue continuo. Cuéntame el contexto y te respondo con
          claridad.
        </p>

        <div className="mt-10 flex flex-col items-center gap-5">
          <Link
            href="/contact"
            className="inline-block rounded-xs bg-accent px-8 py-4 text-[18px] font-medium text-background transition-opacity hover:opacity-90"
          >
            Hablemos
          </Link>
          <a
            href={`mailto:${profile.email}`}
            className="group font-soft text-[15px] text-accent/70 transition-colors hover:text-accent"
          >
            o escríbeme a{" "}
            <span className="text-accent group-hover:text-accent-2">
              {profile.email}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
