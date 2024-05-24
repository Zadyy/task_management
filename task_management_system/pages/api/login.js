// pages/api/login.js
import pool from '../../lib/db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  const { username, password } = req.body;

  const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

  if (rows.length === 0) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const user = rows[0];

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id, roleId: user.role_id }, 'your_jwt_secret', {
    expiresIn: '1h',
  });

  res.status(200).json({ token });
}
