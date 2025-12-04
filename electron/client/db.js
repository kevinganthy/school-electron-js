import sqlite3 from 'sqlite3'
import { open } from 'sqlite'


const openDb = async () => {
  const db = await open({
    filename: './users.db',
    driver: sqlite3.Database
  });

  db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
    );

    INSERT INTO users (name) VALUES
    ('alice'),
    ('bob'),
    ('charlie');
  `);

  return db;
}


export const db = await openDb();