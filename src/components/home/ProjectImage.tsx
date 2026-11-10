"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectImage({
  src,
  alt,
  label,
  fallback,
  sizes = "(min-width: 1024px) 480px, (min-width: 640px) 45vw, 90vw",
  priority = false,
}: {
  src: string;
  alt: string;
  label: string;
  fallback: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`absolute inset-0 flex items-center justify-center ${fallback}`}
      >
        <span className="font-display text-8xl font-extrabold text-vednavy">
          {label.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      onError={() => setFailed(true)}
    />
  );
}