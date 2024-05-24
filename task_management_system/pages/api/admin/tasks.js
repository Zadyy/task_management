// pages/api/admin/tasks.js
import { verifyToken } from '../../../middleware/auth';
import pool from '../../../lib/db';

const handler = async (req, res) => {
  const adminId = req.user.userId;

  // Check if user is admin
  const [adminRows] = await pool.query('SELECT * FROM users WHERE id = ?', [adminId]);
  if (adminRows[0].role_id !== 3) {
    return res.status(403).json({ message: 'Access denied' });
  }

  if (req.method === 'GET') {
    const [rows] = await pool.query('SELECT * FROM tasks');
    res.status(200).json(rows);
  } else if (req.method === 'PUT') {
    const { taskId, staffId } = req.body;
    await pool.query('UPDATE tasks SET staff_id = ? WHERE id = ?', [staffId, taskId]);
    res.status(200).json({ message: 'Task reassigned' });
  }
};

export default verifyToken(handler);
