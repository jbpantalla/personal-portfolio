import { Code2, Cpu, Layers, Wrench } from "lucide-react";
import { skillGroups } from "@/content/profile-data";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const groupIcons = [Code2, Layers, Wrench, Cpu];

export function Toolkit() {
  return (
    <section id="toolkit" aria-labelledby="toolkit-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="toolkit-title" index="02" label="Technical toolkit" title="Tools I build with" />
        <Reveal>
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g, i) => {
              const Icon = groupIcons[i];
              return (
                <div key={g.label} className="bg-bg p-6 sm:p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-subtle">{g.label}</h3>
                    <Icon className="size-4 text-signal" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <ul className="mt-6 space-y-2.5">
                    {g.items.map((item) => (
                      <li key={item} className="text-[0.95rem] text-fg">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
