import { Star } from "@/components/ui/icons";
import { services } from "@/data/services";

type Variant = "solid" | "outline";

function Track({ words, variant }: { words: string[]; variant: Variant }) {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
      {words.map((w) => (
        <div key={w} className="flex items-center gap-8 sm:gap-12">
          <span
            className={`whitespace-nowrap font-display text-5xl font-extrabold uppercase leading-[1.05] transition-colors duration-300 sm:text-7xl lg:text-8xl ${
              variant === "solid"
                ? "text-vednavy hover:text-vedorange"
                : "text-transparent [-webkit-text-stroke:2px_#0f0f1a] hover:text-vedmagenta"
            }`}
          >
            {w}
          </span>
          <Star
            className={`h-8 w-8 shrink-0 animate-spin-slow sm:h-12 sm:w-12 ${
              variant === "solid" ? "text-vedorange" : "text-vedmagenta"
            }`}
          />
        </div>
      ))}
    </div>
  );
}

function Row({
  words,
  variant,
  reverse = false,
  duration,
  offset = "0s",
}: {
  words: string[];
  variant: Variant;
  reverse?: boolean;
  duration: string;
  offset?: string;
}) {
  return (
    <div className="overflow-hidden py-1">
      <div
        style={{ animationDuration: duration, animationDelay: offset }}
        className={`flex w-max group-hover:[animation-play-state:paused] ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        <Track words={words} variant={variant} />
        <Track words={words} variant={variant} />
      </div>
    </div>
  );
}

export default function Marquee() {
  const titles = services.map((s) => s.title);
  const reversed = [...titles].reverse();

  return (
    <div
      aria-hidden="true"
      className="group border-b-2 border-vednavy bg-vedcreamdeep py-4"
    >
      <Row words={titles} variant="solid" duration="60s" />
      <Row
        words={reversed}
        variant="outline"
        reverse
        duration="70s"
        offset="-25s"
      />
    </div>
  );
}