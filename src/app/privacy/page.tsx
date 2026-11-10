import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";
import { legalUpdated, privacySections } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Vedhaan Technology collects, uses and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information we collect through this website, how we use it, and the choices you have."
      updated={legalUpdated}
      sections={privacySections}
    />
  );
}