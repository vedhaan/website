import type { Metadata } from "next";
import ServicesHero from "@/components/services/ServicesHero";
import ServiceNav from "@/components/services/ServiceNav";
import PillarSection from "@/components/services/PillarSection";
import Faq from "@/components/home/Faq";
import CtaBand from "@/components/home/CtaBand";
import { site } from "@/data/site";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website development, AI and automation, branding and design, video, digital marketing, CRM/ERP systems and more from Vedhaan Technology.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServiceNav />

      {site.pillars.map((p, i) => (
        <PillarSection
          key={p.id}
          pillar={p}
          index={i}
          services={services.filter((s) => s.pillar === p.id)}
        />
      ))}

      <Faq />
      <CtaBand />
    </>
  );
}