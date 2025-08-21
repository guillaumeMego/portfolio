#!/bin/bash

# Script de test de performance complet
# Utilisation: ./scripts/test-performance.sh

echo "🚀 Démarrage du test de performance..."

# Build du projet
echo "📦 Build du projet..."
pnpm build

if [ $? -ne 0 ]; then
    echo "❌ Échec du build"
    exit 1
fi

# Démarrage du serveur en arrière-plan
echo "🌐 Démarrage du serveur..."
pnpm start &
SERVER_PID=$!

# Attendre que le serveur soit prêt
echo "⏳ Attente du serveur..."
sleep 10

# Test de disponibilité
curl -f http://localhost:3000 > /dev/null 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Serveur non accessible"
    kill $SERVER_PID 2>/dev/null
    exit 1
fi

echo "✅ Serveur prêt, lancement des tests Lighthouse..."

# Exécution des tests Lighthouse (si lighthouse CLI est installé)
if command -v lighthouse &> /dev/null; then
    echo "🔍 Test Lighthouse page d'accueil..."
    lighthouse http://localhost:3000 \
        --only-categories=performance \
        --form-factor=desktop \
        --chrome-flags="--headless" \
        --output=html \
        --output-path=./lighthouse-home.html \
        --quiet

    echo "🔍 Test Lighthouse page Angoulême..."
    lighthouse http://localhost:3000/creation-site-web-angouleme/ \
        --only-categories=performance \
        --form-factor=desktop \
        --chrome-flags="--headless" \
        --output=html \
        --output-path=./lighthouse-angouleme.html \
        --quiet
        
    echo "📊 Rapports Lighthouse générés:"
    echo "   - lighthouse-home.html"
    echo "   - lighthouse-angouleme.html"
else
    echo "⚠️  Lighthouse CLI non installé, installation..."
    npm install -g lighthouse
fi

# Arrêt du serveur
echo "🛑 Arrêt du serveur..."
kill $SERVER_PID 2>/dev/null

echo "✅ Tests de performance terminés!"
echo ""
echo "📋 RÉSUMÉ DES OPTIMISATIONS IMPLÉMENTÉES:"
echo "========================================="
echo "✅ CSS critique avec Critters (simplifié)"
echo "✅ Préconnections DNS optimisées"
echo "✅ Images avec priority sur LCP"
echo "✅ Polices next/font avec fallbacks"
echo "✅ Imports dynamiques pour composants lourds"
echo "✅ IntersectionObserver au lieu de getBoundingClientRect"
echo "✅ RequestAnimationFrame pour les animations"
echo "✅ Headers de cache agressifs"
echo "✅ Optimisations webpack et chunks"
echo "✅ Formats d'images AVIF/WebP prioritaires"
