import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { CanonicalHead } from "@/components/CanonicalHead";
import { DotPattern } from "@/components/ui/dot-pattern";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guillaumeganne.com"),
  title: "Web designer & développeur full-stack – Guillaume Ganne, Angoulême",
  description:
    "Portfolio de Guillaume Ganne, web designer et développeur full-stack à Angoulême. Sites vitrines, e-commerce et web-apps sur-mesure optimisés SEO local.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/",
  },
  keywords: [
    "développeur web",
    "web designer",
    "full stack",
    "react",
    "next.js",
    "angoulême",
    "création site web",
  ],
  authors: [{ name: "Guillaume Ganne" }],
  creator: "Guillaume Ganne",
  publisher: "Guillaume Ganne",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.guillaumeganne.com",
    title: "Web designer & développeur full-stack – Guillaume Ganne, Angoulême",
    description:
      "Portfolio de Guillaume Ganne, web designer et développeur full-stack à Angoulême. Sites vitrines, e-commerce et web-apps sur-mesure optimisés SEO local.",
    siteName: "Guillaume Ganne",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web designer & développeur full-stack – Guillaume Ganne, Angoulême",
    description:
      "Portfolio de Guillaume Ganne, web designer et développeur full-stack à Angoulême. Sites vitrines, e-commerce et web-apps sur-mesure optimisés SEO local.",
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
        {/* Charset */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Canonical (fixe pour la home) */}
        <link rel="canonical" href="https://www.guillaumeganne.com/" />
        {/* Canonical (si dynamique avec usePathname, voir en dessous) */}
        <CanonicalHead />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-TileImage" content="/icon-144.png" />
        <meta name="theme-color" content="#0f172a" />

        {/* Preload font */}
        <link
          rel="preload"
          href="/_next/static/media/a34f9d1faa5f3315-s.p.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
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
      <body className={inter.className}>
        <Script src="/js/main.js" strategy="lazyOnload" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen relative">
            <DotPattern className="absolute inset-0 opacity-50 z-0" />
            <Navigation />
            <main className="flex-grow mb-10 relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
