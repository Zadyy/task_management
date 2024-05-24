// pages/api/user/tasks.js
import { verifyToken } from '../../../middleware/auth';
import pool from '../../../lib/db';

const handler = async (req, res) => {
  const userId = req.user.userId;

  if (req.method === 'GET') {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE user_id = ?', [userId]);
    res.status(200).json(rows);
  } else if (req.method === 'POST') {
    const { title, description } = req.body;
    await pool.query('INSERT INTO tasks (user_id, title, description) VALUES (?, ?, ?)', [
      userId,
      title,
      description,
    ]);
    res.status(201).json({ message: 'Task created' });
  }
};

export default verifyToken(handler);
