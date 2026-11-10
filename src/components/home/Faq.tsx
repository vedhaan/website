"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "@/components/ui/icons";
import { faqs, faqContent } from "@/data/home";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <Section tone="cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Container className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <SectionHeading
                eyebrow={faqContent.eyebrow}
                title={faqContent.title}
              />
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 max-w-sm -rotate-1 rounded-3xl border-2 border-vednavy bg-vedmagenta p-6 shadow-hard">
                <p className="font-display text-2xl font-extrabold leading-tight">
                  Still have questions?
                </p>
                <p className="mt-2 text-sm font-medium">
                  Tell us about your project and we will answer them.
                </p>
                <div className="mt-5">
                  <Button href="/contact" variant="secondary">
                    Contact us <ArrowUpRight />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="space-y-5 lg:col-span-7">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={(i % 4) * 0.05}>
                <div
                  className={`rounded-2xl border-2 border-vednavy shadow-hard transition-colors duration-300 ${
                    isOpen ? "bg-vedorange" : "bg-vedcream hover:bg-vedcreamdeep"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      id={`faq-q-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-a-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left font-display text-lg font-extrabold sm:text-xl"
                    >
                      <span>{f.q}</span>
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-vednavy bg-vedcream transition-transform duration-300 ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          aria-hidden="true"
                        >
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-a-${i}`}
                    role="region"
                    aria-labelledby={`faq-q-${i}`}
                    aria-hidden={!isOpen}
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-base leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}