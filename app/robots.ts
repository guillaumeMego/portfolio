import type { MetadataRoute } from "next";

// On force la génération statique (c'est en fait déjà le comportement par défaut)
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://guillaumeganne.com/sitemap.xml",
  };
}
