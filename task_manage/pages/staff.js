import { useRouter } from 'next/router';

const StaffPage = () => {
  const router = useRouter();
  const { email } = router.query;

  return (
    <div>
      <h1>Welcome Staff!</h1>
      {email && <p>Email: {email}</p>}
    </div>
  );
};

export default StaffPage;
