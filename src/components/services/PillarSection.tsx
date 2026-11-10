import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";
import { ArrowUpRight, Check, Star } from "@/components/ui/icons";
import ServiceArt from "@/components/home/ServiceArt";
import { pillarLooks } from "@/components/services/looks";
import type { Service } from "@/data/services";
import { site } from "@/data/site";

type Pillar = (typeof site.pillars)[number];

export default function PillarSection({
  pillar,
  index,
  services,
}: {
  pillar: Pillar;
  index: number;
  services: Service[];
}) {
  const look = pillarLooks[index % pillarLooks.length];
  const flip = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <Section
      id={pillar.id}
      tone={index % 2 === 0 ? "cream" : "deep"}
      className="scroll-mt-40"
    >
      <Container>
        <Reveal>
          <div
            className={`bg-dots relative overflow-hidden rounded-[2rem] border-2 border-vednavy p-8 shadow-hard-lg sm:p-12 ${look.block}`}
          >
            <Star className="absolute right-6 top-6 h-7 w-7 animate-spin-slow text-vednavy" />

            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className={`lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
                <span
                  aria-hidden="true"
                  className="block font-display text-[7rem] font-extrabold leading-none text-transparent [-webkit-text-stroke:3px_#0f0f1a] sm:text-[10rem]"
                >
                  {number}
                </span>
                <h2 className="mt-2 font-display text-4xl font-extrabold leading-[1.02] sm:text-6xl">
                  {pillar.title}
                </h2>
                <p className="mt-4 max-w-lg text-lg font-medium leading-relaxed">
                  {pillar.blurb}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {pillar.services.map((s) => (
                    <li
                      key={s}
                      className="rounded-full border-2 border-current px-3 py-1 text-xs font-bold"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
                <Float amp={10} duration={5}>
                  <div className="mx-auto w-56 rotate-6 rounded-3xl border-2 border-vednavy bg-vedcream p-6 shadow-hard transition-transform duration-300 hover:rotate-0 sm:w-64">
                    <ServiceArt id={pillar.id} className="h-full w-full" />
                  </div>
                </Float>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-7 md:grid-cols-2">
          {services.map((s, i) => {
            const fullWidth = i === services.length - 1 && services.length % 2 === 1;

            return (
              <Reveal
                key={s.slug}
                delay={(i % 2) * 0.08}
                className={fullWidth ? "md:col-span-2" : ""}
              >
                <article
                  className={`group flex h-full flex-col rounded-3xl border-2 border-vednavy bg-white p-7 shadow-hard transition-all duration-300 hover:-translate-y-1.5 hover:-rotate-[0.6deg] sm:p-8 ${look.shadow}`}
                >
                  <span
                    className={`self-start rounded-full border-2 border-vednavy px-3 py-1 text-xs font-bold ${look.tag}`}
                  >
                    {index + 1}.{i + 1}
                  </span>

                  <h3 className="mt-5 font-display text-2xl font-extrabold sm:text-3xl">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-vednavy/80">
                    {s.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {s.includes.map((item) => (
                      <li
                        key={item}
                        className="inline-flex items-center gap-2 rounded-xl border-2 border-vednavy bg-vedcreamdeep px-3 py-1.5 text-xs font-bold"
                      >
                        <span
                          className={`flex h-4 w-4 items-center justify-center rounded-full border border-vednavy ${look.tag}`}
                        >
                          <Check className="h-2.5 w-2.5" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3 pt-7">
                    <Link
                      href={`/contact?service=${s.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl border-2 border-vednavy bg-vedorange px-4 py-2 text-sm font-bold text-vednavy shadow-[3px_3px_0_#0f0f1a] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_#0f0f1a]"
                    >
                      Get a quote <ArrowUpRight />
                    </Link>
                    {s.hasPage && (
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-bold underline decoration-2 underline-offset-4 transition-colors hover:text-vedmagenta"
                      >
                        Learn more <ArrowUpRight />
                      </Link>
                    )}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}