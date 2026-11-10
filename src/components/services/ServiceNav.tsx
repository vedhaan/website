"use client";

import { useEffect, useState } from "react";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";

export default function ServiceNav() {
  const [active, setActive] = useState<string>(site.pillars[0].id);

  useEffect(() => {
    const els = site.pillars
      .map((p) => document.getElementById(p.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[calc(5rem+2px)] z-40 border-b-2 border-vednavy bg-vedcream/95 backdrop-blur">
      <Container>
        <nav
          aria-label="Service categories"
          className="no-scrollbar flex gap-3 overflow-x-auto py-3"
        >
          {site.pillars.map((p, i) => (
            <a
              key={p.id}
              href={`#${p.id}`}
              aria-current={active === p.id ? "true" : undefined}
              className={`shrink-0 rounded-full border-2 border-vednavy px-4 py-1.5 text-sm font-bold transition-all duration-200 ${
                active === p.id
                  ? "bg-vedorange shadow-[3px_3px_0_#0f0f1a]"
                  : "bg-vedcream hover:bg-vedcreamdeep"
              }`}
            >
              {String(i + 1).padStart(2, "0")} {p.title}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}