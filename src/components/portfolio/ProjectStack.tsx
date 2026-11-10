"use client";

import ProjectImage from "@/components/home/ProjectImage";
import Float from "@/components/ui/Float";
import type { Project } from "@/data/projects";

const slots = [
  "-rotate-[10deg] -translate-x-12 group-hover:-rotate-[16deg] group-hover:-translate-x-24",
  "rotate-[8deg] translate-x-12 group-hover:rotate-[16deg] group-hover:translate-x-24",
  "-rotate-2 group-hover:rotate-0 group-hover:-translate-y-[58%]",
];
const fallbacks = ["bg-vedcoral", "bg-vedpink", "bg-vedmagenta"];

export default function ProjectStack({ projects }: { projects: Project[] }) {
  const used = slots.slice(slots.length - projects.length);
  const ordered = [...projects].reverse();

  return (
    <Float amp={9} duration={5}>
      <div className="group relative mx-auto h-72 w-full max-w-sm sm:h-96">
        {ordered.map((p, i) => (
          <div
            key={p.slug}
            className={`absolute inset-x-0 top-1/2 mx-auto aspect-square w-48 -translate-y-1/2 overflow-hidden rounded-3xl border-2 border-vednavy bg-vedcreamdeep shadow-hard transition-all duration-500 ease-out sm:w-56 ${used[i]}`}
          >
            <ProjectImage
              src={p.image}
              alt={`${p.title} preview`}
              label={p.title}
              fallback={fallbacks[i % fallbacks.length]}
              sizes="240px"
            />
          </div>
        ))}
      </div>
    </Float>
  );
}