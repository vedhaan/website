import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import FounderSection from "@/components/about/FounderSection";
import AboutStats from "@/components/about/AboutStats";
import AboutValues from "@/components/about/AboutValues";
import TeamSection from "@/components/about/TeamSection";
import Clients from "@/components/home/Clients";
import CtaBand from "@/components/home/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "Vedhaan Technology is an IT company from Bhavnagar building websites, business systems, brands and campaigns for growing businesses.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <FounderSection />
      <AboutStats />
      <AboutValues />
      <TeamSection />
      <Clients />
      <CtaBand />
    </>
  );
}