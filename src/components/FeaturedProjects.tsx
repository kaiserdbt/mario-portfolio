import Link from "next/link";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";
import { Img, Badge, Label } from "@/components/projects/cardParts";

export default function FeaturedProjects() {
  return (
    <Section
      id="work"
      title="Proyectos que he construido"
      description="Tres productos en producción, construidos de principio a fin. Entra en cada caso para ver la arquitectura, las decisiones difíciles y los resultados."
    >
      <div className="grid gap-4">
        {/* fila 1: Marai + Olunae (separadas) */}
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
        </div>

        {/* fila 2: Qoniar full-width, dos imagenes fusionadas (sin separacion) */}
        <Reveal delay={120}>
          <Link href="/projects/qoniar" className="group relative block">
            <div className="relative overflow-hidden rounded-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Img src="/work/qoniar-left.webp" alt="Qoniar" />
                </div>
                <div className="relative hidden aspect-[4/3] overflow-hidden sm:block">
                  <Img src="/work/qoniar-right.webp" alt="Qoniar" />
                </div>
              </div>
              <Badge />
            </div>
            <Label name="Qoniar" category="SEO programático" />
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
