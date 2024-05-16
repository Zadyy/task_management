

// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');

// const app = express();
// app.use(bodyParser.json());

// // MySQL connection
// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'task_management',
// });

// connection.connect();

// // Login endpoint
// app.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   // Call stored procedure to validate credentials
//   connection.query(
//     'call check_login(?, ?);',
//     [email, password],
//     (error, results, fields) => {
//       if (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//         return;
//       }

//       // Check if login was successful
//       if (results && results.length > 0 && results[0][0].success) {
//         const userType = results[0][0].user_type;

//         // Redirect based on user type
//         if (userType === 'user') {
//           res.json({ redirect: '/user' });
//         } else if (userType === 'staff') {
//           res.json({ redirect: '/staff' });
//         } else {
//           res.status(400).json({ error: 'Invalid user type' });
//         }
//       } else {
//         res.status(401).json({ error: 'Invalid email or password' });
//       }
//     }
//   );
// });

// app.listen(3001, () => {
//   console.log('Server is running on port 3001');
// });


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

router.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Execute login logic
  pool.query('CALL check_login(?, ?)', [email, password], (error, results) => {
    if (error) {
      console.error('Error executing login:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }

    // Check login result and respond accordingly
    if (results) {
      const r_email = results[0][0].email;
      const redirectUrl = url.format({
        pathname: '/staff',
        query: { email: r_email },
      });
      res.json({ redirect: redirectUrl });
    } else if (results[0][0].user_type === 'user') {
      res.json({ redirect: '/user?email=${email}' });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

export default router;
