import { sendGAEvent } from "@next/third-parties/google";

export function track(
  name: string,
  params: Record<string, string | number> = {},
) {
  if (typeof window === "undefined") return;
  const w = window as unknown as { dataLayer?: unknown[] };
  if (!Array.isArray(w.dataLayer)) return;
  sendGAEvent("event", name, params);
}