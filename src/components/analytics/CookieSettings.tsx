"use client";

import { writeConsent } from "@/components/analytics/consent";

export default function CookieSettings() {
  return (
    <button
      type="button"
      onClick={() => writeConsent(null)}
      className="transition-colors hover:text-vedmagenta"
    >
      Cookie settings
    </button>
  );
}