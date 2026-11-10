const ink = "#0f0f1a";
const paper = "#fff6ee";

export default function ServiceArt({
  id,
  className = "",
}: {
  id: string;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 160 160",
    className,
    "aria-hidden": true,
  } as const;

  if (id === "web-software") {
    return (
      <svg {...common}>
        <rect x="14" y="26" width="132" height="108" rx="14" fill={paper} stroke={ink} strokeWidth="4" />
        <path d="M14 56H146" stroke={ink} strokeWidth="4" />
        <circle cx="32" cy="41" r="4" fill={ink} />
        <circle cx="46" cy="41" r="4" fill={ink} />
        <rect x="30" y="72" width="52" height="46" rx="8" fill={ink} />
        <path d="M96 78h34M96 94h34M96 110h22" stroke={ink} strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }

  if (id === "ai-automation") {
    return (
      <svg {...common}>
        <path d="M80 14L96 64L146 80L96 96L80 146L64 96L14 80L64 64Z" fill={paper} stroke={ink} strokeWidth="4" strokeLinejoin="round" />
        <path d="M128 18L134 36L152 42L134 48L128 66L122 48L104 42L122 36Z" fill={ink} />
      </svg>
    );
  }

  if (id === "brand-creative") {
    return (
      <svg {...common}>
        <circle cx="62" cy="66" r="40" fill={paper} stroke={ink} strokeWidth="4" />
        <circle cx="98" cy="66" r="40" fill="#f77b24" stroke={ink} strokeWidth="4" />
        <circle cx="80" cy="98" r="40" fill={ink} stroke={ink} strokeWidth="4" />
      </svg>
    );
  }

  if (id === "digital-marketing") {
    return (
      <svg {...common}>
        <rect x="20" y="100" width="26" height="40" rx="6" fill={paper} stroke={ink} strokeWidth="4" />
        <rect x="56" y="76" width="26" height="64" rx="6" fill={paper} stroke={ink} strokeWidth="4" />
        <rect x="92" y="52" width="26" height="88" rx="6" fill={paper} stroke={ink} strokeWidth="4" />
        <path d="M24 70L128 24" stroke={ink} strokeWidth="6" strokeLinecap="round" />
        <path d="M100 22H130V50" stroke={ink} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    );
  }

  return null;
}