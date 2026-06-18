import Image from "next/image";
import { profile } from "@/data/profile";
import { buildMetadata } from "@/lib/seo";
import ContactForm from "@/components/ContactForm";

export const metadata = buildMetadata({
  title: "Contacto",
  description:
    "Hablemos de tu producto. Desarrollador full-stack disponible para incorporación inmediata, en remoto, híbrido o asíncrono.",
  path: "/contact",
});

const portraitMask = {
  maskImage:
    "linear-gradient(to bottom, #000 78%, transparent 100%), linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
  WebkitMaskImage:
    "linear-gradient(to bottom, #000 78%, transparent 100%), linear-gradient(to right, transparent 0%, #000 9%, #000 91%, transparent 100%)",
  maskComposite: "intersect",
  WebkitMaskComposite: "source-in",
} as const;

const channels = [
  {
    label: "GitHub",
    value: "github.com/kaiserdbt",
    href: profile.githubUrl,
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
  {
    label: "LinkedIn",
    value: "in/mariocavaavila",
    href: profile.linkedinUrl,
    icon: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
  },
  {
    label: "Correo",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="mx-auto w-full max-w-[1400px] px-6 pb-24 pt-16 sm:px-8 sm:pt-24">
      <div className="mx-auto grid max-w-[1080px] gap-10 lg:grid-cols-[340px_minmax(0,1fr)] lg:items-start lg:gap-12">
        <div className="relative hidden lg:block">
          <div style={portraitMask}>
            <Image
              src="/about-portrait.png"
              alt={profile.name}
              width={1122}
              height={1402}
              quality={90}
              sizes="340px"
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <div className="rounded-xs border border-accent/15 bg-accent/5 p-7 sm:p-8">
            <p className="font-heading text-[13px] font-normal uppercase tracking-[0.12em] text-accent">
              Contacto
            </p>
            <h1 className="mt-3 font-display font-light leading-[1.15] tracking-[1px] text-accent text-[26px] min-[810px]:text-[32px] min-[1600px]:text-[36px]">
              ¿Buscáis un perfil full-stack con{" "}
              <span className="italic">mentalidad de producto?</span>
            </h1>
            <p className="mt-4 hyphens-auto text-justify font-soft text-[16px] leading-[1.55] text-accent/80">
              Estoy disponible para incorporación inmediata y abierto a
              oportunidades donde pueda aportar desarrollo full-stack, criterio
              técnico y capacidad de ejecución en producto real.
            </p>
            <p className="mt-3 hyphens-auto text-justify font-soft text-[16px] leading-[1.55] text-accent/80">
              Si crees que mi perfil puede encajar en vuestro equipo, cuéntame el
              contexto y te responderé con claridad.
            </p>

            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-3 rounded-xs border border-accent/15 bg-accent/5 px-5 py-3.5 transition-colors duration-300 hover:border-accent/30"
              >
                <span className="flex items-center gap-3">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className="shrink-0 text-accent/70"
                  >
                    {c.icon}
                  </svg>
                  <span className="flex flex-col">
                    <span className="font-heading text-[12px] uppercase tracking-[0.14em] text-accent/60">
                      {c.label}
                    </span>
                    <span className="font-soft text-[14px] text-accent">
                      {c.value}
                    </span>
                  </span>
                </span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                  className="shrink-0 text-accent/50 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
