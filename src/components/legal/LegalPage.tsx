import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export type LegalSection = {
  id: string;
  title: string;
  body: (string | string[])[];
};

export default function LegalPage({
  title,
  intro,
  updated,
  sections,
}: {
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Section tone="cream" compact className="bg-dots pt-36 sm:pt-44">
        <Container>
          <Reveal>
            <span className="inline-block rounded-full border-2 border-vednavy bg-vedcreamdeep px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Legal
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-vednavy/80">
              {intro}
            </p>
            <span className="mt-6 inline-block -rotate-1 rounded-full border-2 border-vednavy bg-vedorange px-4 py-1.5 text-sm font-bold">
              Last updated: {updated}
            </span>
          </Reveal>
        </Container>
      </Section>

      <Section tone="deep">
        <Container className="grid gap-10 lg:grid-cols-12">
          <aside className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <nav
              aria-label="On this page"
              className="rounded-3xl border-2 border-vednavy bg-vedcream p-6 shadow-hard"
            >
              <p className="font-display text-lg font-extrabold">On this page</p>
              <ol className="mt-4 space-y-1 text-sm font-bold">
                {sections.map((s, i) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="flex gap-3 rounded-lg px-2 py-1.5 transition-colors hover:bg-vedorange"
                    >
                      <span className="text-vednavy/50">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-6 lg:col-span-8">
            {sections.map((s, i) => (
              <Reveal key={s.id}>
                <section
                  id={s.id}
                  className="scroll-mt-28 rounded-3xl border-2 border-vednavy bg-white p-7 shadow-hard sm:p-9"
                >
                  <h2 className="flex items-center gap-3 font-display text-2xl font-extrabold">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange text-sm">
                      {i + 1}
                    </span>
                    {s.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-vednavy/85">
                    {s.body.map((b, j) =>
                      Array.isArray(b) ? (
                        <ul key={j} className="list-disc space-y-1.5 pl-5">
                          {b.map((li) => (
                            <li key={li}>{li}</li>
                          ))}
                        </ul>
                      ) : (
                        <p key={j}>{b}</p>
                      ),
                    )}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}