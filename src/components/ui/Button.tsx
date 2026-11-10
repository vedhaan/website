import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "inverse";

type Props = {
  children: ReactNode;
  href?: string;
  external?: boolean;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl border-2 px-6 py-3 text-sm font-bold transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-vednavy disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "border-vednavy bg-vedorange text-vednavy shadow-[5px_5px_0_#0f0f1a] hover:shadow-[2px_2px_0_#0f0f1a]",
  secondary:
    "border-vednavy bg-vedcream text-vednavy shadow-[5px_5px_0_#0f0f1a] hover:bg-white hover:shadow-[2px_2px_0_#0f0f1a]",
  inverse:
    "border-vedcream bg-vedorange text-vednavy shadow-[5px_5px_0_#fff6ee] hover:shadow-[2px_2px_0_#fff6ee] focus-visible:outline-vedcream",
};

export default function Button({
  children,
  href,
  external = false,
  variant = "primary",
  className = "",
  type = "button",
  disabled,
  onClick,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  );
}