import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectImage from "@/components/home/ProjectImage";
import type { Project } from "@/data/projects";

export default function ProjectGallery({
  project,
  gallery,
  tone,
}: {
  project: Project;
  gallery: string[];
  tone: "cream" | "deep";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Gallery" title="A closer look" />
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={(i % 2) * 0.08}>
              <div
                className={`group relative aspect-[4/3] overflow-hidden rounded-3xl border-2 border-vednavy bg-vedcreamdeep shadow-hard ${
                  i % 2 ? "rotate-[0.8deg]" : "-rotate-[0.8deg]"
                }`}
              >
                <ProjectImage
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  label={project.title}
                  fallback="bg-vedpink"
                  sizes="(min-width: 640px) 45vw, 90vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}