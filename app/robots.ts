import type { MetadataRoute } from "next";

// On force la génération statique (c'est en fait déjà le comportement par défaut)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.guillaumeganne.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/projects/", // Bloquer les anciennes URLs
          "/gallery", // Ancienne page
          "/accessibilite", // Ancienne page
          "/plan-du-site-guillaume-ganne", // Ancienne page
          "/api/",
          "/admin/",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
