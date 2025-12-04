---
title: Communication entre processus (IPC)
duration: 20 minutes
description: Comprendre et implémenter la communication entre le main process et les renderer processes dans une application Electron.
---

# {{ page.title }}

⏱️ Durée estimée : {{ page.duration }}

> {{ page.description }} 

## 🎯 Objectifs pédagogiques

* **Comprendre** l’architecture multi-processus d’Electron.
* **Utiliser** l’IPC pour la communication entre main et renderer.
* **Mettre en place** des échanges sécurisés via un preload script.

---

## Architecture interne

Electron sépare deux mondes :

* Main process : accès natif (fichiers, menus, fenêtres).
* Renderer : pages web.

> Preload = passerelle sécurisée entre les deux.

Ils ne partagent pas le même contexte. L’IPC sert à échanger des données entre eux.

> IPC signifie **Inter-Process Communication**.

---

## Pourquoi cette séparation ?

* Sécurité : le renderer n’a pas accès au système.
* Stabilité : un bug UI ne fait pas planter l’app entière.
* Performance : tâches système centralisées dans le main process.
* Architecture modulaire.

---

## Cas d’usage fréquents

* Charger/sauver des fichiers.
* Ouvrir des boîtes de dialogue.
* Récupérer des infos système.
* Gérer des fenêtres.

---

## Canaux disponibles

### `ipcMain`

* Reçoit sur **main**
* Emet depuis **main**

### `ipcRenderer`

* Reçoit sur **renderer**
* Emet depuis **renderer**

### `contextBridge` + preload

Permet d’exposer une API sûre au renderer quand `contextIsolation` est activé (recommandé).

---

## Types d’échanges

### Message “fire and forget”

* Renderer → Main :

  ```js
  ipcRenderer.send('log', 'hello')
  ```
* Main :

  ```js
  ipcMain.on('log', (e, msg) => console.log(msg))
  ```

---

### Requêtes avec réponse

* Renderer :

  ```js
  const result = await ipcRenderer.invoke('get-user')
  ```
* Main :

  ```js
  ipcMain.handle('get-user', () => ({ name: 'John' }))
  ```

Simple, structuré, sécurisé.

---

### Main → Renderer

* Main :

  ```js
  mainWindow.webContents.send('notify', 'ok')
  ```
* Renderer :

  ```js
  ipcRenderer.on('notify', (_, msg) => console.log(msg))
  ```

---

| Méthode                | Sens            | Description             |
| ---------------------- | --------------- | ----------------------- |
| `ipcRenderer.send()`   | Renderer → Main | Envoi sans retour       |
| `ipcRenderer.invoke()` | Renderer → Main | Appel async avec retour |
| `ipcMain.handle()`     | Main → Renderer | Répond à un `invoke`    |
| `webContents.send()`   | Main → Renderer | Push d’événements       |

---

## Communication sécurisée (préload)

**preload.js**

```js
const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('api', {
  getUser: () => ipcRenderer.invoke('get-user'),
  log: (msg) => ipcRenderer.send('log', msg)
})
```

**renderer**

```js
window.api.getUser().then(console.log)
```

Réduit les risques d’injection.

---

## Structurer vos canaux IPC

Organiser vos handlers par modules :

```
main/
 ├─ ipc/
 │    ├─ notes.js
 │    ├─ config.js
 │    └─ window.js
 ├─ main.js
```

Dans chaque fichier :

```js
module.exports = (ipcMain, db) => {
  ipcMain.handle('notes:get', () => {...})
}
```

👉 Plus propre
👉 Plus maintenable

---

### Bonnes pratiques

* Toujours utiliser `invoke/handle` si besoin d’une réponse propre.
* Ne jamais exposer `ipcRenderer` directement au renderer.
* Valider les données côté main (entrée/sortie).
* Centraliser les canaux IPC pour éviter les collisions.

### Pièges à éviter

* ❌ Mélanger logique métier et IPC
* ❌ Utiliser IPC pour tout (limiter aux actions système)
* ❌ Exposer trop d’API au renderer
* ❌ Faire passer des objets trop lourds par IPC
* ❌ Ne pas nettoyer les listeners

---

## J'utilise l'IPC quand ?

* ✅ Lecture/écriture fichiers
* ✅ Accès à la base de données
* ✅ Notifications système
* ✅ Gestion des fenêtres
* ✅ Paramètres utilisateurs
* ✅ Actions sensibles nécessitant isolation
* ❌ Gérer l’état UI
* ❌ Logique locale du renderer
* ❌ Données déjà disponibles côté renderer

---

## Conclusion

L’IPC est **le cœur d’Electron**.

C’est la frontière entre :

- votre interface (renderer)
- vos fonctionnalités système (main)

Bien maîtrisé, il permet de créer des applications desktop robustes, sécurisées et parfaitement architecturées.