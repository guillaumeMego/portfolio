"use client";

import Link from "next/link";
import { Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/guillaume-ganne/",
      label: "LinkedIn de Guillaume Ganne",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/guillaume_creation/",
      label: "Instagram de Guillaume Ganne",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@Guillaume_creation/featured",
      label: "Chaîne YouTube de Guillaume Ganne",
    },
  ];

  return (
    <footer className="mt-auto py-8 border-t border-border" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-4 text-sm text-gray-500">
            <Link href="/mentions-legales" className="hover:underline">
              Mentions légales
            </Link>
            <Link href="/politique-confidentialite" className="hover:underline">
              Politique de confidentialité
            </Link>
            <Link href="/cookies" className="hover:underline">
              Cookies
            </Link>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
