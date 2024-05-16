import { useRouter } from 'next/router';

const SuccessfulPage = () => {
  const router = useRouter();

  const handleRedirectToLogin = () => {
    router.push('/login'); // Redirect to the login page
  };

  return (
    <div>
      <h1>Congratulations! You're Successfully Registered</h1>
      <p>Welcome to our platform.</p>
      <button onClick={handleRedirectToLogin}>Go to Login</button>
    </div>
  );
};

export default SuccessfulPage;
