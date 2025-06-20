// app/sitemap.ts
export const dynamic = "force-static";
// ou bien : export const revalidate = 0;

import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.guillaumeganne.com";

  // Pages statiques
  const staticRoutes = [
    "",
    "/a-propos",
    "/contact",
    "/tarif",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cookies",
    "/creation-site-web-angouleme",
  ];

  const staticPages = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Pages de projets
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages];
}
