import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, Star } from "@/components/ui/icons";
import ProjectImage from "@/components/home/ProjectImage";
import { team } from "@/data/about";

const shadows = [
  "shadow-[8px_8px_0_#f77b24]",
  "shadow-[8px_8px_0_#ea5580]",
  "shadow-[8px_8px_0_#b14b90]",
  "shadow-[8px_8px_0_#d45b64]",
];
const fallbacks = ["bg-vedorange", "bg-vedmagenta", "bg-vedpink", "bg-vedcoral"];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("");
}

export default function TeamSection() {
  if (team.length === 0) return null;

  return (
    <Section tone="navy">
      <Star className="absolute right-[7%] top-10 h-8 w-8 animate-spin-slow text-vedorange" />
      <Star className="absolute bottom-10 left-[5%] h-6 w-6 animate-spin-slow text-vedmagenta" />

      <Container>
        <Reveal>
          <SectionHeading
            onDark
            eyebrow="Our team"
            title="The people behind the work"
          />
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal
              key={m.name}
              delay={(i % 4) * 0.08}
              className="lg:[&:nth-child(even)]:mt-10"
            >
              <article className="group">
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-3xl border-2 border-vedcream bg-vedcreamdeep transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-1 [&_img]:grayscale [&_img]:transition-[filter] [&_img]:duration-500 group-hover:[&_img]:grayscale-0 ${shadows[i % shadows.length]}`}
                >
                  {m.photo ? (
                    <ProjectImage
                      src={m.photo}
                      alt={`${m.name}, ${m.role}`}
                      label={m.name}
                      fallback={fallbacks[i % fallbacks.length]}
                      sizes="(min-width: 1024px) 280px, 45vw"
                    />
                  ) : (
                    <div
                      className={`absolute inset-0 flex items-center justify-center ${fallbacks[i % fallbacks.length]}`}
                    >
                      <span className="font-display text-8xl font-extrabold text-vednavy">
                        {initials(m.name)}
                      </span>
                    </div>
                  )}

                  <span className="absolute left-3 top-3 z-10 -rotate-[4deg] rounded-full border-2 border-vednavy bg-vedcream px-3 py-1 text-xs font-bold text-vednavy transition-transform duration-300 group-hover:rotate-3 group-hover:scale-110">
                    {m.role}
                  </span>

                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${m.name} on LinkedIn`}
                      className="absolute inset-x-0 bottom-0 z-10 flex translate-y-full items-center justify-center gap-2 border-t-2 border-vedcream bg-vednavy py-3 text-sm font-bold text-vedcream transition-transform duration-300 focus-visible:translate-y-0 group-hover:translate-y-0"
                    >
                      Connect on LinkedIn <ArrowUpRight />
                    </a>
                  )}
                </div>

                <h3 className="mt-6 font-display text-xl font-extrabold sm:text-2xl">
                  {m.name}
                </h3>
                {m.bio && (
                  <p className="mt-1 text-sm leading-snug text-vedcream/70">
                    {m.bio}
                  </p>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}