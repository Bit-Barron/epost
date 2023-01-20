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
        console.log(user.data);
      } catch (err) {
        if (err.response && err.response.status === 401) {
          router.push('/login');
        } else {
          console.log(err);
        }
      }
    };
    getUser();
  }, []);

  return (
    <div>
      <DashboardContainer></DashboardContainer>
    </div>
  );
};
export default Index;
