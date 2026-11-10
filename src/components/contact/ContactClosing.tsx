import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowUpRight, Chat, Phone, Star } from "@/components/ui/icons";
import { site } from "@/data/site";

const words = ["Let’s talk", "Let’s build", "Let’s grow"];

const navyBtn =
  "inline-flex items-center gap-2 rounded-xl border-2 border-vednavy bg-vednavy px-5 py-3 text-sm font-bold text-vedcream shadow-[5px_5px_0_#fff6ee] transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#fff6ee]";

function TickerRow() {
  return (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {words.map((w, i) => (
        <div key={w} className="flex items-center gap-8">
          <span
            className={`whitespace-nowrap font-display text-2xl font-extrabold uppercase ${
              i % 2 === 0
                ? "text-vednavy"
                : "text-transparent [-webkit-text-stroke:1.5px_#0f0f1a]"
            }`}
          >
            {w}
          </span>
          <Star className="h-5 w-5 shrink-0 text-vednavy" />
        </div>
      ))}
    </div>
  );
}

export default function ContactClosing() {
  return (
    <>
      <Section tone="orange" className="border-b-0">
        <Star className="absolute left-[5%] top-10 h-8 w-8 animate-spin-slow text-vednavy" />
        <Star className="absolute bottom-10 right-[40%] h-6 w-6 animate-spin-slow text-vedcream" />

        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <Reveal>
              <span className="inline-block rounded-full border-2 border-vednavy bg-vedcream px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                Ready when you are
              </span>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
                Got an idea? Let&rsquo;s make it real.
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-lg text-lg font-medium leading-relaxed">
                Send us the details and we will get back to you. Prefer to
                talk? Call or message us.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="#contact-form" variant="secondary">
                  Fill in the form <ArrowUpRight />
                </Button>
                <a href={site.contact.phoneHref} className={navyBtn}>
                  <Phone className="h-4 w-4" />
                  Call us
                </a>
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navyBtn}
                >
                  <Chat className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0 lg:col-span-5">
            <Reveal delay={0.2}>
              <div
                aria-hidden="true"
                className="relative mx-auto aspect-[4/3] w-full max-w-md -rotate-2 overflow-hidden rounded-[2rem] border-2 border-vednavy bg-vednavy shadow-[10px_10px_0_#fff6ee] transition-transform duration-500 hover:rotate-0"
              >
                <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full">
                  <path
                    d="M30 240 C 120 40, 260 280, 370 60"
                    fill="none"
                    stroke="#fff6ee"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="6 12"
                    opacity="0.6"
                  />
                  <g className="motion-reduce:hidden">
                    <path
                      d="M22 0L-14 -13L-6 0L-14 13Z"
                      fill="#f77b24"
                      stroke="#fff6ee"
                      strokeWidth="3"
                      strokeLinejoin="round"
                    />
                    <path d="M-6 0L22 0" stroke="#fff6ee" strokeWidth="2" />
                    <animateMotion
                      dur="5s"
                      repeatCount="indefinite"
                      path="M30 240 C 120 40, 260 280, 370 60"
                      rotate="auto"
                    />
                  </g>
                </svg>

                <span className="absolute bottom-4 left-4 rounded-full border-2 border-vedcream bg-vednavy px-3 py-1 text-xs font-extrabold text-vedcream">
                  You
                </span>
                <span className="absolute right-4 top-4 rounded-full border-2 border-vednavy bg-vedorange px-3 py-1 text-xs font-extrabold text-vednavy">
                  Vedhaan
                </span>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <div
        aria-hidden="true"
        className="overflow-hidden border-t-2 border-vednavy bg-vedorange py-4"
      >
        <div
          style={{ animationDuration: "35s" }}
          className="flex w-max animate-marquee"
        >
          <TickerRow />
          <TickerRow />
        </div>
      </div>
    </>
  );
}