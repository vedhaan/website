"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowUpRight, Star } from "@/components/ui/icons";
import { site } from "@/data/site";

const drop = (delay: number) => ({
  initial: { y: -320, opacity: 0, rotate: -20 },
  animate: { y: 0, opacity: 1, rotate: 0 },
  transition: { type: "spring" as const, stiffness: 90, damping: 10, delay },
});

const box =
  "flex h-32 w-24 items-center justify-center border-2 border-vednavy font-display text-8xl font-extrabold shadow-hard-lg sm:h-52 sm:w-40 sm:text-[9rem]";

export default function NotFoundContent() {
  return (
    <Section tone="cream" className="bg-dots pb-24 pt-40 sm:pt-48">
      <Container className="text-center">
        <div className="flex items-center justify-center gap-3 sm:gap-6">
          <motion.div
            {...drop(0.2)}
            className={`${box} -rotate-3 rounded-3xl bg-vednavy text-vedcream`}
          >
            4
          </motion.div>

          <motion.div
            {...drop(0.4)}
            className="relative h-32 w-24 rounded-[50%] border-2 border-vednavy bg-vedorange shadow-hard-lg sm:h-52 sm:w-40"
          >
            <div className="absolute inset-[22%] flex items-center justify-center rounded-[50%] border-2 border-vednavy bg-vedcream">
              <Star className="h-8 w-8 animate-spin-slow sm:h-12 sm:w-12" />
            </div>
          </motion.div>

          <motion.div
            {...drop(0.6)}
            className={`${box} rotate-3 rounded-3xl bg-vedmagenta`}
          >
            4
          </motion.div>
        </div>

        <Reveal delay={0.8}>
          <h1 className="mt-14 font-display text-4xl font-extrabold sm:text-6xl">
            This page took a wrong turn
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-vednavy/80">
            The page you are looking for does not exist or has moved. Let us get
            you back on track.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="/">
              Back to home <ArrowUpRight />
            </Button>
            <Button href="/contact" variant="secondary">
              Contact us
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.95}>
          <div className="mx-auto mt-16 grid max-w-2xl gap-4 sm:grid-cols-2">
            {site.nav
              .filter((n) => n.href !== "/")
              .map((n, i) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`group flex items-center justify-between rounded-2xl border-2 border-vednavy bg-vedcream px-5 py-4 font-display text-lg font-extrabold shadow-hard transition-all duration-200 hover:-translate-y-1 hover:shadow-hard-lg ${
                    i % 2 ? "rotate-1" : "-rotate-1"
                  } hover:rotate-0`}
                >
                  {n.label}
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                </Link>
              ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}