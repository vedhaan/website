"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";
import { ArrowUpRight, Star } from "@/components/ui/icons";
import ServiceArt from "@/components/home/ServiceArt";
import { pillarLooks } from "@/components/services/looks";
import { site } from "@/data/site";
import { services } from "@/data/services";

const ease = [0.22, 1, 0.36, 1] as const;
const heights = ["lg:h-52", "lg:h-64", "lg:h-80", "lg:h-96"];

export default function ServicesHero() {
  const last = site.pillars.length - 1;

  return (
    <Section tone="cream" className="bg-dots pb-0 pt-36 sm:pt-44">
      <Container className="relative">
        <div className="hidden lg:block">
          <Float className="absolute right-8 top-0" amp={10} duration={4.5}>
            <div className="rotate-3 rounded-2xl border-2 border-vednavy bg-vedmagenta px-6 py-4 shadow-hard">
              <div className="font-display text-4xl font-extrabold">
                {services.length}
              </div>
              <div className="text-xs font-bold">services</div>
              <div className="mt-2 font-display text-2xl font-extrabold">
                {site.pillars.length}
              </div>
              <div className="text-xs font-bold">pillars</div>
            </div>
          </Float>
        </div>

        <div className="max-w-4xl">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-vednavy bg-vedcreamdeep px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Our services
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              Everything you need, under{" "}
              <span className="relative mt-2 inline-block -rotate-1 px-3 pb-1">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left rounded-2xl border-2 border-vednavy bg-vedorange"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.65, delay: 0.6, ease }}
                />
                <span className="relative">one roof</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-vednavy/80">
              From websites and business systems to branding, video and
              marketing. Pick one service or combine them.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 items-end gap-4 pb-10 lg:grid-cols-4 lg:gap-5 lg:pb-0">
          {site.pillars.map((p, i) => {
            const look = pillarLooks[i % pillarLooks.length];
            const count = services.filter((s) => s.pillar === p.id).length;

            return (
              <motion.a
                key={p.id}
                href={`#${p.id}`}
                initial={{ y: 140, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease }}
                className={`group relative flex h-48 flex-col justify-between rounded-3xl border-2 border-vednavy p-5 transition-transform duration-300 hover:-translate-y-3 sm:h-56 lg:rounded-b-none lg:border-b-0 ${
                  heights[i] ?? heights[heights.length - 1]
                } ${look.block}`}
              >
                {i === last && (
                  <Star className="absolute -top-8 right-6 h-7 w-7 animate-spin-slow text-vedmagenta" />
                )}

                <div className="flex items-start justify-between">
                  <span className="font-display text-sm font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-vednavy bg-vedcream text-vednavy transition-transform duration-300 group-hover:rotate-45">
                    <ArrowUpRight />
                  </span>
                </div>

                <div className="min-h-0 flex-1 py-2">
                  <ServiceArt id={p.id} className="mx-auto h-full w-auto" />
                </div>

                <div>
                  <div className="font-display text-xl font-extrabold leading-tight sm:text-2xl">
                    {p.title}
                  </div>
                  <div className="mt-1 text-xs font-bold opacity-80">
                    {count} {count === 1 ? "service" : "services"}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}