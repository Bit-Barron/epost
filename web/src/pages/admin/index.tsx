import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AdminContainer from '../../components/container/AdminContainer';

interface indexProps {}

const Admin: React.FC<indexProps> = ({}) => {
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.post('/user/admin');
        console.log(res);
      } catch (err: unknown) {
        if ((err as AxiosError).response?.status === 403) {
          router.push('/auth/login');
        } else {
          console.error(err);
        }
      }
    };
    getUser();
  }, [router]);
  
  return <AdminContainer></AdminContainer>;
};
export default Admin;
