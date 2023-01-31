import React, { useEffect, useState } from 'react';
import { DashboardContainer } from '../../../../components/container/DashboardContainer';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
interface recentProps {}

const Recent: React.FC<recentProps> = ({}) => {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('http://localhost:4000/letter/all-user');
      console.log(response.data);
      setData(response.data);
    };
    getPosts();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.post(
          'http://localhost:4000/user/dashboard'
        );
        console.log(typeof response.data);
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
      <DashboardContainer>
        <div className='text-3xl text-white'>Postbox</div>
        <div className='text-3xl mt-10 mb-10'>Your post:</div>
        <div className=''>
          {data.map((post) => (
            <div key={post.name}>
              <div>{post.posts}</div>
            </div>
          ))}
        </div>
      </DashboardContainer>
    </>
  );
};
export default Recent;
