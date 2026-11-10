import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Float from "@/components/ui/Float";
import Button from "@/components/ui/Button";
import { ArrowUpRight, MapPin, Star } from "@/components/ui/icons";
import { site } from "@/data/site";

export default function MapBlock() {
  const { mapQuery, mapEmbedSrc, address } = site.contact;
  const src =
    mapEmbedSrc ||
    `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapQuery)}`;

  return (
    <Section tone="navy">
      <Star className="absolute left-[6%] top-10 h-8 w-8 animate-spin-slow text-vedorange" />
      <Star className="absolute bottom-16 right-[8%] h-6 w-6 animate-spin-slow text-vedmagenta" />

      <Container>
        <Reveal>
          <SectionHeading onDark eyebrow="Visit us" title="Come say hello" />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mb-20 mt-14 sm:mb-14">
            <div className="h-[26rem] overflow-hidden rounded-[2rem] border-2 border-vedcream bg-vedcream shadow-[10px_10px_0_#f77b24] sm:h-[32rem]">
              <iframe
                title="Vedhaan Technology office location map"
                src={src}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>

            <div className="absolute -top-5 right-6 rotate-3 rounded-2xl border-2 border-vednavy bg-vedmagenta px-4 py-2 font-display text-sm font-extrabold text-vednavy shadow-hard">
              Ring Road, Bhavnagar
            </div>

            <div className="absolute -bottom-14 left-4 max-w-xs -rotate-2 rounded-3xl border-2 border-vednavy bg-vedcream p-5 text-vednavy shadow-hard transition-transform duration-300 hover:rotate-0 sm:-bottom-10 sm:left-8">
              <div className="flex items-start gap-3">
                <Float amp={6} duration={1.6}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-vednavy bg-vedorange">
                    <MapPin className="h-5 w-5" />
                  </span>
                </Float>
                <div>
                  <p className="font-display text-lg font-extrabold leading-tight">
                    Vedhaan Technology
                  </p>
                  <p className="mt-1 text-sm leading-snug text-vednavy/80">
                    {address}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button href={directions} external>
                  Get directions <ArrowUpRight />
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}