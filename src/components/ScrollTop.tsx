"use client";

import { useEffect, useState } from "react";

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // aparece cuando ya he pasado de largo el hero (la primera pantalla)
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver al inicio"
      className={`group fixed bottom-6 right-6 z-40 inline-flex items-center gap-3 rounded-full border border-accent/20 bg-background/70 py-1.5 pl-1.5 pr-4 backdrop-blur-sm transition-all duration-300 hover:border-accent/40 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/10">
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5"
          aria-hidden
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </span>
      <span className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
        Inicio
      </span>
    </button>
  );
}
