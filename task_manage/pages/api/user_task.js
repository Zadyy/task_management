// pages/api/login.js

import express from 'express';
import mysql from 'mysql';
import url from 'url';

const router = express.Router();

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust as needed
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task_management',
});

router.post('/api/user_task', (req, res) => {
  const { email } = req.body;

  // Execute
  const sql = `call user_task(?)`;
  pool.query(sql, [email], (error, results) => {
    if (error) {
      console.error('Error finding task:', error);
      return res.status(500).json({ error: 'Internal server error' });
    } 
    

    if (results) {
        res.status(200).json(tasks);
      } else {
      res.status(401).json({ error: 'Task not found' });
    }
  });
});

export default router;