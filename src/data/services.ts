export type Service = {
  slug: string; // future route: /services/<slug>
  pillar: string; // must match an id in site.pillars
  title: string;
  summary: string;
  includes: string[];
  hasPage?: boolean; // set true once /services/[slug] exists
};

// Draft copy. Edit every line to match what you actually deliver.
export const services: Service[] = [
  {
    slug: "website-development",
    pillar: "web-software",
    title: "Website development",
    summary:
      "Fast, responsive websites that present your business properly and turn visitors into inquiries.",
    includes: [
      "Business and company websites",
      "Landing pages",
      "Mobile-friendly design",
      "Contact and inquiry forms",
    ],
  },
  {
    slug: "crm-erp-systems",
    pillar: "web-software",
    title: "CRM and ERP systems",
    summary:
      "Business systems that bring your leads, customers and daily operations into one place.",
    includes: [
      "Lead and customer management",
      "Role-based dashboards",
      "Reports and tracking",
      "Workflow automation",
    ],
  },
  {
    slug: "wordpress-shopify",
    pillar: "web-software",
    title: "WordPress and Shopify solutions",
    summary:
      "Content sites and online stores on platforms you can manage yourself.",
    includes: [
      "WordPress websites",
      "Shopify stores",
      "Theme setup and customization",
      "Product and content setup",
    ],
  },
  {
    slug: "custom-digital-solutions",
    pillar: "web-software",
    title: "Custom digital solutions",
    summary:
      "When off-the-shelf tools don't fit, we build software around the way you work.",
    includes: [
      "Custom web applications",
      "Internal tools",
      "Integrations with your existing tools",
    ],
  },
  {
    slug: "ai-automation",
    pillar: "ai-automation",
    title: "AI and automation development",
    summary:
      "Automation and AI features that take repetitive work off your team.",
    includes: [
      "Workflow automation",
      "AI-powered features",
      "Chatbots and assistants",
      "Integration with your business tools",
    ],
  },
  {
    slug: "branding-design",
    pillar: "brand-creative",
    title: "Branding and design",
    summary:
      "A visual identity and design system that makes your business look consistent and credible.",
    includes: [
      "Logo and brand identity",
      "Marketing creatives",
      "Social media designs",
      "UI design for web and apps",
    ],
  },
  {
    slug: "video-shooting-editing",
    pillar: "brand-creative",
    title: "Video shooting and editing",
    summary:
      "Videos that show your product, service or story clearly, shot and edited in one place.",
    includes: [
      "Promotional and product videos",
      "Short-form reels",
      "Editing and post-production",
    ],
  },
  {
    slug: "digital-marketing",
    pillar: "digital-marketing",
    title: "Digital marketing",
    summary:
      "Campaigns and content that put your business in front of the right people.",
    includes: [
      "Social media marketing",
      "Content and creatives",
      "Lead generation campaigns",
    ],
  },
];