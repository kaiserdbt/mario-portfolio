import Image from "next/image";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Sobre mí",
  description:
    "Mario Cava Avila, ingeniero de software full-stack. Construyo SaaS, plataformas de SEO con IA y automatización, de la base de datos al despliegue.",
  path: "/about",
});

const details = [
  { label: "Ubicación", value: profile.location },
  { label: "Disponibilidad", value: "Incorporación inmediata" },
  { label: "Modalidad", value: "Remoto · híbrido · asíncrono" },
  { label: "Idiomas", value: "Español, catalán e inglés" },
];

const contact = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Teléfono", value: "631 599 215", href: "tel:+34631599215" },
  { label: "LinkedIn", value: "linkedin.com/in/mariocavaavila", href: profile.linkedinUrl },
  { label: "GitHub", value: "github.com/kaiserdbt", href: profile.githubUrl },
];

const competencias = [
  { title: "Ownership", body: "Respondo de lo que entrego: no acaba en el merge, sigue siendo mío hasta que funciona en producción y se puede mantener." },
  { title: "Autonomía", body: "Avanzo, me desbloqueo y comunico sin necesitar que me lleven de la mano." },
  { title: "Criterio de producto", body: "Sé qué construir y qué no: priorizo por impacto en el usuario y el negocio, no por gusto técnico." },
  { title: "Desarrollo full-stack", body: "De extremo a extremo: React y Next.js, NestJS, PostgreSQL, Stripe y despliegue." },
  { title: "Código mantenible", body: "Estructuras claras y patrones consistentes: código que otro puede leer y ampliar sin miedo." },
  { title: "Calidad técnica", body: "Tests, casos límite, rendimiento y seguridad antes de publicar, no después." },
  { title: "Comunicación técnica", body: "Explico decisiones y trade-offs con el contexto justo para que el equipo avance." },
  { title: "Aprendizaje rápido", body: "Me pongo al día rápido en herramientas nuevas, dominios que no conozco y formas de trabajar distintas." },
];

