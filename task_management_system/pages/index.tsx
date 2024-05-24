// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the login page
    router.push('/login');
  }, [router]);

  return null;
};

export default Home;
