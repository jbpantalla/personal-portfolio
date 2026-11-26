import type { ReactNode } from "react";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  id,
  index,
  label,
  title,
  intro,
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="mb-10 sm:mb-14">
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
        <span className="text-signal">{index}</span>
        <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
        {label}
      </p>
      <h2 id={id} className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <li className="rounded border border-line bg-raised/60 px-2 py-1 font-mono text-[0.72rem] leading-none text-muted">
      {children}
    </li>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium transition-colors duration-200";

export const buttonStyles = {
  primary: `${base} bg-signal text-bg hover:bg-[#7ee0aa]`,
  secondary: `${base} border border-line-strong text-fg hover:border-subtle hover:bg-raised`,
  ghost: `${base} px-2.5 text-muted hover:text-fg`,
};

/** Labeled stand-in shown until real project imagery is added. */
export function ImagePlaceholder({
  label,
  icon,
  className = "",
}: {
  label: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label}: project image placeholder`}
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-lg border border-line bg-surface ${className}`}
    >
      <div className="bg-grid-fine absolute inset-0 opacity-70" aria-hidden="true" />
      <div className="relative text-subtle" aria-hidden="true">
        {icon}
      </div>
      <p className="relative font-mono text-[0.68rem] uppercase tracking-[0.16em] text-subtle">
        Project imagery pending
      </p>
    </div>
  );
}
