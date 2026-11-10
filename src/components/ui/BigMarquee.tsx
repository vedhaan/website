import { Star } from "@/components/ui/icons";

const words = ["Let’s talk", "Let’s build", "Let’s grow"];

function Row() {
  return (
    <div className="flex shrink-0 items-center gap-10 pr-10">
      {words.map((w, i) => (
        <div key={w} className="flex items-center gap-10">
          <span
            className={`whitespace-nowrap font-display text-7xl font-extrabold uppercase sm:text-9xl ${
              i % 2 === 0
                ? "text-transparent [-webkit-text-stroke:2px_#0f0f1a]"
                : "text-vednavy"
            }`}
          >
            {w}
          </span>
          <Star className="h-10 w-10 shrink-0 text-vednavy sm:h-14 sm:w-14" />
        </div>
      ))}
    </div>
  );
}

export default function BigMarquee() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-b-2 border-vednavy bg-vedorange py-8"
    >
      <div
        style={{ animationDuration: "45s" }}
        className="flex w-max animate-marquee"
      >
        <Row />
        <Row />
      </div>
    </div>
  );
}