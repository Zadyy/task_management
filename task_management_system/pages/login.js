// pages/login.js
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      localStorage.setItem('token', response.data.token);

      const type = await axios.post('/api/checktype', { username })
      const role = type.data.type.role_name;
      console.log(type);
      console.log(role);
      if (role == 'user') {
        router.push('/user/dashboard');
      } else if (role == 'staff') {
        router.push('/staff/dashboard');
      } else if (role == 'admin') {
        router.push('/admin/dashboard');
      };

    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const handleSignup = () => {
    router.push('/signup');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
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
      <button type="submit">Login</button>
      <button type="button" onClick={handleSignup}>Signup</button>
    </form>
  );
}
