# 📋 Rapport de Normalisation des URLs - Guillaume Ganne

**Date** : 19 août 2025  
**Objectif** : Éliminer les "Pages avec redirection" dans GSC et rendre le sitemap 100% cohérent  
**Framework** : Next.js 14.1.0  
**Hébergement** : Vercel  
**Domaine** : géré chez OVH

---

## 🎯 **Convention URL Choisie**

- **Protocole** : `https://` (forcé)
- **Sous-domaine** : `www.guillaumeganne.com` (forcé)
- **Trailing slash** : `true` (toutes les URLs se terminent par `/`)
- **Exemple** : `https://www.guillaumeganne.com/contact/`

---

## 📁 **Fichiers Modifiés**

### 1. **`next.config.js`** ✅

```javascript
// 🎯 CONVENTION URL : Forcer le trailing slash partout pour la cohérence
trailingSlash: true,

async redirects() {
  return [
    // 1) Redirection des paramètres ?C= vers la page sans paramètres
    {
      source: '/:path*',
      has: [{ type: 'query', key: 'C' }],
      destination: '/:path*/',
      permanent: true,
    },

    // 2) Redirections avec host pour les domaines (non-www → www)
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'guillaumeganne.com' }],
      destination: 'https://www.guillaumeganne.com/:path*/',
      permanent: true,
    },

    // 3) Redirections /projects/ vers /projets/ (avec trailing slash)
    {
      source: '/projects/:slug*',
      destination: '/projets/:slug*/',
      permanent: true,
    },

    // 4) Redirections sans trailing slash vers avec trailing slash (normalisation)
    {
      source: '/contact',
      destination: '/contact/',
      permanent: true,
    },
    // ... autres redirections similaires
  ];
}
```

### 2. **`next-sitemap.config.js`** ✅

```javascript
module.exports = {
  siteUrl: "https://www.guillaumeganne.com",
  generateRobotsTxt: true, // ✅ Activer la génération du robots.txt
  trailingSlash: true, // ✅ Cohérence avec Next.js
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: [
          "/*.css$",
          "/*.js$",
          "/*.png$",
          "/*.jpg$",
          "/*.jpeg$",
          "/*.gif$",
          "/*.svg$",
          "/*.webp$",
          "/*.ico$",
          "/_next/static/*",
          "/_next/image*",
        ],
        disallow: ["/api/*", "/admin/*", "/private/*"],
      },
    ],
    additionalSitemaps: ["https://www.guillaumeganne.com/sitemap.xml"],
  },
};
```

---

## 🚀 **Règles de Redirection Actives**

### **Next.js (next.config.js)**

- ✅ `http://guillaumeganne.com/*` → `https://www.guillaumeganne.com/*/` (301)
- ✅ `https://guillaumeganne.com/*` → `https://www.guillaumeganne.com/*/` (301)
- ✅ `/contact` → `/contact/` (301)
- ✅ `/a-propos` → `/a-propos/` (301)
- ✅ `/tarif` → `/tarif/` (301)
- ✅ `/blog` → `/blog/` (301)
- ✅ `/projets` → `/projets/` (301)
- ✅ `/projects/*` → `/projets/*/` (301)

### **Vercel (à configurer)**

- 🔄 `guillaumeganne.com` → `www.guillaumeganne.com` (Redirect, 301)
- 🔄 Enforce HTTPS (activé par défaut)

---

## 📊 **Diff "Avant/Après" - Exemple /contact**

### **❌ AVANT (Incohérent)**

```
URLs possibles :
- http://guillaumeganne.com/contact
- https://guillaumeganne.com/contact
- https://www.guillaumeganne.com/contact
- http://guillaumeganne.com/contact/
- https://guillaumeganne.com/contact/
- https://www.guillaumeganne.com/contact/

Résultat : 6 URLs pour 1 page → Confusion Google
```

### **✅ APRÈS (Normalisé)**

```
URL canonique unique :
- https://www.guillaumeganne.com/contact/

Redirections automatiques (301) :
- http://guillaumeganne.com/contact → https://www.guillaumeganne.com/contact/
- https://guillaumeganne.com/contact → https://www.guillaumeganne.com/contact/
- https://www.guillaumeganne.com/contact → https://www.guillaumeganne.com/contact/

Résultat : 1 URL canonique + redirections propres → Google indexe correctement
```

---

## 🌐 **Checklist OVH DNS**

### **Configuration DNS à vérifier chez OVH :**

#### **1. Sous-domaine www**

```
Type : CNAME
Nom : www
Valeur : cname.vercel-dns.com
TTL : 300 (5 minutes)
```

#### **2. Domaine racine @**

```
Option A : A/AAAA direct vers Vercel
Type : A
Nom : @
Valeur : 76.76.19.36
TTL : 300

Option B : ALIAS/ANAME (recommandé)
Type : ALIAS
Nom : @
Valeur : cname.vercel-dns.com
TTL : 300
```

#### **3. Vérifications**

