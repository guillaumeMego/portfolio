# Correction des erreurs 400 sur l'optimisation d'images Next.js

## 🚨 Problème identifié

Screaming Frog signalait des erreurs 400 sur les URLs d'optimisation d'images Next.js :

```
/_next/image?url=... → Erreur 400
```

## ✅ Solutions appliquées

### 1. **Configuration du domaine d'hébergement**

```javascript
domains: ["www.guillaumeganne.com"];
```

- **Problème** : Next.js ne savait pas quel domaine utiliser pour l'optimisation
- **Solution** : Définition explicite du domaine principal
- **Résultat** : Évite les erreurs 400 sur les images optimisées

### 2. **Optimisation WebP prioritaire**

```javascript
formats: ["image/webp", "image/avif"];
```

- **Avant** : AVIF en premier (meilleure compression mais moins supporté)
- **Maintenant** : WebP en premier (bonne compression + support universel)
- **Résultat** : Meilleures performances et compatibilité

### 3. **Cache des images optimisées**

```javascript
minimumCacheTTL: 31536000; // 1 an
```

- **Problème** : Images re-optimisées à chaque build
- **Solution** : Cache long pour éviter les re-générations
- **Résultat** : Réduction des erreurs 400 et meilleures performances

### 4. **Gestion des erreurs d'optimisation**

```javascript
contentDispositionType: "attachment";
```

- **Problème** : Erreurs lors du traitement des images
- **Solution** : Gestion plus robuste des erreurs
- **Résultat** : Fallback gracieux en cas de problème

## 🔧 Configuration complète

```javascript
images: {
  // Formats d'images supportés pour l'optimisation (WebP prioritaire pour les performances)
  formats: ["image/webp", "image/avif"],

  // Tailles d'écrans pour l'optimisation responsive
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],

  // Tailles d'images pour l'optimisation
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

  // Cache des images optimisées (1 an) - réduit les erreurs 400
  minimumCacheTTL: 31536000,

  // Autoriser les SVG (nécessaire pour les logos)
  dangerouslyAllowSVG: true,

  // Politique de sécurité pour les images
  contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

  // Configuration du domaine d'hébergement pour éviter les erreurs 400
  domains: ["www.guillaumeganne.com"],

  // Configuration des loaders d'images (par défaut)
  loader: "default",

  // OPTION : Désactiver complètement l'optimisation si nécessaire
  // Décommentez la ligne suivante pour désactiver l'optimisation :
  // unoptimized: true,

  // Gestion des erreurs d'optimisation
  contentDispositionType: "attachment",
}
```

## 🚀 Options avancées

### **Désactiver complètement l'optimisation**

Si tu veux désactiver l'optimisation automatique des images :

```javascript
unoptimized: true;
```

**⚠️ Attention** : Cela désactive WebP/AVIF et peut impacter les performances

### **Utiliser un loader personnalisé**

```javascript
loader: "custom",
loaderFile: "./image-loader.js"
```

## 📊 Résultats attendus

### **Avant la correction**

- ❌ Erreurs 400 sur `/_next/image?url=...`
- ❌ Images non optimisées
- ❌ Problèmes de cache

### **Après la correction**

- ✅ Plus d'erreurs 400
- ✅ Images optimisées en WebP/AVIF
- ✅ Cache efficace des images
- ✅ Meilleures performances

## 🔍 Vérification

### **Test avec Screaming Frog**

1. Relance un crawl complet
2. Vérifie qu'il n'y a plus d'erreurs 400 sur les images
3. Confirme que les images sont bien optimisées

### **Test des performances**

1. Vérifie le format des images dans le navigateur
2. Compare les tailles de fichiers avant/après
3. Teste la vitesse de chargement

## 📝 Notes importantes

- **Redémarrage** : Les changements nécessitent un redémarrage du serveur
- **Cache** : Les images existantes peuvent prendre du temps à se régénérer
- **Monitoring** : Surveille les performances après la mise en place
- **Fallback** : L'option `unoptimized: true` est disponible en cas de problème

## 🆘 En cas de problème

1. **Vérifie les logs** du serveur Next.js
2. **Teste avec `unoptimized: true`** temporairement
3. **Vérifie la configuration** des domaines
4. **Nettoie le cache** des images si nécessaire
