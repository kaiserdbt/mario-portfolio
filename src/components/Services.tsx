import Link from "next/link";
import Reveal from "@/components/Reveal";

const services = [
  {
    title: "Ingeniería de producto y operación",
    body: "Me ocupo del producto entero: base de datos, backend en NestJS, frontend, pagos, permisos por rol y CI/CD. Una vez vivo, respondo de él en producción y lo dejo listo para crecer. MARAI lo demuestra en un SaaS B2B de gestión de citas, multi-tenant, con aislamiento por fila (RLS) en PostgreSQL, cobros con Stripe y operación real en 33 idiomas.",
    linkLabel: "Marai Agenda",
    href: "/projects/marai-agenda",
  },
  {
    title: "Sistemas de crecimiento orgánico",
    body: "Diseño plataformas de contenido donde la arquitectura técnica y la calidad editorial crecen al mismo ritmo, sin que una frene a la otra. OLUNAE lo lleva a escala con hubs temáticos, páginas long-tail, control de indexabilidad y reglas de calidad que mantienen la consistencia cuando el catálogo se multiplica.",
    linkLabel: "Olunae",
    href: "/projects/olunae",
  },
  {
    title: "Arquitectura editorial y monetización",
    body: "Creo plataformas pensadas a la vez para la visibilidad y el negocio: reviews, comparativas y rankings sobre tracking, afiliación y 41 validadores de calidad. No me limito al posicionamiento clásico: cubro SEO, GEO, AIO y SXO para competir en buscadores, en motores generativos y en la experiencia de búsqueda. QONIAR une arquitectura editorial, medición y monetización controlada.",
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

              <h3 className="mt-4 text-balance font-display text-2xl font-light uppercase leading-tight tracking-[0.04em] text-accent min-[1280px]:max-[1440px]:min-h-[5.625rem] min-[1440px]:min-h-[3.75rem]">
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
