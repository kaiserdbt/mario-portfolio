import Link from "next/link";
import { profile } from "@/data/profile";

const columns = [
  {
    title: "Navegación",
    links: [
      { label: "Proyectos", href: "/#work" },
      { label: "Proceso", href: "/#process" },
      { label: "Sobre mí", href: "/#about" },
      { label: "Contacto", href: "/#contact" },
    ],
  },
  {
    title: "Proyectos",
    links: [
      { label: "Marai Agenda", href: "/projects/marai-agenda" },
      { label: "Olunae", href: "/projects/olunae" },
      { label: "Qoniar", href: "/projects/qoniar" },
    ],
  },
];

const socials = [
  { label: "GitHub", href: profile.githubUrl },
  { label: "LinkedIn", href: profile.linkedinUrl },
  { label: "Correo", href: `mailto:${profile.email}` },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-10 px-6 py-16 sm:px-8 md:grid-cols-4">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="font-mono text-sm font-semibold tracking-tight">
            mariocava<span className="text-accent">.</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-muted">{profile.role}</p>
        </div>

        {columns.map((col) => (
          <nav key={col.title}>
            <h3 className="font-heading text-xs font-light uppercase tracking-[0.18em] text-muted">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <nav>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
            Redes
          </h3>
          <ul className="mt-4 space-y-2.5">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-accent"
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-6 py-6 sm:px-8">
          <p className="text-xs text-muted">
            © {year} {profile.name}
          </p>
          <a
            href="#"
            className="font-mono text-xs uppercase tracking-[0.18em] text-muted transition-colors hover:text-foreground"
          >
            Subir ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
