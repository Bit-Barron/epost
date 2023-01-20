import React, { useEffect } from 'react';
import DashboardContainer from '../components/controller/DashboardContainer';
import axios from 'axios';
import { useRouter } from 'next/router';

const Index: React.FC = ({}) => {
  const router = useRouter();
  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await axios.post('http://localhost:4000/auth/dashboard');
      } catch (err) {
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
    <div>
      <DashboardContainer></DashboardContainer>
    </div>
  );
};
export default Index;
