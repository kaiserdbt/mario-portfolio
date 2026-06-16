import Section from "@/components/Section";
import { stack } from "@/data/stack";

export default function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="Stack"
      title="Las herramientas que uso"
      description="Las tecnologías con las que construyo y mantengo software día a día."
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((category) => (
          <div
            key={category.title}
            className="rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(218,197,167,0.22)]"
          >
            <h3 className="font-heading text-[13px] font-normal uppercase tracking-[0.12em] text-accent/80">
              {category.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {category.items.map((item) => (
                <li key={item} className="font-soft text-foreground/85">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
