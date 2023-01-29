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
        const res = await axios.post('http://localhost:4000/user/dashboard');
        console.log(res)
      } catch (err: unknown) {
        if ((err as AxiosError).response?.status === 403) {
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
