import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/content/site";
import { Container, buttonStyles } from "@/components/ui/primitives";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line py-24 sm:py-32">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <Container className="relative">
        <Reveal>
          <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-subtle">
            <span className="text-signal">06</span>
            <span className="h-px w-8 bg-line-strong" aria-hidden="true" />
            Contact
          </p>
          <h2 id="contact-title" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
            Let&rsquo;s build something that works in the real world.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted">
            I&rsquo;m open to internships, collaborations and conversations about AI, IoT and embedded systems.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="group mt-10 inline-flex max-w-full items-center gap-3 border-b border-line-strong pb-2 font-mono text-lg break-all text-fg transition-colors hover:border-signal sm:text-2xl"
          >
            <Mail className="size-5 shrink-0 text-signal" aria-hidden="true" />
            {profile.email}
            <ArrowUpRight
              className="size-5 shrink-0 text-subtle transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-fg"
              aria-hidden="true"
            />
          </a>

          <ul className="mt-10 flex flex-wrap gap-3" aria-label="Profiles">
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className={buttonStyles.secondary}>
                <GitHubIcon />
                GitHub
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={buttonStyles.secondary}>
                <LinkedInIcon />
                LinkedIn
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
