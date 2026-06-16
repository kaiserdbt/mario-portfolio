"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

export default function BrandLink({ className }: { className?: string }) {
  const pathname = usePathname();

  // en la home no navego: subo al top con scroll suave (aunque el hash ya sea #inicio,
  // que es justo el caso donde un <a href> no vuelve a disparar el scroll)
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", "/");
  };

  return (
    <Link
      href="/#inicio"
      aria-label="Volver al inicio"
      onClick={handleClick}
      className={className}
    >
      mariocava.
    </Link>
  );
}
