import React, { useEffect, useState } from 'react';
import { DashboardContainer } from '../../../components/controller/DashboardContainer';
import axios from 'axios';
import { useRouter } from 'next/router';
interface recentProps {}

const Recent: React.FC<recentProps> = ({}) => {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.post('http://localhost:4000/posts/all');
      setData(response.data);
      console.log(response.data[0].posts);
    };
    getPosts();
  }, []);

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
      <DashboardContainer>
        <div className='text-3xl text-white'>Recent</div>
        <div className='text-3xl mt-10 mb-10'>Your post:</div>
        <div className=''>
          {data.map((post, idx) => (
            <div key={idx}>
              <div>{post.posts}</div>
            </div>
          ))}
        </div>
      </DashboardContainer>
    </>
  );
};
export default Recent;
