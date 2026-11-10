import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import ServiceArt from "@/components/home/ServiceArt";
import { site } from "@/data/site";

const looks = [
  "bg-vedorange text-vednavy",
  "bg-vedmagenta text-vednavy",
  "bg-vedpink text-white",
  "bg-vedcoral text-vednavy",
];

export default function Services() {
  return (
    <Section tone="cream">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Everything you need to grow online"
          />
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-2">
          {site.pillars.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <Link
                href={`/services#${p.id}`}
                className={`group relative block h-full overflow-hidden rounded-3xl border-2 border-vednavy p-7 shadow-hard transition-all duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-hard-lg sm:p-8 ${looks[i % looks.length]}`}
              >
                <ServiceArt
                  id={p.id}
                  className="pointer-events-none absolute -bottom-8 -right-6 h-44 w-44 rotate-6 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110"
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between">
                    <span className="font-display text-base font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-vednavy bg-vedcream text-vednavy transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-xs text-base font-medium leading-relaxed">
                    {p.blurb}
                  </p>
                  <ul className="mt-6 flex max-w-[80%] flex-wrap gap-2">
                    {p.services.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border-2 border-current px-3 py-1 text-xs font-bold"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}