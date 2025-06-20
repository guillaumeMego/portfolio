"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  X,
  Home,
  Briefcase,
  User,
  Mail,
  MapPin,
  CreditCard,
} from "lucide-react";
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
    { href: "/projects", label: "Projets", icon: Briefcase },
    { href: "/a-propos", label: "À Propos", icon: User },
    { href: "/tarif", label: "Mes tarifs", icon: CreditCard },
    { href: "/creation-site-web-angouleme", label: "Angoulême", icon: MapPin },
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
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-6">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold flex items-center gap-3 text-primary hover:text-primary relative z-50"
            aria-label="Guillaume Ganne - Retour à l'accueil"
          >
            <Image
              src="/logo.svg"
              alt="Logo Guillaume Ganne"
              width={70}
              height={70}
              style={{ height: "auto" }}
            />
            <span className="hidden md:block text-xl font-bold font-montserrat">
              Guillaume Création
            </span>
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
                      ? "text-[#AD5100] underline decoration-2 underline-offset-8"
                      : "hover:text-[#AD5100]"
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
            className="md:hidden p-2 relative group z-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? (
              <X className="h-7 w-7" aria-hidden="true" />
            ) : (
              <div
                className="flex flex-col gap-[6px] w-[28px]"
                aria-hidden="true"
              >
                <span className="w-full h-[3px] bg-foreground rounded-full transition-all duration-300 group-hover:bg-primary"></span>
                <span className="w-full h-[3px] bg-foreground rounded-full transition-all duration-300 group-hover:bg-primary"></span>
                <span className="w-full h-[3px] bg-foreground rounded-full transition-all duration-300 group-hover:bg-primary"></span>
              </div>
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
          className="md:hidden fixed top-0 left-0 right-0 mt-[98px] bg-background/95 backdrop-blur-lg border-b border-gray-200"
          role="menu"
        >
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-xl text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#AD5100] underline decoration-2 underline-offset-8"
                        : "hover:text-[#AD5100]"
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    role="menuitem"
                  >
                    <item.icon
                      className={`h-5 w-5 ${isActive ? "text-[#AD5100]" : ""}`}
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
