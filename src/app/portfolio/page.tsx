import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { features } from "@/data/site";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/icons";
import ProjectStack from "@/components/portfolio/ProjectStack";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import CtaBand from "@/components/home/CtaBand";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Websites, business systems and creative work delivered by Vedhaan Technology.",
};

export default function PortfolioPage() {
  if (!features.portfolio) notFound();
  const stack = [
    ...projects.filter((p) => p.featured),
    ...projects.filter((p) => !p.featured),
  ].slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Our work"
        title="Ideas we’ve turned into"
        highlight="real products"
        description="A selection of websites, business systems and creative work we have delivered."
        aside={stack.length > 0 ? <ProjectStack projects={stack} /> : undefined}
      />

      {projects.length > 0 ? (
        <PortfolioGrid projects={projects} />
      ) : (
        <Section tone="cream">
          <Container>
            <div className="mx-auto max-w-xl -rotate-1 rounded-3xl border-2 border-vednavy bg-vedmagenta p-8 text-center shadow-hard">
              <p className="font-display text-3xl font-extrabold">
                Projects coming soon
              </p>
              <p className="mt-3 font-medium">
                We are putting our latest work together. In the meantime, tell
                us about your idea.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="secondary">
                  Start a project <ArrowUpRight />
                </Button>
              </div>
            </div>
          </Container>
        </Section>
      )}

      <CtaBand />
    </>
  );
}