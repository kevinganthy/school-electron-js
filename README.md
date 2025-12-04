# User list management

## Objectifs

Gérer une liste d'utilisateurs dans une application Electron. Le front permettra d'ajouter des personnes à une liste, en vérifiant préalablement si elle existe dans les données stockées en local, pour éviter de solliciter la couche main inutilement.

## Pré-requis

Ajouter la dépendance `sqlite3` au projet.

La structure de la base de données intialisée sera la suivante :

```sql  
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE
);

INSERT INTO users (name) VALUES
('alice'),
('bob'),
('charlie');
```

## Etapes

1. Commencer par mettre en place la communication entre le renderer et le main process sans se préoccuper de la base de données.  
   - getUsers: Récupérer la liste des utilisateurs depuis le main process.
   - isUserExist: Vérifier si un utilisateur existe déjà dans la liste.
   - addUser: Ajouter un utilisateur à la liste.
2. Tester la communication
   - Un formulaire dans le renderer permettra d'ajouter un utilisateur.
   - Un event listener sur l'input vérifiera en temps réel si l'utilisateur existe déjà dans les données du renderer.
   - Si l'utilisateur n'existe pas, le formulaire pourra être soumis en 2 étapes : vérifier l'existence de l'utilisateur via isUserExist, puis l'ajouter via addUser.
3. Implémenter la logique de gestion des utilisateurs dans le main process en utilisant SQLite.

## Bonus

- Faire évoluer la liste des utilisateurs dans le renderer à chaque ajout d'un utilisateur.
- Ajouter des notifications système pour informer l'utilisateur du succès ou de l'échec des opérations.