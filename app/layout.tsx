import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { CanonicalHead } from "@/components/CanonicalHead";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://guillaumeganne.com"),
  title: {
    default: "Guillaume Ganne | Développeur Web & Vidéaste",
    template: "%s | Guillaume Ganne",
  },
  description:
    "Portfolio de Guillaume Ganne – Développeur Web Full-Stack & Vidéaste à Angoulême. Création de sites internet sur-mesure, WordPress, e-commerce et contenus vidéo optimisés SEO local.",
  keywords: [
    "développeur web",
    "vidéaste",
    "full stack",
    "react",
    "next.js",
    "angoulême",
    "création vidéo",
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
    url: "https://guillaumeganne.com",
    title: "Guillaume Ganne | Développeur Web & Vidéaste",
    description:
      "Portfolio de Guillaume Ganne - Développeur Web Full Stack et Vidéaste basé à Angoulême",
    siteName: "Guillaume Ganne",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guillaume Ganne | Développeur Web & Vidéaste",
    description:
      "Portfolio de Guillaume Ganne - Développeur Web Full Stack et Vidéaste basé à Angoulême",
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
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navigation />
            <main className="flex-grow mb-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
