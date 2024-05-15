// pages/signup.js

import { useState } from 'react';
import { useRouter } from 'next/router';

const Signup = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Here you can implement your signup logic, e.g., send a request to your server
    // and handle user registration
    console.log('Signup clicked');
    // Redirect to login page after successful signup
    router.push('/login');
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
