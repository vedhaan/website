import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";
import Button from "@/components/ui/Button";
import RotatingBadge from "@/components/ui/RotatingBadge";
import { ArrowUpRight } from "@/components/ui/icons";
import ProjectImage from "@/components/home/ProjectImage";
import ScrollText from "@/components/about/ScrollText";
import { founder } from "@/data/about";

export default function FounderSection() {
  const parts = founder.name.split(" ");
  const first = parts[0];
  const rest = parts.slice(1).join(" ");
  const [lead, ...more] = founder.note;

  return (
    <Section id="founder" tone="navy" className="scroll-mt-24">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-10 hidden select-none font-display text-[16rem] font-extrabold uppercase leading-none text-transparent [-webkit-text-stroke:2px_rgba(255,246,238,0.12)] lg:block"
      >
        {first}
      </span>

      <Container className="relative grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <Float amp={8} duration={6}>
              <div className="relative mx-auto w-full max-w-sm">
                <div className="relative aspect-[4/5] overflow-hidden rounded-b-[2rem] rounded-t-[12rem] border-2 border-vedcream bg-vedcreamdeep shadow-[10px_10px_0_#f77b24] [&_img]:object-top">
                  <ProjectImage
                    src={founder.photo}
                    alt={`${founder.name}, ${founder.role} of Vedhaan Technology`}
                    label={founder.name}
                    fallback="bg-vedmagenta"
                    sizes="(min-width: 1024px) 420px, 90vw"
                  />
                </div>

                <div className="absolute -left-4 top-16 -rotate-6 rounded-full border-2 border-vednavy bg-vedorange px-4 py-1.5 font-display text-sm font-extrabold text-vednavy shadow-hard">
                  {founder.role}
                </div>

                <RotatingBadge
                  id="founderCircle"
                  tone="orange"
                  fontSize={15}
                  text="FOUNDER OF VEDHAAN TECHNOLOGY • "
                  className="absolute -bottom-8 -right-6 hidden h-32 w-32 sm:block"
                />
              </div>
            </Float>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-vedcream px-4 py-1 text-xs font-bold uppercase tracking-wider">
              Meet the founder
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-6xl font-extrabold leading-[0.95] sm:text-7xl lg:text-8xl">
              {first}
              {rest && (
                <>
                  <br />
                  <span className="text-vedorange">{rest}</span>
                </>
              )}
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-vedcream/80">
              {founder.intro}
            </p>
          </Reveal>

          {lead && (
            <div className="mt-8 space-y-5">
              <ScrollText
                text={lead}
                className="font-display text-2xl font-extrabold leading-snug sm:text-3xl"
              />
              {more.map((p, i) => (
                <Reveal key={p} delay={i * 0.08}>
                  <p className="text-lg leading-relaxed text-vedcream/80">{p}</p>
                </Reveal>
              ))}
            </div>
          )}

          {founder.quote && (
            <Reveal>
              <figure className="mt-10 max-w-xl -rotate-1 rounded-3xl border-2 border-vedcream bg-vedmagenta p-6 text-vednavy shadow-[6px_6px_0_#f77b24]">
                <blockquote className="font-display text-xl font-extrabold leading-snug sm:text-2xl">
                  &ldquo;{founder.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-bold">
                  {founder.name}, {founder.role}
                </figcaption>
              </figure>
            </Reveal>
          )}

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/contact" variant="inverse">
                Say hello to {first} <ArrowUpRight />
              </Button>
              {founder.linkedin && (
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-bold text-vedorange underline decoration-2 underline-offset-4 transition-colors hover:text-vedcream"
                >
                  LinkedIn <ArrowUpRight />
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}