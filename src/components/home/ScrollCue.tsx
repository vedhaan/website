"use client";

import { motion } from "framer-motion";

export default function ScrollCue() {
  return (
    <button
      type="button"
      aria-label="Scroll down"
      onClick={() =>
        window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" })
      }
      className="absolute z-10 bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-bold sm:flex"
    >
      <span className="flex h-10 w-6 justify-center rounded-full border-2 border-vednavy pt-2">
        <motion.span
          className="block h-2 w-1.5 rounded-full bg-vednavy"
          animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
      </span>
      Scroll
    </button>
  );
}