import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/icons";
import ProjectImage from "@/components/home/ProjectImage";
import type { Project } from "@/data/projects";

const shadows = [
  "shadow-[8px_8px_0_#f77b24]",
  "shadow-[8px_8px_0_#ea5580]",
  "shadow-[8px_8px_0_#b14b90]",
];
const fallbacks = ["bg-vedorange", "bg-vedmagenta", "bg-vedpink"];

export default function RelatedProjects({
  category,
  items,
  tone,
}: {
  category: string;
  items: Project[];
  tone: "cream" | "deep";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              eyebrow="Related work"
              title={`More in ${category}`}
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/portfolio" variant="secondary">
              All projects <ArrowUpRight />
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link href={`/portfolio/${p.slug}`} className="group block">
                <div
                  className={`relative aspect-square overflow-hidden rounded-3xl border-2 border-vednavy bg-vedcreamdeep transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:-rotate-1 ${shadows[i % shadows.length]}`}
                >
                  <ProjectImage
                    src={p.image}
                    alt={`${p.title} project preview`}
                    label={p.title}
                    fallback={fallbacks[i % fallbacks.length]}
                  />
                </div>
                <h3 className="mt-6 font-display text-2xl font-extrabold">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-vednavy/70">{p.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}