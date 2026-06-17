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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
        {stack.map((category) => (
          <div
            key={category.title}
            className="rounded-[2px] border border-accent/15 bg-accent/5 p-8 transition-colors duration-300 hover:border-accent/25 md:p-7"
          >
            <h3 className="font-heading text-[12px] uppercase tracking-[0.2em] text-accent">
              {category.title}
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-[2px] bg-accent/10 px-3 py-1.5 font-soft text-[13px] leading-none text-accent xl:px-4 xl:py-2 xl:text-[17px]"
                >
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
