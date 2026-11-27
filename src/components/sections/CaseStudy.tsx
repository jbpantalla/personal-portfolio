import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudyFigure, CaseStudySection } from "@/content/projects";

// Article column is max-w-3xl (48rem).
const ARTICLE_SIZES = "(min-width: 48rem) 48rem, 100vw";

function Caption({ figure }: { figure: CaseStudyFigure }) {
  return (
    <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-xs leading-relaxed text-subtle">
      <span>{figure.caption}</span>
      <a
        href={figure.src}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-muted underline decoration-line-strong underline-offset-4 hover:text-fg"
      >
        View full size
        <span className="sr-only"> of the {figure.name} (opens in a new tab)</span>
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      </a>
    </figcaption>
  );
}

function Figure({ figure }: { figure: CaseStudyFigure }) {
  if (figure.diagram) {
    return (
      <figure className="mt-8">
        <p className="mb-2 text-xs text-subtle md:hidden" aria-hidden="true">
          Scroll sideways to see the full diagram.
        </p>
        {/* Below 40rem the diagram's labels get too small, so it keeps that minimum width and scrolls sideways. */}
        <div
          role="region"
          aria-label={`${figure.caption} Scrolls sideways on narrow screens.`}
          tabIndex={0}
          className={`overflow-x-auto rounded-lg border border-line p-3 sm:p-5 ${figure.dark ? "bg-surface" : "bg-white"}`}
        >
          <Image
            src={figure.src}
            width={figure.width}
            height={figure.height}
            alt={figure.alt}
            sizes="(min-width: 48rem) 48rem, 40rem"
            className="h-auto w-full min-w-[40rem]"
          />
        </div>
        <Caption figure={figure} />
      </figure>
    );
  }

  return (
    <figure className={`mt-8 ${figure.narrow ? "mx-auto max-w-sm" : ""}`}>
      <Image
        src={figure.src}
        width={figure.width}
        height={figure.height}
        alt={figure.alt}
        sizes={figure.narrow ? "24rem" : ARTICLE_SIZES}
        className="h-auto w-full rounded-lg border border-line"
      />
      <Caption figure={figure} />
    </figure>
  );
}

function List({ section: s }: { section: CaseStudySection }) {
  if (!s.list) return null;
  return (
    <>
      {s.listTitle && (
        <h3 className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-subtle">{s.listTitle}</h3>
      )}
      <ul className="mt-4 list-disc space-y-2.5 pl-5 text-[0.98rem] leading-relaxed text-muted marker:text-signal-dim">
        {s.list.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export function CaseStudy({ sections }: { sections: CaseStudySection[] }) {
  return (
    <div className="mt-20 space-y-16 sm:space-y-20">
      {sections.map((s, i) => (
        <section key={s.id} aria-labelledby={s.id}>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal" aria-hidden="true">
            {String(i + 1).padStart(2, "0")}
          </p>
          <h2 id={s.id} className="mt-2 scroll-mt-24 text-2xl font-semibold tracking-tight text-fg sm:text-3xl">
            {s.title}
          </h2>

          {s.paragraphs?.map((p) => (
            <p key={p} className="mt-4 text-[1.02rem] leading-relaxed text-muted">
              {p}
            </p>
          ))}

          {s.listFirst && <List section={s} />}

          {s.figures?.map((f) => <Figure key={f.src} figure={f} />)}

          {s.facts && (
            <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
              {s.facts.map((f) => (
                <div key={f.label} className="bg-bg p-5">
                  <dt className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-subtle">{f.label}</dt>
                  <dd className="mt-2 font-mono text-xl font-medium text-fg">{f.value}</dd>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{f.detail}</dd>
                </div>
              ))}
            </dl>
          )}

          {!s.listFirst && <List section={s} />}
        </section>
      ))}
    </div>
  );
}
