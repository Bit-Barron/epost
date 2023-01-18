import React, { useEffect } from 'react';
import DashboardContainer from '../components/controller/DashboardContainer';
import axios from 'axios';

const Index: React.FC = ({}) => {
  useEffect(() => {
    const getUser = async () => {
      const user = await axios.post('http://localhost:4000/auth/dashboard', {});
      console.log(user.headers);
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
