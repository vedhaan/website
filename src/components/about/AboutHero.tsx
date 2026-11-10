"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import { ArrowUpRight, Star } from "@/components/ui/icons";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;
const chipLooks = [
  "bg-vedorange",
  "bg-vedmagenta",
  "bg-vedpink text-white",
  "bg-vedcoral",
];

function IdCard() {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-160, 160], [-10, 10]);

  return (
    <motion.div
      initial={{ y: -420 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 60, damping: 9, delay: 0.3 }}
      className="relative mx-auto w-72 sm:w-80"
    >
      <motion.div
        style={{ transformOrigin: "50% 0%" }}
        animate={{ rotate: [-2.5, 2.5, -2.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.4}
          dragSnapToOrigin
          style={{ x, rotate, transformOrigin: "50% 0%" }}
          className="cursor-grab active:cursor-grabbing"
        >
          <div className="flex flex-col items-center">
            <span className="h-5 w-5 rounded-full border-2 border-vednavy bg-vedcream" />
            <span className="h-20 w-4 border-x-2 border-vednavy bg-vedorange" />
            <span className="-mb-1 h-6 w-10 rounded-md border-2 border-vednavy bg-vedcream" />

            <div className="relative w-full overflow-hidden rounded-3xl border-2 border-vednavy bg-vedcream shadow-hard-lg">
              <div className="flex items-center justify-between bg-vednavy px-5 py-3 text-vedcream">
                <span className="font-display text-xs font-extrabold tracking-widest">
                  VEDHAAN TECHNOLOGY
                </span>
                <Star className="h-4 w-4 animate-spin-slow text-vedorange" />
              </div>

              <div className="flex justify-center px-6 pb-2 pt-7">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.svg"
                  alt=""
                  draggable={false}
                  className="h-20 w-auto select-none"
                />
              </div>

              <p className="px-6 text-center font-display text-lg font-extrabold leading-tight">
                {site.tagline}
              </p>

              <ul className="flex flex-wrap justify-center gap-2 px-5 py-5">
                {site.pillars.map((p, i) => (
                  <li
                    key={p.id}
                    className={`rounded-full border-2 border-vednavy px-2.5 py-0.5 text-[11px] font-bold ${chipLooks[i % chipLooks.length]}`}
                  >
                    {p.title}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between border-t-2 border-vednavy bg-vedorange px-5 py-3">
                <span className="text-xs font-bold">Bhavnagar, Gujarat</span>
                <span
                  aria-hidden="true"
                  className="h-6 w-20 [background:repeating-linear-gradient(90deg,#0f0f1a_0_2px,transparent_2px_5px)]"
                />
              </div>
            </div>

            <div className="absolute -left-4 bottom-28 sm:-left-12">
              <Float amp={8} duration={4.5}>
                <div className="-rotate-6 rounded-2xl border-2 border-vednavy bg-vednavy px-4 py-2 text-vedcream shadow-[5px_5px_0_#ea5580]">
                  <div className="font-display text-2xl font-extrabold">
                    <CountUp value={site.stats[0].value} />
                  </div>
                  <div className="text-[10px] font-bold">years in IT</div>
                </div>
              </Float>
            </div>

            <div className="absolute -right-4 top-52 sm:-right-12">
              <Float amp={9} duration={5} delay={0.6}>
                <div className="rotate-6 rounded-2xl border-2 border-vednavy bg-vedmagenta px-4 py-2 shadow-hard">
                  <div className="font-display text-2xl font-extrabold">
                    <CountUp value={site.stats[1].value} />
                  </div>
                  <div className="text-[10px] font-bold">projects</div>
                </div>
              </Float>
            </div>

            <div className="absolute -top-2 right-0 rotate-6 rounded-full border-2 border-vednavy bg-vedcream px-3 py-1 text-xs font-extrabold shadow-hard">
              Drag me
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function AboutHero() {
  return (
    <Section tone="cream" className="bg-dots pb-24 pt-36 sm:pt-40">
      <Container className="grid items-start gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7 lg:pt-16">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-vednavy bg-vedcreamdeep px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              About us
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              Meet the people behind{" "}
              <span className="relative mt-2 inline-block -rotate-1 px-3 pb-1">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left rounded-2xl border-2 border-vednavy bg-vedorange"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.65, delay: 0.6, ease }}
                />
                <span className="relative">Vedhaan</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-vednavy/80">
              {site.tagline}. We are an IT company from Bhavnagar that builds
              websites, business systems, brands and campaigns for businesses
              that want to grow.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="#founder">
                Meet our founder <ArrowUpRight />
              </Button>
              <Button href="/contact" variant="secondary">
                Work with us
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <IdCard />
        </div>
      </Container>
    </Section>
  );
}