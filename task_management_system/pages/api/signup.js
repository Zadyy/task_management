// pages/api/signup.js
import pool from '../../lib/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { username, password, role_id } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const [rows] = await pool.query(
    'INSERT INTO users (username, password, role_id) VALUES (?, ?, ?)',
    [username, hashedPassword, role_id]
  );

  res.status(200).json({ message: 'User created successfully', userId: rows.insertId });
}
