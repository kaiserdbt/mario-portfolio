import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import Reveal from "@/components/Reveal";

// flecha diagonal (Phosphor arrow-up-right light), igual que el badge de Arik
const ARROW =
  "M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z";

const IMG_SIZES = "(min-width: 640px) 50vw, 100vw";

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={IMG_SIZES}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
    />
  );
}

// badge circular centrado que aparece al hover (opacidad 0->1 + rotacion), como Arik
function Badge() {
  return (
    <span className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      <span className="flex h-12 w-12 rotate-45 items-center justify-center rounded-full border border-accent/15 bg-accent/10 opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:rotate-0 group-hover:opacity-100">
        <svg viewBox="0 0 256 256" aria-hidden className="h-5 w-5 fill-accent">
          <path d={ARROW} />
        </svg>
      </span>
    </span>
  );
}

// etiqueta encasillada dentro de la imagen (overlay inferior con backdrop-blur)
function Label({ name, category }: { name: string; category: string }) {
  return (
    <div
      className="absolute inset-x-6 bottom-6 z-20 flex items-center justify-between rounded-[2px] border border-accent/15 bg-accent/5 px-4 py-3"
      style={{ backdropFilter: "blur(15px)", WebkitBackdropFilter: "blur(15px)" }}
    >
      <span className="font-display text-2xl font-light leading-none text-accent">
        {name}
      </span>
      <span className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
        {category}
      </span>
    </div>
  );
}

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
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
                <Img src="/work/marai.webp" alt="Marai Agenda" />
                <Badge />
              </div>
              <Label name="Marai" category="SaaS B2B" />
            </Link>
          </Reveal>
          <Reveal delay={90}>
            <Link href="/projects/olunae" className="group relative block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[2px]">
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
            <div className="relative overflow-hidden rounded-[2px]">
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
