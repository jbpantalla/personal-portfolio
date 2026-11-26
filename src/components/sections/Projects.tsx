import { projects } from "@/content/projects";
import { Container, SectionHeading } from "@/components/ui/primitives";
import { FeaturedProjectCard, ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" aria-labelledby="projects-title" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          id="projects-title"
          index="01"
          label="Selected work"
          title="Projects"
          intro="Systems I have helped design and build across machine learning, IoT, embedded hardware and the web."
        />
        {featured && (
          <Reveal>
            <FeaturedProjectCard project={featured} />
          </Reveal>
        )}
        <ul className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p, i) => (
            <li key={p.slug}>
              <Reveal className="h-full">
                <ProjectCard project={p} index={i + 2} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
