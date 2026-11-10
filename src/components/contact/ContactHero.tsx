"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { Chat, Mail, Phone } from "@/components/ui/icons";
import ChatLoop from "@/components/contact/ChatLoop";
import { site } from "@/data/site";

const ease = [0.22, 1, 0.36, 1] as const;

const actions = [
  {
    label: "Call us",
    href: site.contact.phoneHref,
    icon: <Phone className="h-5 w-5" />,
    look: "bg-vedorange",
    external: false,
  },
  {
    label: "WhatsApp",
    href: site.contact.whatsappHref,
    icon: <Chat className="h-5 w-5" />,
    look: "bg-vedmagenta",
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${site.contact.email}`,
    icon: <Mail className="h-5 w-5" />,
    look: "bg-vedcoral",
    external: false,
  },
];

export default function ContactHero() {
  return (
    <Section tone="cream" className="bg-dots pb-20 pt-36 sm:pb-24 sm:pt-44">
      <Container className="grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="inline-block rounded-full border-2 border-vednavy bg-vedcreamdeep px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
              Contact us
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
              Let&rsquo;s talk about your{" "}
              <span className="relative mt-2 inline-block -rotate-1 px-3 pb-1">
                <motion.span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left rounded-2xl border-2 border-vednavy bg-vedorange"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.65, delay: 0.6, ease }}
                />
                <span className="relative">project</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-vednavy/80">
              Tell us what you want to build. Tap a button to reach us right
              away, or scroll down and send the details.
            </p>
          </Reveal>

          <div className="mt-9 flex flex-wrap gap-4">
            {actions.map((a, i) => (
              <Reveal key={a.label} delay={0.26 + i * 0.08}>
                <a
                  href={a.href}
                  {...(a.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`group inline-flex items-center gap-3 rounded-2xl border-2 border-vednavy px-5 py-3 font-display text-lg font-extrabold shadow-hard transition-all duration-200 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_#0f0f1a] ${a.look}`}
                >
                  <span className="transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                    {a.icon}
                  </span>
                  {a.label}
                </a>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <ChatLoop />
        </div>
      </Container>
    </Section>
  );
}