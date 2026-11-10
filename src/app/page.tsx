import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import Services from "@/components/home/Services";
import Work from "@/components/home/Work";
import WhyChoose from "@/components/home/WhyChoose";
import Clients from "@/components/home/Clients";
import AboutTeaser from "@/components/home/AboutTeaser";
import Faq from "@/components/home/Faq";
import CtaBand from "@/components/home/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Work />
      <WhyChoose />
      <Clients />
      <AboutTeaser />
      <Faq />
      <CtaBand />
    </>
  );
}