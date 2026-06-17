import { profile } from "@/data/profile";

export default function ContactCta() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1400px] px-6 py-32 sm:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-heading text-[16px] uppercase tracking-[0.18em] text-accent">
          ¿Hablamos?
        </p>
        <h2 className="mt-5 font-display text-[40px] font-light leading-[1.1] text-accent sm:text-[64px]">
          Construyamos algo
          <span className="italic"> juntos.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-soft text-[18px] leading-relaxed text-accent">
          {profile.available
            ? "Estoy abierto a nuevas oportunidades. La forma más rápida de contactarme es por correo."
            : "La forma más rápida de contactarme es por correo."}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-10 inline-block rounded-[2px] bg-accent px-8 py-4 text-[18px] font-medium text-background transition-opacity hover:opacity-90"
        >
          {profile.email}
        </a>
      </div>
    </section>
  );
}
