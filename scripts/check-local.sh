#!/bin/bash

# 🔍 Script de Vérification Locale - Guillaume Ganne
# Vérifie la configuration locale avant déploiement

echo "🔍 Vérification Locale - Configuration des URLs"
echo "================================================"
echo ""

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}📁 Vérification des fichiers de configuration${NC}"
echo ""

# Vérifier next.config.js
if [ -f "next.config.js" ]; then
    echo -e "${GREEN}✅ next.config.js trouvé${NC}"
    
    # Vérifier trailingSlash
    if grep -q "trailingSlash: true" next.config.js; then
        echo -e "${GREEN}✅ trailingSlash: true configuré${NC}"
    else
        echo -e "${RED}❌ trailingSlash: true manquant${NC}"
    fi
    
    # Vérifier les redirections
    if grep -q "redirects()" next.config.js; then
        echo -e "${GREEN}✅ Fonction redirects() présente${NC}"
    else
        echo -e "${RED}❌ Fonction redirects() manquante${NC}"
    fi
else
    echo -e "${RED}❌ next.config.js manquant${NC}"
fi

echo ""

# Vérifier next-sitemap.config.js
if [ -f "next-sitemap.config.js" ]; then
    echo -e "${GREEN}✅ next-sitemap.config.js trouvé${NC}"
    
    # Vérifier generateRobotsTxt
    if grep -q "generateRobotsTxt: true" next-sitemap.config.js; then
        echo -e "${GREEN}✅ generateRobotsTxt: true configuré${NC}"
    else
        echo -e "${RED}❌ generateRobotsTxt: true manquant${NC}"
    fi
    
    # Vérifier siteUrl
    if grep -q "siteUrl: 'https://www.guillaumeganne.com'" next-sitemap.config.js; then
        echo -e "${GREEN}✅ siteUrl correctement configuré${NC}"
    else
        echo -e "${RED}❌ siteUrl incorrect${NC}"
    fi
else
    echo -e "${RED}❌ next-sitemap.config.js manquant${NC}"
fi

echo ""

# Vérifier package.json
if [ -f "package.json" ]; then
    echo -e "${GREEN}✅ package.json trouvé${NC}"
    
    # Vérifier le script postbuild
    if grep -q '"postbuild": "next-sitemap"' package.json; then
        echo -e "${GREEN}✅ Script postbuild configuré${NC}"
    else
        echo -e "${RED}❌ Script postbuild manquant${NC}"
    fi
else
    echo -e "${RED}❌ package.json manquant${NC}"
fi

echo ""

# Vérifier les fichiers générés
echo -e "${BLUE}📄 Vérification des fichiers générés${NC}"
echo ""

if [ -f "public/sitemap.xml" ]; then
    echo -e "${GREEN}✅ sitemap.xml généré${NC}"
else
    echo -e "${RED}❌ sitemap.xml manquant${NC}"
fi

if [ -f "public/sitemap-0.xml" ]; then
    echo -e "${GREEN}✅ sitemap-0.xml généré${NC}"
else
    echo -e "${RED}❌ sitemap-0.xml manquant${NC}"
fi

if [ -f "public/robots.txt" ]; then
    echo -e "${GREEN}✅ robots.txt généré${NC}"
else
    echo -e "${RED}❌ robots.txt manquant${NC}"
fi

echo ""

# Vérifier le contenu du sitemap
echo -e "${BLUE}🔍 Vérification du contenu du sitemap${NC}"
echo ""

if [ -f "public/sitemap-0.xml" ]; then
    # Compter les URLs avec trailing slash
    trailing_slash_count=$(grep -c "https://www.guillaumeganne.com/.*/" public/sitemap-0.xml)
    total_urls=$(grep -c "<loc>" public/sitemap-0.xml)
    
    echo "Total URLs dans le sitemap: $total_urls"
    echo "URLs avec trailing slash: $trailing_slash_count"
    
    if [ "$trailing_slash_count" -eq "$total_urls" ]; then
        echo -e "${GREEN}✅ Toutes les URLs ont un trailing slash${NC}"
    else
        echo -e "${RED}❌ Certaines URLs n'ont pas de trailing slash${NC}"
    fi
    
    # Vérifier la présence des pages principales
    echo ""
    echo "Pages principales dans le sitemap:"
    
    if grep -q "https://www.guillaumeganne.com/contact/" public/sitemap-0.xml; then
        echo -e "${GREEN}✅ /contact/ présent${NC}"
    else
        echo -e "${RED}❌ /contact/ manquant${NC}"
    fi
    
    if grep -q "https://www.guillaumeganne.com/a-propos/" public/sitemap-0.xml; then
        echo -e "${GREEN}✅ /a-propos/ présent${NC}"
    else
        echo -e "${RED}❌ /a-propos/ manquant${NC}"
    fi
    
    if grep -q "https://www.guillaumeganne.com/tarif/" public/sitemap-0.xml; then
        echo -e "${GREEN}✅ /tarif/ présent${NC}"
    else
        echo -e "${RED}❌ /tarif/ manquant${NC}"
    fi
fi

echo ""
echo -e "${BLUE}📋 Résumé de la vérification${NC}"
echo "=================================="

# Compter les erreurs
errors=0
if ! grep -q "trailingSlash: true" next.config.js; then ((errors++)); fi
if ! grep -q "generateRobotsTxt: true" next-sitemap.config.js; then ((errors++)); fi
if ! grep -q '"postbuild": "next-sitemap"' package.json; then ((errors++)); fi
if [ ! -f "public/sitemap.xml" ]; then ((errors++)); fi
if [ ! -f "public/robots.txt" ]; then ((errors++)); fi

if [ $errors -eq 0 ]; then
    echo -e "${GREEN}🎉 Configuration locale parfaite ! Prêt pour le déploiement.${NC}"
else
    echo -e "${RED}❌ $errors erreur(s) détectée(s). Corrigez avant le déploiement.${NC}"
fi

echo ""
echo "🔧 Prochaines étapes :"
echo "1. Déployer sur Vercel"
echo "2. Configurer la redirection guillaumeganne.com → www.guillaumeganne.com dans Vercel"
echo "3. Vérifier la configuration DNS chez OVH"
echo "4. Tester avec le script test-redirects.sh après déploiement"
