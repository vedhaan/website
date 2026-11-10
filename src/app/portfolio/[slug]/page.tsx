import type { Metadata } from "next";
import { features } from "@/data/site";
import { notFound } from "next/navigation";
import ProjectHero from "@/components/portfolio/ProjectHero";
import ProjectOverview from "@/components/portfolio/ProjectOverview";
import ProjectStory from "@/components/portfolio/ProjectStory";
import ProjectFeatures from "@/components/portfolio/ProjectFeatures";
import ProjectStats from "@/components/portfolio/ProjectStats";
import ProjectResults from "@/components/portfolio/ProjectResults";
import ProjectTimeline from "@/components/portfolio/ProjectTimeline";
import ProjectGallery from "@/components/portfolio/ProjectGallery";
import ProjectTestimonial from "@/components/portfolio/ProjectTestimonial";
import RelatedProjects from "@/components/portfolio/RelatedProjects";
import NextProject from "@/components/portfolio/NextProject";
import CtaBand from "@/components/home/CtaBand";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  if (!features.portfolio) notFound();
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const next =
    projects.length > 1 ? projects[(index + 1) % projects.length] : null;
  const related = projects
    .filter(
      (p) =>
        p.category === project.category &&
        p.slug !== project.slug &&
        p.slug !== next?.slug,
    )
    .slice(0, 3);

  let n = 0;
  const tone = () => (n++ % 2 === 0 ? "cream" : "deep") as "cream" | "deep";

  const hasOverview =
    Boolean(project.overview) || (project.services?.length ?? 0) > 0;
  const hasStory = Boolean(project.challenge || project.solution);

  return (
    <>
      <ProjectHero project={project} />

      {hasOverview && <ProjectOverview project={project} tone={tone()} />}
      {hasStory && <ProjectStory project={project} tone={tone()} />}
      {project.features && project.features.length > 0 && (
        <ProjectFeatures features={project.features} tone={tone()} />
      )}
      {project.stats && project.stats.length > 0 && (
        <ProjectStats stats={project.stats} />
      )}
      {project.results && project.results.length > 0 && (
        <ProjectResults results={project.results} />
      )}
      {project.timeline && project.timeline.length > 0 && (
        <ProjectTimeline steps={project.timeline} tone={tone()} />
      )}
      {project.gallery && project.gallery.length > 0 && (
        <ProjectGallery
          project={project}
          gallery={project.gallery}
          tone={tone()}
        />
      )}
      {project.testimonial && (
        <ProjectTestimonial testimonial={project.testimonial} tone={tone()} />
      )}
      {related.length > 0 && (
        <RelatedProjects
          category={project.category}
          items={related}
          tone={tone()}
        />
      )}

      {next && <NextProject next={next} />}
      <CtaBand />
    </>
  );
}