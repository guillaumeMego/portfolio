# 🚀 Guide de Normalisation des URLs - Guillaume Ganne

**Objectif** : Éliminer les "Pages avec redirection" dans Google Search Console et rendre le sitemap 100% cohérent.

---

## 📋 **Résumé de la Solution**

### **Convention URL Choisie**

- **Protocole** : `https://` (forcé)
- **Sous-domaine** : `www.guillaumeganne.com` (forcé)
- **Trailing slash** : `true` (toutes les URLs se terminent par `/`)
- **Exemple** : `https://www.guillaumeganne.com/contact/`

### **Problèmes Résolus**

- ✅ 17 pages avec plusieurs URL canoniques → 1 URL canonique par page
- ✅ 14 pages incorrectes dans sitemap.xml → Sitemap 100% cohérent
- ✅ Redirections multiples (www vs non-www, slash vs no-slash) → Redirections automatiques 301
- ✅ Confusion Google sur les URLs canoniques → Indexation correcte

---

## 🔧 **Fichiers Modifiés**

### **1. `next.config.js`**

- `trailingSlash: true` pour forcer le trailing slash partout
- Redirections automatiques pour normaliser toutes les URLs
- Redirections des anciens projets `/projects/*` vers `/projets/*/`

### **2. `next-sitemap.config.js`**

- `generateRobotsTxt: true` pour générer automatiquement le robots.txt
- Configuration du robots.txt pour autoriser CSS/JS/Images
- Toutes les URLs dans le sitemap avec trailing slash

### **3. `package.json`**

- Script `postbuild: "next-sitemap"` pour générer automatiquement sitemap et robots.txt

---

## 🧪 **Scripts de Test**

### **Vérification Locale**

```bash
# Vérifier la configuration avant déploiement
./scripts/check-local.sh
```

**Ce script vérifie :**

- ✅ Configuration `trailingSlash: true`
- ✅ Fonction `redirects()` présente
- ✅ `generateRobotsTxt: true`
- ✅ Script `postbuild` configuré
- ✅ Fichiers générés (sitemap.xml, robots.txt)
- ✅ Toutes les URLs ont un trailing slash

### **Test des Redirections (après déploiement)**

```bash
# Tester toutes les redirections en production
./scripts/test-redirects.sh
```

**Ce script teste :**

- 🔄 Redirections non-www → www
- 🔄 Redirections sans trailing slash → avec trailing slash
- ✅ URLs canoniques (doivent retourner 200)
- 🔄 Redirections d'anciens projets
- ✅ Sitemap et robots.txt accessibles

---

## 🚀 **Déploiement**

### **1. Vérification Locale**

```bash
# 1. Vérifier la configuration
./scripts/check-local.sh

# 2. Build local pour tester
pnpm build

# 3. Vérifier que tout fonctionne
```

### **2. Déploiement Vercel**

```bash
# 1. Pousser les changements
git add .
git commit -m "feat: normalisation des URLs avec trailing slash"
git push

# 2. Vercel déploie automatiquement
# 3. Vérifier que le déploiement est réussi
```

### **3. Configuration Vercel**

1. Aller dans **Vercel Project** → **Settings** → **Domains**
2. Ajouter `guillaumeganne.com` (sans www)
3. Configurer comme **Redirect** vers `www.guillaumeganne.com`
4. Type : **Redirect (301)**

---

## 🌐 **Configuration DNS (OVH)**

### **Sous-domaine www**

```
Type : CNAME
Nom : www
Valeur : cname.vercel-dns.com
TTL : 300 (5 minutes)
```

### **Domaine racine @**

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

---

## 📊 **Vérification Post-Déploiement**

### **1. Test Immédiat**

```bash
# Tester les redirections
./scripts/test-redirects.sh

# Vérifier manuellement quelques URLs
curl -I http://guillaumeganne.com/contact
curl -I https://guillaumeganne.com/contact
curl -I https://www.guillaumeganne.com/contact
curl -I https://www.guillaumeganne.com/contact/
```

### **2. Google Search Console (24-48h après)**

1. **Sitemaps** → "Soumettre à nouveau" `sitemap.xml`
2. **Inspection d'URL** → Tester les pages clés
3. **Pages** → "Avec redirection" → "Valider la correction"

### **3. Vérifications Attendues**

- ✅ Plus de "Pages avec redirection" dans GSC
- ✅ Le Coverage remonte
- ✅ L'état "Indexée" augmente
- ✅ Sitemap 100% cohérent

---

## 🚨 **Dépannage**

### **Problème : Redirections ne fonctionnent pas**

```bash
# 1. Vérifier la configuration Vercel
# 2. Tester avec curl
curl -I http://guillaumeganne.com/contact

# 3. Vérifier les logs Vercel
# 4. Contrôler la configuration DNS
```

### **Problème : Sitemap incorrect**

```bash
# 1. Vérifier next-sitemap.config.js
# 2. Relancer le build
pnpm build

# 3. Vérifier les fichiers générés
ls -la public/sitemap*
```

### **Problème : Robots.txt bloqué**

```bash
# 1. Vérifier la configuration robotsTxtOptions
# 2. Vérifier que generateRobotsTxt: true
# 3. Relancer le build
pnpm build
```

---

## 📈 **Monitoring**

### **Métriques à Surveiller**

- **GSC Coverage** : Doit augmenter
- **Pages avec redirection** : Doit diminuer jusqu'à 0
- **Erreurs de canonique** : Doit disparaître
- **Performance** : Doit s'améliorer

### **Outils de Monitoring**

- Google Search Console
- Screaming Frog (après 1 semaine)
- Scripts de test automatiques
- Vercel Analytics

---

## 🎯 **Résultats Attendus**

### **Avant (Problèmes)**

- ❌ 17 pages avec plusieurs URL canoniques
- ❌ 14 pages incorrectes dans sitemap.xml
- ❌ Redirections multiples et confuses
- ❌ Google ne sait pas quelle URL indexer

### **Après (Solutions)**

- ✅ 1 URL canonique par page
- ✅ Sitemap 100% cohérent
- ✅ Redirections automatiques 301 propres
- ✅ Google indexe correctement toutes les pages

---

## 📞 **Support**

**En cas de problème :**

1. Vérifier les logs Vercel
2. Tester avec les scripts fournis
3. Vérifier la configuration DNS chez OVH
4. Contrôler les paramètres Vercel

**Documentation complète :**

- `docs/url-normalization-report.md` : Rapport technique détaillé
- `docs/README-normalisation.md` : Ce guide d'utilisation

---

**🎉 La normalisation des URLs est maintenant configurée et prête !**

**Prochaines étapes :**

1. Déployer sur Vercel
2. Configurer la redirection dans Vercel
3. Vérifier la configuration DNS chez OVH
4. Tester avec les scripts fournis
5. Surveiller Google Search Console
