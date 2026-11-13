import type { MetadataRoute } from "next";
import { industrySolutions } from "@/lib/industries";
import { solutionCategories } from "@/lib/solutions";
import { getAbsoluteUrl } from "@/lib/seo";

const staticRoutes = [
  "/",
  "/services",
  "/industries",
  "/about",
  "/partners",
  "/faq",
  "/contact",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((route) => ({
      url: getAbsoluteUrl(route),
    })),
    ...solutionCategories.map(({ slug }) => ({
      url: getAbsoluteUrl(`/services/${slug}`),
    })),
    ...industrySolutions.map(({ slug }) => ({
      url: getAbsoluteUrl(`/industries/${slug}`),
    })),
  ];
}