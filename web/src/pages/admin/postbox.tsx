import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import AdminContainer from '../../components/container/AdminContainer';

const Recent = ({}) => {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.post('/leter/all');
      console.log(response.data);
      setData(response.data);
    };
    getPosts();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios.post('/user/dashboard');
      } catch (err: unknown) {
        if ((err as AxiosError).response?.status === 403) {
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
      <AdminContainer>
        <div className='text-3xl text-white'>Recent</div>
        <div className='text-3xl mt-10 mb-10'>Your post:</div>
        <div className=''>
          {data.map((post) => (
            <div key={post.name}>
              <div>{post.posts}</div>
            </div>
          ))}
        </div>
      </AdminContainer>
    </>
  );
};
export default Recent;
