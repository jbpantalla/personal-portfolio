import { profile } from "@/content/site";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/Reveal";

const facts = [
  { term: "Studying", value: `${profile.degree}, ${profile.school}` },
  { term: "Graduating", value: "October 2027 (expected)" },
  { term: "Thesis", value: "VERDE: sensor–vision fusion for hydroponics" },
  { term: "Leadership", value: "Computer Engineering Organization officer, 2024–2026" },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line py-24 sm:py-32">
      <Container>
        <SectionHeading id="about-title" index="03" label="About" title="Engineering across the stack" />
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <Reveal className="space-y-5 text-[1.05rem] leading-relaxed text-muted">
            <p>
              I&rsquo;m a Computer Engineering student at FEU Institute of Technology. I like working where
              software meets hardware: training computer-vision models, connecting sensors to
              microcontrollers, and building the web applications that tie those systems together.
            </p>
            <p>
              My thesis team built <span className="text-fg">VERDE</span>, a hydroponic monitoring system that
              combines a YOLOv8 plant-condition model with sensor-based water-quality classification. My part
              covered dataset collection, image annotation and model training. On the web side, I handled the
              backend and database for a full-stack campus lost-and-found platform.
            </p>
            <p>
              Outside coursework, I&rsquo;ve served the Computer Engineering Organization as Auditor and as Vice
              President – Internal, and I&rsquo;ve volunteered as a competition official for Flouw Robotics.
            </p>
          </Reveal>
          <Reveal>
            <dl className="divide-y divide-line border-y border-line">
              {facts.map((f) => (
                <div key={f.term} className="grid grid-cols-[7rem_1fr] gap-4 py-4">
                  <dt className="pt-0.5 font-mono text-xs uppercase tracking-[0.14em] text-subtle">{f.term}</dt>
                  <dd className="text-[0.95rem] text-fg">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
