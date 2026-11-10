import { Star } from "@/components/ui/icons";

export default function RotatingBadge({
  id,
  text,
  tone = "navy",
  fontSize = 16,
  className = "",
}: {
  id: string;
  text: string;
  tone?: "navy" | "orange";
  fontSize?: number;
  className?: string;
}) {
  const bg = tone === "navy" ? "#0f0f1a" : "#f77b24";
  const ink = tone === "navy" ? "#fff6ee" : "#0f0f1a";

  return (
    <div aria-hidden="true" className={`pointer-events-none relative ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <defs>
          <path
            id={id}
            d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
          />
        </defs>
        <circle cx="100" cy="100" r="98" fill={bg} stroke="#0f0f1a" strokeWidth="3" />
        <text
          fontSize={fontSize}
          fontWeight="800"
          fill={ink}
          textLength="440"
          lengthAdjust="spacing"
        >
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <Star
        className={`absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 ${
          tone === "navy" ? "text-vedorange" : "text-vednavy"
        }`}
      />
    </div>
  );
}