// pages/api/login.js
import pool from '../../lib/db';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { username } = req.body;

  const [rows] = await pool.query('select role_name from users left join roles on users.role_id = roles.id WHERE username = ?', [username]);

  if (rows.length === 0) {
    return res.status(401).json({ message: 'Invalid login info' });
  }

  const type = rows[0];

  res.status(200).json({ type });
}
