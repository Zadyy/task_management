// pages/signup.js

import { useState } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await fetch('/api/signup', {
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

  const handleLoginRedirect = () => {
    // Redirect to login page
    router.push('/login');
  };

  return (
    <div>
      <h1>Signup</h1>
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
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      </form>
      <p>Already have an account? <a href="#" onClick={handleLoginRedirect}>Login</a></p>
    </div>
  );
};

export default Signup;
