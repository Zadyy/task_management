// server.js (or wherever your backend code resides)

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.json());

// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'database_name',
});

connection.connect();

// Login endpoint
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // Call stored procedure to validate credentials
  connection.query(
    'CALL your_stored_procedure(?, ?)',
    [email, password],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
        return;
      }

      // Check if login was successful
      if (results && results.length > 0 && results[0][0].success) {
        const userType = results[0][0].userType;

        // Redirect based on user type
        if (userType === 'mainuser') {
          res.json({ redirect: '/mainuser' });
        } else if (userType === 'mainstaff') {
          res.json({ redirect: '/mainstaff' });
        } else {
          res.status(400).json({ error: 'Invalid user type' });
        }
      } else {
        res.status(401).json({ error: 'Invalid email or password' });
      }
    }
  );
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
