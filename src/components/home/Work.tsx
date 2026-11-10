import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/icons";
import ProjectImage from "@/components/home/ProjectImage";
import { projects } from "@/data/projects";
import { features } from "@/data/site";

const offsets = [
  "shadow-[8px_8px_0_#f77b24]",
  "shadow-[8px_8px_0_#ea5580]",
  "shadow-[8px_8px_0_#b14b90]",
];
const fallbacks = ["bg-vedorange", "bg-vedmagenta", "bg-vedpink"];

export default function Work() {
  if (!features.portfolio) return null;
  const featured = projects.filter((p) => p.featured).slice(0, 6);
  if (featured.length === 0) return null;

  return (
    <Section tone="navy">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal>
            <SectionHeading
              onDark
              eyebrow="Selected work"
              title="Projects we are proud of"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/portfolio" variant="inverse">
              See all projects <ArrowUpRight />
            </Button>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link href={`/portfolio/${p.slug}`} className="group block">
                <div
                  className={`relative aspect-square overflow-hidden rounded-3xl border-2 border-vedcream bg-vedcreamdeep transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:-rotate-1 ${offsets[i % offsets.length]}`}
                >
                  <ProjectImage
                    src={p.image}
                    alt={`${p.title} project preview`}
                    label={p.title}
                    fallback={fallbacks[i % fallbacks.length]}
                  />
                  <span className="absolute bottom-4 right-4 z-10 flex h-14 w-14 scale-0 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange text-vednavy transition-transform duration-300 group-hover:scale-100">
                    <ArrowUpRight className="h-6 w-6" />
                  </span>
                </div>
                <div className="mt-7 flex items-center gap-3">
                  <span className="rounded-full bg-vedcream px-3 py-1 text-xs font-bold text-vednavy">
                    {p.category}
                  </span>
                  <span className="text-xs text-vedcream/60">{p.year}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-extrabold">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-vedcream/70">{p.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}