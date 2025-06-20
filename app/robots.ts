import type { MetadataRoute } from "next";

// On force la génération statique (c'est en fait déjà le comportement par défaut)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.guillaumeganne.com";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
