import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Site moche = clients qui fuient | Guillaume Ganne",
  description:
    "Un site daté ou mal conçu fait fuir vos clients en 3 secondes. Découvrez comment une refonte moderne et optimisée SEO peut doubler vos conversions.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/blog/site-moche-clients-fuient/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "article",
    url: "https://www.guillaumeganne.com/blog/site-moche-clients-fuient/",
    title: "Site moche = clients qui fuient | Guillaume Ganne",
    description:
      "Un site daté ou mal conçu fait fuir vos clients en 3 secondes. Découvrez comment une refonte moderne et optimisée SEO peut doubler vos conversions.",
    siteName: "Guillaume Ganne",
    images: [
      {
        url: "/images/vitrine.webp",
        width: 1200,
        height: 630,
        alt: "Refonte site web moderne - Design et conversions optimisées",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Site moche = clients qui fuient | Guillaume Ganne",
    description:
      "Un site daté ou mal conçu fait fuir vos clients en 3 secondes. Découvrez comment une refonte moderne et optimisée SEO peut doubler vos conversions.",
  },
};
