import { experience } from "@/content/profile-data";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="experience-title" index="04" label="Experience" title="Leadership and service" />
        <ol className="space-y-6">
          {experience.map((entry) => (
            <li key={entry.org}>
              <Reveal>
                <div className="grid gap-6 rounded-xl border border-line bg-surface p-6 sm:p-8 md:grid-cols-[16rem_1fr]">
                  <h3 className="text-lg font-semibold tracking-tight text-fg">{entry.org}</h3>
                  <ol className="relative space-y-6 border-l border-line pl-6">
                    {entry.roles.map((role) => (
                      <li key={role.title} className="relative">
                        <span
                          className="absolute top-2 -left-[1.6rem] size-2 rounded-full border border-signal bg-bg"
                          aria-hidden="true"
                        />
                        <p className="text-base font-medium text-fg">{role.title}</p>
                        <p className="mt-1 font-mono text-xs text-subtle">{role.period}</p>
                        {role.details?.length ? (
                          <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-muted">
                            {role.details.map((d) => (
                              <li key={d}>{d}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="mt-3 text-sm text-subtle italic">Responsibilities to be added.</p>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
