import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { features, site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date("2026-11-08");

  const pages = [
    "",
    "/services",
    ...(features.portfolio ? ["/portfolio"] : []),
    "/about",
    "/contact",
    "/privacy",
    "/terms",
  ];

  return [
    ...pages.map((p) => ({
      url: `${base}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.7,
    })),
    ...(features.portfolio
      ? projects.map((pr) => ({
          url: `${base}/portfolio/${pr.slug}`,
          lastModified: now,
          changeFrequency: "monthly" as const,
          priority: 0.6,
        }))
      : []),
  ];
}