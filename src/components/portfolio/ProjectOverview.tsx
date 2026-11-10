import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Check } from "@/components/ui/icons";
import { services } from "@/data/services";
import type { Service } from "@/data/services";
import type { Project } from "@/data/projects";

export default function ProjectOverview({
  project,
  tone,
}: {
  project: Project;
  tone: "cream" | "deep";
}) {
  const delivered = (project.services ?? [])
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is Service => Boolean(s));

  return (
    <Section tone={tone}>
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading eyebrow="Overview" title="About this project" />
          </Reveal>

          {delivered.length > 0 && (
            <Reveal delay={0.1}>
              <div className="mt-10 -rotate-1 rounded-3xl border-2 border-vednavy bg-vedmagenta p-6 shadow-hard">
                <p className="font-display text-xl font-extrabold">
                  What we delivered
                </p>
                <ul className="mt-4 flex flex-wrap gap-2.5">
                  {delivered.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services#${s.pillar}`}
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-vednavy bg-vedcream px-3 py-2 text-sm font-bold transition-colors hover:bg-vedorange"
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-vednavy bg-vedorange">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}
        </div>

        {project.overview && (
          <Reveal delay={0.1} className="lg:col-span-7">
            <p className="whitespace-pre-line text-lg leading-relaxed text-vednavy/85 sm:text-xl">
              {project.overview}
            </p>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}