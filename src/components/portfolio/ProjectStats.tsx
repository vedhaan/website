import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import type { Project } from "@/data/projects";

export default function ProjectStats({
  stats,
}: {
  stats: NonNullable<Project["stats"]>;
}) {
  return (
    <Section tone="orange" compact>
      <Container>
        <div className="grid grid-cols-2 gap-5 lg:[grid-template-columns:repeat(auto-fit,minmax(13rem,1fr))]">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div
                className={`h-full rounded-2xl border-2 border-vednavy bg-vedcream p-6 shadow-hard transition-transform duration-300 hover:rotate-0 ${
                  i % 2 ? "rotate-1" : "-rotate-1"
                }`}
              >
                <div className="font-display text-4xl font-extrabold sm:text-5xl">
                  <CountUp value={s.value} />
                </div>
                <div className="mt-1 text-sm font-bold text-vednavy/70">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}