const milestones = [
  { name: "Qoniar: sistema editorial tecnológico con arquitectura comercial, tracking, SEO/GEO y 41 validadores de calidad", year: "2026" },
  { name: "Olunae: plataforma de SEO programático con clasificación, control editorial e indexabilidad", year: "2026" },
  { name: "Marai Agenda: SaaS B2B multi-tenant con reservas, pagos y aislamiento de datos", year: "2025" },
];

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1400px] px-6 pb-12 pt-20 sm:px-8 sm:pt-28">
        <div className="grid gap-10 min-[1480px]:grid-cols-[minmax(0,500px)_1fr] min-[1480px]:items-start min-[1480px]:gap-12">
          <div className="min-[1480px]:sticky min-[1480px]:top-24 min-[1480px]:self-start">
            <Image
              src="/about/53-cut.png"
              alt={profile.name}
              width={1122}
              height={1402}
              sizes="(max-width: 1480px) 240px, 500px"
              quality={90}
              className="mx-auto h-auto w-full max-w-[240px] object-cover min-[1480px]:mx-0 min-[1480px]:max-w-none"
              style={{
                maskImage:
                  "linear-gradient(to bottom, #000 86%, transparent 100%), linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 86%, transparent 100%), linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
                WebkitMaskComposite: "source-in",
              }}
              priority
            />
          </div>

          <div>
            <div className="text-center min-[1480px]:text-left">
              <h1 className="font-display font-light leading-[1.05] tracking-tight text-accent text-[56px] min-[810px]:text-[80px] min-[1200px]:text-[128px]">
                Mario
                <span className="block italic">Cava Avila</span>
              </h1>
              <p className="mx-auto mt-6 max-w-md font-soft text-[18px] leading-[1.5] text-accent/60 min-[810px]:text-[22px] min-[810px]:leading-[33px] min-[1480px]:mx-0">
                Ingeniero de software full-stack.
              </p>
              <a
                href="#sobre-mi"
                aria-label="Ir a sobre mí"
                className="group mt-8 inline-flex items-center gap-4"
              >
                <span className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
                  Sobre mí
                </span>
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
              </a>
            </div>

            <div id="sobre-mi" className="mt-16 scroll-mt-28">
              <h2 className="max-w-2xl font-display text-[32px] font-light leading-[1.1] tracking-[1px] text-accent min-[810px]:max-w-none min-[810px]:text-[40px] min-[810px]:leading-[1.2] min-[1480px]:max-w-2xl">
                Construyo producto de principio a fin, con criterio técnico y visión de negocio.
              </h2>
              <div className="mt-6 max-w-2xl font-soft text-[18px] leading-[1.6] text-accent [&>p:not(:last-child)]:mb-5 min-[810px]:max-w-none min-[810px]:columns-2 min-[810px]:gap-x-12 min-[810px]:[&>p]:break-inside-avoid min-[1480px]:max-w-2xl min-[1480px]:columns-1">
                <p>
                  Soy Mario Cava Ávila, desarrollador full-stack orientado a
                  producto. Mi experiencia nace de levantar proyectos propios
                  completos: entender el problema, definir el alcance, diseñar la
                  arquitectura, desarrollar la aplicación, desplegarla, corregir
                  errores y mantenerla preparada para usuarios reales.
                </p>
                <p>
                  Trabajo en el punto donde la ingeniería se conecta con el
                  producto. Me interesa entender qué necesita el usuario, qué
                  objetivo persigue el negocio y qué decisiones técnicas permiten
                  avanzar sin comprometer la estabilidad, la mantenibilidad ni la
                  capacidad de crecer del sistema.
                </p>
                <p>
                  Me muevo con soltura en producto web, SaaS, automatización,
                  plataformas internas y sistemas de contenido. En lo técnico,
                  trabajo con arquitectura full-stack, bases de datos,
                  autenticación, pagos, paneles de administración, SEO técnico,
                  despliegues y flujos de validación. Puedo entrar en código
                  existente, ordenar problemas ambiguos y convertirlos en entregas
                  claras que funcionan y se sostienen en el tiempo.
                </p>
                <p>
                  Busco incorporarme a un equipo exigente, con buenas prácticas,
                  revisión técnica y producto real, donde aportar autonomía,
                  criterio y ejecución. Trabajo con mentalidad de ownership: cuando
                  una parte del sistema depende de mí, no la trato como una tarea
                  aislada, sino como una pieza que tiene que funcionar, entenderse
                  y poder evolucionar.
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-x-12 gap-y-10 min-[900px]:grid-cols-2">
              <div>
                <p className="inline-block rounded-xs border border-accent/15 bg-accent/5 px-3 py-1.5 font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
                  Datos
                </p>
                <dl className="mt-4">
                  {details.map((d) => (
                    <div
                      key={d.label}
                      className="flex items-center justify-between gap-6 border-t border-border py-3.5 first:border-t-0"
                    >
                      <dt className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
                        {d.label}
                      </dt>
                      <dd className="text-right font-soft text-[17px] text-accent">
                        {d.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <p className="inline-block rounded-xs border border-accent/15 bg-accent/5 px-3 py-1.5 font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
                  Contacto
                </p>
                <dl className="mt-4">
                  {contact.map((c) => (
                    <div
                      key={c.label}
                      className="flex items-center justify-between gap-6 border-t border-border py-3.5 first:border-t-0"
                    >
                      <dt className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
                        {c.label}
                      </dt>
                      <dd className="text-right font-soft text-[17px] text-accent">
                        {c.href ? (
                          <a
                            href={c.href}
                            target={c.href.startsWith("http") ? "_blank" : undefined}
                            rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="transition-colors hover:text-accent-2"
                          >
                            {c.value}
                          </a>
                        ) : (
                          c.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            <div className="mt-12">
              <p className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
                Competencias
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {competencias.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xs border border-accent/15 bg-accent/5 p-6"
                  >
                    <p className="font-heading text-[14px] uppercase tracking-widest text-accent">
                      {s.title}
                    </p>
                    <p className="mt-2.5 font-soft text-[15px] leading-[1.6] text-accent">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
                Hitos destacados
              </p>
              <ul className="mt-4">
                {milestones.map((item, i) => (
                  <li
                    key={`${item.name}-${i}`}
                    className="flex items-center justify-between gap-6 border-t border-border py-4 first:border-t-0"
                  >
                    <span className="font-display text-[20px] font-light leading-[1.2] text-accent">
                      {item.name}
                    </span>
                    <span className="font-heading text-[13px] tracking-[0.115em] text-accent/60">
                      {item.year}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-[1400px] px-6 py-32 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-[16px] uppercase tracking-[0.18em] text-accent">
            Disponible
          </p>
          <h2 className="mt-5 font-display text-[40px] font-light leading-[1.1] text-accent sm:text-[64px]">
            <span className="block">¿Buscáis un perfil</span>
            <span className="block">full-stack con</span>
            <span className="block italic">mentalidad de producto?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-soft text-[18px] leading-relaxed text-accent">
            Estoy disponible para incorporación inmediata y abierto a oportunidades
            donde pueda aportar desarrollo full-stack, criterio técnico y capacidad
            de ejecución en producto real.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-10 inline-block rounded-xs bg-accent px-8 py-4 text-[18px] font-medium text-background transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
        </div>
      </section>
    </>
  );
}
