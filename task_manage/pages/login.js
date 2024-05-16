// pages/login.js

import { useState } from 'react';
import { useRouter } from 'next/router';

const Login = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
      // Validate email and password
      if (!email || !password) {
        alert('Please provide both email and password');
        return;
      }
    
      try {
        const response = await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
    
        if (response.ok) {
          const data = await response.json();
          router.push(data.redirect);
        } else {
          const errorData = await response.json();
          alert(errorData.error); // or display error message to user
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle other errors as needed
      }
    };
    
  
    const handleSignupRedirect = () => {
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
      <button type="button" onClick={handleSignupRedirect}>
        Signup
      </button>
    </div>
  );
};

export default Login;
