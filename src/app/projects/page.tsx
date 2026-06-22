import Link from "next/link";
import Reveal from "@/components/Reveal";
import ContactCta from "@/components/ContactCta";
import { Img, Badge, Label } from "@/components/projects/cardParts";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Proyectos",
  description:
    "Productos que construyo enteros y mantengo en producción, con el trabajo de interfaz que los acompaña: SaaS B2B, SEO programático con IA y frontend.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <section className="mx-auto w-full max-w-[1400px] px-6 pb-12 pt-20 text-center sm:px-8 sm:pt-28">
        <h1 className="mx-auto max-w-4xl font-display text-[44px] font-light leading-[1.05] tracking-[-0.01em] text-accent sm:text-6xl lg:text-7xl">
          Proyectos
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-balance font-soft text-[18px] leading-[27px] text-accent min-[810px]:max-w-4xl min-[810px]:text-[22px] min-[810px]:leading-[33px] min-[1600px]:text-[24px] min-[1600px]:leading-[36px]">
          Proyectos propios construidos de principio a fin: desde la arquitectura y el modelo de datos hasta la interfaz, el despliegue y la validación. Cada caso muestra cómo convierto una idea en un sistema funcional, mantenible y preparado para usuarios reales, con decisiones técnicas que se pueden revisar y defender.
        </p>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-24 sm:px-8">
        {/* rejilla 2x2: fila 1 Marai + Olunae, fila 2 Qoniar + Frontend */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Reveal>
            <Link href="/projects/marai-agenda" className="group relative block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xs">
                <Img src="/work/marai.webp" alt="Marai Agenda" />
                <Badge />
              </div>
              <Label name="Marai" category="SaaS B2B" />
            </Link>
          </Reveal>

          <Reveal delay={90}>
            <Link href="/projects/olunae" className="group relative block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xs">
                <Img src="/work/olunae.webp" alt="Olunae" />
                <Badge />
              </div>
              <Label name="Olunae" category="SEO · IA" />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            <Link href="/projects/qoniar" className="group relative block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xs">
                <Img src="/work/qoniar-left.webp" alt="Qoniar" />
                <Badge />
              </div>
              <Label name="Qoniar" category="SEO programático" />
            </Link>
          </Reveal>

          <Reveal delay={150}>
            <Link href="/projects/frontend" className="group relative block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xs">
                <Img src="/work/frontend.webp" alt="Frontend y landings" />
                <Badge />
              </div>
              <Label name="Frontend & Landings" category="Diseño · Frontend" />
            </Link>
          </Reveal>
        </div>
      </section>

      <ContactCta />
    </>
  );
}
