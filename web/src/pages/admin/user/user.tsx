import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AdminContainer from '../../../components/container/AdminContainer';

interface userProps {}

const User: React.FC<userProps> = ({}) => {
  const [user, setUser] = useState<any[]>([]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get('/user/all');
      console.log(response);
    };
    getUser();
  }, []);

  return (
    <AdminContainer>
      <div>asdlökasd</div>
    </AdminContainer>
  );
};

export default User;
