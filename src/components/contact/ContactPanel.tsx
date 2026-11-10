"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { ArrowUpRight, Chat, Mail, MapPin, Phone, Star } from "@/components/ui/icons";
import { site } from "@/data/site";

const steps = [
  "You send us your details",
  "We review your request and get back to you",
  "We discuss the scope and share a quote",
];

function Row({
  label,
  value,
  href,
  icon,
  external = false,
  copy = false,
  small = false,
}: {
  label: string;
  value: string;
  href: string;
  icon: ReactNode;
  external?: boolean;
  copy?: boolean;
  small?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  async function copyValue() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="group flex items-center border-b-2 border-vedcream/15 last:border-b-0">
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="relative flex min-w-0 flex-1 items-center gap-4 overflow-hidden px-2 py-5 sm:px-3"
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 origin-left scale-x-0 bg-vedorange transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
        <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-vedcream text-vedorange transition-colors duration-300 group-hover:border-vednavy group-hover:bg-vednavy">
          {icon}
        </span>
        <span className="relative z-10 min-w-0 transition-colors duration-300 group-hover:text-vednavy">
          <span className="block text-[11px] font-bold uppercase tracking-wider opacity-60">
            {label}
          </span>
          <span
            className={`block [overflow-wrap:anywhere] font-display font-extrabold leading-tight ${
              small ? "text-base" : "text-lg sm:text-xl"
            }`}
          >
            {value}
          </span>
        </span>
        <ArrowUpRight className="relative z-10 ml-auto h-6 w-6 shrink-0 transition-all duration-300 group-hover:rotate-45 group-hover:text-vednavy" />
      </a>
      {copy && (
        <button
          type="button"
          onClick={copyValue}
          aria-label={`Copy ${label.toLowerCase()}`}
          className="ml-2 shrink-0 rounded-lg border-2 border-vedcream/40 px-2.5 py-1.5 text-xs font-bold text-vedcream transition-colors hover:bg-vedcream hover:text-vednavy"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      )}
    </div>
  );
}

export default function ContactPanel() {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.contact.mapQuery)}`;

  return (
    <Reveal>
      <div className="relative rounded-[2rem] border-2 border-vednavy bg-vednavy p-7 text-vedcream shadow-[8px_8px_0_#f77b24] sm:p-10">
        <div className="absolute -top-5 right-6 flex rotate-3 items-center gap-2 rounded-full border-2 border-vednavy bg-vedmagenta px-4 py-1.5 font-display text-sm font-extrabold text-vednavy">
          <Star className="h-4 w-4 animate-spin-slow" />
          Say hello
        </div>

        <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-4xl">
          Prefer to reach us directly?
        </h2>

        <div className="mt-8">
          <Row
            label="Call us"
            value={site.contact.phone}
            href={site.contact.phoneHref}
            icon={<Phone className="h-5 w-5" />}
            copy
          />
          <Row
            label="WhatsApp"
            value={site.contact.phone}
            href={site.contact.whatsappHref}
            icon={<Chat className="h-5 w-5" />}
            external
          />
          <Row
            label="Email us"
            value={site.contact.email}
            href={`mailto:${site.contact.email}`}
            icon={<Mail className="h-5 w-5" />}
            copy
            small
          />
          <Row
            label="Visit us"
            value={site.contact.address}
            href={directions}
            icon={<MapPin className="h-5 w-5" />}
            external
            small
          />
        </div>

        <div className="mt-10 border-t-2 border-vedcream/15 pt-8">
          <p className="font-display text-xl font-extrabold">What happens next</p>
          <ol className="relative mt-6 space-y-6 pl-12">
            <motion.span
              aria-hidden="true"
              className="absolute left-4 top-2 h-[calc(100%-1.5rem)] w-0.5 origin-top bg-vedorange"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            {steps.map((s, i) => (
              <motion.li
                key={s}
                className="relative"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.25, duration: 0.4 }}
              >
                <span className="absolute -left-12 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-vedorange bg-vednavy font-display text-sm font-extrabold text-vedorange">
                  {i + 1}
                </span>
                <span className="block pt-1 text-sm font-medium leading-snug text-vedcream/90">
                  {s}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </Reveal>
  );
}