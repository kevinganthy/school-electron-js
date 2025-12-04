const input = document.querySelector('input[type="text"]');
const button = document.querySelector('button');
const form = document.querySelector('form');
const submit = document.querySelector('input[type="submit"]');
let users = [];

const getUsers = async () => {
  users = await window.versions.getUsers();
  console.log('Utilisateurs existants :', users);
};
getUsers();

input.addEventListener('keyup', async () => {
  const username = input.value;
  const exists = users.includes(username);
  if (exists) {
    input.style.borderColor = 'red';
    submit.disabled = true;
  } else {
    input.style.borderColor = 'green';
    submit.disabled = false;
  }
})

button.addEventListener('click', async (event) => {
  event.preventDefault();
  const username = input.value;
  const exists = await window.versions.isUserExist(username);
  if (exists) {
    alert(`L'utilisateur ${username} existe déjà.`);
    submit.disabled = true;
  } else {
    alert(`L'utilisateur ${username} n'existe pas.`);
    submit.disabled = false;
  }
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const username = input.value;
  const exists = await window.versions.isUserExist(username);
  if (!exists) {
    window.versions.addUser(username);
    alert(`Utilisateur ${username} ajouté avec succès.`);
    input.value = '';
    submit.disabled = true;
  } else {
    alert(`L'utilisateur ${username} existe déjà. Impossible de l'ajouter.`);
  }
});

// Bonus
window.versions.onUserAdded((_event, username) => {
  users.push(username);
  console.log('Nouvel utilisateur ajouté :', username);
});