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
      <div className="mx-auto flex max-w-[1040px] flex-col gap-4">
        {stack.map((category) => (
          <div
            key={category.title}
            className="flex flex-col gap-4 rounded-xs border border-accent/15 bg-accent/5 p-7 transition-colors duration-300 hover:border-accent/25 md:flex-row md:items-center md:gap-10 md:p-8"
          >
            <h3 className="font-heading text-[13px] uppercase tracking-[0.2em] text-accent md:w-44 md:shrink-0">
              {category.title}
            </h3>
            <ul className="flex flex-wrap gap-2.5">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-xs bg-accent/10 px-3 py-1.5 font-soft text-[13px] leading-none text-accent xl:px-4 xl:py-2 xl:text-[17px]"
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
