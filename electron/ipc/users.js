import { db } from '../client/db.js';

export const getUsers = async () => {
  const users = await db.all('SELECT name FROM users');
  return users.map(user => user.name);
};

export const isUserExist = async (username) => {
  const users = await getUsers();
  return users.includes(username);
};

export const addUser = async (user) => {
  const result = await db.run('INSERT INTO users (name) VALUES (?)', user);
  return result?.lastID;
};