"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ScrollText from "@/components/about/ScrollText";
import { milestones, story } from "@/data/about";

function MilestoneTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.55"],
  });
  const lineScale = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="mt-24">
      <Reveal>
        <h3 className="font-display text-3xl font-extrabold sm:text-4xl">
          Milestones
        </h3>
      </Reveal>

      <div ref={ref} className="relative mt-14">
        <span
          aria-hidden="true"
          className="absolute left-8 top-0 h-full w-1 -translate-x-1/2 rounded-full bg-vednavy/15 md:left-1/2"
        />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: lineScale }}
          className="absolute left-8 top-0 h-full w-1 origin-top -translate-x-1/2 rounded-full bg-vednavy md:left-1/2"
        />

        {milestones.map((m, i) => {
          const odd = i % 2 === 1;
          return (
            <Reveal
              key={`${m.year}-${m.title}`}
              className="pb-12 last:pb-0 md:pb-14"
            >
              <div
                className={`relative pl-24 md:w-1/2 ${
                  odd ? "md:ml-auto md:pl-14" : "md:pl-0 md:pr-14 md:text-right"
                }`}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 220, damping: 14 }}
                  className={`absolute left-0 top-0 flex h-10 w-16 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange font-display text-sm font-extrabold ${
                    odd
                      ? "md:-translate-x-1/2"
                      : "md:left-auto md:right-0 md:translate-x-1/2"
                  }`}
                >
                  {m.year}
                </motion.span>

                <div
                  className={`rounded-2xl border-2 border-vednavy bg-white p-5 shadow-hard transition-transform duration-300 hover:rotate-0 ${
                    odd ? "rotate-1" : "-rotate-1"
                  }`}
                >
                  <h4 className="font-display text-2xl font-extrabold">
                    {m.title}
                  </h4>
                  <p className="mt-2 text-base leading-relaxed text-vednavy/80">
                    {m.text}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}

export default function AboutStory() {
  const [lead, ...rest] = story.paragraphs;

  return (
    <Section tone="deep">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:sticky lg:top-28 lg:col-span-5 lg:self-start">
            <Reveal>
              <SectionHeading eyebrow={story.eyebrow} title={story.title} />
            </Reveal>
          </div>

          <div className="space-y-8 lg:col-span-7">
            {lead && (
              <ScrollText
                text={lead}
                className="font-display text-3xl font-extrabold leading-tight sm:text-4xl"
              />
            )}
            {rest.map((p, i) => (
              <Reveal key={p} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-vednavy/80 sm:text-xl">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        {milestones.length > 0 && <MilestoneTimeline />}
      </Container>
    </Section>
  );
}