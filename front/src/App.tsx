import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const fetchedUsers = await window.versions.getUsers();
        console.log('Utilisateurs existants :', fetchedUsers);
        setUsers(fetchedUsers);
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
      } finally {
        setLoading(false);
      }
    };

    getUsers();
  }, []);

  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {users.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;