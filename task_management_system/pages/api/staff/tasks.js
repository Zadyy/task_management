// pages/api/staff/tasks.js
import { verifyToken } from '../../../middleware/auth';
import pool from '../../../lib/db';

const handler = async (req, res) => {
  const staffId = req.user.userId;

  if (req.method === 'GET') {
    const [rows] = await pool.query('SELECT * FROM tasks WHERE staff_id = ?', [staffId]);
    res.status(200).json(rows);
  } else if (req.method === 'PUT') {
    const { taskId, solution } = req.body;
    await pool.query('UPDATE tasks SET solution = ?, status = "completed" WHERE id = ?', [
      solution,
      taskId,
    ]);
    res.status(200).json({ message: 'Solution submitted' });
  }
};

export default verifyToken(handler);
