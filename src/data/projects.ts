// mis proyectos. para añadir otro, copio un bloque y le cambio el slug

export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  role: string;
  year: string;
  featured: boolean;
  image: string;
  imageWidth: number;
  imageHeight: number;
  stack: string[];
  // las cuatro cajas del hero (equipo, año, tipo, web)
  meta: ProjectMetric[];
  metrics: ProjectMetric[];
  links: ProjectLink[];
  repoPrivate: boolean;
  highlights: string[];
  // desglose en profundidad (solo en los proyectos que lo merecen)
  deepDive?: ProjectDeepDive;
};

export type BuildArea = {
  area: string;
  stack: string[];
  body: string;
  points: string[];
};

export type NamedBlock = {
  title: string;
  body: string;
};

export type ProjectDeepDive = {
  intro: string;
  build: BuildArea[];
  features: NamedBlock[];
  security: NamedBlock[];
};

export const projects: Project[] = [
  {
    slug: "marai-agenda",
    title: "Marai Agenda",
    tagline:
      "SaaS B2B multi-tenant para gestionar la agenda y el cobro de negocios de servicios.",
    summary:
      "Plataforma de reservas y operaciones para peluquerías, clínicas y profesionales con agenda. Cubre el ciclo completo: reserva online, calendario, recordatorios, cobro de señales con Stripe y un bot de WhatsApp que gestiona las reservas. Cada negocio queda aislado a nivel de base de datos con Row-Level Security de PostgreSQL.",
    role: "Full-stack, en solitario",
    year: "2025",
    featured: true,
    stack: [
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "React",
      "Astro",
      "Stripe",
      "Redis",
      "Claude (IA)",
    ],
    meta: [
      { label: "Equipo", value: "En solitario" },
      { label: "Año", value: "2025" },
      { label: "Tipo", value: "SaaS B2B" },
      { label: "Web", value: "maraiagenda.com" },
    ],
    metrics: [
      { label: "Líneas de código", value: "~553K" },
      { label: "Casos de test", value: "~4.800" },
      { label: "Tablas del modelo", value: "90" },
      { label: "Cobertura RLS", value: "100%" },
    ],
    links: [{ label: "Ver en vivo", href: "https://maraiagenda.com" }],
    image: "/projects/marai-agenda.webp",
    imageWidth: 1600,
    imageHeight: 900,
    repoPrivate: true,
    highlights: [
      "Multi-tenancy en profundidad: Row-Level Security en PostgreSQL más aislamiento por negocio en la aplicación, con protección contra accesos cruzados (IDOR).",
      "Cobros con Stripe: señales, penalizaciones por no presentarse y webhooks firmados e idempotentes.",
      "Bot de WhatsApp con Claude para reservar, con detección de intención tipada y barreras contra inyección de prompts.",
      "Internacionalización a 33 idiomas y manejo de zonas horarias a prueba de cambios de hora.",
      "CI/CD con análisis de seguridad (Trivy, Gitleaks) y revisión de código por IA en cada pull request.",
    ],
    deepDive: {
      intro:
        "Marai Agenda cubre el ciclo completo de un negocio de servicios, de la captación al cobro. La construí entera y en solitario, del modelo de datos al despliegue, repartida en tres piezas que trabajan juntas: un backend con la API y las reglas de negocio, un panel de gestión para el día a día y una landing pública pensada para convertir.",
      build: [
        {
          area: "Backend",
          stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Stripe", "Claude (IA)", "Docker"],
          body: "El núcleo del producto. Una API en NestJS y TypeScript sobre PostgreSQL con Prisma, donde viven las reglas de disponibilidad, reservas, cobros y mensajería. Redis y una cola de trabajos sostienen la caché y todo lo que ocurre en segundo plano: recordatorios, confirmaciones y tareas programadas. El modelo tiene 90 tablas y todas aplican Row-Level Security, así que cada negocio queda aislado desde la propia base de datos.",
          points: [
            "Multi-tenancy real: aislamiento por fila (RLS) en las 90 tablas del modelo.",
            "Reglas de negocio centralizadas: disponibilidad, reservas, penalizaciones y cobros.",
            "Cola de trabajos sobre Redis para recordatorios, confirmaciones y tareas programadas.",
          ],
        },
        {
          area: "Frontend",
          stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query"],
          body: "La aplicación con la que opera el negocio cada día. Un panel en React y TypeScript que reúne la agenda en vistas de día, semana y mes, con varios profesionales y disponibilidad que se refleja al momento. Desde un mismo sitio se gestionan clientes, servicios, precios, reservas y configuración, con formularios validados y una interfaz que se ajusta a cada rol. Cada perfil ve y maneja solo lo que le corresponde, porque a la herramienta la usa el equipo entero, no solo quien la programó.",
          points: [
            "Agenda multi-profesional en vistas de día, semana y mes, con disponibilidad al momento.",
            "Gestión completa de clientes, servicios, precios, reservas y configuración.",
            "Interfaz por rol y formularios validados, pensados para el uso diario del equipo.",
          ],
        },
        {
          area: "Landing-page",
          stack: ["Astro", "TypeScript", "Tailwind CSS"],
          body: "La puerta de entrada al producto. Una landing en Astro que llega al navegador casi como HTML estático, así que abre rápido y rinde bien en las métricas de carga. Está construida para convertir: explica la propuesta, genera confianza y lleva al registro sin rodeos. El SEO se trabaja desde la base, con metadatos, datos estructurados y URLs limpias, y funciona en varios idiomas, alineada con el alcance internacional del producto.",
          points: [
            "Astro con render estático: apertura rápida y buenas métricas de carga.",
            "SEO desde la base: metadatos, datos estructurados y URLs limpias.",
            "Multi-idioma y orientada a conversión, de la visita al registro.",
          ],
        },
      ],
      features: [
        {
          title: "Reserva online y agenda",
          body: "Reserva desde la web y gestión completa de la agenda, con vistas de día, semana y mes, varios profesionales y control de disponibilidad en tiempo real.",
        },
        {
          title: "Cobros con Stripe",
          body: "Señales por reserva, penalizaciones por ausencia y planes de suscripción. El flujo se prueba de la intención de pago a la activación del servicio, con webhooks firmados e idempotentes.",
        },
        {
          title: "Bot de WhatsApp con IA",
          body: "Un asistente con Claude que gestiona reservas por WhatsApp, con detección de intención tipada y barreras contra la inyección de prompts.",
        },
        {
          title: "Recordatorios automáticos",
          body: "Avisos y confirmaciones que reducen las ausencias y le quitan trabajo manual al negocio.",
        },
        {
          title: "Multi-idioma y zonas horarias",
          body: "Funciona en 33 idiomas y maneja zonas horarias a prueba de cambios de hora, listo para operar en distintos países.",
        },
        {
          title: "Cada negocio, aislado",
          body: "Cada cliente opera como si tuviera su propia instancia: sus datos, usuarios, servicios y reglas, sin alcanzar nunca los de otro.",
        },
      ],
      security: [
        {
          title: "Aislamiento de datos por diseño",
          body: "Row-Level Security de PostgreSQL en las 90 tablas, más aislamiento por negocio en la aplicación y protección contra accesos cruzados (IDOR). Un fallo de código no deja a un negocio ver los datos de otro.",
        },
        {
          title: "Pagos sin estados a medias",
          body: "Webhooks de Stripe firmados e idempotentes que contemplan cancelaciones, cambios de plan y reintentos, sin duplicar cobros ni dejar el sistema inconsistente.",
        },
        {
          title: "IA con barreras",
          body: "El bot trabaja con intención tipada y defensas contra la inyección de prompts, de forma que el modelo no puede salirse de lo que tiene permitido hacer.",
        },
        {
          title: "Seguridad en el pipeline",
          body: "CI/CD con análisis de seguridad en cada cambio (Trivy, Gitleaks) y una revisión de código por IA antes de fusionar, sobre una base de más de 4.800 pruebas.",
        },
      ],
    },
  },
  {
    slug: "olunae",
    title: "Olunae",
    tagline:
      "Motor de SEO con análisis facial por IA, donde el modelo clasifica pero nunca redacta.",
    summary:
      "El usuario sube una foto y Gemini la clasifica en un conjunto cerrado de patrones de piel. A partir de ahí, el servidor decide la categoría y genera la página desde plantillas en base de datos. El tráfico llega por SEO programático y se monetiza con afiliación y anuncios. Como la IA nunca escribe texto libre, el contenido es consistente y el coste queda bajo control.",
    role: "Full-stack, en solitario",
    year: "2026",
    featured: true,
    stack: ["Next.js 16", "React 19", "Drizzle", "Neon", "Gemini", "Vercel"],
    meta: [
      { label: "Equipo", value: "En solitario" },
      { label: "Año", value: "2026" },
      { label: "Tipo", value: "SEO · IA" },
      { label: "Web", value: "olunae.com" },
    ],
    metrics: [
      { label: "Líneas de código", value: "~80K" },
      { label: "Suites de test", value: "54" },
      { label: "Capas de defensa IA", value: "15" },
      { label: "IA-Likeness del corpus", value: "2,57/10" },
    ],
    links: [{ label: "Ver en vivo", href: "https://olunae.com" }],
    image: "/projects/olunae.webp",
    imageWidth: 1672,
    imageHeight: 941,
    repoPrivate: true,
    highlights: [
      "El endpoint de IA tiene una defensa en 15 capas con política «fail-closed» para no disparar el coste de Gemini.",
      "La salida del modelo va siempre contra un esquema Zod cerrado: si el modelo se sale, falla la validación, no el usuario.",
      "Metodología empírica: set de evaluación estratificado, fixtures de referencia y criterios numéricos de aceptación (sesgo por tono de piel ≤10 puntos).",
      "Minimización de datos por diseño: de cada clic de afiliado solo se guarda un hash truncado, sin IP.",
      "Optimización para buscadores y para IA generativa (llms.txt, datos estructurados, seguimiento de citas).",
    ],
    deepDive: {
      intro:
        "Olunae analiza la piel a partir de una foto y devuelve una rutina personalizada, sin pedir registro. La idea de fondo es firme: la IA clasifica, nunca redacta. El usuario sube una imagen, el modelo la encuadra en un conjunto cerrado de patrones de piel y, desde ahí, el servidor construye la página con plantillas. Así el contenido se mantiene consistente, el gasto en IA queda acotado y el tráfico orgánico crece sin sacrificar calidad. La construí entera y en solitario sobre Next.js, apoyándome en datos y no en intuiciones.",
      build: [
        {
          area: "Aplicación web",
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
          body: "Una sola aplicación Next.js con React y TypeScript, renderizada en servidor y desplegada en Vercel. Las páginas de SEO programático se generan desde plantillas, no a mano, así que el catálogo escala sin multiplicar el trabajo. La interfaz se apoya en Tailwind y shadcn/ui, y el SEO va incorporado: metadatos, datos estructurados, llms.txt y seguimiento de citas para competir en buscadores y en motores generativos.",
          points: [
            "Páginas generadas en servidor desde plantillas, listas para long-tail.",
            "Interfaz con Tailwind y shadcn/ui, render rápido en Vercel.",
            "SEO y GEO de base: datos estructurados, llms.txt y seguimiento de citas.",
          ],
        },
        {
          area: "Datos y contenido",
          stack: ["PostgreSQL", "Neon", "Drizzle ORM"],
          body: "Las plantillas y el contenido viven en PostgreSQL sobre Neon, con Drizzle como capa de acceso tipada. La indexabilidad se controla desde aquí: qué se publica, qué se enlaza y qué queda fuera del índice, con reglas que mantienen la calidad cuando el número de páginas se dispara.",
          points: [
            "Plantillas y contenido en PostgreSQL (Neon), acceso tipado con Drizzle.",
            "Control de indexabilidad: publicar, enlazar o excluir del índice.",
            "Reglas de calidad que sostienen el catálogo cuando crece.",
          ],
        },
        {
          area: "Análisis con IA",
          stack: ["Vercel AI SDK", "Google Gemini", "MediaPipe", "Zod"],
          body: "El análisis ocurre en dos pasos: MediaPipe resuelve la parte de visión sobre la imagen y Gemini, a través del AI SDK, la clasifica en un catálogo fijo de patrones de piel. Nunca texto libre. La salida pasa siempre por un esquema Zod: si el modelo se desvía, falla la validación, no el usuario. Alrededor hay una defensa en quince capas con política fail-closed para que un mal uso no dispare el gasto.",
          points: [
            "Visión con MediaPipe y clasificación cerrada con Gemini (AI SDK).",
            "Salida del modelo validada contra un esquema Zod cerrado.",
            "Defensa en 15 capas con política fail-closed para contener el gasto.",
          ],
        },
      ],
      features: [
        {
          title: "Análisis de piel por foto",
          body: "El usuario sube una imagen y recibe un análisis de su piel encuadrado en categorías cerradas, sin necesidad de registro.",
        },
        {
          title: "Rutina personalizada",
          body: "A partir del análisis, la plataforma arma una rutina y una página a medida desde plantillas, consistente y lista para publicar.",
        },
        {
          title: "IA que clasifica, no redacta",
          body: "El modelo etiqueta dentro de un repertorio acotado y nunca escribe texto libre, así el resultado es uniforme y el gasto, previsible.",
        },
        {
          title: "SEO programático a escala",
          body: "Hubs temáticos y páginas long-tail generadas desde datos, con control de indexabilidad para crecer en orgánico sin perder consistencia.",
        },
        {
          title: "Listo para IA generativa",
          body: "Preparada para buscadores y para motores generativos: llms.txt, datos estructurados y seguimiento de citas.",
        },
        {
          title: "Privacidad por defecto",
          body: "Funciona sin registro y guarda lo mínimo: de cada clic de afiliado solo un hash truncado, sin IP.",
        },
      ],
      security: [
        {
          title: "Defensa de IA en 15 capas",
          body: "El endpoint de análisis se protege con quince capas y política fail-closed: ante la duda no llama al modelo, así un abuso no dispara la factura de la API. Se apoya en límites de tasa con Upstash y en detección de bots.",
        },
        {
          title: "Salida del modelo bajo contrato",
          body: "Todo lo que devuelve la IA se valida contra un esquema Zod cerrado. Si el modelo se desvía, falla la validación y la página no se genera con datos basura.",
        },
        {
          title: "Minimización de datos",
          body: "Sin registro y con datos mínimos: de cada clic de afiliado solo se guarda un hash truncado, sin IP. El seguimiento funciona sin acumular información personal.",
        },
        {
          title: "Calidad verificada en CI",
          body: "54 suites de test y 48 auditorías en integración continua vigilan contenido, indexabilidad y comportamiento. Los secretos se escanean antes de cada cambio con Secretlint.",
        },
      ],
    },
  },
  {
    slug: "qoniar",
    title: "Qoniar",
    tagline:
      "SEO programático de reviews y comparativas de herramientas de IA en castellano.",
    summary:
      "Plataforma que publica a escala reviews, comparativas, listas y tutoriales sobre herramientas de IA para el mercado hispanohablante. Cada página nace de un borrador en JSON, pasa por una fase de humanización del texto y solo se aprueba si supera 41 validadores de calidad. La IA redacta contra un contrato estricto y un humano prueba la herramienta y firma el contenido.",
    role: "Full-stack, en solitario",
    year: "2026",
    featured: true,
    stack: ["Next.js 16", "React 19", "Drizzle", "Neon", "Gemini", "Vercel"],
    meta: [
      { label: "Equipo", value: "En solitario" },
      { label: "Año", value: "2026" },
      { label: "Tipo", value: "SEO programático" },
      { label: "Web", value: "qoniar.com" },
    ],
    metrics: [
      { label: "Líneas de código", value: "~102K" },
      { label: "Casos de test", value: "1.297" },
      { label: "Validadores de contenido", value: "41" },
      { label: "Auditorías de calidad", value: "65" },
    ],
    links: [{ label: "Ver en vivo", href: "https://qoniar.com" }],
    image: "/projects/qoniar.webp",
    imageWidth: 1672,
    imageHeight: 941,
    repoPrivate: true,
    highlights: [
      "Motor de plantillas con 5 tipos de página y ramificación exhaustiva por tipo (falta un caso y el proyecto no compila).",
      "Pipeline editorial en 4 fases: borrador, humanización, aprobación con validadores y auditoría del corpus.",
      "41 validadores con códigos estables: frescura ≤180 días, prueba práctica, divulgación de afiliados y vocabulario prohibido por normativa.",
      "CI con privilegio mínimo y rol de solo lectura en la base de datos; los secretos se escanean antes de cada push.",
      "Salvaguardas contra el contenido pobre y la canibalización entre páginas.",
    ],
    deepDive: {
      intro:
        "Qoniar publica a escala reviews, comparativas y rankings de herramientas de IA para el público hispanohablante, con una regla que lo cambia todo: la IA redacta el borrador, pero una persona prueba la herramienta y firma. Cada página nace de un borrador estructurado, pasa por una fase de humanización y solo llega a producción si supera 41 validadores de calidad. La construí entera y en solitario sobre Next.js, tratando el contenido como un sistema con contratos, no como texto suelto.",
      build: [
        {
          area: "Aplicación y plantillas",
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vercel"],
          body: "Una aplicación Next.js con un motor de plantillas en el centro: cinco tipos de página (reviews, comparativas, listas, rankings y tutoriales) con ramificación exhaustiva. Si falta un caso por cubrir, el proyecto ni siquiera compila. Todo se renderiza en servidor y llega con el SEO incorporado, optimizado también para los motores generativos.",
          points: [
            "Motor de plantillas con cinco tipos de página y ramificación exhaustiva.",
            "Si falta un caso por cubrir, el proyecto no compila.",
            "Render en servidor con SEO y GEO incorporados.",
          ],
        },
        {
          area: "Datos y contenido",
          stack: ["PostgreSQL", "Neon", "Drizzle ORM"],
          body: "El contenido se trata como datos: vive en PostgreSQL sobre Neon, con Drizzle como capa de acceso tipada. Cada página arranca como datos estructurados en JSON, no como un documento suelto, y eso permite validarla, versionarla y auditarla. Hay 66 páginas modeladas y reglas que cuidan la indexabilidad y evitan que unas canibalicen a otras.",
          points: [
            "66 páginas modeladas como datos en PostgreSQL (Neon) con Drizzle.",
            "Cada página arranca como datos en JSON: validable, versionable y auditable.",
            "Indexabilidad controlada y salvaguardas contra la canibalización.",
          ],
        },
        {
          area: "Pipeline editorial con IA",
          stack: ["Vercel AI SDK", "Google Gemini", "Zod"],
          body: "La IA redacta, pero contra un contrato estricto: Gemini genera el texto a través del AI SDK y la salida se valida con un esquema Zod. Después recorre cuatro fases (borrador, humanización, aprobación y auditoría del corpus) y no se publica hasta superar 41 validadores con códigos estables. Antes de firmar, una persona prueba la herramienta. La máquina escribe; no decide sola.",
          points: [
            "Gemini redacta contra contrato y la salida se valida con Zod.",
            "Cuatro fases: borrador, humanización, aprobación y auditoría del corpus.",
            "41 validadores con códigos estables, más prueba y firma humana.",
          ],
        },
      ],
      features: [
        {
          title: "Reviews, comparativas y rankings",
          body: "Contenido sobre herramientas de IA en castellano (reviews, comparativas, listas, rankings y tutoriales), todo generado desde el mismo motor de plantillas.",
        },
        {
          title: "La IA escribe, la persona decide",
          body: "El modelo redacta el primer texto y un humano prueba la herramienta y firma. La máquina propone, la persona aprueba.",
        },
        {
          title: "41 validadores de calidad",
          body: "Una página solo se publica si pasa 41 controles: frescura, prueba práctica, divulgación de afiliados o vocabulario prohibido por normativa, entre otros.",
        },
        {
          title: "Pipeline editorial en cuatro fases",
          body: "Borrador, humanización del texto, aprobación con validadores y auditoría del corpus. Cada fase deja el contenido más fiable que la anterior.",
        },
        {
          title: "SEO y GEO de serie",
          body: "Cada página llega lista para buscadores y para motores generativos, con datos estructurados, enlazado interno y control de indexabilidad.",
        },
        {
          title: "Monetización con afiliación",
          body: "Reviews y comparativas con seguimiento y afiliación, con la divulgación que exige la normativa integrada en el propio validador.",
        },
      ],
      security: [
        {
          title: "CI con privilegio mínimo",
          body: "La integración continua corre con permisos mínimos y un rol de solo lectura sobre la base de datos: lo que no necesita escribir, no puede.",
        },
        {
          title: "Secretos fuera del repositorio",
          body: "Antes de cada cambio, Secretlint escanea en busca de credenciales, así que ningún secreto acaba en el código.",
        },
        {
          title: "La calidad como puerta de publicación",
          body: "1.297 casos de test y 41 validadores deciden qué sale: si el contenido no cumple, no se publica. Incluye salvaguardas contra el texto pobre y la canibalización.",
        },
        {
          title: "Protección frente a abusos",
          body: "Límites de tasa con Upstash y detección de bots con BotID protegen el sitio y sus endpoints frente al scraping y a usos indebidos.",
        },
      ],
    },
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
