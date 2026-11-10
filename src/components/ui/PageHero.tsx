"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  aside,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  aside?: ReactNode;
}) {
  return (
    <Section tone="cream" className="bg-dots pb-16 pt-36 sm:pb-20 sm:pt-44">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <div className={aside ? "lg:col-span-7" : "lg:col-span-10"}>
          <Reveal>
            <span className="inline-block rounded-full border-2 border-vednavy bg-vedcreamdeep px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              {eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              {title}{" "}
              <span className="relative mt-2 inline-block -rotate-1 px-3 pb-1">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left rounded-2xl border-2 border-vednavy bg-vedorange"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.65, delay: 0.6, ease }}
                />
                <span className="relative">{highlight}</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-vednavy/80">
              {description}
            </p>
          </Reveal>
        </div>

        {aside && <div className="lg:col-span-5">{aside}</div>}
      </Container>
    </Section>
  );
}