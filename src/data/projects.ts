export type ProjectCategory =
  | "Web and Software"
  | "AI and Automation"
  | "Brand and Creative"
  | "Digital Marketing";

export const projectCategories: ProjectCategory[] = [
  "Web and Software",
  "AI and Automation",
  "Brand and Creative",
  "Digital Marketing",
];

export type Project = {
  slug: string; // URL: /portfolio/<slug>
  title: string;
  client: string; // use "Confidential client" if you can't name them
  category: ProjectCategory;
  year: string;
  summary: string; // one or two lines, shown on cards
  tech: string[];
  image: string; // "/projects/<slug>.webp" (1080x1080)
  duration?: string; // e.g. "6 weeks"
  overview?: string; // longer description, blank lines make paragraphs
  services?: string[]; // slugs from services.ts, e.g. "website-development"
  challenge?: string;
  solution?: string;
  features?: { title: string; text: string }[];
  stats?: { value: string; label: string }[]; // real numbers only
  results?: string[]; // real outcomes only
  timeline?: { title: string; text: string }[];
  gallery?: string[]; // extra images
  testimonial?: { quote: string; name: string; role?: string }; // real only
  liveUrl?: string;
  featured?: boolean; // featured projects show on Home
};

export const projects: Project[] = [
  {
    slug: "happy-tots-pre-school",
    title: "Happy Tots Pre School",
    client: "Happy Tots Pre School",
    category: "Web and Software",
    year: "2025",
    summary:
      "A website for Happy Tots Pre School with an admin panel where teachers add students, add homework and see attendance.",
    tech: ["React", "Tailwind CSS", "MongoDB"],
    image: "/projects/happytots.png",
    featured: true,
    duration: "1 month",
    overview:
      "Happy Tots Pre School needed a website and a way to move its paperwork online. We built the school's website along with an admin panel for teachers, so everyday records are kept digitally.",
    services: ["website-development", "custom-digital-solutions"],
    challenge: "The school was keeping too many physical records.",
    solution:
      "We built a website and an admin panel for teachers, where they can add students, add homework and see attendance digitally.",
    features: [
      {
        title: "Add students",
        text: "Teachers can add students to the system from the admin panel.",
      },
      {
        title: "Add homework",
        text: "Teachers can add homework for their students.",
      },
      {
        title: "See attendance",
        text: "Teachers can see attendance records in one place.",
      },
    ],
    results: [
      "The school stopped using physical registers and moved to digital solutions.",
    ],
  },
  {
    slug: "2930-decor",
    title: "29.30 Decor",
    client: "29.30 Decor",
    category: "Web and Software",
    year: "2025",
    summary: "A website that gives 29.30 Decor a digital presence.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/projects/2930-decor.png",
    featured: true,
    overview:
      "29.30 Decor needed a digital presence, so we created their website.",
    services: ["website-development"],
  },
  {
    slug: "perfect-safety",
    title: "Perfect Safety",
    client: "Perfect Safety",
    category: "Web and Software",
    year: "2025",
    summary:
      "A WordPress website that gives Perfect Safety, a fire safety services business in Ahmedabad, a digital presence.",
    tech: ["WordPress"],
    image: "/projects/perfect-safety.png",
    featured: true,
    overview:
      "Perfect Safety, based in Ahmedabad, wanted a digital presence for its fire safety services. We built their website on WordPress and completed it in 2025.",
    services: ["website-development", "wordpress-shopify"],
  },
];