- ✅ TTL ≤ 600 secondes (pour propagation rapide)
- ✅ Pas de CNAME sur la racine @ (incompatible avec d'autres enregistrements)
- ✅ www pointe vers cname.vercel-dns.com

---

## 🧪 **Commandes de Vérification**

### **Test des Redirections HTTP → HTTPS**

```bash
# Test redirection non-www → www
curl -I http://guillaumeganne.com/contact
# Attendu : 301 → https://www.guillaumeganne.com/contact/

# Test redirection non-www → www (HTTPS)
curl -I https://guillaumeganne.com/contact
# Attendu : 301 → https://www.guillaumeganne.com/contact/

# Test redirection sans trailing slash → avec trailing slash
curl -I https://www.guillaumeganne.com/contact
# Attendu : 301 → https://www.guillaumeganne.com/contact/
```

### **Test des URLs Canoniques**

```bash
# Test URL canonique (doit retourner 200)
curl -I https://www.guillaumeganne.com/contact/
# Attendu : 200 OK

# Test sitemap
curl -I https://www.guillaumeganne.com/sitemap.xml
# Attendu : 200 OK

# Test robots.txt
curl -I https://www.guillaumeganne.com/robots.txt
# Attendu : 200 OK
```

---

## 📋 **Sitemap Généré**

### **URLs dans le sitemap (toutes avec trailing slash) :**

- ✅ `https://www.guillaumeganne.com/` (racine)
- ✅ `https://www.guillaumeganne.com/contact/`
- ✅ `https://www.guillaumeganne.com/a-propos/`
- ✅ `https://www.guillaumeganne.com/tarif/`
- ✅ `https://www.guillaumeganne.com/blog/`
- ✅ `https://www.guillaumeganne.com/projets/`
- ✅ `https://www.guillaumeganne.com/creation-site-web-angouleme/`
- ✅ `https://www.guillaumeganne.com/cookies/`
- ✅ `https://www.guillaumeganne.com/mentions-legales/`
- ✅ `https://www.guillaumeganne.com/politique-confidentialite/`

### **Projets (avec trailing slash) :**

- ✅ `https://www.guillaumeganne.com/projets/creation-boutique-bougies-bio/`
- ✅ `https://www.guillaumeganne.com/projets/refonte-site-association-soupopotes/`
- ✅ `https://www.guillaumeganne.com/projets/audit-securite-seo-librexpression/`
- ✅ `https://www.guillaumeganne.com/projets/jeu-pendu-pokemon-react/`
- ✅ `https://www.guillaumeganne.com/projets/guillaume-creation-portfolio-photo/`

### **Blog (avec trailing slash) :**

- ✅ `https://www.guillaumeganne.com/blog/creation-site-internet-1001-astuces/`

---

## 🔧 **Configuration Vercel**

### **1. Domains Settings**

- Aller dans Vercel Project → Settings → Domains
- Ajouter `guillaumeganne.com` (sans www)
- Configurer comme **Redirect** vers `www.guillaumeganne.com`
- Type : **Redirect (301)**

### **2. Vérifications**

- ✅ `www.guillaumeganne.com` est le domaine principal
- ✅ `guillaumeganne.com` redirige vers www
- ✅ Enforce HTTPS est activé
- ✅ Certificat SSL valide

---

## 📈 **Post-Déploiement - Mode d'Emploi**

### **1. Dans Google Search Console**

#### **Sitemaps**

1. Aller dans **Sitemaps**
2. Cliquer sur **"Soumettre à nouveau"** pour `sitemap.xml`
3. Vérifier que le statut passe à **"Succès"**

#### **Inspection d'URL**

1. Aller dans **Inspection d'URL**
2. Tester les pages clés :
   - `/creation-site-web-angouleme/`
   - `/contact/`
   - `/a-propos/`
   - `/tarif/`
3. Cliquer sur **"Demander l'indexation"** pour chaque page

#### **Pages avec Redirection**

1. Aller dans **Pages** → **Avec redirection**
2. Identifier les URLs listées
3. Cliquer sur **"Valider la correction"** pour chaque redirection

### **2. Vérifications Post-Déploiement**

#### **24-48h après déploiement :**

- ✅ GSC n'affiche plus de "Pages avec redirection" pour les URLs listées
- ✅ Le Coverage remonte
- ✅ L'état "Indexée" augmente

#### **72h-1 semaine après déploiement :**

- ✅ Toutes les redirections sont traitées par Google
- ✅ Le sitemap est 100% cohérent
- ✅ Plus d'erreurs de canonique

---

## 🎯 **Résultats Attendus**

### **Avant (Problèmes)**

- ❌ 17 pages avec plusieurs URL canoniques
- ❌ 14 pages incorrectes dans sitemap.xml
- ❌ Redirections multiples (www vs non-www, slash vs no-slash)
- ❌ Confusion Google sur les URLs canoniques

### **Après (Solutions)**

- ✅ 1 URL canonique par page
- ✅ Sitemap 100% cohérent (https + www + trailing slash)
- ✅ Redirections automatiques 301 propres
- ✅ Google indexe correctement toutes les pages

---

## 🚨 **Points d'Attention**

### **1. Propagation DNS**

- Les changements DNS peuvent prendre 24-48h
- TTL configuré à 300 secondes pour propagation rapide

### **2. Cache Google**

- Google peut prendre 1-2 semaines pour traiter toutes les redirections
- Utiliser l'outil "Demander l'indexation" pour accélérer

### **3. Vercel**

- Les redirections Vercel sont prioritaires sur celles de Next.js
- Vérifier la configuration dans Vercel Project Settings

---

## 📞 **Support**

**En cas de problème :**

1. Vérifier les logs Vercel
2. Tester les redirections avec `curl -I`
3. Vérifier la configuration DNS chez OVH
4. Contrôler les paramètres Vercel

---

**🎉 Normalisation des URLs terminée avec succès !**
