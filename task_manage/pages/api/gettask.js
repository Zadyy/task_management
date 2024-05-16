
import express from 'express';
import mysql from 'mysql';
import url from 'url';

const router = express.Router();

const pool = mysql.createPool({
    connectionLimit: 10, // Adjust as needed
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'task_management',
  });

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { email } = req.query;

        try {
            // Query the database to get tasks for the specified user
            const tasks = await pool.query('call get_task(?)', [email]);
            
            // Return the tasks as JSON response
            res.status(200).json(tasks);
        } catch (error) {
            // Handle errors
            console.error(error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}
