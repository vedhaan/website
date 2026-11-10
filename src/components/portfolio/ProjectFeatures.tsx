import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

export default function ProjectFeatures({
  features,
  tone,
}: {
  features: NonNullable<Project["features"]>;
  tone: "cream" | "deep";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Highlights" title="What makes it work" />
        </Reveal>

        <div className="mt-14 border-y-2 border-vednavy">
          {features.map((f, i) => (
            <Reveal key={f.title}>
              <div className="group grid gap-4 border-b-2 border-vednavy px-2 py-8 transition-colors duration-300 hover:bg-vedorange/25 sm:px-6 md:grid-cols-12 md:items-center md:gap-8">
                <span
                  aria-hidden="true"
                  className="font-display text-6xl font-extrabold leading-none text-transparent transition-colors duration-300 [-webkit-text-stroke:2px_#0f0f1a] group-hover:text-vedorange md:col-span-2 md:text-7xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-2xl font-extrabold md:col-span-4">
                  {f.title}
                </h3>
                <p className="text-base leading-relaxed text-vednavy/80 md:col-span-6">
                  {f.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}