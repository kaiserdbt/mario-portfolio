import {
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siReactquery,
  siNodedotjs,
  siNestjs,
  siPostgresql,
  siPrisma,
  siRedis,
  siDocker,
  siStripe,
  siClaude,
} from "simple-icons";

// curado: solo lo de mayor demanda e impacto, todo real en mis proyectos
const icons = [
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siReactquery,
  siNodedotjs,
  siNestjs,
  siPostgresql,
  siPrisma,
  siRedis,
  siDocker,
  siStripe,
  siClaude,
];

// la mascara difumina los bordes; el track se duplica para un bucle sin costuras
const edgeMask =
  "linear-gradient(to right, transparent, #000 10%, #000 90%, transparent)";

export default function StackMarquee() {
  const row = [...icons, ...icons];

  return (
    <section className="pb-14 pt-8 sm:pb-16 sm:pt-10">
      <p className="text-center font-heading text-[13px] uppercase tracking-[0.12em] text-accent/70">
        El stack con el que diseño y sostengo sistemas en producción
      </p>

      <div
        className="group relative mx-auto mt-36 max-w-[1400px] overflow-hidden px-6 sm:px-8"
        style={{ WebkitMaskImage: edgeMask, maskImage: edgeMask }}
      >
        <ul className="flex w-max animate-marquee items-center gap-14 [animation-duration:55s] group-hover:[animation-play-state:paused] sm:gap-20">
          {row.map((icon, i) => (
            <li
              key={i}
              className="shrink-0 text-accent transition-transform duration-300 hover:scale-110"
              title={icon.title}
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-label={icon.title}
                className="h-9 w-auto"
              >
                <path d={icon.path} />
              </svg>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
