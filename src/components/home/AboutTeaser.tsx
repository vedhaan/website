"use client";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CountUp from "@/components/ui/CountUp";
import { ArrowUpRight, Star } from "@/components/ui/icons";
import ScrollText from "@/components/about/ScrollText";
import { site } from "@/data/site";

const PATH = "M30 235 C 140 230, 130 150, 260 160 S 430 90, 570 78";
const VB_W = 600;
const VB_H = 260;

const stations = [
  { t: 0.12, label: "Ideas", look: "bg-vedmagenta text-vednavy" },
  { t: 0.52, label: "Design", look: "bg-vedorange text-vednavy" },
  { t: 0.93, label: "Delivery", look: "bg-vedpink text-white" },
];

type Point = { x: number; y: number };

function Station({
  label,
  look,
  pos,
  t,
  progress,
}: {
  label: string;
  look: string;
  pos: Point;
  t: number;
  progress: MotionValue<number>;
}) {
  const scale = useTransform(progress, [t - 0.05, t], [0, 1]);

  return (
    <motion.div
      style={{
        left: `${(pos.x / VB_W) * 100}%`,
        top: `${(pos.y / VB_H) * 100}%`,
        scale,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
    >
      <span className="block h-4 w-4 rounded-full border-2 border-vednavy bg-vedcream" />
      <span
        className={`absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-xl border-2 border-vednavy px-3 py-1 font-display text-sm font-extrabold shadow-[3px_3px_0_#0f0f1a] sm:text-base ${look}`}
      >
        {label}
      </span>
    </motion.div>
  );
}

function Journey() {
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [points, setPoints] = useState<Point[] | null>(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 0.9", "end 0.45"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.0005,
  });
  const full = useMotionValue(1);
  const progress = reduce ? full : smooth;

  const ax = useMotionValue("5%");
  const ay = useMotionValue("90%");
  const arot = useMotionValue(-40);
  const endOpacity = useTransform(progress, [0.85, 1], [0, 1]);
  const endY = useTransform(progress, [0.85, 1], [20, 0]);

  function place(p: number) {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    const d = Math.min(Math.max(p, 0), 1) * len;
    const a = path.getPointAtLength(d);
    const b = path.getPointAtLength(Math.min(d + 2, len));
    ax.set(`${(a.x / VB_W) * 100}%`);
    ay.set(`${(a.y / VB_H) * 100}%`);
    arot.set((Math.atan2(b.y - a.y, b.x - a.x) * 180) / Math.PI + 45);
  }

  useMotionValueEvent(progress, "change", place);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;
    const len = path.getTotalLength();
    setPoints(
      stations.map((s) => {
        const p = path.getPointAtLength(len * s.t);
        return { x: p.x, y: p.y };
      }),
    );
    place(progress.get());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={stageRef}
      aria-hidden="true"
      className="relative mx-auto aspect-[600/260] w-full max-w-xl"
    >
      <Star className="absolute left-[6%] top-[6%] h-6 w-6 animate-spin-slow text-vedmagenta" />
      <span className="absolute left-[48%] top-[4%] h-3 w-3 rounded-full border-2 border-vednavy bg-vedpink" />

      <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="absolute inset-0 h-full w-full">
        <path
          ref={pathRef}
          d={PATH}
          fill="none"
          stroke="#0f0f1a"
          strokeOpacity="0.25"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="2 14"
        />
        <motion.path
          d={PATH}
          fill="none"
          stroke="#0f0f1a"
          strokeWidth="6"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
      </svg>

      {points &&
        stations.map((s, i) => (
          <Station
            key={s.label}
            label={s.label}
            look={s.look}
            pos={points[i]}
            t={s.t}
            progress={progress}
          />
        ))}

      <motion.div
        style={{ left: ax, top: ay }}
        className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
      >
        <motion.div
          style={{ rotate: arot }}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange shadow-[3px_3px_0_#0f0f1a]"
        >
          <ArrowUpRight className="h-5 w-5" />
        </motion.div>
      </motion.div>

      <motion.div
        style={{ opacity: endOpacity, y: endY }}
        className="absolute bottom-0 right-0 flex gap-2"
      >
        <div className="-rotate-3 rounded-xl border-2 border-vednavy bg-vednavy px-3 py-1.5 text-vedcream shadow-[3px_3px_0_#ea5580]">
          <div className="font-display text-xl font-extrabold leading-none">
            <CountUp value={site.stats[0].value} />
          </div>
          <div className="mt-0.5 text-[10px] font-bold">years in IT</div>
        </div>
        <div className="rotate-3 rounded-xl border-2 border-vednavy bg-vedmagenta px-3 py-1.5 shadow-[3px_3px_0_#0f0f1a]">
          <div className="font-display text-xl font-extrabold leading-none">
            <CountUp value={site.stats[1].value} />
          </div>
          <div className="mt-0.5 text-[10px] font-bold">projects</div>
        </div>
      </motion.div>
    </div>
  );
}

export default function AboutTeaser() {
  return (
    <Section tone="deep" compact>
      <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
        <div className="min-w-0 lg:col-span-5">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-vednavy px-3 py-1 text-xs font-bold uppercase tracking-wider">
              About us
            </span>
          </Reveal>

          <div className="mt-4">
            <ScrollText
              text="An IT company from Bhavnagar, built on 5+ years of delivery"
              className="font-display text-3xl font-extrabold leading-[1.08] sm:text-4xl lg:text-[2.6rem]"
            />
          </div>

          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-base leading-relaxed text-vednavy/80">
              We help businesses turn ideas into working websites, systems and
              campaigns.
            </p>
            <div className="mt-6">
              <Button href="/about" variant="secondary">
                About Vedhaan <ArrowUpRight />
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="min-w-0 lg:col-span-7">
          <Journey />
        </div>
      </Container>
    </Section>
  );
}