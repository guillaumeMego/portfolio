import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { DotPattern } from "@/components/ui/dot-pattern";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
  fallback: ["system-ui", "arial"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--font-montserrat",
  fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.guillaumeganne.com"),
  title: "Guillaume Ganne – Développeur web & web designer",
  description:
    "Sites vitrines & e-commerce performants. SEO, vitesse, sécurité. Devis en 24 h.",
  robots: { index: true, follow: true },
  // URL canonique auto-référente pour la page d'accueil
  alternates: {
    canonical: "https://www.guillaumeganne.com/",
  },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/",
    title: "Guillaume Ganne – Développeur web & web designer",
    description:
      "Sites vitrines & e-commerce performants. SEO, vitesse, sécurité. Devis en 24 h.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* CSS Critique inline pour Above-the-Fold */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root{--background:220 14% 96%;--foreground:213 31% 10%;--primary:218 35% 26%;--secondary:28 100% 34%;--radius:.5rem;--font-inter:'Inter',system-ui,arial;--font-montserrat:'Montserrat',system-ui,arial}*,*::before,*::after{box-sizing:border-box}html{-webkit-text-size-adjust:100%;font-feature-settings:normal;font-variation-settings:normal;tab-size:4}body{margin:0;line-height:1.5;font-family:var(--font-inter);background-color:hsl(var(--background));color:hsl(var(--foreground));font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.navigation{position:fixed;top:0;width:100%;z-index:50;background-color:rgba(255,255,255,.95);backdrop-filter:blur(10px);border-bottom:1px solid rgba(0,0,0,.1);contain:layout paint size}.hero-container{display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:80vh;width:100%;margin-top:-2rem;contain:layout paint size}.hero-content{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:0;margin-bottom:1rem;max-width:72rem;margin-left:auto;margin-right:auto}.hero-image{flex-shrink:0;display:flex;align-items:center;justify-content:center;height:100%}.hero-image img{width:24rem;height:24rem;object-fit:contain;filter:drop-shadow(0 20px 25px rgba(0,0,0,.15))}.hero-text{display:flex;flex-direction:column;align-items:center;justify-content:center;width:100%;text-align:center;min-height:220px}.hero-title{background:linear-gradient(to right,hsl(var(--primary)),hsl(var(--primary)/0.7));-webkit-background-clip:text;background-clip:text;color:transparent;font-size:2.5rem;font-weight:700;margin-bottom:1rem;max-width:32rem;margin-left:auto;margin-right:auto;line-height:1.1}.hero-description{font-size:1rem;max-width:32rem;margin-left:auto;margin-right:auto;line-height:1.625;font-weight:400;margin-bottom:1.5rem;min-height:4.5rem}.hero-cta{margin-top:0;margin-bottom:6rem;display:flex;flex-direction:column;gap:1rem;align-items:center}.btn-primary{display:inline-flex;align-items:center;padding:1rem 2rem;font-size:1rem;font-weight:500;color:white;background-color:#CC5500;border:1px solid transparent;border-radius:.75rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1);transition:background-color .3s;text-decoration:none}.btn-primary:hover{background-color:#B8440F;color:white}.btn-secondary{display:inline-flex;align-items:center;padding:1rem 2rem;font-size:1rem;font-weight:500;color:#CC5500;background-color:white;border:2px solid #CC5500;border-radius:.75rem;box-shadow:0 10px 15px -3px rgba(0,0,0,.1);transition:all .3s;text-decoration:none}.btn-secondary:hover{background-color:#CC5500;color:white}.min-h-screen{min-height:100vh}.flex{display:flex}.flex-col{flex-direction:column}.relative{position:relative}.bg-hero{background-image:url('/images/fond.webp');background-size:cover;background-position:center;background-repeat:no-repeat;background-attachment:fixed}@media (min-width:768px){.hero-container{margin-top:3rem}.hero-content{flex-direction:row;gap:.5rem}.hero-image{align-self:flex-start}.hero-image img{width:28rem;height:28rem}.hero-text{align-items:flex-start;text-align:left;min-height:340px}.hero-title{font-size:3rem;margin-left:0;margin-right:0}.hero-description{font-size:1.125rem;margin-left:0;margin-right:0}.hero-cta{flex-direction:row;align-items:flex-start}}.will-change-transform{will-change:transform}.transform-gpu{transform:translateZ(0)}.h-96{height:24rem}.w-96{width:24rem}@media (min-width:768px){.md\\:h-\\[28rem\\]{height:28rem}.md\\:w-\\[28rem\\]{width:28rem}}
            `,
          }}
        />

        {/* Préconnections DNS pour améliorer les performances */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        {/* Préchargement de l'image LCP prioritaire */}
        <link
          rel="preload"
          as="image"
          href="/images/mascotte/mascotte-guillaume-ganne-webdesigner.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          as="image"
          href="/images/fond.webp"
          type="image/webp"
        />

        {/* CSS non-critique sera chargé automatiquement par Next.js */}

        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link
          rel="icon"
          href="/logo-guillaume-ganne-webdesigner-angouleme.svg"
          type="image/svg+xml"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="msapplication-TileColor" content="#0f172a" />
        <meta name="msapplication-TileImage" content="/icon-192.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="author" content="Guillaume Ganne" />
        <meta name="copyright" content="© 2024 Guillaume Ganne" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Guillaume Ganne – Création site web Angoulême",
              url: "https://www.guillaumeganne.com/",
              image:
                "https://www.guillaumeganne.com/images/guillaume-ganne-portrait.webp",
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
              url: "https://www.guillaumeganne.com/",
              jobTitle: "Web designer & développeur full-stack",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Angoulême",
                addressCountry: "FR",
              },
              telephone: "+33-6-62-82-69-51",
              sameAs: [
                "https://www.linkedin.com/in/guillaume-ganne/",
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
                  item: "https://www.guillaumeganne.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Projets",
                  item: "https://www.guillaumeganne.com/projets/",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} ${montserrat.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen relative bg-hero">
            <Navigation />
            <main className="flex-grow relative z-10">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>

        {/* Scripts non-critiques chargés après le rendu */}
        <Script src="/js/main.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
