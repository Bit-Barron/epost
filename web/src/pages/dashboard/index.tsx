import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { DashboardContainer } from '../../components/container/DashboardContainer';

interface dashboardProps {}

function Dashboard({}: dashboardProps) {
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios.post('http://localhost:4000/auth/dashboard');
      } catch (err: any) {
        if (err.response.status === 403) {
          router.push('/login');
        } else {
          console.log(err);
        }
      }
    };
    getUser();
  }, [router]);

  return (
    <>
      <DashboardContainer></DashboardContainer>
    </>
  );
}

export default Dashboard;
