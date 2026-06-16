import { profile } from "@/data/profile";

export default function ContactCta() {
  return (
    <section id="contact" className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-8">
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface px-8 py-20 text-center sm:px-16">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[300px] w-[600px] max-w-full -translate-x-1/2 rounded-full opacity-40 blur-[110px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(218,197,167,0.22), transparent)",
          }}
        />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            ¿Hablamos?
          </p>
          <h2 className="mt-4 font-display text-4xl font-light leading-tight tracking-tight sm:text-6xl">
            Construyamos algo
            <span className="italic text-accent"> juntos.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted">
            {profile.available
              ? "Estoy abierto a nuevas oportunidades. La forma más rápida de contactarme es por correo."
              : "La forma más rápida de contactarme es por correo."}
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-9 inline-block rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {profile.email}
          </a>
        </div>
      </div>
    </section>
  );
}
