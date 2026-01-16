# Jeu Memory - React

🎮 Un jeu de Memory classique développé avec React et Vite.

## 📋 Fonctionnalités

- ✅ 16 cartes (8 paires) avec des symboles emoji
- ✅ Mélange aléatoire des cartes à chaque partie
- ✅ Animation de retournement des cartes
- ✅ Compteur de coups
- ✅ Détection de victoire
- ✅ Message de félicitations
- ✅ Bouton pour relancer une partie
- ✅ Design moderne et responsive

## 🎯 Composants

Le projet est organisé selon l'architecture recommandée avec les composants suivants :

- **Title** : Composant pour afficher le titre du jeu
- **Button** : Composant bouton réutilisable avec props
- **Card** : Composant carte avec animation de retournement
- **App** : Composant principal contenant la logique du jeu

## 🚀 Installation et lancement

### Installation des dépendances

```bash
npm install
```

### Lancer le serveur de développement

```bash
npm run dev
```

Le jeu sera accessible sur http://localhost:5173

### Build pour la production

```bash
npm run build
```

## 🎮 Comment jouer

1. Cliquez sur une carte pour la retourner
2. Cliquez sur une deuxième carte
3. Si les deux cartes sont identiques, elles restent retournées
4. Sinon, elles se retournent à nouveau
5. Le but est de trouver toutes les paires en un minimum de coups
6. Quand toutes les paires sont trouvées, un message de victoire s'affiche

## 🎨 Technologies utilisées

- **React 18** : Bibliothèque JavaScript pour créer l'interface
- **Vite** : Outil de build moderne et rapide
- **CSS3** : Pour les styles et animations
- **Hooks React** : useState et useEffect pour la gestion d'état

## 📚 Concepts React utilisés

- **Components** : Organisation modulaire du code
- **Props** : Passage de données entre composants
- **State (useState)** : Gestion de l'état de l'application
- **Effects (useEffect)** : Gestion des effets de bord
- **Conditional Rendering** : Affichage conditionnel
- **Event Handling** : Gestion des événements utilisateur

## 🎓 Projet réalisé dans le cadre d'un exercice d'apprentissage React

Bon jeu! 🎉
