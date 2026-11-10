"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Star } from "@/components/ui/icons";

const arrows = [
  { left: "6%", size: 30, delay: 0, dur: 11, color: "#f77b24" },
  { left: "20%", size: 40, delay: 4, dur: 13, color: "#0f0f1a" },
  { left: "38%", size: 28, delay: 8, dur: 12, color: "#ea5580" },
  { left: "56%", size: 36, delay: 2, dur: 14, color: "#f77b24" },
  { left: "74%", size: 30, delay: 6, dur: 11, color: "#b14b90" },
  { left: "90%", size: 34, delay: 10, dur: 13, color: "#0f0f1a" },
];

type Shape = {
  kind: "circle" | "square" | "plus" | "star";
  pos: string;
  color: string;
  size?: string;
  dur: number;
  delay: number;
};

const shapes: Shape[] = [
  { kind: "circle", pos: "left-[3%] top-[22%]", color: "bg-vedpink", size: "h-5 w-5", dur: 6, delay: 0 },
  { kind: "square", pos: "left-[48%] top-[9%]", color: "bg-vedorange", size: "h-4 w-4", dur: 7, delay: 1 },
  { kind: "plus", pos: "left-[44%] bottom-[30%]", color: "text-vedmagenta", dur: 5, delay: 2 },
  { kind: "star", pos: "right-[44%] top-[16%]", color: "text-vedcoral", dur: 8, delay: 0.5 },
  { kind: "circle", pos: "right-[3%] bottom-[28%]", color: "bg-vedorange", size: "h-6 w-6", dur: 6.5, delay: 1.5 },
  { kind: "square", pos: "left-[12%] bottom-[8%]", color: "bg-vedmagenta", size: "h-5 w-5", dur: 7.5, delay: 3 },
];

const wave =
  "M0 30 Q25 5 50 30" +
  Array.from({ length: 15 }, (_, i) => ` T${(i + 2) * 50} 30`).join("");

export default function HeroBackdrop() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div
        className={`absolute -inset-6 bg-dots ${reduce ? "" : "animate-dots"}`}
      />

      {!reduce && (
        <>
          <motion.div
            className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-vedorange/15"
            animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-vedmagenta/10"
            animate={{ x: [0, -50, 0], y: [0, -40, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          />

          <svg
            viewBox="0 0 100 100"
            className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] animate-spin-slow"
            style={{ animationDuration: "80s" }}
          >
            <circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="#0f0f1a"
              strokeWidth="0.5"
              strokeDasharray="1.5 3"
              opacity="0.35"
            />
          </svg>

          {arrows.map((a, i) => (
            <motion.svg
              key={i}
              viewBox="0 0 24 24"
              fill="none"
              stroke={a.color}
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ left: a.left, width: a.size, height: a.size }}
              className="absolute -bottom-10"
              initial={{ opacity: 0 }}
              animate={{
                x: [0, 150],
                y: [0, -640],
                opacity: [0, 0.35, 0.35, 0],
              }}
              transition={{
                duration: a.dur,
                delay: a.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <path d="M7 17L17 7M8 7h9v9" />
            </motion.svg>
          ))}

          {shapes.map((s, i) => (
            <motion.div
              key={i}
              className={`absolute ${s.pos}`}
              animate={{ y: [0, -16, 0], rotate: [0, 360] }}
              transition={{
                y: {
                  duration: s.dur,
                  delay: s.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: s.dur * 3,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              {s.kind === "circle" && (
                <span
                  className={`block rounded-full border-2 border-vednavy ${s.size ?? ""} ${s.color}`}
                />
              )}
              {s.kind === "square" && (
                <span
                  className={`block rounded-md border-2 border-vednavy ${s.size ?? ""} ${s.color}`}
                />
              )}
              {s.kind === "plus" && (
                <span
                  className={`block font-display text-3xl font-extrabold leading-none ${s.color}`}
                >
                  +
                </span>
              )}
              {s.kind === "star" && <Star className={`h-6 w-6 ${s.color}`} />}
            </motion.div>
          ))}

          <svg
            viewBox="0 0 800 60"
            preserveAspectRatio="none"
            className="absolute bottom-4 left-0 h-14 w-[200%] animate-marquee"
            style={{ animationDuration: "26s" }}
          >
            <path
              d={wave}
              className="fill-none stroke-vedorange opacity-60 [stroke-width:3] [vector-effect:non-scaling-stroke]"
            />
          </svg>
          <svg
            viewBox="0 0 800 60"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 h-14 w-[200%] animate-marquee-reverse"
            style={{ animationDuration: "34s" }}
          >
            <path
              d={wave}
              className="fill-none stroke-vedmagenta opacity-50 [stroke-width:3] [vector-effect:non-scaling-stroke]"
            />
          </svg>
        </>
      )}
    </div>
  );
}