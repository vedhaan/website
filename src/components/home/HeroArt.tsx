"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";
import Float from "@/components/ui/Float";
import CountUp from "@/components/ui/CountUp";
import ServiceArt from "@/components/home/ServiceArt";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const orbit = [
  { id: "web-software", look: "bg-vedcream" },
  { id: "ai-automation", look: "bg-vedmagenta" },
  { id: "brand-creative", look: "bg-vedpink" },
  { id: "digital-marketing", look: "bg-vedcoral" },
];

export default function HeroArt() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const spring = { stiffness: 80, damping: 16 };

  const bgX = useSpring(useTransform(mx, [-0.5, 0.5], [10, -10]), spring);
  const bgY = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), spring);
  const midX = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), spring);
  const midY = useSpring(useTransform(my, [-0.5, 0.5], [-14, 14]), spring);
  const fgX = useSpring(useTransform(mx, [-0.5, 0.5], [-28, 28]), spring);
  const fgY = useSpring(useTransform(my, [-0.5, 0.5], [-28, 28]), spring);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-md"
    >
      {/* Ripples pulsing outward from behind the disc */}
      {!reduce && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-[-14%]"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full border-2 border-vednavy"
              initial={{ scale: 0.55, opacity: 0 }}
              animate={{ scale: 1.25, opacity: [0, 0.25, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      {/* Back layer: dashed ring, orange disc, drawn arrow */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-0">
        <motion.svg
          viewBox="0 0 400 400"
          className="h-full w-full"
          aria-hidden="true"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease }}
        >
          <circle
            cx="200"
            cy="200"
            r="188"
            fill="none"
            stroke="#0f0f1a"
            strokeWidth="3"
            strokeDasharray="4 12"
            strokeLinecap="round"
          />
          <circle cx="212" cy="212" r="160" fill="#0f0f1a" />
          <circle
            cx="200"
            cy="200"
            r="160"
            fill="#f77b24"
            stroke="#0f0f1a"
            strokeWidth="4"
          />
          <motion.path
            d="M110 290 L330 110"
            stroke="#0f0f1a"
            strokeWidth="26"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.6, ease }}
          />
          <motion.path
            d="M240 100 H340 V210"
            stroke="#0f0f1a"
            strokeWidth="26"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4, ease }}
          />
        </motion.svg>
      </motion.div>

      {/* Middle layer: service tiles orbiting the disc, staying upright */}
      <motion.div
        aria-hidden="true"
        style={{ x: midX, y: midY }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className="absolute inset-0 animate-spin-slow"
          style={{ animationDuration: "40s" }}
        >
          {orbit.map((o, i) => (
            <div
              key={o.id}
              className="absolute inset-0"
              style={{ transform: `rotate(${i * 90}deg)` }}
            >
              <div className="absolute left-1/2 top-[3%] -translate-x-1/2 -translate-y-1/2">
                <div style={{ transform: `rotate(${-i * 90}deg)` }}>
                  <div
                    className="animate-spin-slow"
                    style={{
                      animationDuration: "40s",
                      animationDirection: "reverse",
                    }}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-vednavy p-1.5 shadow-hard sm:h-16 sm:w-16 ${o.look}`}
                    >
                      <ServiceArt id={o.id} className="h-full w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Front layer: floating stat stickers */}
      <motion.div style={{ x: fgX, y: fgY }} className="absolute inset-0">
        <Float className="absolute -left-2 bottom-4" amp={8} duration={5} delay={0.3}>
          <div className="-rotate-3 rounded-2xl border-2 border-vednavy bg-vednavy px-5 py-3 text-vedcream shadow-[5px_5px_0_#ea5580] transition-transform hover:rotate-0">
            <div className="font-display text-3xl font-extrabold">
              <CountUp value={site.stats[0].value} />
            </div>
            <div className="text-xs">{site.stats[0].label}</div>
          </div>
        </Float>

        <Float className="absolute right-0 top-2" amp={10} duration={4.2} delay={0.9}>
          <div className="rotate-2 rounded-2xl border-2 border-vednavy bg-vedmagenta px-5 py-3 text-vednavy shadow-hard transition-transform hover:rotate-0">
            <div className="font-display text-3xl font-extrabold">
              <CountUp value={site.stats[1].value} />
            </div>
            <div className="text-xs font-medium">{site.stats[1].label}</div>
          </div>
        </Float>
      </motion.div>
    </div>
  );
}