import { site } from "@/data/site";

export const whyChoose = [
  {
    title: "One team, every service",
    text: "Websites, automation, branding, video and marketing under one roof, so you don't juggle five different vendors.",
    look: "bg-vedorange hover:bg-vedorange",
  },
  {
    title: "5+ years in the IT market",
    text: "Experience across websites, business systems and digital marketing, built project by project.",
    look: "bg-vedmagenta hover:bg-vedmagenta",
  },
  {
    title: "30+ projects delivered",
    text: "Real projects for real businesses, from websites to full business systems.",
    look: "bg-vedcoral hover:bg-vedcoral",
  },
  {
    title: "Built for your business",
    text: "Custom solutions designed around how you work, not one-size-fits-all templates.",
    look: "bg-vedorange hover:bg-vedorange",
  },
  {
    title: "A local team in Bhavnagar",
    text: "Visit our Ring Road office or call us directly. You always know where to find us.",
    look: "bg-vedmagenta hover:bg-vedmagenta",
  },
  {
    title: "Clear communication",
    text: "You talk to the people building your project, not a middleman.",
    look: "bg-vedcoral hover:bg-vedcoral",
  },
];

export type Client = {
  name: string;
  logo?: string;
  url?: string;
};

export const clientsContent = {
  eyebrow: "Our clients",
  title: "Businesses we have worked with",
};

export const clients: Client[] = [
  { name: "29 30Decor", logo: "/clients/29-30decor.png" },
  { name: "Artistrybyisha", logo: "/clients/artistrybyisha.png" },
  { name: "Constructionguru", logo: "/clients/constructionguru.png" },
  { name: "Filiate", logo: "/clients/Filiate.webp" },
  { name: "Granth", logo: "/clients/granth.png" },
  { name: "Happytots", logo: "/clients/happytots.png" },
  { name: "Haus Of Hetal", logo: "/clients/haus_of_hetal.png" },
  { name: "Health Pravaha", logo: "/clients/health-pravaha.png" },
  { name: "Konceptkart", logo: "/clients/konceptkart.png" },
  { name: "Perfectsafety", logo: "/clients/perfectsafety.png" },
  { name: "Perfect Safety", logo: "/clients/perfect-safety.png" },
  { name: "Pkvisuals", logo: "/clients/pkvisuals.webp" },
  { name: "Rudragreenship", logo: "/clients/rudragreenship.png" },
  { name: "Shivom", logo: "/clients/shivom.png" },
  { name: "Smc", logo: "/clients/smc.jpg" },
  { name: "Tandooriyat", logo: "/clients/tandooriyat.png" },
  { name: "Thedigifundas", logo: "/clients/thedigifundas.png" },
  { name: "Vasu Sculpture", logo: "/clients/vasu-sculpture.png" },
  { name: "Worldofsugandh", logo: "/clients/worldofsugandh.png" },
  { name: "YSR", logo: "/clients/YSR.jpg" },
];

export const faqContent = {
  eyebrow: "FAQ",
  title: "Frequently asked questions",
};

export const faqs = [
  {
    q: "What services does Vedhaan Technology offer?",
    a: "We build websites, CRM and ERP systems, WordPress and Shopify solutions, and custom digital solutions. We also do AI and automation development, branding and design, video shooting and editing, and digital marketing.",
  },
  {
    q: "Where are you located?",
    a: `Our office is at ${site.contact.address}.`,
  },
  {
    q: "How do I start a project with you?",
    a: "Fill in the contact form, call us, or send an email. Tell us what you want to build and we will get back to you to discuss it.",
  },
  {
    q: "How much does a website or software project cost?",
    a: "It depends on what you need. A simple website and a custom business system are very different projects. Share your requirements with us and we will give you a quote.",
  },
  {
    q: "How long will my project take?",
    a: "Timelines depend on scope and how quickly content and feedback come in. After we understand your requirements, we will give you a realistic timeline.",
  },
  {
    q: "Do you work with WordPress and Shopify?",
    a: "Yes. WordPress and Shopify solutions are part of our services, alongside fully custom builds.",
  },
];