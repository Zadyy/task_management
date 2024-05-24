// pages/staff/dashboard.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function StaffDashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get('/api/staff/tasks', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  const handleSolutionSubmit = async (taskId, solution) => {
    const token = localStorage.getItem('token');
    await axios.put(
      `/api/staff/tasks/${taskId}`,
      { solution },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const response = await axios.get('/api/staff/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(response.data);
  };

  return (
    <div>
      <h1>Staff Dashboard</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <textarea
              placeholder="Solution"
              onBlur={(e) => handleSolutionSubmit(task.id, e.target.value)}
            ></textarea>
          </li>
        ))}
      </ul>
    </div>
  );
}
