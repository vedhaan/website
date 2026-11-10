import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import BackToTop from "@/components/layout/BackToTop";
import { ArrowUpRight, Chat, Mail, Phone } from "@/components/ui/icons";
import { site } from "@/data/site";
import CurrentYear from "@/components/layout/CurrentYear";
import CookieSettings from "@/components/analytics/CookieSettings";

const stripe = ["bg-vedorange", "bg-vedmagenta", "bg-vedpink", "bg-vedcoral"];
const dots = ["bg-vedorange", "bg-vedmagenta", "bg-vedpink", "bg-vedcoral"];

const underline =
  "bg-[linear-gradient(#f77b24,#f77b24)] bg-[length:0%_3px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-300 hover:bg-[length:100%_3px]";

const roundBtn =
  "flex h-10 w-10 items-center justify-center rounded-full border-2 border-vednavy bg-vedcream text-vednavy shadow-[3px_3px_0_#0f0f1a] transition-all duration-200 hover:-translate-y-1 hover:rotate-6 hover:bg-vedorange";

function ColTitle({ children }: { children: string }) {
  return (
    <div>
      <h3 className="font-display text-xs font-extrabold uppercase tracking-widest">
        {children}
      </h3>
      <span className="mt-2 block h-1 w-8 rounded-full bg-vedorange" />
    </div>
  );
}

export default function Footer() {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.contact.mapQuery)}`;

  return (
    <footer className="border-t-2 border-vednavy bg-vedcream text-vednavy">
      <div aria-hidden="true" className="flex h-1.5">
        {stripe.map((c) => (
          <span key={c} className={`flex-1 ${c}`} />
        ))}
      </div>

      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 py-12 lg:grid-cols-12">
        <div className="col-span-2 min-w-0 lg:col-span-4">
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className="inline-block transition-transform duration-300 hover:-rotate-2 hover:scale-105"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt={site.name} className="h-12 w-auto" />
          </Link>

          <p className="mt-5 max-w-xs font-display text-lg font-extrabold leading-snug">
            {site.tagline}.
          </p>

          <div className="mt-6">
            <Button href="/contact">
              Start a project <ArrowUpRight />
            </Button>
          </div>
        </div>

        <nav className="min-w-0 lg:col-span-2" aria-label="Explore">
          <ColTitle>Explore</ColTitle>
          <ul className="mt-5 space-y-3 text-sm font-bold">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={underline}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="min-w-0 lg:col-span-3" aria-label="Services">
          <ColTitle>Services</ColTitle>
          <ul className="mt-5 space-y-3 text-sm font-bold">
            {site.pillars.map((p, i) => (
              <li key={p.id}>
                <Link
                  href={`/services#${p.id}`}
                  className="group flex items-center gap-2.5"
                >
                  <span
                    className={`h-3 w-3 shrink-0 rounded-full border-2 border-vednavy transition-transform duration-300 group-hover:scale-150 ${dots[i % dots.length]}`}
                  />
                  <span className={underline}>{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-2 min-w-0 lg:col-span-3">
          <ColTitle>Contact</ColTitle>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={site.contact.phoneHref}
                className={`font-bold ${underline}`}
              >
                {site.contact.phone}
              </a>
            </li>
            <li className="[overflow-wrap:anywhere]">
              <a
                href={`mailto:${site.contact.email}`}
                className={`font-bold ${underline}`}
              >
                {site.contact.email}
              </a>
            </li>
            <li className="text-xs leading-relaxed text-vednavy/70">
              {site.contact.address}
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-bold text-vednavy underline decoration-vedorange decoration-2 underline-offset-4 transition-colors hover:text-vedmagenta"
              >
                Get directions
              </a>
            </li>
          </ul>

          <div className="mt-5 flex gap-2.5">
            <a
              href={site.contact.phoneHref}
              aria-label="Call us"
              className={roundBtn}
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={site.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className={roundBtn}
            >
              <Chat className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${site.contact.email}`}
              aria-label="Email us"
              className={roundBtn}
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>

      <div className="border-t-2 border-vednavy">
        <Container className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4 text-xs font-medium">
          <span>
            &copy; <CurrentYear /> {site.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-5 font-bold">
            <Link href="/privacy" className="transition-colors hover:text-vedmagenta">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-vedmagenta">
              Terms
            </Link>
            {process.env.NEXT_PUBLIC_GA_ID && <CookieSettings />}
            <BackToTop />
          </div>
        </Container>
      </div>
    </footer>
  );
}