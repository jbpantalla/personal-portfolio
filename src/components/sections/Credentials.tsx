import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { awards, certifications, training } from "@/content/profile-data";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

export function Credentials() {
  return (
    <section id="credentials" aria-labelledby="credentials-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="credentials-title" index="05" label="Credentials" title="Certifications and awards" />

        <Reveal>
          <h3 className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-subtle">
            <Award className="size-4 text-signal" strokeWidth={1.5} aria-hidden="true" />
            Awards
          </h3>
          <ul className="mt-5 grid gap-4 md:grid-cols-3">
            {awards.map((a) => (
              <li key={a.event} className="rounded-xl border border-line bg-surface p-6">
                <p className="text-xl font-semibold tracking-tight text-fg">{a.title}</p>
                <p className="mt-2 text-[0.95rem] text-fg/85">{a.event}</p>
                <p className="mt-1 font-mono text-xs text-subtle">{a.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-2">
          <Reveal>
            <List icon={<BadgeCheck className="size-4 text-signal" strokeWidth={1.5} />} title="Certifications" items={certifications} />
          </Reveal>
          <Reveal>
            <List icon={<GraduationCap className="size-4 text-signal" strokeWidth={1.5} />} title="Training" items={training} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function List({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <>
      <h3 className="flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.16em] text-subtle">
        <span aria-hidden="true">{icon}</span>
        {title}
      </h3>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {items.map((item) => (
          <li key={item} className="py-3.5 text-[0.95rem] text-fg">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
