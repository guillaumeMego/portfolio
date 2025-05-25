"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { Mail, Phone, MapPin } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Checkbox } from "@/components/ui/checkbox";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Head from "next/head";
import { Footer } from "@/components/footer";

export default function ContactPage() {
  // Remplacez "xanojanz" par votre ID Formspree
  const [state, handleSubmit] = useForm("xanojanz");
  const [acceptTerms, setAcceptTerms] = useState(false);

  // Affiche un message de succès
  if (state.succeeded) {
    return (
      <>
        <div className="flex flex-col min-h-[100vh]">
          <div className="flex-1 flex items-center justify-center pt-24 pb-24 px-4 text-foreground max-h-[100vh]">
            <motion.div
              className="relative z-10 bg-card p-8 rounded-lg shadow-lg text-center max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
                Merci !
              </h1>
              <p className="mb-6">
                Votre message a bien été envoyé. Je vous recontacterai très
                vite.
              </p>
              <Link href="/" className="text-primary hover:underline">
                &larr; Retour à l&apos;accueil
              </Link>
            </motion.div>
          </div>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Contactez-moi | Guillaume Ganne - Webdesigner à Angoulême</title>
        <meta
          name="description"
          content="Prenez contact avec Guillaume Ganne, webdesigner à Angoulême, pour discuter de votre projet web, obtenir un devis ou des conseils en création de site internet et design."
        />
      </Head>
      <div className="flex flex-col min-h-[100vh]">
        <div className="flex-1 flex items-center justify-center pt-24 pb-24 px-4 text-foreground relative mt-24 max-h-[100vh]">
          <motion.div
            className="relative z-10 max-w-4xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Colonne 1 : Informations de contact */}
            <div className="space-y-8 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
                Contactez-moi
              </h1>
              <p className="text-lg leading-relaxed mb-4">
                Vous souhaitez donner vie à votre projet web, obtenir un devis
                personnalisé ou simplement échanger sur vos idées ?<br />
                Je suis à votre écoute et vous répondrai rapidement pour vous
                accompagner dans la réussite de votre projet digital.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4 justify-center lg:justify-start">
                  <Mail className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h3 className="text-base font-semibold">Email</h3>
                    <a
                      href="mailto:contact@guillaumeganne.com"
                      className="text-primary hover:underline"
                    >
                      contact@guillaumeganne.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-center lg:justify-start">
                  <Phone className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h3 className="text-base font-semibold">Téléphone</h3>
                    <a
                      href="tel:+33662826951"
                      className="text-primary hover:underline"
                    >
                      06 62 82 69 51
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 justify-center lg:justify-start">
                  <MapPin className="h-8 w-8 text-secondary mt-1" />
                  <div>
                    <h3 className="text-base font-semibold">Localisation</h3>
                    <p>Angoulême, France</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Colonne 2 : Formulaire Formspree */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
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
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
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
                <label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
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
        <Footer />
      </div>
    </>
  );
}
