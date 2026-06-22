const steps = [
  {
    phase: "Descubrimiento",
    title: "Entiendo el problema antes de escribir código",
    body: "Antes de abrir el editor reduzco la incertidumbre: analizo qué hay que resolver, para quién y bajo qué restricciones técnicas, operativas y de negocio. No empiezo por la solución; separo lo esencial de lo accesorio y uso la IA como capa de contraste para cuestionar supuestos, detectar puntos ciegos y validar el alcance antes de construir.",
    points: [
      "Problema, usuario y objetivo definidos",
      "Requisitos y criterios de éxito documentados",
      "Riesgos y restricciones detectados desde el inicio",
    ],
  },
  {
    phase: "Arquitectura",
    title: "Diseño el sistema antes de ejecutar",
    body: "Con el problema claro, diseño la estructura que sostendrá el producto: modelo los datos, defino límites, flujos, responsabilidades e interfaces antes de escribir la primera capa de código. Cada decisión responde a una razón concreta: mantenibilidad, seguridad, rendimiento, escalabilidad o simplicidad operativa. La IA contrasta enfoques; la arquitectura la fijo con criterio propio.",
    points: [
      "Modelo de datos preparado para evolucionar",
      "Límites, interfaces y responsabilidades claros",
      "Decisiones técnicas justificadas y trazables",
    ],
  },
  {
    phase: "Implementación",
    title: "Construyo rápido, con control técnico",
    body: "Uso la IA como acelerador operativo para andamiaje, refactorizaciones, componentes y trabajo repetitivo. Pero el criterio no se delega: cada cambio debe respetar la arquitectura, los patrones del proyecto y el objetivo del producto. No busco producir más código, sino construir menos piezas, mejor conectadas y más fáciles de mantener.",
    points: [
      "Código fiel a los patrones del proyecto",
      "Componentes reutilizables, tipados y mantenibles",
      "Refactorizaciones controladas, no impulsivas",
    ],
  },
  {
    phase: "Calidad",
    title: "Verifico antes de confiar",
    body: "Trato todo el código, propio o asistido por IA, como un borrador hasta que demuestra lo contrario. Lo leo, lo ejecuto y valido su comportamiento real. No me quedo en el caso ideal: reviso errores, estados vacíos, límites, rendimiento, accesibilidad y seguridad. La calidad no es un adorno final; es una condición de entrega.",
    points: [
      "Casos límite y estados de error contemplados",
      "Typecheck, lint, tests y build en verde",
      "Sin publicar hasta tener una base verificable",
    ],
  },
  {
    phase: "Entrega",
    title: "Publico, observo y mejoro con datos",
    body: "El despliegue no es el final: es cuando el producto empieza a demostrar si aporta valor. Entrego con un build limpio, una base mantenible y el proyecto preparado para evolucionar. Después observo comportamiento real, reviso métricas y priorizo mejoras con datos, no con suposiciones. Mi objetivo no es solo lanzar, sino dejar sistemas que se puedan medir, mantener y escalar.",
    points: [
      "Deploy limpio y documentado",
      "Seguimiento de uso, errores y rendimiento",
      "Iteración guiada por evidencia",
    ],
  },
];

export default function AiWorkflow() {
  return (
    <section
      id="process"
      className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-8"
    >
      <header className="mx-auto max-w-3xl text-center">
        <p className="font-heading text-[13px] font-normal uppercase tracking-[0.12em] text-accent">
          Cómo trabajo
        </p>
        <h2 className="mt-5 font-display text-[56px] font-light leading-[1.1] text-accent min-[810px]:text-[80px] min-[1200px]:text-[96px]">
          Velocidad,
          <span className="block italic">con criterio técnico</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-soft text-[18px] font-light leading-[1.4] text-accent/80 min-[810px]:text-[20px]">
          Construyo productos centrados en la arquitectura, la claridad y la
          entrega real, con herramientas modernas que aceleran el proceso sin
          relajar el criterio de ingeniería.
        </p>
      </header>

      <ol className="relative mx-auto mt-16 max-w-[1200px] xl:mt-20">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-[19px] w-px bg-accent xl:left-1/2 xl:-translate-x-1/2"
        />
        {steps.map((step, index) => {
          const onRight = index % 2 === 0;
          return (
            <li
              key={step.phase}
              className="relative pb-12 last:pb-0 xl:grid xl:grid-cols-2 xl:items-center xl:gap-x-24 xl:pb-16"
            >
              <span
                aria-hidden
                className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent bg-background font-heading text-[13px] text-accent xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2"
              >
                0{index + 1}
              </span>
              <article
                className={`ml-[60px] rounded-xs border border-accent/15 bg-accent/5 p-8 transition-colors duration-300 hover:border-accent/25 hover:bg-accent/[0.08] md:p-10 xl:ml-0 xl:p-12 ${
                  onRight ? "xl:col-start-2" : "xl:col-start-1 xl:row-start-1"
                }`}
              >
                <div className="flex flex-wrap items-start gap-x-4 gap-y-3 xl:flex-col xl:flex-nowrap">
                  <span className="order-1 shrink-0 rounded-xs border border-accent/25 bg-accent/10 px-2.5 py-1.5 font-heading text-[11px] uppercase tracking-widest text-accent/70 xl:text-[12px]">
                    {step.phase}
                  </span>
                  <h3 className="order-2 w-full font-display text-[20px] font-light leading-[1.3] tracking-[0.5px] text-accent xl:text-[24px] xl:uppercase">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 font-soft text-[14px] leading-[1.65] text-accent xl:mt-5 xl:text-[16px]">
                  {step.body}
                </p>
                <ul className="mt-5 space-y-2.5 xl:mt-6">
                  {step.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 font-soft text-[14px] leading-[1.6] text-accent xl:text-[16px]"
                    >
                      <span
                        aria-hidden
                        className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
