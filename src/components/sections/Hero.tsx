import { ArrowDownRight, FileText, Mail } from "lucide-react";
import { profile } from "@/content/site";
import { Container, buttonStyles } from "@/components/ui/primitives";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden border-b border-line">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative grid gap-14 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-[1fr_20rem] lg:items-end lg:gap-16">
        <div>
          <p className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-muted">
            <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
            {profile.title}
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-[2.6rem] leading-[1.02] font-semibold tracking-[-0.03em] text-fg sm:text-6xl lg:text-7xl"
          >
            John Benedict
            <br />
            C. Pantalla
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">{profile.intro}</p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className={buttonStyles.primary}>
              View projects
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <a href="#contact" className={buttonStyles.secondary}>
              <Mail className="size-4" aria-hidden="true" />
              Contact
            </a>
            {profile.resume ? (
              <a href={profile.resume} className={buttonStyles.secondary}>
                <FileText className="size-4" aria-hidden="true" />
                Résumé
              </a>
            ) : (
              <span
                className={`${buttonStyles.secondary} cursor-not-allowed border-dashed text-subtle hover:border-line-strong hover:bg-transparent`}
                aria-disabled="true"
              >
                <FileText className="size-4" aria-hidden="true" />
                Résumé <span className="font-mono text-[0.68rem] uppercase tracking-wider">soon</span>
              </span>
            )}
          </div>

          <ul className="mt-8 flex items-center gap-1" aria-label="Profiles">
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles.ghost}
              >
                <GitHubIcon />
                <span>GitHub</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles.ghost}
              >
                <LinkedInIcon />
                <span>LinkedIn</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <dl className="rounded-lg border border-line bg-surface/80 font-mono text-xs backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-line px-5 py-3 text-subtle">
              <span className="uppercase tracking-[0.16em]">Profile</span>
              <span aria-hidden="true">REV 2026</span>
            </div>
            <Spec term="Institution" value={profile.school} />
            <Spec term="Program" value={profile.degree} />
            <Spec term="Graduation" value={profile.graduation} />
            <div className="px-5 py-4">
              <dt className="uppercase tracking-[0.14em] text-subtle">Focus</dt>
              <dd className="mt-3">
                <ul className="space-y-1.5 font-sans text-sm text-fg">
                  {profile.focus.map((f) => (
                    <li key={f} className="flex items-center gap-2.5">
                      <span className="h-px w-3 bg-signal" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}

function Spec({ term, value }: { term: string; value: string }) {
  return (
    <div className="border-b border-line px-5 py-4">
      <dt className="uppercase tracking-[0.14em] text-subtle">{term}</dt>
      <dd className="mt-1.5 font-sans text-sm text-fg">{value}</dd>
    </div>
  );
}
