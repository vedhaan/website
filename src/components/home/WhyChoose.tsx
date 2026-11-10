import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { whyChoose } from "@/data/home";

export default function WhyChoose() {
  return (
    <Section tone="deep">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why choose us"
            title="Why choose Vedhaan Technology"
          />
        </Reveal>

        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {whyChoose.map((w, i) => (
            <Reveal key={w.title} delay={(i % 3) * 0.08}>
              <div className="group h-full rounded-3xl border-2 border-vednavy bg-vedcream p-7 shadow-hard transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-hard-lg">
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full border-2 border-vednavy font-display text-xl font-extrabold transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-vedcream ${w.look.split(" ")[0]}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold leading-tight">
                  {w.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-vednavy/80">
                  {w.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}