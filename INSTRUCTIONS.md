# Instructions du Projet - Jeu Memory React

## ✅ Tâches accomplies

### Job 00 - Installation

- ✅ Installation de React avec Vite (outil moderne et rapide)
- ✅ Configuration du projet avec package.json
- ✅ Fichier index.html comme point d'entrée
- ✅ Configuration de Vite (vite.config.js)

### Job 01 - Conception

- ✅ Charte graphique avec dégradés violets/bleus
- ✅ Police moderne (Segoe UI)
- ✅ Choix des symboles : 8 emojis différents (🎮 🎯 🎨 🎭 🎪 🎸 🎲 🎳)
- ✅ Design responsive et moderne

### Job 02 - Architecture

- ✅ Structure du projet organisée
- ✅ Dossier `src/` contenant le code principal
- ✅ Dossier `src/components/` pour les composants
- ✅ Organisation par fonctionnalité (chaque composant dans son dossier)

### Job 03 - Composants créés

#### 1. Composant Button

📁 `src/components/Button/Button.jsx`

- Composant générique et réutilisable
- Props : `text`, `onClick`, `disabled`
- Style avec dégradé et effet hover
- Animation au clic

#### 2. Composant Title

📁 `src/components/Title/Title.jsx`

- Affiche le titre et sous-titre
- Props : `text`, `subtitle`
- Style avec dégradé sur le texte

#### 3. Composant Card

📁 `src/components/Card/Card.jsx`

- Carte avec animation de retournement 3D
- Props : `card`, `handleCardClick`, `isFlipped`, `isMatched`
- Face avant : "?"
- Face arrière : symbole emoji
- Animation smooth avec CSS transform

### Job 04 - États (useState)

Le composant App utilise plusieurs états :

- `cards` : tableau des cartes du jeu
- `flippedCards` : cartes actuellement retournées (max 2)
- `moves` : nombre de coups joués
- `gameWon` : statut de victoire

### Job 05 - Logique du jeu implémentée

✅ **Fonctionnalités obligatoires :**

- Mélange aléatoire des cartes (algorithme Fisher-Yates)
- Comparaison des paires
- Compteur de coups
- Bouton "Nouvelle Partie" pour relancer
- Animation de retournement des cartes
- Message de victoire avec modal

✅ **Fonctionnalités bonus :**

- Design moderne et attrayant
- Responsive (mobile et desktop)
- Animations fluides
- Modal de victoire animé
- Effet hover sur les cartes

## 🎮 Comment le jeu fonctionne

1. **Initialisation** : 16 cartes (8 paires) sont créées et mélangées
2. **Gameplay** :
   - Le joueur clique sur une première carte → elle se retourne
   - Il clique sur une deuxième carte → elle se retourne
   - Si les symboles correspondent → les cartes restent visibles
   - Sinon → elles se retournent après 1 seconde
3. **Victoire** : Quand toutes les paires sont trouvées, un modal apparaît

## 🚀 Commandes

```bash
# Installer les dépendances
npm install

# Lancer en mode développement
npm run dev

# Build pour la production
npm build

# Prévisualiser le build
npm preview
```

## 📂 Structure finale du projet

```
Memory-2-JS/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.css
│   │   ├── Card/
│   │   │   ├── Card.jsx
│   │   │   └── Card.css
│   │   └── Title/
│   │       ├── Title.jsx
│   │       └── Title.css
│   ├── App.jsx          # Composant principal avec la logique
│   ├── App.css          # Styles de l'app
│   ├── main.jsx         # Point d'entrée React
│   └── index.css        # Styles globaux
├── index.html           # Fichier HTML (porte d'entrée)
├── package.json         # Dépendances
├── vite.config.js       # Configuration Vite
└── README.md           # Documentation

```

## 🎯 Concepts React utilisés

- ✅ Components fonctionnels
- ✅ Props pour passer des données
- ✅ useState pour gérer l'état
- ✅ useEffect pour les effets de bord
- ✅ Event handlers (onClick)
- ✅ Conditional rendering (&&, ternaire)
- ✅ Map pour afficher des listes
- ✅ Import/Export de composants

## 🎨 Points techniques intéressants

1. **Algorithme de mélange** : Fisher-Yates pour un mélange équitable
2. **Animation CSS 3D** : `transform-style: preserve-3d` pour les cartes
3. **Gestion temporelle** : `setTimeout` pour retourner les cartes non matching
4. **Détection de victoire** : `useEffect` avec `every()` pour vérifier toutes les cartes
5. **Prévention des clics multiples** : Désactive les cartes pendant la comparaison

## 🚀 Améliorations possibles

- ⭐ Niveaux de difficulté (plus ou moins de cartes)
- ⭐ Timer/chronomètre
- ⭐ Système de points
- ⭐ Tableau des meilleurs scores
- ⭐ Backend avec base de données
- ⭐ Mode multijoueur
- ⭐ Sons et effets audio
- ⭐ Thèmes personnalisables

Bon jeu ! 🎉
