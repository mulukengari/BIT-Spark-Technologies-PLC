import type { MetadataRoute } from "next";

const base = "https://bitspark.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/products",
    "/services",
    "/industries",
    "/partners",
    "/tenders",
    "/contact",
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
