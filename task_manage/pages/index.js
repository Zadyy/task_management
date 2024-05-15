// pages/login.js

import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Here you can implement your login logic, e.g., send a request to your server
    // and handle authentication
    console.log('Login clicked');
  };

  const handleSignup = () => {
    // Redirect to signup page
    router.push('/signup');
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <button type="button" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
};

export default Login;
