"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { Star } from "@/components/ui/icons";
import { extraStats } from "@/data/about";
import { services } from "@/data/services";
import { site } from "@/data/site";

const tileClass =
  "relative inline-block h-[1.15em] w-[0.78em] overflow-hidden rounded-lg border-2 border-vednavy bg-vedcream text-vednavy shadow-[3px_3px_0_#f77b24]";

const labelLooks = [
  "bg-vedorange",
  "bg-vedmagenta",
  "bg-vedpink text-white",
  "bg-vedcoral",
];

const reel = Array.from({ length: 20 }, (_, i) => i % 10);

function Digit({
  digit,
  delay,
  active,
}: {
  digit: number;
  delay: number;
  active: boolean;
}) {
  return (
    <span className={tileClass}>
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        initial={{ y: "0%" }}
        animate={{ y: active ? `-${((digit + 10) / 20) * 100}%` : "0%" }}
        transition={{ duration: 1.6, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {reel.map((n, i) => (
          <span
            key={i}
            className="flex h-[1.15em] items-center justify-center leading-none"
          >
            {n}
          </span>
        ))}
      </motion.span>
      <span className="pointer-events-none absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 bg-vednavy/25" />
    </span>
  );
}

function Odometer({ value, active }: { value: string; active: boolean }) {
  const match = /^\d+\.\d/.test(value) ? null : value.match(/^(\d+)(.*)$/);
  if (!match) return <span>{value}</span>;

  const digits = match[1].split("").map(Number);
  const suffix = match[2];

  return (
    <span className="inline-flex items-center gap-1.5">
      {digits.map((d, i) => (
        <Digit key={i} digit={d} delay={i * 0.18} active={active} />
      ))}
      {suffix && (
        <span
          className={`${tileClass} flex items-center justify-center bg-vedorange`}
        >
          {suffix}
        </span>
      )}
    </span>
  );
}

function Column({
  value,
  label,
  look,
}: {
  value: string;
  label: string;
  look: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="flex flex-col items-center px-4 py-10 text-center sm:py-12"
    >
      <span className="sr-only">
        {value} {label}
      </span>
      <div
        aria-hidden="true"
        className="font-display text-6xl font-extrabold sm:text-7xl"
      >
        <Odometer value={value} active={active} />
      </div>
      <div
        aria-hidden="true"
        className={`mt-6 -rotate-2 rounded-full border-2 border-vednavy px-4 py-1.5 text-sm font-bold text-vednavy ${look}`}
      >
        {label}
      </div>
    </div>
  );
}

function ServiceRow() {
  return (
    <div className="flex shrink-0 items-center gap-6 pr-6">
      {services.map((s) => (
        <div key={s.slug} className="flex items-center gap-6">
          <span className="whitespace-nowrap font-display text-lg font-extrabold">
            {s.title}
          </span>
          <Star className="h-4 w-4 shrink-0 text-vedorange" />
        </div>
      ))}
    </div>
  );
}

export default function AboutStats() {
  const [years, projects] = site.stats;

  const items = [
    { value: years.value, label: years.label },
    { value: projects.value, label: projects.label },
    { value: String(services.length), label: "Services under one roof" },
    { value: String(site.pillars.length), label: "Service pillars" },
    ...extraStats,
  ];

  return (
    <Section tone="orange">
      <Star className="absolute right-[6%] top-8 h-8 w-8 animate-spin-slow text-vednavy" />
      <Star className="absolute bottom-10 left-[5%] h-6 w-6 animate-spin-slow text-vedcream" />

      <Container>
        <Reveal>
          <SectionHeading eyebrow="By the numbers" title="Our work in numbers" />
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-vednavy/80">
            A quick look at what Vedhaan Technology has built and what we offer.
          </p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-[2rem] border-2 border-vednavy bg-vednavy text-vedcream shadow-[10px_10px_0_#fff6ee]"
        >
          <div className="flex items-center justify-between border-b-2 border-vedcream/15 px-6 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-vedorange" />
              <span className="h-3 w-3 rounded-full bg-vedmagenta" />
              <span className="h-3 w-3 rounded-full bg-vedpink" />
              <span className="ml-3 font-display text-sm font-extrabold tracking-widest">
                VEDHAAN BY THE NUMBERS
              </span>
            </div>
            <Star className="h-5 w-5 animate-spin-slow text-vedorange" />
          </div>

          <div className="grid sm:grid-cols-2 lg:[grid-template-columns:repeat(auto-fit,minmax(14rem,1fr))] [&>*+*]:border-t-2 [&>*+*]:border-vedcream/15 sm:[&>*:nth-child(2)]:border-t-0 lg:[&>*+*]:border-l-2 lg:[&>*+*]:border-t-0">
            {items.map((it, i) => (
              <Column
                key={it.label}
                value={it.value}
                label={it.label}
                look={labelLooks[i % labelLooks.length]}
              />
            ))}
          </div>
        </motion.div>

        <div
          aria-hidden="true"
          className="mt-10 overflow-hidden rounded-full border-2 border-vednavy bg-vedcream py-3"
        >
          <div
            style={{ animationDuration: "40s" }}
            className="flex w-max animate-marquee"
          >
            <ServiceRow />
            <ServiceRow />
          </div>
        </div>
      </Container>
    </Section>
  );
}