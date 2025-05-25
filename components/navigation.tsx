"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Home, User, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import Image from "next/image";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Accueil", icon: Home },
    { href: "/a-propos", label: "À Propos", icon: User },
    { href: "/tarif", label: "Mes tarifs", icon: User },
    { href: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      role="navigation"
      aria-label="Navigation principale"
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-4">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-3 text-primary hover:text-primary"
            aria-label="Guillaume Ganne - Retour à l'accueil"
          >
            <Image
              src="/logo.svg"
              alt="Logo Guillaume Ganne"
              width={70}
              height={70}
            />
            <span className="hidden md:block text-xl">Guillaume Création</span>
          </Link>

          <div className="hidden md:flex space-x-8" role="menubar">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 font-medium transition-colors ${
                    isActive
                      ? "text-secondary underline decoration-2 underline-offset-8"
                      : "hover:text-secondary"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                  role="menuitem"
                >
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg"
          role="menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  role="menuitem"
                >
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
