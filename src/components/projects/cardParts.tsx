import Image from "next/image";

// flecha diagonal (Phosphor arrow-up-right light), igual que el badge de Arik
const ARROW =
  "M198,64V168a6,6,0,0,1-12,0V78.48L68.24,196.24a6,6,0,0,1-8.48-8.48L177.52,70H88a6,6,0,0,1,0-12H192A6,6,0,0,1,198,64Z";

const IMG_SIZES = "(min-width: 640px) 50vw, 100vw";

export function Img({
  src,
  alt,
  sizes = IMG_SIZES,
}: {
  src: string;
  alt: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
    />
  );
}

// badge circular centrado que aparece al hover (opacidad 0->1 + rotacion), como Arik
export function Badge() {
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
export function Label({ name, category }: { name: string; category: string }) {
  return (
    <div
      className="absolute inset-x-6 bottom-6 z-20 flex items-center justify-between rounded-xs border border-accent/15 bg-accent/5 px-4 py-3"
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
