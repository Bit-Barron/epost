import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { DashboardContainer } from '../../components/container/DashboardContainer';

interface dashboardProps {}

function Dashboard({}: dashboardProps) {
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios.post('http://localhost:4000/user/dashboard');
      } catch (err: unknown) {
        if ((err as AxiosError).response?.status === 403) {
          console.log('err');
          router.push('/auth/login');
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
