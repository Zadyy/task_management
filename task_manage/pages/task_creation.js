// pages/task_creation.js

import { useState } from 'react';
import { useRouter } from 'next/router';

const Task_creation = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const createTask = async () => {
    try {
      const response = await fetch('/api/task_creation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, description }),
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

  const gotodash = () => {
    // Redirect to login page
    router.push('/login');
  };

  return (
    <div>
      <h1>Create a task</h1>
      <form>
        <div>
          <label>Title:</label>
          <input
            type="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="button" onClick={createTask}>
          Create
        </button>
      </form>
      <p>Already have an account? <a href="#" onClick={gotodash}>Login</a></p>
    </div>
  );
};

export default Task_creation;
