import Link from "next/link";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Política de privacidad",
  description:
    "Cómo trato los datos personales que envías a través del formulario de contacto: responsable, finalidad, legitimación, conservación, destinatarios y tus derechos.",
  path: "/privacidad",
});

const mail = "mariocavaavila@gmail.com";

function Mail() {
  return (
    <a
      href={`mailto:${mail}`}
      className="text-accent underline underline-offset-2 hover:text-accent-2"
    >
      {mail}
    </a>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 flex flex-col gap-2">
      {items.map((it) => (
        <li
          key={it}
          className="flex gap-3 font-soft text-[16px] leading-relaxed text-accent/80"
        >
          <span
            aria-hidden
            className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent/50"
          />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}

const h2 = "font-heading text-[13px] uppercase tracking-[0.16em] text-accent";
const p = "font-soft text-[16px] leading-relaxed text-accent/80";

const datos = [
  "Nombre.",
  "Empresa, si la indicas.",
  "Correo electrónico.",
  "Tipo de oportunidad o motivo de contacto, si el formulario lo incluye.",
  "Modalidad, si el formulario lo incluye.",
  "Contenido del mensaje.",
];

const finalidades = [
  "Recibir y gestionar tu mensaje.",
  "Responder a procesos de selección, propuestas laborales o contactos profesionales relacionados con mi perfil.",
  "Mantener la comunicación necesaria vinculada al mensaje enviado.",
  "Proteger el formulario frente a usos abusivos, spam o envíos automatizados.",
];

const proveedores = [
  "Vercel, para el alojamiento y despliegue del sitio.",
  "Resend, para el envío del correo generado por el formulario.",
  "Upstash, para el almacenamiento temporal de datos técnicos necesarios para limitar envíos abusivos.",
];

const derechos = [
  "Acceder a tus datos personales.",
  "Solicitar la rectificación de datos inexactos.",
  "Solicitar la supresión de tus datos.",
  "Solicitar la limitación del tratamiento.",
  "Oponerte al tratamiento en determinados casos.",
  "Solicitar la portabilidad de tus datos, cuando sea aplicable.",
  "Retirar el consentimiento prestado.",
];

export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-[760px] px-6 pb-24 pt-16 sm:px-8 sm:pt-24">
      <p className="font-heading text-[13px] font-normal uppercase tracking-[0.12em] text-accent">
        Legal
      </p>
      <h1 className="mt-4 font-display font-light leading-[1.15] tracking-[1px] text-accent text-[30px] min-[810px]:text-[40px]">
        Política de privacidad
      </h1>
      <p className="mt-3 font-soft text-[14px] text-muted">
        Última actualización: junio de 2026.
      </p>
      <p className={`mt-6 ${p}`}>
        Esta política explica cómo trato los datos personales que envías a través
        del formulario de contacto de este portfolio.
      </p>

      <div className="mt-12 flex flex-col gap-10">
        <div>
          <h2 className={h2}>Responsable del tratamiento</h2>
          <p className={`mt-3 ${p}`}>
            El responsable del tratamiento de tus datos es Mario Cava Ávila. Para
            cualquier cuestión relacionada con tus datos personales o con esta
            política, puedes escribir a <Mail />.
          </p>
        </div>

        <div>
          <h2 className={h2}>Qué datos trato</h2>
          <p className={`mt-3 ${p}`}>
            Trato los datos que me facilitas al utilizar el formulario de
            contacto:
          </p>
          <List items={datos} />
          <p className={`mt-4 ${p}`}>
            Además, por motivos de seguridad y prevención de abuso, se puede
            registrar de forma automática la dirección IP desde la que se envía
            el formulario. Este dato se utiliza únicamente para limitar envíos
            abusivos, prevenir spam y proteger el correcto funcionamiento del
            sitio.
          </p>
          <p className={`mt-4 ${p}`}>
            No solicito categorías especiales de datos personales. Por favor,
            evita incluir en el mensaje información sensible que no sea necesaria
            para gestionar el contacto.
          </p>
        </div>

        <div>
          <h2 className={h2}>De dónde proceden los datos</h2>
          <p className={`mt-3 ${p}`}>
            Los datos proceden directamente de ti, al completar y enviar el
            formulario de contacto.
          </p>
        </div>

        <div>
          <h2 className={h2}>Con qué finalidad trato tus datos</h2>
          <p className={`mt-3 ${p}`}>Utilizo tus datos para:</p>
          <List items={finalidades} />
          <p className={`mt-4 ${p}`}>
            No utilizo tus datos para enviar newsletters, comunicaciones
            comerciales masivas ni publicidad no solicitada.
          </p>
        </div>

        <div>
          <h2 className={h2}>Legitimación</h2>
          <p className={`mt-3 ${p}`}>
            La base legal para tratar los datos enviados mediante el formulario
            es tu consentimiento, que prestas al marcar la casilla
            correspondiente y enviar el formulario.
          </p>
          <p className={`mt-4 ${p}`}>
            La base legal para tratar la dirección IP con fines de seguridad y
            prevención de abuso es el interés legítimo en proteger el sitio,
            evitar spam y garantizar el correcto funcionamiento del formulario.
          </p>
          <p className={`mt-4 ${p}`}>
            Puedes retirar tu consentimiento en cualquier momento escribiendo a{" "}
            <Mail />. La retirada del consentimiento no afecta a la licitud del
            tratamiento realizado antes de retirarlo.
          </p>
        </div>

        <div>
          <h2 className={h2}>Carácter necesario de los datos</h2>
          <p className={`mt-3 ${p}`}>
            Los datos solicitados en el formulario son necesarios para poder
            gestionar y responder tu mensaje. Si no facilitas los datos
            requeridos, no podré atender correctamente la solicitud.
          </p>
        </div>

        <div>
          <h2 className={h2}>Durante cuánto tiempo conservo los datos</h2>
          <p className={`mt-3 ${p}`}>
            Conservo los datos enviados mediante el formulario durante el tiempo
            necesario para atender tu mensaje y mantener la comunicación
            relacionada con él.
          </p>
          <p className={`mt-4 ${p}`}>
            Después, podrán conservarse durante un plazo razonable si fuera
            necesario para acreditar la comunicación mantenida, realizar
            seguimiento profesional o atender posibles responsabilidades.
          </p>
          <p className={`mt-4 ${p}`}>
            Los registros técnicos asociados a la prevención de abuso, como la
            dirección IP utilizada para limitar envíos, se conservan solo durante
            el tiempo necesario para cumplir esa finalidad de seguridad.
          </p>
        </div>

        <div>
          <h2 className={h2}>Destinatarios y proveedores</h2>
          <p className={`mt-3 ${p}`}>
            No vendo tus datos ni los cedo a terceros, salvo obligación legal.
          </p>
          <p className={`mt-4 ${p}`}>
            Para el funcionamiento técnico del sitio y del formulario utilizo
            proveedores que pueden actuar como encargados del tratamiento:
          </p>
          <List items={proveedores} />
          <p className={`mt-4 ${p}`}>
            Estos proveedores solo tratan los datos en la medida necesaria para
            prestar sus servicios.
          </p>
          <p className={`mt-4 ${p}`}>
            Algunos proveedores pueden tratar datos fuera del Espacio Económico
            Europeo. Cuando esto ocurra, el tratamiento deberá realizarse con las
            garantías previstas por la normativa aplicable, como decisiones de
            adecuación, cláusulas contractuales tipo u otros mecanismos válidos
            conforme al RGPD.
          </p>
        </div>

        <div>
          <h2 className={h2}>Decisiones automatizadas</h2>
          <p className={`mt-3 ${p}`}>
            No tomo decisiones automatizadas que produzcan efectos jurídicos
            sobre ti o que te afecten significativamente de forma similar.
          </p>
          <p className={`mt-4 ${p}`}>
            Tampoco elaboro perfiles comerciales a partir de los datos enviados
            mediante el formulario.
          </p>
        </div>

        <div>
          <h2 className={h2}>Tus derechos</h2>
          <p className={`mt-3 ${p}`}>
            Puedes ejercer los siguientes derechos escribiendo a <Mail />:
          </p>
          <List items={derechos} />
          <p className={`mt-4 ${p}`}>
            Para poder atender correctamente tu solicitud, es posible que
            necesite verificar tu identidad.
          </p>
          <p className={`mt-4 ${p}`}>
            Si consideras que el tratamiento de tus datos no se ajusta a la
            normativa, puedes presentar una reclamación ante la Agencia Española
            de Protección de Datos (
            <a
              href="https://www.aepd.es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2 hover:text-accent-2"
            >
              www.aepd.es
            </a>
            ).
          </p>
        </div>

        <div>
          <h2 className={h2}>Seguridad</h2>
          <p className={`mt-3 ${p}`}>
            Aplico medidas técnicas y organizativas razonables para proteger la
            información que envías frente a accesos no autorizados, pérdida,
            alteración o uso indebido.
          </p>
          <p className={`mt-4 ${p}`}>
            Entre otras medidas, el formulario incorpora limitación de envíos
            para reducir spam y usos abusivos.
          </p>
        </div>

        <div>
          <h2 className={h2}>Menores de edad</h2>
          <p className={`mt-3 ${p}`}>
            El formulario no está dirigido a menores de edad. Si eres menor de
            edad, no debes enviar datos personales a través del formulario.
          </p>
        </div>

        <div>
          <h2 className={h2}>Cambios en esta política</h2>
          <p className={`mt-3 ${p}`}>
            Puedo actualizar esta política si cambian el formulario, los
            proveedores utilizados, las medidas técnicas aplicadas o la normativa
            vigente.
          </p>
          <p className={`mt-4 ${p}`}>
            La versión aplicable será siempre la publicada en esta página.
          </p>
        </div>
      </div>

      <div className="mt-14 border-t border-border pt-8">
        <Link
          href="/contact"
          className="font-heading text-[13px] uppercase tracking-[0.14em] text-accent/70 transition-colors hover:text-accent"
        >
          ← Volver al contacto
        </Link>
      </div>
    </section>
  );
}
