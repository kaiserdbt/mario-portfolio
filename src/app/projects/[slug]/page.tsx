import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
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

  // el stack tecnico es la union real de lo que uso en cada capa, sin duplicados
  const techStack = project.deepDive
    ? [...new Set(project.deepDive.build.flatMap((area) => area.stack))]
    : project.stack;

  return (
    <>
      <section className="mx-auto w-full max-w-[1400px] px-6 pt-16 sm:px-8 sm:pt-24">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2.5 font-heading text-[13px] uppercase tracking-[0.115em] text-accent transition-colors hover:text-accent-2"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/10">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-x-0.5"
              aria-hidden
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </span>
          Volver a proyectos
        </Link>

        <div className="mx-auto mt-10 max-w-4xl text-center">
          <h1 className="font-display text-[56px] font-light leading-[1.1] text-accent min-[810px]:text-[80px] xl:text-[96px]">
            {project.title}
          </h1>
          <p className="mx-auto mt-6 max-w-[600px] font-soft text-[18px] font-light leading-[1.5] text-accent min-[810px]:text-[22px] min-[810px]:leading-[33px]">
            {project.tagline}
          </p>
        </div>

        <dl className="mx-auto mt-10 grid max-w-[1000px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {project.meta.map((item) => (
            <div key={item.label} className="rounded-xs bg-accent/5 p-4 text-center">
              <dt className="font-heading text-[13px] uppercase tracking-[1.5px] text-accent/60">
                {item.label}
              </dt>
              <dd className="mt-2 font-heading text-[13px] uppercase tracking-[1.5px] text-accent">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        {(project.links[0] || project.repoPrivate) && (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
            {project.links[0] && (
              <a
                href={project.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 font-heading text-[13px] uppercase tracking-[0.115em] text-accent transition-colors hover:text-accent-2"
              >
                {project.links[0].label}
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent/30 transition-colors duration-300 group-hover:border-accent/60 group-hover:bg-accent/10">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  >
                    <path d="M7 17 17 7M7 7h10v10" />
                  </svg>
                </span>
              </a>
            )}
            {project.repoPrivate && (
              <span className="inline-flex items-center gap-2 font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
                <LockIcon />
                Repo privado
              </span>
            )}
          </div>
        )}

        <div className="mx-auto mt-12 w-full max-w-[935px] overflow-hidden rounded-xs border border-accent/20">
          <Image
            src={project.image}
            alt={`Captura del producto ${project.title}`}
            width={project.imageWidth}
            height={project.imageHeight}
            sizes="(max-width: 935px) 92vw, 935px"
            quality={95}
            className="w-full"
            priority
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-8 sm:py-20">
        <p className="mx-auto max-w-4xl text-balance text-center font-soft text-[18px] leading-[1.7] text-accent min-[810px]:text-[20px]">
          {project.summary}
        </p>

        {project.metrics.length > 0 && (
          <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="text-center">
                <dd className="font-display text-[28px] font-light leading-none text-accent sm:text-[32px]">
                  {metric.value}
                </dd>
                <dt className="mt-2 font-heading text-[11px] uppercase tracking-[0.12em] text-accent/60">
                  {metric.label}
                </dt>
              </div>
            ))}
          </dl>
        )}
      </section>

      {project.deepDive ? (
        <>
          <section className="mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
            <div className="mx-auto max-w-4xl text-center">
              <p className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
                Cómo está construido
              </p>
              <p className="mt-5 text-balance font-soft text-[18px] leading-[1.7] text-accent/80 min-[810px]:text-[20px]">
                {project.deepDive.intro}
              </p>
            </div>
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {project.deepDive.build.map((area) => (
                <article
                  key={area.area}
                  className="flex h-full flex-col rounded-xs border border-accent/15 bg-accent/5 p-6 sm:p-8"
                >
                  <h3 className="font-display text-[22px] font-light leading-tight text-accent">
                    {area.area}
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {area.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-xs bg-accent/10 px-2.5 py-1 font-soft text-[14px] leading-none text-accent"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 font-soft text-[17px] leading-[1.6] text-accent/80">
                    {area.body}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {area.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2.5 font-soft text-[16px] leading-[1.55] text-accent"
                      >
                        <span
                          aria-hidden
                          className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
            <p className="text-center font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
              Funciones clave
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.deepDive.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xs border border-accent/15 bg-accent/5 p-6"
                >
                  <h3 className="font-heading text-[14px] uppercase tracking-[0.12em] text-accent">
                    {feature.title}
                  </h3>
                  <p className="mt-2.5 font-soft text-[17px] leading-[1.6] text-accent/80">
                    {feature.body}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
            <p className="text-center font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
              Seguridad
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.deepDive.security.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xs border border-accent/15 bg-accent/5 p-6"
                >
                  <h3 className="font-heading text-[14px] uppercase tracking-[0.12em] text-accent">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 font-soft text-[17px] leading-[1.6] text-accent/80">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        project.highlights.length > 0 && (
          <section className="mx-auto w-full max-w-[1400px] px-6 py-12 sm:px-8 sm:py-16">
            <p className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
              Aspectos destacados
            </p>
            <ul className="mt-6 max-w-3xl space-y-3.5">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 font-soft text-[16px] leading-[1.6] text-accent/80"
                >
                  <span
                    aria-hidden
                    className="mt-[10px] h-1 w-1 shrink-0 rounded-full bg-accent"
                  />
                  {highlight}
                </li>
              ))}
            </ul>
          </section>
        )
      )}

      <section className="mx-auto w-full max-w-[1400px] px-6 pb-20 pt-8 text-center sm:px-8 sm:pb-24">
        <p className="font-heading text-[13px] uppercase tracking-[0.115em] text-accent">
          Stack técnico
        </p>
        <ul className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2.5 sm:gap-3">
          {techStack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-accent/20 bg-accent/5 px-4 py-2 font-soft text-[14px] leading-none text-accent transition-colors duration-300 hover:border-accent/40 hover:bg-accent/10 sm:px-5 sm:py-2.5 sm:text-[15px]"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
      <ContactCta />
    </>
  );
}
