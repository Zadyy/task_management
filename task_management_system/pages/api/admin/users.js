// pages/api/admin/users.js
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
    const [rows] = await pool.query('SELECT users.id, users.username, roles.role_name FROM users JOIN roles ON users.role_id = roles.id');
    res.status(200).json(rows);
  }
};

export default verifyToken(handler);
