import type { ReactNode } from "react";

type Tone = "cream" | "deep" | "navy" | "orange";

const tones: Record<Tone, string> = {
  cream: "bg-vedcream text-vednavy",
  deep: "bg-vedcreamdeep text-vednavy",
  navy: "bg-vednavy text-vedcream",
  orange: "bg-vedorange text-vednavy",
};

export default function Section({
  tone = "cream",
  id,
  compact = false,
  className = "",
  children,
}: {
  tone?: Tone;
  id?: string;
  compact?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative overflow-x-clip border-b-2 border-vednavy ${
        compact ? "py-14 sm:py-20" : "py-20 sm:py-28"
      } ${tones[tone]} ${className}`}
    >
      {children}
    </section>
  );
}