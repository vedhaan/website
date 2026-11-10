import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const shadows = [
  "shadow-[6px_6px_0_#f77b24]",
  "shadow-[6px_6px_0_#ea5580]",
  "shadow-[6px_6px_0_#b14b90]",
];

export default function ProjectResults({ results }: { results: string[] }) {
  return (
    <Section tone="navy">
      <Container>
        <Reveal>
          <SectionHeading onDark eyebrow="Results" title="What we achieved" />
        </Reveal>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((r, i) => (
            <Reveal key={r} delay={(i % 3) * 0.08}>
              <div
                className={`h-full rounded-3xl border-2 border-vedcream bg-vedcream p-7 text-vednavy transition-transform duration-300 hover:-translate-y-1.5 hover:-rotate-1 ${shadows[i % shadows.length]}`}
              >
                <span className="font-display text-6xl font-extrabold text-vedorange">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-4 text-lg font-bold leading-snug">{r}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}