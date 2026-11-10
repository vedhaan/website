"use client";

import { ArrowUpRight } from "@/components/ui/icons";

export default function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-vednavy bg-vedcream text-vednavy shadow-[3px_3px_0_#0f0f1a] transition-all duration-200 hover:-translate-y-0.5 hover:bg-vedorange"
    >
      <ArrowUpRight className="h-4 w-4 -rotate-45" />
    </button>
  );
}