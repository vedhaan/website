import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Star } from "@/components/ui/icons";
import { values } from "@/data/about";

const looks = [
  "bg-vedorange text-vednavy",
  "bg-vedmagenta text-vednavy",
  "bg-vedpink text-white",
  "bg-vedcoral text-vednavy",
];

export default function AboutValues() {
  return (
    <Section tone="cream">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="What we believe" title="How we work" />
        </Reveal>

        <div className="mt-14 space-y-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="sticky"
              style={{ top: `${7 + i * 1.25}rem` }}
            >
              <div
                className={`relative grid min-h-[16rem] items-center gap-6 overflow-hidden rounded-[2rem] border-2 border-vednavy p-8 shadow-hard-lg sm:min-h-[18rem] sm:p-12 md:grid-cols-12 ${looks[i % looks.length]}`}
              >
                <Star className="absolute right-6 top-6 h-7 w-7 animate-spin-slow text-vednavy" />

                <span
                  aria-hidden="true"
                  className="font-display text-[7rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:3px_#0f0f1a] sm:text-[9rem] md:col-span-3"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl md:col-span-5">
                  {v.title}
                </h3>
                <p className="text-lg font-medium leading-relaxed md:col-span-4">
                  {v.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}