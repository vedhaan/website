"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import type { Project } from "@/data/projects";

export default function ProjectTimeline({
  steps,
  tone,
}: {
  steps: NonNullable<Project["timeline"]>;
  tone: "cream" | "deep";
}) {
  return (
    <Section tone={tone}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow="Timeline" title="How it came together" />
        </Reveal>

        <div className="relative mt-16">
          <motion.div
            aria-hidden="true"
            className="absolute left-5 top-0 h-full w-1 origin-top -translate-x-1/2 rounded-full bg-vednavy md:left-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {steps.map((s, i) => {
            const odd = i % 2 === 1;
            return (
              <Reveal key={s.title} className="pb-12 last:pb-0 md:pb-14">
                <div
                  className={`relative pl-16 md:w-1/2 ${
                    odd ? "md:ml-auto md:pl-14" : "md:pl-0 md:pr-14 md:text-right"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange font-display text-sm font-extrabold ${
                      odd
                        ? "md:-translate-x-1/2"
                        : "md:left-auto md:right-0 md:translate-x-1/2"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-extrabold">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-vednavy/80">
                    {s.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}