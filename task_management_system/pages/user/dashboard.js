// pages/user/dashboard.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserDashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/user/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  const handleCreateTask = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    await axios.post(
      '/api/user/tasks',
      { title, description },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const response = await axios.get('/api/user/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(response.data);
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      <form onSubmit={handleCreateTask}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
        ></textarea>
        <button type="submit">Create Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
