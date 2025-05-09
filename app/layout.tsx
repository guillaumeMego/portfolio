import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

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
        {/* Favicon basique */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />

        {/* SVG favicon pour une meilleure qualité */}
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />

        {/* Pour iOS */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Pour le manifest */}
        <link rel="manifest" href="/manifest.webmanifest" />

        {/* Pour Windows */}
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-TileImage" content="/icon-144.png" />

        {/* Thème */}
        <meta name="theme-color" content="#0f172a" />
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
