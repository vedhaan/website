"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function Float({
  children,
  className = "",
  amp = 10,
  duration = 4,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  amp?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -amp, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}