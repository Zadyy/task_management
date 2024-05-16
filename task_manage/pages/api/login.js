
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
  const sql = `call check_login(?,?)`;
  pool.query(sql, [email, password], (error, results) => {
    if (error) {
      console.error('Error executing login:', error);
      return res.status(500).json({ error: 'Internal server error' });
    } 
    
    // Check login result and respond accordingly
    if (results.length > 0) {
      const r_email = results[0][0].email;
      const type = results[0][0].user_type;
      if (type === 'staff') {
        const redirectUrl = url.format({
        pathname: '/staff',
        query: { email: r_email },
      });
      res.json({ redirect: redirectUrl });
      } else if (type === 'user') {
        const redirectUrl = url.format({
          pathname: '/user',
          query: { email: r_email },
        });
      res.json({ redirect: redirectUrl });
      }
     } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  });
});

export default router;






// // pages/api/login.js

// import express from 'express';
// import mysql from 'mysql';
// import url from 'url';

// const router = express.Router();

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'task_management',
// });

// router.post('/api/login', (req, res) => {
//   const { email, password } = req.body;

//   // Execute login logic
//   pool.query('CALL check_login(?, ?)', [email, password], (error, results) => {
//     if (error) {
//       console.error('Error executing login:', error);
//       return res.status(500).json({ error: 'Internal server error' });
//     }

//     // Check login result and respond accordingly
//     if (results[0].type === 'staff') {
//       // Construct dynamic redirect URL
//       const redirectUrl = url.format({
//         pathname: '/staff',
//         query: { email }, // Include email as query parameter
//       });
//       res.redirect(redirectUrl);
//     } else if (results[0].type === 'user') {
//       // Redirect to another dynamic page
//       res.redirect('/user');
//     } else {
//       res.status(401).json({ error: 'Invalid email or password' });
//     }
//   });
// });

// export default router;








// // server.js (or wherever your backend code resides)

// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const router = express.Router();

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
//     'CALL check_login(?, ?)',
//     [email, password],
//     (error, results, fields) => {
//       if (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//         return;
//       }

//       // Check if login was successful
//       if (results && results.length > 0 && results[0][0].success) {
//         const user_type = results[0][0].user_type;

//         // Redirect based on user type
//         if (user_type === 'mainuser') {
//           res.json({ redirect: '/mainuser' });
//         } else if (user_type === 'mainstaff') {
//           res.json({ redirect: '/mainstaff' });
//         } else {
//           res.status(400).json({ error: 'Invalid user type' });
//         }
//       } else {
//         res.status(401).json({ error: 'Invalid email or password' });
//       }
//     }
//   );
// });

// // app.listen(3001, () => {
// //   console.log('Server is running on port 3001');
// // });

// export default router;