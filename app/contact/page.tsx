import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact | Guillaume Ganne",
  description:
    "Contactez Guillaume Ganne pour un devis ou des informations sur la création de votre site web à Angoulême.",
  alternates: {
    canonical: "https://www.guillaumeganne.com/contact/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://www.guillaumeganne.com/contact/",
    title: "Contact | Guillaume Ganne",
    description:
      "Contactez Guillaume Ganne pour un devis ou des informations sur la création de votre site web à Angoulême.",
    siteName: "Guillaume Ganne",
  },
  twitter: { card: "summary_large_image" },
};

export default function ContactPage() {
  return <ContactClient />;
}
