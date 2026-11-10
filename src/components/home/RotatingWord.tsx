"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  { text: "websites", look: "bg-vedorange text-vednavy" },
  { text: "CRM and ERP systems", look: "bg-vedmagenta text-vednavy" },
  { text: "AI automations", look: "bg-vedpink text-white" },
  { text: "brands", look: "bg-vedcoral text-vednavy" },
  { text: "videos", look: "bg-vedorange text-vednavy" },
  { text: "marketing campaigns", look: "bg-vedmagenta text-vednavy" },
];

export default function RotatingWord() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  const w = words[i];

  return (
    <p className="mt-8 flex flex-wrap items-center gap-3 font-display text-2xl font-extrabold sm:text-3xl">
      <span className="sr-only">
        We build websites, CRM and ERP systems, AI automations, brands, videos
        and marketing campaigns.
      </span>
      <span aria-hidden="true">We build</span>
      <span
        aria-hidden="true"
        className={`relative inline-flex overflow-hidden rounded-xl border-2 border-vednavy px-4 py-1 shadow-hard transition-colors duration-300 ${w.look}`}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={w.text}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block whitespace-nowrap"
          >
            {w.text}
          </motion.span>
        </AnimatePresence>
      </span>
    </p>
  );
}