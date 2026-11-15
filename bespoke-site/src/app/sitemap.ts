import type { MetadataRoute } from "next";
import { industrySolutions } from "@/lib/industries";
import { solutionCategories } from "@/lib/solutions";
import { getAbsoluteUrl } from "@/lib/seo";

const contentLastModified = new Date("2026-11-13T00:00:00.000Z");

const staticRoutes = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.9 },
  { path: "/industries", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "yearly", priority: 0.6 },
  { path: "/partners", changeFrequency: "monthly", priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly", priority: 0.5 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.2 },
  { path: "/products", changeFrequency: "monthly", priority: 0.7 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.6 },
  { path: "/insights", changeFrequency: "monthly", priority: 0.6 },
  { path: "/careers", changeFrequency: "monthly", priority: 0.4 },
  { path: "/request-quote", changeFrequency: "yearly", priority: 0.6 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.2 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: getAbsoluteUrl(route.path),
      lastModified: contentLastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...solutionCategories.map(({ slug }) => ({
      url: getAbsoluteUrl(`/services/${slug}`),
      lastModified: contentLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...industrySolutions.map(({ slug }) => ({
      url: getAbsoluteUrl(`/industries/${slug}`),
      lastModified: contentLastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}