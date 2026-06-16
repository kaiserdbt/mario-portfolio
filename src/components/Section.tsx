import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section id={id} className="mx-auto w-full max-w-[1400px] px-6 py-24 sm:px-8">
      {(eyebrow || title || description) && (
        <header className="mb-12 max-w-2xl">
          {eyebrow && (
            <p className="flex items-center gap-2.5 font-heading text-[13px] font-normal uppercase tracking-[0.12em] text-accent">
              <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="mt-4 font-display font-light tracking-[1px] text-accent text-[32px] leading-[1.1] min-[810px]:text-[40px] min-[810px]:leading-[1.2] min-[1600px]:text-[48px] min-[1600px]:leading-[1.3]">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg font-light leading-8 text-accent/80">{description}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
