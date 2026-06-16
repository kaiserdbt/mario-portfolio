import Image from "next/image";
import Section from "@/components/Section";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.githubUrl },
  { label: "LinkedIn", href: profile.linkedinUrl },
  { label: "Correo", href: `mailto:${profile.email}` },
];

export default function AboutMe() {
  return (
    <Section id="about" eyebrow="Sobre mí" title="Quién hay detrás">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[300px_1fr] md:items-start">
        <Image
          src="/headshot.jpg"
          alt={profile.name}
          width={300}
          height={300}
          className="w-full max-w-[300px] rounded-2xl border border-border object-cover"
        />

        <div>
          <h3 className="font-display text-3xl font-light tracking-tight sm:text-4xl">
            {profile.name}
          </h3>
          <p className="mt-5 text-lg leading-8 text-muted">{profile.summary}</p>
          <p className="mt-4 text-muted">Desde {profile.location}.</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent/50 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
