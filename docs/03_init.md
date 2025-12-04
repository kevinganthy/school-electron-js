---
title: Installer et configurer les environnements de développement
duration: 60 minutes
description: Apprenez à installer et configurer les environnements nécessaires pour le développement d'applications desktop avec Electron, .NET et Java.
---

# {{ page.title }}

⏱️ Durée estimée : {{ page.duration }}

> {{ page.description }} 

## 🎯 Objectifs pédagogiques

- Installer les outils nécessaires au développement desktop pour Electron
- Configurer les environnements de développement en fonction des besoins des projets.  
- Tester les installations pour vérifier leur bon fonctionnement.

---

> Un environnement de développement correctement configuré est la première étape pour démarrer tout projet logiciel. Chaque technologie nécessite des outils spécifiques qui doivent être installés et configurés correctement.  

---

## Prérequis pour les installations  

1. Système d'exploitation compatible :  
   - Windows 10 ou supérieur.  
   - macOS 10.15 ou supérieur.  
   - Linux (Ubuntu 20.04 ou supérieur).  
2. Accès administrateur pour installer des logiciels.  
3. Connexion Internet pour télécharger les outils nécessaires.  

---

## Installation et configuration pour **Electron**  

```bash
# Étape 1 : Installer Node.js et npm
Téléchargez Node.js sur https://nodejs.org et installez la version LTS.

# Étape 2 : Vérifiez l'installation
node -v   # Affiche la version de Node.js
npm -v    # Affiche la version de npm

# Étape 3 : Créez un projet Electron de base
mkdir electron-app
cd electron-app
npm init -y
npm install electron --save-dev
```

---

## Démonstration  

**Pair programming !**

[https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites](https://www.electronjs.org/docs/latest/tutorial/tutorial-prerequisites)

---

## Loading a web page into a BrowserWindow

**A vous de jouer !**

[https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app#loading-a-web-page-into-a-browserwindow](https://www.electronjs.org/docs/latest/tutorial/tutorial-first-app#loading-a-web-page-into-a-browserwindow)

---

## Conclusion  

- ✅ Un environnement de développement bien configuré est essentiel pour éviter les problèmes techniques en cours de projet.  
- 📦 Les étapes d'installation pour Electron sont simples, mais nécessitent une attention particulière aux détails.  
- 🧪 Testez toujours vos installations avant de commencer à coder pour éviter des blocages inutiles.
