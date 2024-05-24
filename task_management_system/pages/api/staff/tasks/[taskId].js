// pages/api/staff/tasks/[taskId].js
import pool from '../../../../lib/db';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method !== 'PUT') {
    return res.status(405).send('Method Not Allowed');
  }

  const token = req.headers.authorization.split(' ')[1];
  const { taskId } = req.query;
  const { solution } = req.body;

  try {
    const decoded = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET);

    // Check if the user is a staff member
    if (decoded.roleId !== 2) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    // Update the task with the provided solution
    await pool.query('UPDATE tasks SET solution = ? WHERE id = ?', [solution, taskId]);

    res.status(200).json({ message: 'Task updated successfully' });
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}
