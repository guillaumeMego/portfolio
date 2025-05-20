// app/sitemap.ts
export const dynamic = "force-static";
// ou bien : export const revalidate = 0;

import { MetadataRoute } from "next";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://guillaumeganne.com";

  // 1) Routes statiques
  const staticPaths: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/a-propos`, lastModified: new Date() },
    { url: `${baseUrl}/tarif`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];

  // 2) Routes dynamiques pour les projets
  const projectPaths: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.date + "-01"),
  }));

  return [...staticPaths, ...projectPaths];
}
