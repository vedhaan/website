export const story = {
  eyebrow: "Our story",
  title: "Built in Bhavnagar, built to deliver",
  // Draft built only from facts you gave me. Replace with your real origin
  // story: why you started, what you wanted to fix, how it grew.
  paragraphs: [
    "Vedhaan Technology is an IT company based in Bhavnagar, Gujarat. We help businesses turn ideas into working websites, business systems, brands and campaigns.",
    "For more than five years we have worked across web development, CRM and ERP systems, WordPress and Shopify, AI and automation, branding, video and digital marketing. Over 30 projects have gone live.",
  ],
};

export type Milestone = { year: string; title: string; text: string };

// Real years and events only. Empty array hides the timeline.
// Example: { year: "2021", title: "Vedhaan Technology starts", text: "..." },
export const milestones: Milestone[] = [
  { year: "2020", title: "Sample milestone one", text: "Sample description for previewing." },
  { year: "2022", title: "Sample milestone two", text: "Sample description for previewing." },
  { year: "2024", title: "Sample milestone three", text: "Sample description for previewing." },
];

// Extra real numbers shown next to "5+ years" and "30+ projects".
// Example: { value: "20+", label: "Happy clients" },
export const extraStats: { value: string; label: string }[] = [];

// Draft values. Keep only the ones that are genuinely true for you.
export const values = [
  {
    title: "Built to fit",
    text: "We design around how your business works, not the other way around.",
  },
  {
    title: "Honest advice",
    text: "If something is not worth building, we will tell you.",
  },
  {
    title: "Delivered, not just discussed",
    text: "Projects go live. We measure ourselves by what ships.",
  },
  {
    title: "Local roots",
    text: "A team in Bhavnagar you can meet, call or visit.",
  },
];

export type TeamMember = {
  name: string;
  role: string;
  photo?: string; // "/team/name.webp", about 800x1000, same crop for everyone
  bio?: string; // one short line
  linkedin?: string;
};

// Empty array hides the Team section.
export const team: TeamMember[] = [
  { name: "Sample Person One", role: "Role", bio: "Short sample line." },
  { name: "Sample Person Two", role: "Role", bio: "Short sample line." },
  { name: "Sample Person Three", role: "Role", bio: "Short sample line." },
  { name: "Sample Person Four", role: "Role", bio: "Short sample line." },
];  

export type Founder = {
  name: string;
  role: string;
  photo: string; // "/team/stuti-pandya.webp", about 900x1100, face in the upper half
  intro: string;
  note: string[]; // her own words, 1 to 3 short paragraphs. Empty hides them.
  quote: string; // one real sentence from her. Empty hides it.
  linkedin: string; // full URL. Empty hides it.
};

export const founder: Founder = {
  name: "Stuti Pandya",
  role: "Founder",
  photo: "/team/stuti-pandya.webp",
  intro:
    "Founder of Vedhaan Technology, an IT company based in Bhavnagar, Gujarat.",
  note: [],
  quote: "",
  linkedin: "",
};