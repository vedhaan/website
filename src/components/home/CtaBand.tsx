import Link from "next/link";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import ContactCard from "@/components/ui/ContactCard";
import TypewriterHeading from "@/components/ui/TypewriterHeading";
import { ArrowUpRight, Mail, Phone, Star } from "@/components/ui/icons";
import { site } from "@/data/site";

export default function CtaBand() {
  return (
    <Section tone="orange" compact className="border-b-0">
      <Star className="absolute left-[6%] top-8 h-8 w-8 animate-spin-slow text-vednavy" />
      <Star className="absolute bottom-10 left-[46%] h-6 w-6 animate-spin-slow text-vedcream" />

      <Container className="relative">
        <TypewriterHeading
          text="Have an idea? Let’s build it."
          className="max-w-4xl font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-8xl"
        />

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
            <Button href="/contact" variant="secondary">
              Start a project <ArrowUpRight />
            </Button>
            <ContactCard
              label="Call us"
              value={site.contact.phone}
              href={site.contact.phoneHref}
              icon={<Phone className="h-5 w-5" />}
            />
            <ContactCard
              label="Email us"
              value={site.contact.email}
              href={`mailto:${site.contact.email}`}
              icon={<Mail className="h-5 w-5" />}
            />
          </div>
        </Reveal>

        <Link
          href="/contact"
          aria-label="Start a project"
          className="absolute right-4 top-1/2 hidden h-44 w-44 -translate-y-1/2 items-center justify-center xl:flex"
        >
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full animate-spin-slow"
            aria-hidden="true"
          >
            <defs>
              <path
                id="ctaCircle"
                d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
              />
            </defs>
            <circle cx="100" cy="100" r="98" fill="#0f0f1a" />
            <text
              fontSize="17"
              fontWeight="800"
              fill="#fff6ee"
              textLength="440"
              lengthAdjust="spacing"
            >
              <textPath href="#ctaCircle">
                START A PROJECT • START A PROJECT •
              </textPath>
            </text>
          </svg>
          <ArrowUpRight className="relative h-10 w-10 text-vedorange" />
        </Link>
      </Container>
    </Section>
  );
}