import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import ProjectImage from "@/components/home/ProjectImage";
import type { Project } from "@/data/projects";

export default function NextProject({ next }: { next: Project }) {
  return (
    <Section tone="deep">
      <Container>
        <Reveal>
          <Link
            href={`/portfolio/${next.slug}`}
            className="group grid items-center gap-10 lg:grid-cols-12"
          >
            <div className="lg:col-span-8">
              <span className="inline-block rounded-full border-2 border-vednavy px-4 py-1 text-xs font-bold uppercase tracking-wider">
                Next project
              </span>
              <h2 className="mt-5 font-display text-5xl font-extrabold leading-[1.02] transition-transform duration-300 group-hover:translate-x-2 sm:text-7xl">
                {next.title}
              </h2>
              <p className="mt-4 max-w-xl text-lg text-vednavy/80">
                {next.summary}
              </p>
              <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight className="h-6 w-6" />
              </span>
            </div>

            <div className="lg:col-span-4">
              <div className="relative mx-auto aspect-square w-full max-w-xs rotate-3 overflow-hidden rounded-3xl border-2 border-vednavy bg-vedcream shadow-hard transition-transform duration-500 group-hover:rotate-0">
                <ProjectImage
                  src={next.image}
                  alt={`${next.title} project preview`}
                  label={next.title}
                  fallback="bg-vedmagenta"
                  sizes="320px"
                />
              </div>
            </div>
          </Link>
        </Reveal>
      </Container>
    </Section>
  );
}