// pages/signup.js
import { useState } from 'react';
import axios from 'axios';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [roleId, setRoleId] = useState(1); // Default to 'user'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/signup', { username, password, role_id: roleId });
      alert('User created successfully');
    } catch (error) {
      alert('Error creating user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Signup</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <select value={roleId} onChange={(e) => setRoleId(e.target.value)}>
        <option value={1}>User</option>
        <option value={2}>Staff</option>
        <option value={3}>Admin</option>
      </select>
      <button type="submit">Signup</button>
    </form>
  );
}
