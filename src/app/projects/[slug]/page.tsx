import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Section from "@/components/Section";
import LockIcon from "@/components/LockIcon";
import ContactCta from "@/components/ContactCta";
import { getProject, projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return buildMetadata({
    title: project.title,
    description: project.tagline,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Section>
        <Link href="/#work" className="text-sm text-muted hover:text-foreground">
          ← Volver a proyectos
        </Link>

      <header className="mt-6 max-w-2xl">
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>
            {project.role} · {project.year}
          </span>
          {project.repoPrivate && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-2.5 py-0.5 text-xs">
              <LockIcon />
              Repo privado
            </span>
          )}
        </div>
        <h1 className="mt-3 font-display text-5xl font-light tracking-tight sm:text-6xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted">{project.summary}</p>
        {project.links[0] && (
          <a
            href={project.links[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {project.links[0].label}
            <span aria-hidden>↗</span>
          </a>
        )}
      </header>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border">
        <Image
          src={project.image}
          alt={`Captura del producto ${project.title}`}
          width={1200}
          height={750}
          className="w-full object-cover"
          priority
        />
      </div>

      {project.metrics.length > 0 && (
        <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="text-sm text-muted">{metric.label}</dt>
              <dd className="mt-1 font-display text-3xl font-light tracking-tight">
                {metric.value}
              </dd>
            </div>
          ))}
        </dl>
      )}

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-[2fr_1fr]">
        <div>
          <h2 className="font-display text-2xl font-light tracking-tight">
            Aspectos destacados
          </h2>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-muted">
                <span aria-hidden className="text-accent">
                  ·
                </span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="space-y-6">
          <div>
            <h2 className="font-heading text-sm font-light uppercase tracking-widest text-muted">
              Stack
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {project.links.length > 1 && (
            <div>
              <h2 className="font-heading text-sm font-light uppercase tracking-widest text-muted">
                Enlaces
              </h2>
              <ul className="mt-3 space-y-2">
                {project.links.slice(1).map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-accent hover:underline"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {link.label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
      </Section>
      <ContactCta />
    </>
  );
}
