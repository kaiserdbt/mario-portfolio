"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import BrandLink from "@/components/BrandLink";
import { profile } from "@/data/profile";

const navItems = [
  { label: "Capacidades", href: "/services" },
  { label: "Proyectos", href: "/projects" },
  { label: "Sobre mí", href: "/about" },
  { label: "Contacto", href: "/contact" },
];

const linkClass =
  "group relative inline-flex items-center font-heading text-[13px] uppercase tracking-[0.115em] text-accent";

const ctaClass =
  "inline-flex items-center justify-center rounded-xs bg-accent px-4 py-2.5 font-heading text-[13px] uppercase tracking-[0.115em] text-background transition-colors duration-300 hover:bg-accent-2";

const cvClass =
  "inline-flex items-center justify-center rounded-xs border border-accent/25 px-4 py-2.5 font-heading text-[13px] uppercase tracking-[0.115em] text-accent transition-colors duration-300 hover:border-accent/60";

const cvHref = profile.cvUrl;

const brandClass =
  "font-heading text-[26px] font-normal leading-none tracking-[0.02em] text-accent transition-opacity hover:opacity-80";

function Underline() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
    />
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // si cambio de ruta cierro el panel, ajustando estado en render (sin effect)
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* desktop y tablet (>=810): pildora centrada que abraza el cluster, dorada al 5% con blur, como Arik */}
      <div className="hidden w-full justify-center pt-8 min-[810px]:flex">
        <div className="flex items-center gap-8 bg-accent/5 py-3 pl-5 pr-3 backdrop-blur-[30px]">
          <BrandLink className={brandClass} />

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className={linkClass}>
                  {item.label}
                  <Underline />
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a
                href={cvHref}
                download
                target="_blank"
                rel="noopener noreferrer"
                className={cvClass}
              >
                CV
              </a>
              <Link href="/contact" className={ctaClass}>
                Hablemos
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* movil (<810): barra flotante dorada al 5% con blur, hamburguesa y panel desplegable */}
      <div className="relative h-[78px] min-[810px]:hidden">
        <div className="absolute inset-x-6 top-4 bg-accent/5 backdrop-blur-[30px]">
          <div className="flex items-center justify-between py-3 pl-5 pr-3">
            <BrandLink className={brandClass} />

            <div className="flex items-center gap-3">
              <Link href="/contact" className={ctaClass} onClick={() => setOpen(false)}>
                Hablemos
              </Link>

              <button
                type="button"
                aria-label={open ? "Cerrar menú" : "Abrir menú"}
                aria-expanded={open}
                aria-controls="menu-movil"
                onClick={() => setOpen((v) => !v)}
                className="relative h-10 w-10 shrink-0"
              >
                <span
                  className={`absolute left-1/2 h-[1.5px] w-[22px] -translate-x-1/2 bg-accent transition-all duration-300 ease-out ${
                    open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[15px]"
                  }`}
                />
                <span
                  className={`absolute left-1/2 top-1/2 h-[1.5px] w-[22px] -translate-x-1/2 -translate-y-1/2 bg-accent transition-opacity duration-200 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-1/2 h-[1.5px] w-[22px] -translate-x-1/2 bg-accent transition-all duration-300 ease-out ${
                    open ? "top-1/2 -translate-y-1/2 -rotate-45" : "top-[23px]"
                  }`}
                />
              </button>
            </div>
          </div>

          <div
            id="menu-movil"
            className={`grid overflow-hidden transition-all duration-300 ease-out ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <div className="flex flex-col items-center gap-5 px-5 pb-6 pt-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={linkClass}
                    onClick={() => setOpen(false)}
                    tabIndex={open ? 0 : -1}
                  >
                    {item.label}
                    <Underline />
                  </Link>
                ))}
                <a
                  href={cvHref}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${cvClass} w-full`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                >
                  Descargar CV
                </a>
                <Link
                  href="/contact"
                  className={`${ctaClass} w-full`}
                  onClick={() => setOpen(false)}
                  tabIndex={open ? 0 : -1}
                >
                  Hablemos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
