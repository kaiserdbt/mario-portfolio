import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Desarrollo full‑stack",
    body: "Diseño y construyo el producto entero, del modelo de datos al despliegue. Multi-tenant con aislamiento por fila en PostgreSQL, cobros con Stripe y tiempo real, con la arquitectura, los tests y el CI/CD que exige sostenerlo en producción.",
    linkLabel: "Marai Agenda",
    href: "/projects/marai-agenda",
  },
  {
    title: "Producto con IA",
    body: "Integro IA donde aporta de verdad y siempre con red de seguridad. El modelo clasifica, nunca redacta texto libre; valido cada salida contra esquemas estrictos y el sistema falla en cerrado para que ni el coste ni la calidad se descontrolen.",
    linkLabel: "Olunae",
    href: "/projects/olunae",
  },
  {
    title: "SEO y GEO",
    body: "Construyo plataformas de contenido a escala que cortan el relleno, con plantillas en base de datos y decenas de validadores de calidad por página. Y no me quedo en el SEO clásico: trabajo también AEO, GEO, AIO y SXO, para ganar visibilidad en buscadores, en respuestas y en los motores de IA.",
    linkLabel: "Qoniar",
    href: "/projects/qoniar",
  },
];

export default function Services() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-12">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-3 xl:gap-8">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 90}>
            <article className="flex h-full flex-col rounded-xs border border-accent/15 bg-accent/5 p-8 md:p-10 xl:p-12">
              <span className="font-heading text-[13px] uppercase tracking-[0.12em] text-accent/60">
                0{i + 1}
              </span>

              <h3 className="mt-4 font-display text-2xl font-light uppercase leading-tight tracking-[0.04em] text-accent">
                {s.title}
              </h3>
              <p className="mt-4 font-soft text-[18px] leading-relaxed text-accent">
                {s.body}
              </p>

              <Link
                href={s.href}
                className="group mt-auto inline-flex items-center gap-3 pt-9"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/5 transition-all duration-300 group-hover:rotate-45 group-hover:bg-accent/10">
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
                    className="text-accent"
                  >
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
                <span className="font-heading text-[13px] uppercase tracking-[0.12em] text-accent">
                  {s.linkLabel}
                </span>
              </Link>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
