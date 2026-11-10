"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// The server and the first render use the fallback year, then the browser
// swaps in the real current year. No Date is read during prerendering.
export default function CurrentYear({ fallback = 2026 }: { fallback?: number }) {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => fallback,
  );

  return <>{year}</>;
}