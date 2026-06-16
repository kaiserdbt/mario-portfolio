import Link from "next/link";
import BrandLink from "@/components/BrandLink";

const navItems = [
  { label: "Proyectos", href: "/#work" },
  { label: "Proceso", href: "/#process" },
  { label: "Sobre mí", href: "/#about" },
  { label: "Contacto", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-accent/10 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] w-full max-w-[1400px] items-center justify-between px-6 sm:px-8">
        <BrandLink className="font-soft text-[22px] font-light leading-none tracking-[-0.01em] text-accent transition-opacity hover:opacity-80" />

        <nav className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-center font-heading text-[13px] uppercase tracking-[0.115em] text-accent"
            >
              {item.label}
              <span
                aria-hidden
                className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
              />
            </Link>
          ))}
        </nav>

        <Link
          href="/#contact"
          className="rounded-full border border-accent/40 px-5 py-2 font-heading text-[13px] uppercase tracking-[0.115em] text-accent transition-colors duration-300 hover:bg-accent hover:text-background"
        >
          Hablemos
        </Link>
      </div>
    </header>
  );
}
