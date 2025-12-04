# Atelier machine à blagues

## Objectifs

Créer une application Electron qui récupère une blague au hasard depuis un fichier JSON local et l'affiche dans une fenêtre.

## Prérequis

Créer un fichier `jokes.json` dans le répertoire racine de votre projet avec le contenu suivant :

```json
[
  "Pourquoi les développeurs aiment-ils les blagues sur les API ? Parce qu'elles sont toujours bien documentées !",
  "Pourquoi les programmeurs confondent-ils Halloween et Noël ? Parce que OCT 31 == DEC 25 !",
  "Comment appelle-t-on un développeur qui ne commente jamais son code ? Un magicien, parce que personne ne comprend ce qu'il fait !"
]
```

## Etapes

1. Initialiser un projet Electron de base.
2. Créer une interface utilisateur simple dans `index.html` avec un bouton pour récupérer une blague et un paragraphe pour l'afficher.
3. Faire en sorte que l'application s'ouvre
4. Créer une fonction qui récupère une blague au hasard depuis le fichier `jokes.json`. 
5. Utiliser `ipcMain.handle` pour gérer la récupération de la blague dans le processus principal et l'afficher dans le DOM.

## Bonus

- Émettre une notification système pour chaque blague en plus de l'afficher dans le DOM.
- Permettre aux utilisateurs d'ajouter leurs propres blagues via un formulaire dans l'interface utilisateur.