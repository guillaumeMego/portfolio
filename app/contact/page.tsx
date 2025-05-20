"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Checkbox } from "@/components/ui/checkbox";
import { ShimmerButton } from "@/components/ui/shimmer-button";

export default function ContactPage() {
  // Remplacez "xanojanz" par votre ID Formspree
  const [state, handleSubmit] = useForm("xanojanz");
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Affiche un message de succès
  if (state.succeeded) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 px-4 text-foreground">
        <motion.div
          className="relative z-10 bg-card p-8 rounded-lg shadow-lg text-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-primary">Merci !</h2>
          <p className="mb-6">
            Votre message a bien été envoyé. Je vous recontacterai très vite.
          </p>
          <Link href="/" className="text-primary hover:underline">
            ← Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8 text-foreground relative mt-24">
      <motion.div
        className="relative z-10 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* -------------------------------------------------- */}
        {/* Colonne 1 : Informations de contact */}
        {/* -------------------------------------------------- */}
        <div className="space-y-8">
          <h1 className="text-4xl font-extrabold text-primary">
            Contactez-moi
          </h1>
          <p className="text-lg leading-relaxed">
            Vous avez un projet web ou besoin de conseils en design ?<br />
            Parlons-en !
          </p>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-8 w-8 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:contact@guillaumeganne.com"
                  className="text-primary hover:underline"
                >
                  contact@guillaumeganne.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-8 w-8 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold">Téléphone</h3>
                <a
                  href="tel:+33662826951"
                  className="text-primary hover:underline"
                >
                  06 62 82 69 51
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-8 w-8 text-secondary mt-1" />
              <div>
                <h3 className="font-semibold">Localisation</h3>
                <p>Angoulême, France</p>
              </div>
            </div>
          </div>
        </div>

        {/* -------------------------------------------------- */}
        {/* Colonne 2 : Formulaire Formspree */}
        {/* -------------------------------------------------- */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                disabled={state.submitting}
                className="w-full px-4 py-3 bg-card text-foreground rounded-lg border border-border focus:border-primary transition"
              />
              <ValidationError
                prefix="Nom"
                field="name"
                errors={state.errors}
                className="text-sm text-red-500 mt-1"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                disabled={state.submitting}
                className="w-full px-4 py-3 bg-card text-foreground rounded-lg border border-border focus:border-primary transition"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-sm text-red-500 mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                disabled={state.submitting}
                className="w-full px-4 py-3 bg-card text-foreground rounded-lg border border-border focus:border-primary transition resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-sm text-red-500 mt-1"
              />
            </div>
          </div>

          {/* RGPD */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={(c) => setAcceptTerms(!!c)}
            />
            <label htmlFor="terms" className="text-sm text-muted-foreground">
              J&apos;accepte la{" "}
              <Link
                href="/mentions-legales"
                className="text-primary hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </label>
          </div>

          {/* Bouton d'envoi */}
          <ShimmerButton
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
            disabled={state.submitting || !acceptTerms}
          >
            {state.submitting ? "Envoi..." : "Envoyer"}
          </ShimmerButton>
        </form>
      </motion.div>
    </div>
  );
}
