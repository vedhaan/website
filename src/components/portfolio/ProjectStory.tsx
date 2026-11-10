import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

export default function ProjectStory({
  project,
  tone,
}: {
  project: Project;
  tone: "cream" | "deep";
}) {
  const blocks: { label: string; text: string; look: string }[] = [];
  if (project.challenge) {
    blocks.push({
      label: "The challenge",
      text: project.challenge,
      look: "bg-vedmagenta",
    });
  }
  if (project.solution) {
    blocks.push({
      label: "The solution",
      text: project.solution,
      look: "bg-vedorange",
    });
  }

  return (
    <Section tone={tone}>
      <Container>
        <div
          className={`grid gap-8 ${
            blocks.length > 1 ? "md:grid-cols-2" : "mx-auto max-w-3xl"
          }`}
        >
          {blocks.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.1}>
              <div className="h-full rounded-3xl border-2 border-vednavy bg-white p-8 shadow-hard sm:p-10">
                <span
                  className={`inline-block rounded-full border-2 border-vednavy px-4 py-1 text-xs font-bold uppercase tracking-wider ${b.look}`}
                >
                  {b.label}
                </span>
                <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-vednavy/85">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}