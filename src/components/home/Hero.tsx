import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import HeroHeading from "@/components/home/HeroHeading";
import HeroArt from "@/components/home/HeroArt";
import { features } from "@/data/site";

export default function Hero() {
  return (
    <Section tone="cream" className="bg-dots pb-16 pt-36 sm:pb-24 sm:pt-44">
      <Container className="grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-vednavy bg-vedcreamdeep px-4 py-1.5 text-xs font-bold">
              <span className="h-2.5 w-2.5 rounded-full bg-vedorange" />
              Based in Bhavnagar, Gujarat
            </span>
          </Reveal>

          <HeroHeading />

          <Reveal delay={0.9}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-vednavy/80">
              Websites, automation, branding, video and marketing for
              businesses that want to grow.
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button href="/contact">
                Start a project <ArrowUpRight />
              </Button>
              <Button
                href={features.portfolio ? "/portfolio" : "/services"}
                variant="secondary"
              >
                {features.portfolio ? "See our work" : "Our services"}
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <HeroArt />
        </div>
      </Container>
    </Section>
  );
}