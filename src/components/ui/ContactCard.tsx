"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export default function ContactCard({
  label,
  value,
  href,
  icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="group flex w-full items-center rounded-2xl border-2 border-vednavy bg-vedcream shadow-hard transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#0f0f1a] sm:w-auto">
      <a href={href} className="flex min-w-0 flex-1 items-center gap-3 py-2.5 pl-3 pr-2">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-vednavy text-vedorange transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
          {icon}
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] font-bold uppercase leading-none tracking-wider text-vednavy/60">
            {label}
          </span>
          <span className="mt-1 block break-words font-display text-sm font-extrabold leading-tight sm:text-base">
            {value}
          </span>
        </span>
      </a>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label.toLowerCase()}`}
        className="mr-2.5 rounded-lg border-2 border-vednavy bg-vedcreamdeep px-2.5 py-1.5 text-xs font-bold transition-colors hover:bg-vedorange"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}