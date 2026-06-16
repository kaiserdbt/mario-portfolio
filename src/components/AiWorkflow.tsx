import Section from "@/components/Section";

const steps = [
  {
    title: "Planifico con intención",
    body: "Descompongo el problema y diseño el modelo de datos y la arquitectura antes de escribir código. La IA me sirve para poner a prueba el enfoque.",
  },
  {
    title: "Construyo con apoyo",
    body: "Me apoyo en herramientas de IA (como Claude Code) para ir rápido en el andamiaje y las refactorizaciones, sin soltar nunca las decisiones.",
  },
  {
    title: "Verifico, siempre",
    body: "Trato el código generado como un borrador: lo leo, lo pruebo y compruebo su comportamiento antes de publicarlo. La velocidad nunca sustituye al rigor.",
  },
];

export default function AiWorkflow() {
  return (
    <Section
      id="process"
      eyebrow="Cómo trabajo"
      title="Con IA, pero sin depender de ella"
      description="Uso la IA para ganar velocidad sin renunciar al criterio de ingeniería."
    >
      <ol className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-30px_rgba(218,197,167,0.22)]"
          >
            <span className="font-heading text-[13px] uppercase tracking-[0.12em] text-accent/60">
              0{index + 1}
            </span>
            <h3 className="mt-5 font-display text-2xl font-light uppercase leading-tight tracking-[0.03em] text-accent">
              {step.title}
            </h3>
            <p className="mt-3 font-soft leading-relaxed text-muted">{step.body}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
