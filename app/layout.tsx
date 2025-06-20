import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { ClientHead } from "@/components/ui/client-head";
import { DotPattern } from "@/components/ui/dot-pattern";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guillaumeganne.com"),
  title: "création site web angoulême | guillaume ganne, dev & designer",
  description:
    "Création de site web à Angoulême : vitrines, e-commerce et apps sur mesure avec SEO local. Devis gratuit en 24 h.",
  alternates: { canonical: "https://www.guillaumeganne.com" },
  keywords: [
    "création site web angoulême",
    "développeur web",
    "web designer",
    "full stack",
    "wordpress",
    "next.js",
    "angoulême",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.guillaumeganne.com",
    title: "création site web angoulême | guillaume ganne, dev & designer",
    description:
      "Création de site web à Angoulême : vitrines, e-commerce et apps sur mesure avec SEO local.",
    siteName: "Guillaume Ganne",
    images: "/og-image.webp",
  },
  twitter: {
    card: "summary_large_image",
    title: "création site web angoulême | guillaume ganne, dev & designer",
    description:
      "Création de site web à Angoulême : vitrines, e-commerce et apps sur mesure avec SEO local.",
    images: ["/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ClientHead />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-TileImage" content="/icon-144.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          name="keywords"
          content="création site web angoulême, développeur web, web designer, full stack, wordpress, next.js, angoulême"
        />
        <link
          rel="alternate"
          href="https://www.guillaumeganne.com"
          hrefLang="fr-FR"
        />
        <link
          rel="alternate"
          href="https://www.guillaumeganne.com"
          hrefLang="x-default"
        />
        <meta name="geo.region" content="FR-16" />
        <meta name="geo.placename" content="Angoulême" />
        <meta name="geo.position" content="45.648377;0.156237" />
        <meta name="ICBM" content="45.648377, 0.156237" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Guillaume Ganne" />
        <meta name="copyright" content="© 2024 Guillaume Ganne" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Guillaume Ganne – Création site web Angoulême",
              url: "https://www.guillaumeganne.com",
              image: "https://www.guillaumeganne.com/og-image.webp",
              telephone: "+33-6-62-82-69-51",
              address: {
                "@type": "PostalAddress",
                streetAddress: "28 impasse des roseaux",
                addressLocality: "Fléac",
                postalCode: "16730",
                addressCountry: "FR",
              },
              areaServed: "Angoulême, Charente",
              makesOffer: {
                "@type": "Offer",
                category: "WebDesign",
                description:
                  "Sites vitrines, e-commerce, applications Web – optimisation SEO local.",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Guillaume Ganne",
              url: "https://www.guillaumeganne.com",
              jobTitle: "Web designer & développeur full-stack",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Angoulême",
                addressCountry: "FR",
              },
              telephone: "+33-6-00-00-00-00",
              sameAs: [
                "https://www.linkedin.com/in/guillaume-ganne",
                "https://github.com/GuillaumeG",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Accueil",
                  item: "https://www.guillaumeganne.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Projets",
                  item: "https://www.guillaumeganne.com#projets",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${montserrat.variable}`}>
        <Script src="/js/main.js" strategy="lazyOnload" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div
            className="flex flex-col min-h-screen relative"
            style={{
              backgroundImage: "url(/images/fond.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Navigation />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
