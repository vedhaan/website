"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useSyncExternalStore } from "react";
import Button from "@/components/ui/Button";
import { track } from "@/lib/analytics";
import {
  CONSENT_EVENT,
  readConsent,
  writeConsent,
} from "@/components/analytics/consent";

function subscribe(onChange: () => void) {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function ContactClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const a = (e.target as HTMLElement | null)?.closest("a");
      if (!a) return;
      const href = a.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) track("contact_click", { method: "phone" });
      else if (href.startsWith("mailto:"))
        track("contact_click", { method: "email" });
      else if (href.includes("wa.me"))
        track("contact_click", { method: "whatsapp" });
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}

export default function AnalyticsConsent({ gaId }: { gaId: string }) {
  const choice = useSyncExternalStore(subscribe, readConsent, () => "pending");

  if (choice === "pending") return null;

  if (choice === "granted") {
    return (
      <>
        <GoogleAnalytics gaId={gaId} />
        <ContactClickTracker />
      </>
    );
  }

  if (choice === "denied") return null;

  return (
    <motion.div
      role="region"
      aria-label="Cookie consent"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 16, delay: 1 }}
      className="fixed bottom-4 left-4 right-4 z-[60] sm:right-auto sm:max-w-sm"
    >
      <div className="rounded-3xl border-2 border-vednavy bg-vedcream p-5 shadow-[6px_6px_0_#f77b24]">
        <p className="font-display text-lg font-extrabold">
          Can we count your visit?
        </p>
        <p className="mt-2 text-sm leading-relaxed text-vednavy/80">
          We use Google Analytics to see which pages people visit. It sets
          cookies, and it only runs if you accept.{" "}
          <Link
            href="/privacy"
            className="font-bold underline decoration-vedorange decoration-2 underline-offset-2"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="mt-4 flex gap-3">
          <Button onClick={() => writeConsent("granted")}>Accept</Button>
          <Button variant="secondary" onClick={() => writeConsent("denied")}>
            Decline
          </Button>
        </div>
      </div>
    </motion.div>
  );
}