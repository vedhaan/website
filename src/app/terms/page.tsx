import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { legalUpdated, termsSections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that apply when you use the Vedhaan Technology website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="Please read these terms before using our website. They explain the rules for using the site and how we handle our services."
      updated={legalUpdated}
      sections={termsSections}
    />
  );
}