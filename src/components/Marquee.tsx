import { profile } from "@/data/profile";

export default function Marquee() {
  const items = Array.from({ length: 4 });

  return (
    <div className="overflow-hidden border-y border-border py-8">
      <div className="flex w-max animate-marquee">
        {items.map((_, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center font-display text-6xl font-light tracking-tight text-foreground sm:text-8xl"
          >
            <span className="px-8">{profile.name}</span>
            <span className="px-8 italic text-muted">disponible</span>
          </span>
        ))}
      </div>
    </div>
  );
}
