import Link from "next/link";
import { profile } from "@/data/profile";

const navLinks = [
  { label: "Servicios", href: "/services" },
  { label: "Proyectos", href: "/#work" },
  { label: "Sobre mí", href: "/#about" },
  { label: "Contacto", href: "/#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: profile.githubUrl,
    icon: (
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    ),
  },
  {
    label: "LinkedIn",
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
    href: `mailto:${profile.email}`,
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-9 px-6 py-20 text-center sm:px-8">
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/"
            className="font-display text-[28px] font-light tracking-tight text-accent"
          >
            mariocava<span className="text-accent-2">.</span>
          </Link>
          <p className="font-soft text-[18px] text-muted">
            Ingeniero de software full-stack
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-heading text-[14px] uppercase tracking-[0.14em] text-accent/80 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-center gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={
                social.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/25 text-accent/70 transition-colors duration-300 hover:border-accent/60 hover:text-accent"
            >
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
              >
                {social.icon}
              </svg>
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto w-full max-w-[1400px] px-6 py-6 text-center font-soft text-[13px] text-muted sm:px-8">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}
