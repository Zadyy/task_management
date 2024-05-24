// pages/admin/dashboard.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchUsersAndTasks = async () => {
      const token = localStorage.getItem('token');
      const [userResponse, taskResponse] = await Promise.all([
        axios.get('/api/admin/users', {
          headers: { Authorization: `Bearer ${token}` },
        }),
        axios.get('/api/admin/tasks', {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);
      setUsers(userResponse.data);
      setTasks(taskResponse.data);
    };

    fetchUsersAndTasks();
  }, []);

  const handleReassignTask = async (taskId, staffId) => {
    const token = localStorage.getItem('token');
    await axios.put(
      `/api/admin/tasks/${taskId}`,
      { staffId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    const response = await axios.get('/api/admin/tasks', {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(response.data);
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Manage Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - {user.role_name}
          </li>
        ))}
      </ul>
      <h2>Manage Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <select
              defaultValue={task.staff_id}
              onChange={(e) => handleReassignTask(task.id, e.target.value)}
            >
              {users
                .filter((user) => user.role_name === 'staff')
                .map((staff) => (
                  <option key={staff.id} value={staff.id}>
                    {staff.username}
                  </option>
                ))}
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
}
