import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getProject, projects } from "@/content/projects";
import { Container, Tag, buttonStyles } from "@/components/ui/primitives";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.summary } : {};
}

// Interim project page: verified overview only. The full case study is planned for Phase 3.
export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const project = getProject((await params).slug);
  if (!project) notFound();

  return (
    <Container className="py-16 sm:py-24">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
        <ArrowLeft className="size-4" aria-hidden="true" />
        All projects
      </Link>

      <article className="mt-10 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">
          <span className="text-signal">{project.category}</span> · {project.context}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">{project.title}</h1>
        <p className="mt-3 text-lg text-fg/85">{project.subtitle}</p>
        <p className="mt-8 text-[1.05rem] leading-relaxed text-muted">{project.summary}</p>

        {project.role && (
          <p className="mt-6 text-sm text-muted">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">My role </span>
            <span className="text-fg/90">{project.role}</span>
          </p>
        )}

        {project.metrics && (
          <figure className="mt-10">
            <dl className="grid grid-cols-1 divide-y divide-line rounded-lg border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse justify-end p-5">
                  <dt className="mt-1.5 text-sm text-muted">{m.label}</dt>
                  <dd className="font-mono text-2xl font-medium text-fg">{m.value}</dd>
                </div>
              ))}
            </dl>
            <figcaption className="mt-3 text-xs leading-relaxed text-subtle">{project.metricsNote}</figcaption>
          </figure>
        )}

        {project.proposed && (
          <p id="stack-label" className="mt-10 font-mono text-xs uppercase tracking-[0.14em] text-subtle">
            Proposed technologies
          </p>
        )}
        <ul
          className={`${project.proposed ? "mt-2" : "mt-10"} flex flex-wrap gap-1.5`}
          aria-label={project.proposed ? undefined : "Technologies"}
          aria-labelledby={project.proposed ? "stack-label" : undefined}
        >
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </ul>

        {project.links.length > 0 && (
          <div className="mt-10 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className={buttonStyles.secondary}>
                {l.label}
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ))}
          </div>
        )}

        <p className="mt-14 rounded-lg border border-dashed border-line-strong p-5 text-sm text-muted">
          A detailed case study for this project, covering architecture, process and outcomes, is in
          preparation.
        </p>
      </article>
    </Container>
  );
}
