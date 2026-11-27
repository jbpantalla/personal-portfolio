import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Droplets, Leaf, Search, ShieldCheck } from "lucide-react";
import type { Project } from "@/content/projects";
import { ImagePlaceholder, Tag } from "./primitives";

const icons: Record<string, typeof Leaf> = {
  verde: Leaf,
  "campus-lost-and-found": Search,
  "water-quality-control": Droplets,
  "heras-shield": ShieldCheck,
  "ethically-me": BookOpen,
};

function Visual({ project, className }: { project: Project; className: string }) {
  if (project.image) {
    return (
      <div
        className={`relative overflow-hidden rounded-lg border border-line ${className}`}
        style={{ backgroundColor: project.image.background }}
      >
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-contain"
        />
      </div>
    );
  }
  const Icon = icons[project.slug] ?? Leaf;
  return (
    <ImagePlaceholder
      label={project.title}
      icon={<Icon className="size-7" strokeWidth={1.25} />}
      className={className}
    />
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
      <Link
        href={`/projects/${project.slug}`}
        className="group/link inline-flex items-center gap-1.5 font-medium text-fg"
      >
        Project details
        <ArrowUpRight
          className="size-4 text-signal transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          aria-hidden="true"
        />
        <span className="sr-only">for {project.title}</span>
      </Link>
      {project.links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted underline decoration-line-strong underline-offset-4 transition-colors hover:text-fg hover:decoration-fg"
        >
          {l.label}
          <span className="sr-only"> for {project.title} (opens in a new tab)</span>
        </a>
      ))}
    </div>
  );
}

function Meta({ project }: { project: Project }) {
  return (
    <p className="flex flex-col gap-1 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-subtle">
      <span className="text-signal">{project.category}</span>
      <span>{project.context}</span>
    </p>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
      <div className="grid gap-0 lg:grid-cols-[1.15fr_1fr]">
        <div className="p-6 sm:p-10">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal-dim px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-signal">
            Featured project
          </p>
          <Meta project={project} />
          <h3 className="mt-3 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">{project.title}</h3>
          <p className="mt-2 max-w-lg text-base text-fg/85">{project.subtitle}</p>
          <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted">{project.summary}</p>
          {project.role && (
            <p className="mt-5 text-sm text-muted">
              <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">My role </span>
              <span className="text-fg/90">{project.role}</span>
            </p>
          )}
          <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
            {project.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </ul>
          <Links project={project} />
        </div>

        <div className="flex flex-col gap-4 border-t border-line p-6 sm:p-10 lg:border-t-0 lg:border-l">
          <Visual project={project} className="aspect-[4/3] w-full lg:aspect-auto lg:flex-1" />
          {project.metrics && (
            <figure>
              {/* Stacked below sm: three columns leave ~46px per value at 320px, too narrow for "96.67%". */}
              <dl className="grid grid-cols-1 divide-y divide-line rounded-lg border border-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {project.metrics.map((m) => (
                  <div key={m.label} className="flex flex-col-reverse justify-end px-3 py-4 sm:px-4">
                    <dt className="mt-1.5 text-[0.72rem] leading-snug text-muted">{m.label}</dt>
                    <dd className="font-mono text-xl font-medium text-fg sm:text-2xl">{m.value}</dd>
                  </div>
                ))}
              </dl>
              {(project.cardMetricsNote ?? project.metricsNote) && (
                <figcaption className="mt-3 text-xs leading-relaxed text-subtle">
                  {project.cardMetricsNote ?? project.metricsNote}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </div>
    </article>
  );
}

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition-colors duration-300 hover:border-line-strong sm:p-6">
      <Visual project={project} className="aspect-[2/1] w-full" />
      <div className="mt-6 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-4">
          <Meta project={project} />
          <span className="font-mono text-xs text-subtle" aria-hidden="true">
            {String(index).padStart(2, "0")}
          </span>
        </div>
        <h3 className="mt-3 text-xl font-semibold tracking-tight text-fg sm:text-2xl">{project.title}</h3>
        <p className="mt-1 text-sm text-fg/80">{project.subtitle}</p>
        <p className="mt-4 text-[0.92rem] leading-relaxed text-muted">{project.summary}</p>
        {project.role && (
          <p className="mt-4 text-sm text-muted">
            <span className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">My role </span>
            <span className="text-fg/90">{project.role}</span>
          </p>
        )}
        {project.proposed && (
          <p id={`${project.slug}-stack`} className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-subtle">
            Proposed technologies
          </p>
        )}
        <ul
          className={`${project.proposed ? "mt-2" : "mt-5"} flex flex-wrap gap-1.5`}
          aria-label={project.proposed ? undefined : "Technologies"}
          aria-labelledby={project.proposed ? `${project.slug}-stack` : undefined}
        >
          {project.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </ul>
        <div className="mt-auto">
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}
