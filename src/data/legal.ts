import { site } from "@/data/site";
import type { LegalSection } from "@/components/legal/LegalPage";

export const legalUpdated = "24 October 2026";

export const privacySections: LegalSection[] = [
  {
    id: "who",
    title: "Who we are",
    body: [
      `This website is operated by ${site.name}, an IT company based at ${site.contact.address}.`,
      `You can reach us at ${site.contact.email} or ${site.contact.phone}.`,
    ],
  },
  {
    id: "collect",
    title: "Information we collect",
    body: [
      "We only collect information you choose to give us, plus basic technical data your browser sends automatically.",
      [
        "Contact form: your name, email address, phone number (optional), budget range (optional), the services you are interested in, and your message.",
        "Direct contact: anything you share when you call, email or message us on WhatsApp.",
        "Technical data: basic information such as IP address, browser type and pages visited, which our hosting provider may record in server logs.",
      ],
    ],
  },
  {
    id: "use",
    title: "How we use your information",
    body: [
      "We use your information to:",
      [
        "Respond to your inquiry.",
        "Prepare quotes and proposals.",
        "Communicate with you about projects you ask us to do.",
        "Keep this website secure and working properly.",
      ],
      "We do not sell your personal information.",
    ],
  },
  {
    id: "share",
    title: "Who we share it with",
    body: [
      "We use trusted services to run this website and handle inquiries. Your information may be processed by:",
      [
        "Formspree, which receives contact form submissions and forwards them to us by email.",
        "Google, through our email inbox and the embedded Google Map on the Contact page.",
        "Our website hosting provider.",
        "WhatsApp, only if you choose to message us there.",
      ],
      "We may also disclose information when the law requires it.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies and analytics",
    body: [
      "This website does not currently use advertising or analytics cookies.",
      "Third-party content, such as the embedded Google Map, may set its own cookies when you view it. Their handling is governed by their own policies.",
    ],
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: [
      "We keep inquiry details for as long as we need them to respond to you and deliver any work you ask for, and for as long as the law requires. You can ask us to delete your details at any time.",
    ],
  },
  {
    id: "choices",
    title: "Your choices",
    body: [
      "You can contact us to ask what information we hold about you, to correct it, or to have it deleted.",
      `Email ${site.contact.email} and we will respond.`,
    ],
  },
  {
    id: "security",
    title: "Security",
    body: [
      "We take reasonable steps to protect your information. No method of transmission or storage online is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    id: "children",
    title: "Children",
    body: [
      "This website is not aimed at children, and we do not knowingly collect information from them.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this policy from time to time. The date at the top of this page shows when it was last changed.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    body: [`Questions about this policy? Write to us at ${site.contact.email}.`],
  },
];

export const termsSections: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these terms",
    body: [
      `By using this website you agree to these terms. If you do not agree, please do not use the site. The website is operated by ${site.name}.`,
    ],
  },
  {
    id: "use",
    title: "Using the website",
    body: [
      "You agree to use this website lawfully. You must not:",
      [
        "Try to gain unauthorized access to the site or its systems.",
        "Send spam or harmful content through our contact form.",
        "Copy or scrape the site in a way that harms it or its users.",
      ],
    ],
  },
  {
    id: "services",
    title: "Our services",
    body: [
      "Information on this website describes our services in general terms. It is not a binding offer.",
      "Any work we do for you is governed by a written quote, proposal or agreement agreed with you separately.",
    ],
  },
  {
    id: "ip",
    title: "Content and intellectual property",
    body: [
      `The text, design and code of this website belong to ${site.name} unless stated otherwise. You may not reproduce them without our written permission.`,
      "Names, logos and images of clients and projects belong to their respective owners and appear with their permission.",
    ],
  },
  {
    id: "links",
    title: "Third-party links and content",
    body: [
      "This website may link to or embed third-party services, such as Google Maps. We do not control them and are not responsible for their content or practices.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    body: [
      "We try to keep the information on this website accurate and up to date, but we make no guarantee that it is complete or error free. The website is provided as is.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: [
      "To the extent the law allows, we are not liable for any loss arising from your use of this website or from relying on its content.",
    ],
  },
  {
    id: "law",
    title: "Governing law",
    body: [
      "These terms are governed by the laws of India. Courts in Bhavnagar, Gujarat have jurisdiction, subject to applicable law.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: [
      "We may update these terms from time to time. Continuing to use the website after a change means you accept the updated terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    body: [`Questions about these terms? Write to us at ${site.contact.email}.`],
  },
];