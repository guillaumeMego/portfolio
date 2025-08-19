#!/bin/bash

# 🧪 Script de Test des Redirections - Guillaume Ganne
# Teste la normalisation des URLs après déploiement

echo "🚀 Test des Redirections - Normalisation des URLs"
echo "=================================================="
echo ""

# Couleurs pour l'affichage
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Fonction de test avec couleur
test_redirect() {
    local source_url="$1"
    local expected_dest="$2"
    local description="$3"
    
    echo -e "${BLUE}🔍 Test: $description${NC}"
    echo "Source: $source_url"
    
    # Test avec curl
    response=$(curl -s -I "$source_url" 2>/dev/null)
    
    if [ $? -eq 0 ]; then
        # Extraire le code de statut
        status=$(echo "$response" | grep -E "^HTTP/[0-9.]+ [0-9]+" | head -1 | awk '{print $2}')
        
        # Extraire la location (redirection)
        location=$(echo "$response" | grep -i "location:" | head -1 | sed 's/Location: //i' | tr -d '\r')
        
        echo "Status: $status"
        
        if [ "$status" = "301" ] || [ "$status" = "302" ]; then
            if [ -n "$location" ]; then
                echo "Redirection vers: $location"
                
                # Vérifier si la redirection correspond à l'attendu
                if [[ "$location" == *"$expected_dest"* ]]; then
                    echo -e "${GREEN}✅ SUCCÈS: Redirection correcte${NC}"
                else
                    echo -e "${YELLOW}⚠️  ATTENTION: Redirection différente de l'attendu${NC}"
                    echo "Attendu: $expected_dest"
                fi
            else
                echo -e "${RED}❌ ERREUR: Pas de header Location${NC}"
            fi
        elif [ "$status" = "200" ]; then
            echo -e "${GREEN}✅ SUCCÈS: Page accessible directement${NC}"
        else
            echo -e "${YELLOW}⚠️  ATTENTION: Status inattendu: $status${NC}"
        fi
    else
        echo -e "${RED}❌ ERREUR: Impossible de se connecter${NC}"
    fi
    
    echo ""
}

# Tests des redirections principales
echo -e "${YELLOW}📋 TESTS DES REDIRECTIONS PRINCIPALES${NC}"
echo ""

# Test 1: non-www → www
test_redirect "http://guillaumeganne.com/contact" "https://www.guillaumeganne.com/contact/" "Redirection non-www → www (HTTP)"

# Test 2: non-www → www (HTTPS)
test_redirect "https://guillaumeganne.com/contact" "https://www.guillaumeganne.com/contact/" "Redirection non-www → www (HTTPS)"

# Test 3: sans trailing slash → avec trailing slash
test_redirect "https://www.guillaumeganne.com/contact" "https://www.guillaumeganne.com/contact/" "Redirection sans trailing slash → avec trailing slash"

# Test 4: URL canonique (doit retourner 200)
test_redirect "https://www.guillaumeganne.com/contact/" "" "URL canonique (doit être 200)"

echo -e "${YELLOW}📋 TESTS DES AUTRES PAGES${NC}"
echo ""

# Test des autres pages
test_redirect "https://www.guillaumeganne.com/a-propos" "https://www.guillaumeganne.com/a-propos/" "Redirection /a-propos"
test_redirect "https://www.guillaumeganne.com/tarif" "https://www.guillaumeganne.com/tarif/" "Redirection /tarif"
test_redirect "https://www.guillaumeganne.com/blog" "https://www.guillaumeganne.com/blog/" "Redirection /blog"
test_redirect "https://www.guillaumeganne.com/projets" "https://www.guillaumeganne.com/projets/" "Redirection /projets"

echo -e "${YELLOW}📋 TESTS DES RESSOURCES TECHNIQUES${NC}"
echo ""

# Test des ressources techniques
test_redirect "https://www.guillaumeganne.com/sitemap.xml" "" "Sitemap (doit être 200)"
test_redirect "https://www.guillaumeganne.com/robots.txt" "" "Robots.txt (doit être 200)"

echo -e "${YELLOW}📋 TESTS DES REDIRECTIONS ANCIENNES${NC}"
echo ""

# Test des redirections d'anciens projets
test_redirect "https://www.guillaumeganne.com/projects/1" "https://www.guillaumeganne.com/projets/creation-boutique-bougies-bio/" "Redirection /projects/1"
test_redirect "https://www.guillaumeganne.com/projects/soup-o-potes" "https://www.guillaumeganne.com/projets/refonte-site-association-soupopotes/" "Redirection /projects/soup-o-potes"

echo -e "${GREEN}🎉 Tests terminés !${NC}"
echo ""
echo "📊 Résumé des tests :"
echo "- Vérifiez que toutes les redirections 301 pointent vers les bonnes URLs"
echo "- Vérifiez que les URLs canoniques retournent 200"
echo "- Vérifiez que le sitemap et robots.txt sont accessibles"
echo ""
echo "🔧 Actions recommandées :"
echo "1. Déployer sur Vercel"
echo "2. Configurer la redirection guillaumeganne.com → www.guillaumeganne.com dans Vercel"
echo "3. Vérifier la configuration DNS chez OVH"
echo "4. Tester avec Google Search Console après 24-48h"
