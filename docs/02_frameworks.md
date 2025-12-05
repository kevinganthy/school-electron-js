---
title: Découvrir les frameworks desktop
duration: 20 minutes
description: Explorez les frameworks desktop, comprenez leurs spécificités techniques, et analysez les cas d'usage pour lesquels ils sont les plus adaptés.

---

# {{ page.title }}

⏱️ Durée estimée : {{ page.duration }}

> {{ page.description }} 

## 🎯 Objectifs pédagogiques

- **Identifier** les principaux frameworks pour le développement d'applications desktop.
- **Comparer** leurs caractéristiques, avantages et inconvénients.
- **Choisir** le framework adapté selon les besoins du projet.

---

## Les principaux frameworks modernes

**Plateform specific :**

- .NET, WPF, WinUI (Windows)
- Swift (macOS)
- GTK (principalement Linux, mais ok Win/Mac)

**Multi-platform :**

- Electron by GitHub
- Flutter by Google
- Tauri
- Neutralino
- Qt (C++/Python)
- (Java)

---

|Feature | Electron | Tauri | Flutter | Neutralino |
|--------|----------|-------|---------|-------------|
| App size | 🤮 Lourd (100+ MB) | 🏆 **Léger (2-5 MB)** | Moyen (20-30 MB) | 🏆 **Très léger (1-3 MB)** |
| Performance | Bonne, mais gourmand en ressources | 🏆 **Excellente, natif** | Bonne, mais peut être lourd | 🏆 **Très bonne, natif** |
|Security | Bonne (sandboxing) | 🏆 **Excellent** | Bonne | 🥴 Moyenne (websocket) |
|Ease of Use | 🏆 **Très facile (web + node)** | Moyen (Rust + web) | Moyen (Dart) | 🏆 **Très facile (web)** |
|Ecosystem | 🏆 **Mature** | Croissant | Bon | 😓 Limité (très jeune) |
| Best for | Apps web complexes | Apps légères et sécurisées | Apps avec UI riche | Apps très légères |

---

## Electron

![Electron](./assets/Logo_Electron.svg)

Framework JavaScript basé sur Node.js et Chromium. Idéal pour créer des applications cross-platform avec des technologies web (HTML, CSS, JS). 

> Applications web empaquetées comme applications desktop (ex. : Slack, VS Code).

---

**Avantages** :  
- Développement rapide avec des technologies web.  
- Cross-platform : un seul code pour Windows, macOS, et Linux.  
- Large communauté et nombreux plugins.  

**Inconvénients** :  
- Consommation élevée de ressources (mémoire et CPU).  
- Taille importante des binaires (Chromium intégré).  

**Cas d'utilisation typiques** :  
- **Slack** : Communication et collaboration.  
- **Visual Studio Code** : IDE multiplateforme.  
- **Figma** : Outil de design collaboratif.  

---

## Conclusion  

**Le choix du framework dépend** :

1. Des besoins en performances.  
2. De l'intégration au système d'exploitation.  
3. Des compétences des équipes.  

---

🌟 **Astuce** : Choisissez le bon outil en fonction de vos priorités (portabilité, performance, simplicité).  
