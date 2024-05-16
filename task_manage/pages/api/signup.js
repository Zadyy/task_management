

import express from 'express';
import mysql from 'mysql';

const router = express.Router();

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 10, // Adjust as needed
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'task_manager',
});

router.post('/api/signup', (req, res) => {
  const { email, password } = req.body;

  // Check if account already exists
  pool.query('CALL check_account_exists(?)', [email], (error, checkResults) => {
    if (error) {
      console.error('Error checking account existence:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

    if (checkResults[0][0].accountExists) {
      return res.status(400).json({ error: 'Account already exists' });
    }

    // If account doesn't exist, create a new account
    pool.query('CALL create_account(?, ?)', [email, password], (createError, createResults) => {
      if (createError) {
        console.error('Error creating account:', createError);
        return res.status(500).json({ error: 'Internal server error' });
      }

      // Redirect to successful page with login button
      res.status(200).json({ success: true, message: 'Account created successfully' });
    });
  });
});

export default router;
