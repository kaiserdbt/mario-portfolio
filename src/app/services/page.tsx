import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import LaptopHero from "@/components/LaptopHero";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Servicios",
  description:
    "Webs, SaaS y automatización: productos digitales rápidos y mantenibles, listos para convertir, operar y evolucionar.",
  path: "/services",
});

const blocks = [
  {
    id: "webs",
    heading: "Webs y landings de alto rendimiento",
    lead: "A medida para negocios que no se conforman con verse bien: cada página pensada para convertir las visitas en oportunidades reales.",
    image: "/services/webs-hd.webp",
    width: 2000,
    height: 1500,
    reverse: false,
    features: [
      {
        label: "Diseño a medida",
        body: "Parto del negocio, del público y del objetivo de conversión antes de diseñar la primera sección. Defino estructura, jerarquía visual y mensaje para que cada bloque tenga una función clara: explicar, generar confianza, reducir fricción o empujar a la acción.",
      },
      {
        label: "Rendimiento real",
        body: "Construyo con una base técnica moderna, cuidando carga, estabilidad visual, adaptabilidad, accesibilidad y experiencia de usuario. El objetivo no es solo que la web se vea bien, sino que responda rápido, sea mantenible y soporte el crecimiento sin convertirse en una pieza frágil.",
      },
      {
        label: "SEO desde la base",
        body: "Trabajo la estructura SEO desde el primer despliegue: URLs limpias, metadatos, jerarquía de encabezados, datos estructurados y contenido preparado para que lo entiendan usuarios, buscadores y sistemas de respuesta. La visibilidad no se deja para el final; se diseña desde el inicio.",
      },
    ],
  },
  {
    id: "saas",
    heading: "SaaS a medida para operar, cobrar y escalar",
    lead: "Diseño y desarrollo el producto SaaS de principio a fin: modelo de datos, API, pagos, paneles y automatización. Una plataforma que aísla a cada cliente, sostiene cobros y operación, y crece en clientes, sedes o módulos a medida que el negocio lo necesita.",
    image: "/services/saas-vertical.webp",
    width: 1500,
    height: 2000,
    reverse: true,
    features: [
      {
        label: "Arquitectura SaaS multi-tenant",
        body: "Diseño la base para varios clientes desde el principio: cada cuenta opera aislada, con sus datos, usuarios, servicios, precios y reglas. En Marai Agenda el aislamiento llega hasta la base de datos, con Row-Level Security de PostgreSQL sobre 90 tablas y protección contra accesos cruzados (IDOR): un negocio no alcanza la información de otro ni por un fallo de código.",
      },
      {
        label: "Pagos, planes y suscripciones",
        body: "Integro Stripe para sostener el negocio: planes, suscripciones, señales, penalizaciones por no presentarse y control de acceso según el plan contratado. Pruebo el flujo entero, de la intención de pago a la activación del servicio, con webhooks firmados e idempotentes que contemplan cancelaciones, cambios de plan y los casos límite antes de producción.",
      },
      {
        label: "Paneles, roles y operación interna",
        body: "Un SaaS no termina en el checkout. Desarrollo los paneles para administrar usuarios, clientes, servicios, reservas, configuración y métricas del día a día. Cada rol ve lo que le corresponde y trabaja sin estorbos, porque a la plataforma la usa el equipo del negocio, no solo quien la programó.",
      },
      {
        label: "Automatización conectada al negocio",
        body: "Conecto automatizaciones que recortan trabajo manual: recordatorios, confirmaciones, reservas y flujos disparados por eventos. En Marai Agenda esto incluye un bot de WhatsApp con Claude que gestiona reservas, con detección de intención tipada y barreras contra la inyección de prompts, para ahorrar tiempo y reducir errores.",
      },
      {
        label: "Preparado para crecer",
        body: "Construyo la base pensando en la evolución: multi-idioma, multi-sede, multi-profesional, configuración por cliente, integraciones, métricas y logs. Marai Agenda funciona en 33 idiomas y maneja zonas horarias a prueba de cambios de hora, de forma que sumar clientes, sedes o funciones no obliga a rehacer la arquitectura.",
      },
      {
        label: "Confianza, seguridad y cumplimiento",
        body: "Un SaaS gestiona datos sensibles, pagos y operaciones, así que la seguridad forma parte del diseño desde el principio: permisos, validaciones, trazabilidad y recuperación ante errores. El producto se apoya en 432 archivos de pruebas y un CI/CD que analiza seguridad en cada cambio (Trivy, Gitleaks) y pasa una revisión de código por IA antes de fusionar.",
      },
    ],
  },
  {
    id: "automatizacion",
    heading: "Automatización operativa para reducir trabajo manual",
    lead: "Diseño flujos que conectan herramientas, ordenan procesos y eliminan tareas repetitivas sin perder el control. No se trata de automatizar por automatizar: busco sistemas fiables que ahorren tiempo, reduzcan errores y dejen al equipo concentrarse en las decisiones que importan.",
    image: "/services/automatizacion.webp",
    width: 2000,
    height: 1500,
    reverse: false,
    features: [
      {
        label: "Flujos a medida",
        body: "Analizo cómo trabaja tu negocio y convierto los procesos manuales en flujos claros, medibles y mantenibles. Automatizo sincronización de datos, avisos internos, generación de informes, seguimiento de clientes, clasificación de solicitudes, actualizaciones de CRM y tareas recurrentes que hoy dependen de copiar, pegar y revisar a mano.",
      },
      {
        label: "Control y supervisión",
        body: "Cada automatización debe ser predecible. Defino reglas, límites, validaciones y puntos de revisión para que el sistema no actúe a ciegas. Cuando intervienen modelos de IA, los uso con contexto, trazabilidad y barreras de seguridad, de modo que el resultado pueda revisarse antes de activar acciones críticas.",
      },
      {
        label: "Integraciones entre sistemas",
        body: "Conecto APIs, webhooks, bases de datos, formularios, CRMs, calendarios, herramientas de comunicación y tareas programadas para que la información fluya sin intervención manual. La prioridad es que tus sistemas trabajen juntos, mantengan datos consistentes y reduzcan la fricción operativa del día a día.",
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1400px] px-6 pb-12 pt-20 text-center sm:px-8 sm:pt-28">
        <h1 className="mx-auto max-w-4xl font-display text-[44px] font-light leading-[1.05] tracking-[-0.01em] text-accent sm:text-6xl lg:text-7xl">
          Webs, SaaS <span className="italic">&amp; automatización</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-soft text-[18px] leading-[27px] text-accent min-[810px]:text-[22px] min-[810px]:leading-[33px] min-[1600px]:text-[24px] min-[1600px]:leading-[36px]">
          Productos digitales para negocios que necesitan algo más que presencia
          en línea: sistemas rápidos y mantenibles, listos para convertir,
          operar y evolucionar.
        </p>
        <div className="mt-9 flex justify-center">
          <Link
            href="#webs"
            className="group inline-flex items-center gap-4"
            aria-label="Ver servicios"
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
              Ver servicios
            </span>
          </Link>
        </div>

        <div className="mt-4 w-full">
          <LaptopHero />
        </div>
      </section>

      {blocks.map((block) => (
        <section
          key={block.id}
          id={block.id}
          className="mx-auto w-full max-w-[1400px] px-6 py-20 sm:px-8 lg:py-28"
        >
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-2 lg:items-center">
            <Reveal
              className={`lg:row-start-1 ${block.reverse ? "lg:col-start-1" : "lg:col-start-2"}`}
            >
              <h2 className="text-balance font-display text-[32px] font-light leading-[1.1] tracking-[1px] text-accent min-[810px]:text-[40px] min-[810px]:leading-[1.2] min-[1600px]:text-[48px] min-[1600px]:leading-[1.3]">
                {block.heading}
              </h2>
            </Reveal>

            <Reveal
              className={`lg:row-start-2 ${block.reverse ? "lg:col-start-2" : "lg:col-start-1"}`}
            >
              <div className="overflow-hidden rounded-3xl border border-border">
                <Image
                  src={block.image}
                  alt={block.heading}
                  width={block.width}
                  height={block.height}
                  sizes="(max-width: 1024px) 92vw, 640px"
                  quality={90}
                  className="w-full object-cover"
                />
              </div>
            </Reveal>

            <div
              className={`lg:row-start-2 lg:flex lg:flex-col lg:justify-center ${
                block.reverse ? "lg:col-start-1" : "lg:col-start-2"
              }`}
            >
              <Reveal>
                <p className="font-soft text-[18px] leading-[1.7] text-accent min-[810px]:text-[20px]">
                  {block.lead}
                </p>
              </Reveal>
              <dl className="mt-8">
                {block.features.map((feature, i) => (
                  <Reveal key={feature.label} delay={i * 80}>
                    <div className="border-t border-border py-7 first:border-t-0 first:pt-0">
                      <dt className="font-heading text-[15px] uppercase tracking-[0.14em] text-accent">
                        {feature.label}
                      </dt>
                      <dd className="mt-3 font-soft text-[14px] leading-[22.4px] text-accent min-[810px]:text-[16px] min-[810px]:leading-[25.6px] min-[1600px]:leading-[28.8px]">
                        {feature.body}
                      </dd>
                    </div>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      <section id="contact" className="mx-auto w-full max-w-[1400px] px-6 py-32 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-[16px] uppercase tracking-[0.18em] text-accent">
            Disponible
          </p>
          <h2 className="mt-5 font-display text-[40px] font-light leading-[1.1] text-accent sm:text-[64px]">
            ¿Tienes un proyecto entre manos?{" "}
            <span className="italic">Hablémoslo.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-soft text-[18px] leading-relaxed text-accent">
            Cuéntame qué necesitas y te propongo el enfoque, el alcance y los plazos.
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
