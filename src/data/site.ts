export const features: { portfolio: boolean } = {
  portfolio: false, // set to true when the Portfolio pages are ready to publish
};

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const site = {
  name: "Vedhaan Technology",
  tagline: "Turning Ideas into Digital Success",
  title: "Vedhaan Technology | Turning Ideas into Digital Success",
  description:
    "Vedhaan Technology builds websites, AI and automation tools, CRM/ERP systems, brands, videos and digital marketing for growing businesses.",
  url: "https://vedhaan.com", // TODO: replace with your real domain
  formspreeId: "xoeevoke", // TODO: from formspree.io, used on the Contact page
  contact: {
    phone: "+91 97732 91162",
    phoneHref: "tel:+919773291162",
    email: "vedhaantechnology@gmail.com",
    address:
      "103, Kurshnakunj Complex, Opp. Malhar Dhosa, Ring Road, Bhavnagar",
    whatsappHref:
      "https://wa.me/919773291162?text=Hi%20Vedhaan%20Technology%2C%20I%20want%20to%20discuss%20a%20project.",
    mapQuery:
      "103, Kurshnakunj Complex, Opp. Malhar Dhosa, Ring Road, Bhavnagar",
    mapEmbedSrc: "", // optional: paste the src from Google Maps > Share > Embed a map
  },
  nav: navItems.filter((n) => features.portfolio || n.href !== "/portfolio"),
  stats: [
    { value: "5+", label: "Years in the IT market" },
    { value: "30+", label: "Projects delivered" },
  ],
  // Draft blurbs. We will rewrite the copy when we design the Services page.
  pillars: [
    {
      id: "web-software",
      title: "Web and Software",
      blurb: "Websites and business systems built to run your operations.",
      services: [
        "Website development",
        "CRM and ERP systems",
        "WordPress and Shopify solutions",
        "Custom digital solutions",
      ],
    },
    {
      id: "ai-automation",
      title: "AI and Automation",
      blurb: "Automation that removes repetitive work from your team.",
      services: ["AI and automation development"],
    },
    {
      id: "brand-creative",
      title: "Brand and Creative",
      blurb: "Identity, design and video that make you look the part.",
      services: ["Branding and design", "Video shooting and editing"],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      blurb: "Campaigns that turn attention into inquiries.",
      services: ["Digital marketing"],
    },
  ],
};