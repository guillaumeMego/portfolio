# Plan d'action SEO technique - guillaumeganne.com

## 🎯 Objectif

Corriger et durcir la base technique SEO pour éliminer toutes les erreurs critiques identifiées par l'audit.

## 📊 Erreurs à corriger

- [ ] 17 pages avec plusieurs URL canoniques → 1 seule canonique/page
- [ ] 14 erreurs sitemap.xml (URL invalides/redirigées/inexistantes) → sitemap propre (200 OK only)
- [ ] 3 erreurs de données structurées (schema.org) → JSON-LD valides
- [ ] 257 "ressources internes bloquées" par robots.txt → débloquer CSS/JS/Images
- [ ] 4xx ≈ 5% et 3xx ≈ 5% des pages → supprimer 4xx, réduire 3xx non essentiels
- [ ] 33% des pages sans canonical → ajouter auto-canonical partout
- [ ] 19% des pages n'ont qu'un lien interne entrant → ajouter ≥2 liens contextuels
- [ ] 29% des pages crawlées absentes du sitemap → aligner sitemap ↔ pages 200 indexables

## 🏗️ Stack technique

- **Framework** : Next.js 14.1.0 (App Router)
- **Gestionnaire de paquets** : pnpm
- **Sitemap** : next-sitemap (déjà configuré)
- **SEO** : Métadonnées natives Next.js

## 📁 Fichiers à modifier

### 1. Configuration SEO globale

- [ ] `app/layout.tsx` - Supprimer canonical global, ajouter DefaultSeo
- [ ] `lib/seo.config.ts` - Configuration SEO centralisée (à créer)
- [ ] `next.config.js` - Ajouter redirects pour URLs 4xx/3xx

### 2. Pages individuelles

- [ ] `app/page.tsx` - Canonical unique
- [ ] `app/a-propos/page.tsx` - Canonical unique
- [ ] `app/contact/page.tsx` - Canonical unique
- [ ] `app/tarif/page.tsx` - Canonical unique
- [ ] `app/projets/page.tsx` - Canonical unique
- [ ] `app/blog/page.tsx` - Canonical unique
- [ ] `app/cookies/page.tsx` - Canonical unique
- [ ] `app/mentions-legales/page.tsx` - Canonical unique
- [ ] `app/politique-confidentialite/page.tsx` - Canonical unique
- [ ] `app/creation-site-web-angouleme/page.tsx` - Canonical unique
- [ ] `app/blog/creation-site-internet-1001-astuces/page.tsx` - Canonical unique
- [ ] `app/projets/[slug]/page.tsx` - Canonical unique

### 3. Données structurées

- [ ] `app/layout.tsx` - Schémas Organization, LocalBusiness, BreadcrumbList
- [ ] `app/blog/schema.ts` - Valider Article schema
- [ ] `app/projets/[slug]/page.tsx` - Valider CreativeWork schema

### 4. Configuration sitemap et robots

- [ ] `next-sitemap.config.js` - Optimiser configuration
- [ ] `app/robots.ts` - Autoriser CSS/JS/Images

### 5. Liens internes

- [ ] `components/CTASection.tsx` - Ajouter liens contextuels
- [ ] `components/ProcessSection.tsx` - Ajouter liens contextuels
- [ ] `app/projets/[slug]/ProjectDetail.tsx` - Ajouter liens contextuels

## 🚀 Ordre d'exécution

### Phase 1 : Base technique (priorité critique)

1. Installer next-seo
2. Créer configuration SEO globale
3. Corriger canonical dupliqués
4. Valider données structurées

### Phase 2 : Sitemap et robots

1. Optimiser next-sitemap.config.js
2. Corriger robots.ts
3. Vérifier sitemap.xml

### Phase 3 : Redirections et liens

1. Ajouter redirects dans next.config.js
2. Ajouter liens contextuels internes
3. Tester tous les liens

### Phase 4 : Validation

1. Lancer build et vérifications
2. Tester avec outils SEO
3. Valider dans Google Search Console

## 📦 Packages à installer

```bash
pnpm add next-seo
pnpm add -D linkinator
```

## ✅ Checklist d'acceptation

- [ ] 0 pages avec plusieurs canoniques
- [ ] sitemap.xml ne liste que des URL 200
- [ ] robots.txt autorise CSS/JS/Images
- [ ] 3 schémas JSON-LD valides
- [ ] 4xx = 0%, 3xx réduites
- [ ] Pages orphelines ont ≥2 liens internes
- [ ] 100% des pages importantes dans sitemap

## 🔍 Tests automatisés

```bash
# Vérifier liens internes
pnpm run seo:check

# Build et génération sitemap
pnpm build
```

## 📝 Notes importantes

- Ne pas modifier le contenu éditorial
- Respecter la structure Next.js App Router
- Utiliser les métadonnées natives Next.js
- Tester chaque modification avant de passer à la suivante
