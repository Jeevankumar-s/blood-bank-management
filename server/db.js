// server/db.js
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

// Open the SQLite database
const db = await open({
  filename: './data.db',
  driver: sqlite3.Database
});

// Create tables if they don't exist
await db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS employees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS blood_stock (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    blood_type TEXT NOT NULL,
    quantity INTEGER NOT NULL
  );
`);

console.log('Connected to SQLite database.');

export default db;
