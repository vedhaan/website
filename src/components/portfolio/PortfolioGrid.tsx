"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import ProjectImage from "@/components/home/ProjectImage";
import { projectCategories } from "@/data/projects";
import type { Project, ProjectCategory } from "@/data/projects";

const offsets = [
  "shadow-[8px_8px_0_#f77b24]",
  "shadow-[8px_8px_0_#ea5580]",
  "shadow-[8px_8px_0_#b14b90]",
];
const fallbacks = ["bg-vedorange", "bg-vedmagenta", "bg-vedpink"];
const stagger =
  "sm:[&:nth-child(even)]:mt-10 lg:[&:nth-child(even)]:mt-0 lg:[&:nth-child(3n+2)]:mt-14";

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <Link
      href={`/portfolio/${p.slug}`}
      className="group relative block touch-manipulation"
    >
      <div
        className={`relative aspect-square overflow-hidden rounded-3xl border-2 border-vednavy bg-vedcreamdeep transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:-rotate-1 ${offsets[i % offsets.length]}`}
      >
        <ProjectImage
          src={p.image}
          alt={`${p.title} project preview`}
          label={p.title}
          fallback={fallbacks[i % fallbacks.length]}
        />
        <span className="pointer-events-none absolute bottom-4 right-4 z-10 flex h-14 w-14 scale-0 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange text-vednavy transition-transform duration-300 group-hover:scale-100">
          <ArrowUpRight className="h-6 w-6" />
        </span>
      </div>
      <div className="mt-7 flex items-center gap-3">
        <span className="rounded-full border-2 border-vednavy bg-vedcreamdeep px-3 py-1 text-xs font-bold">
          {p.category}
        </span>
        <span className="text-xs text-vednavy/60">{p.year}</span>
      </div>
      <h3 className="mt-3 font-display text-2xl font-extrabold">{p.title}</h3>
      <p className="mt-1 text-sm text-vednavy/70">{p.summary}</p>
    </Link>
  );
}

export default function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const categories = projectCategories.filter((c) =>
    projects.some((p) => p.category === c),
  );
  const showFilter = projects.length >= 6 && categories.length >= 2;
  const chips: (ProjectCategory | "All")[] = ["All", ...categories];
  const list =
    showFilter && active !== "All"
      ? projects.filter((p) => p.category === active)
      : projects;

  const gridClass =
    "mt-10 grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <Section tone="cream">
      <Container>
        {showFilter && (
          <div
            className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-4 sm:mx-0 sm:flex-wrap sm:px-0"
            role="group"
            aria-label="Filter projects by category"
          >
            {chips.map((chip) => {
              const count =
                chip === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === chip).length;
              const on = active === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setActive(chip)}
                  className={`shrink-0 rounded-full border-2 border-vednavy px-4 py-2 text-sm font-bold transition-all duration-200 ${
                    on
                      ? "bg-vedorange shadow-[3px_3px_0_#0f0f1a]"
                      : "bg-vedcream hover:bg-vedcreamdeep"
                  }`}
                >
                  {chip} <span className="opacity-60">{count}</span>
                </button>
              );
            })}
          </div>
        )}

        {showFilter ? (
          <div className={gridClass}>
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className={stagger}
                >
                  <ProjectCard p={p} i={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        ) : (
          <div className={gridClass}>
            {list.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.08} className={stagger}>
                <ProjectCard p={p} i={i} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </Section>
  );
}