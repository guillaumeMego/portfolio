import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Guillaume Ganne",
  description:
    "Contactez Guillaume Ganne pour un devis ou des informations sur la création de votre site web à Angoulême.",
  keywords: ["contact", "devis site web", "angoulême", "guillaume ganne"],
  alternates: {
    canonical: "https://www.guillaumeganne.com/contact",
  },
  openGraph: {
    title: "Contact | Guillaume Création",
    description:
      "Discutons de votre projet web ou vidéo avec Guillaume Création, freelance à Angoulême.",
    type: "website",
    locale: "fr_FR",
    url: "https://guillaumecreation.com/contact",
    siteName: "Guillaume Création",
    images: [
      {
        url: "/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contactez Guillaume Création",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Guillaume Création",
    description:
      "Prenez contact avec Guillaume Création pour vos besoins en développement web, design UX/UI ou vidéo à Angoulême.",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
