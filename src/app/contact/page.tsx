import type { Metadata } from "next";
import { Suspense } from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import ContactHero from "@/components/contact/ContactHero";
import ContactPanel from "@/components/contact/ContactPanel";
import ContactForm from "@/components/contact/ContactForm";
import MapBlock from "@/components/contact/MapBlock";
import ContactClosing from "@/components/contact/ContactClosing";
import Faq from "@/components/home/Faq";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Vedhaan Technology about your project. Call, WhatsApp, email or send a message through our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <Section tone="deep">
        <Container className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-5">
            <ContactPanel />
          </div>
          <div id="contact-form" className="min-w-0 scroll-mt-28 lg:col-span-7">
            <Suspense fallback={null}>
              <ContactForm />
            </Suspense>
          </div>
        </Container>
      </Section>

      <MapBlock />
      <Faq />
      <ContactClosing />
    </>
  );
}