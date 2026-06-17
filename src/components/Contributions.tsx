import Reveal from "@/components/Reveal";

const contributions = [
  {
    kicker: "Compromiso",
    title: "Ownership real",
    body: "Asumo el producto como una responsabilidad completa, no como una suma de tareas aisladas. Entiendo el problema, el alcance, las decisiones técnicas, el despliegue, el mantenimiento y la evolución posterior. Mi foco no es solo cerrar tickets, sino empujar el sistema en la dirección correcta y dejar cada parte mejor preparada para seguir creciendo.",
  },
  {
    kicker: "Impacto",
    title: "Criterio de producto",
    body: "Conecto las decisiones técnicas con impacto real en usuario, negocio y operación. Priorizo lo que reduce fricción, mejora la experiencia, simplifica procesos, aumenta la conversión o desbloquea crecimiento. Para mí, el buen código no vive separado del producto: debe resolver algo concreto y aportar valor medible.",
  },
  {
    kicker: "Arquitectura",
    title: "Pensamiento de sistema",
    body: "No trato frontend, backend, datos, SEO, seguridad, rendimiento y automatización como piezas independientes. Los entiendo como partes de un mismo sistema, con dependencias, límites y consecuencias. Eso me permite construir productos más coherentes, mantenibles y preparados para evolucionar sin acumular deuda innecesaria.",
  },
  {
    kicker: "Equipo",
    title: "Comunicación clara",
    body: "Documento decisiones, explico trade-offs y dejo contexto útil para que otras personas puedan entender, revisar o continuar el trabajo sin depender de memoria informal. Una buena implementación no solo debe funcionar: también debe poder explicarse, auditarse y mantenerse por un equipo.",
  },
  {
    kicker: "Fiabilidad",
    title: "Mentalidad de producción",
    body: "Pienso más allá del escenario ideal. Tengo en cuenta errores, estados vacíos, límites, costes, privacidad, rendimiento, despliegue, mantenimiento y usuarios reales interactuando con el producto en condiciones imperfectas. Construir para producción significa anticipar fricción antes de que se convierta en problema.",
  },
  {
    kicker: "Evolución",
    title: "Aprendizaje aplicado",
    body: "Integro herramientas, frameworks y automatizaciones cuando aportan valor real, no por tendencia. Evalúo cada tecnología por su impacto en velocidad, calidad, mantenibilidad y capacidad de entrega. Aprender rápido importa, pero aplicarlo con criterio es lo que convierte una herramienta en ventaja.",
  },
];

// dos columnas independientes (masonry): la altura la marca el contenido, como en Arik.
// reparto secuencial para que en movil (una columna) se lea 1..6 en orden
const half = Math.ceil(contributions.length / 2);
const columns = [contributions.slice(0, half), contributions.slice(half)];

export default function Contributions() {
  return (
    <section
      id="contribuyo"
      className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-8"
    >
      <Reveal>
        <header className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[56px] font-light leading-[1.1] text-accent min-[810px]:text-[80px] min-[1200px]:text-[96px]">
            Qué aporto
            <span className="block italic">más allá del código</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-soft text-[18px] font-light leading-[1.4] text-accent/80 min-[810px]:text-[20px]">
            No me limito a implementar pantallas. Aporto criterio para entender
            el problema, tomar decisiones técnicas con impacto real y dejar
            sistemas que un equipo pueda mantener, medir y evolucionar.
          </p>
        </header>
      </Reveal>

      <div className="mx-auto mt-16 grid max-w-[1200px] grid-cols-1 items-start gap-4 min-[810px]:grid-cols-2 min-[810px]:gap-8 xl:mt-20">
        {columns.map((column, columnIndex) => (
          <div
            key={columnIndex}
            className={`flex flex-col gap-4 min-[810px]:gap-8 ${
              columnIndex === 1 ? "min-[810px]:mt-20" : ""
            }`}
          >
            {column.map((item, rowIndex) => (
              <Reveal
                key={item.title}
                delay={rowIndex * 130 + columnIndex * 70}
              >
                <article className="rounded-[2px] border border-accent/15 bg-accent/5 p-8 transition-colors duration-300 hover:border-accent/25 hover:bg-accent/[0.08] md:p-10 xl:p-12">
                  <p className="font-heading text-[12px] uppercase tracking-[0.2em] text-accent/55">
                    {item.kicker}
                  </p>
                  <h3 className="mt-4 font-display text-[22px] font-light leading-[1.3] text-accent xl:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-4 font-soft text-[15px] leading-relaxed text-accent xl:text-base">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
