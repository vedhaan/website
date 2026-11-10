"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

function Word({ children, i }: { children: ReactNode; i: number }) {
  return (
    <span className="mr-[0.25em] inline-block overflow-hidden pb-2 align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.75, delay: 0.1 + i * 0.09, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function HeroHeading() {
  return (
    <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
      <Word i={0}>Turning</Word>
      <Word i={1}>ideas</Word>
      <Word i={2}>into</Word>
      <br />
      <span className="relative mt-2 inline-block -rotate-1 px-3 pb-1">
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 origin-left rounded-2xl border-2 border-vednavy bg-vedorange"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.65, delay: 0.7, ease }}
        />
        <span className="relative">digital success</span>
      </span>
    </h1>
  );
}