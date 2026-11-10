import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

export default function ProjectTestimonial({
  testimonial,
  tone,
}: {
  testimonial: NonNullable<Project["testimonial"]>;
  tone: "cream" | "deep";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal>
          <figure className="relative mx-auto max-w-4xl -rotate-1 rounded-[2rem] border-2 border-vednavy bg-vedmagenta p-8 pt-12 shadow-hard-lg sm:p-14 sm:pt-16">
            <span
              aria-hidden="true"
              className="absolute -top-8 left-8 flex h-16 w-16 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange pt-4 font-display text-6xl font-extrabold leading-none"
            >
              &ldquo;
            </span>
            <blockquote className="font-display text-2xl font-extrabold leading-snug sm:text-4xl">
              {testimonial.quote}
            </blockquote>
            <figcaption className="mt-8 text-base font-bold">
              {testimonial.name}
              {testimonial.role && (
                <span className="font-medium opacity-80">
                  , {testimonial.role}
                </span>
              )}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  );
}