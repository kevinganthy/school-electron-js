# Better UI

## Objectifs

Améliorer l'interface utilisateur de `User Management` en utilisant un framework moderne.

## Pré-requis

- Ranger tout ce qui concerne electron dans le dossier `electron`
- Initialiser une app frontend dans le dossier `front` avec `npm create vite@latest front`
- Lancer avec une commande unique les deux apps (electron + vite) avec `concurrently` :

```bash
npm init -y
npm install concurrently --save-dev
```

Puis dans le `package.json`, ajouter le script suivant :

```json
"scripts": {
   "start": "concurrently \"npm run start --prefix electron\" \"npm run dev --prefix front\""
},
```

## Etapes

1. Modifier le `main.js` pour appeler `loadURL` à la place de `loadFile`
2. Supprimer le contenu du template Vite
3. Appeler la fonction `getUsers` dans le renderer pour afficher la liste dans le DOM
4. Ajouter un formulaire pour ajouter un utilisateur

## Point post développement

Lorsque l'on buildera l'application pour la production, il faudra modifier le `main.js` pour charger le fichier `index.html` généré par Vite.

```js
if ( app.isPackaged ) {
   win.loadFile(path.join(process.cwd(), 'dist/index.html'))
} else {
   win.loadURL('http://localhost:5173')
}
```

`app.isPackaged` permet de savoir si l'application est en mode production ou en mode développement.

## Bonus

- Ajouter la feature de suppression d'un utilisateur
- Ajouter la feature de modification d'un utilisateur

