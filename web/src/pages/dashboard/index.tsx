import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { DashboardContainer } from '../../components/controller/DashboardContainer';
import Image from 'next/image';
import test from '../../../public/images/test.jpg';

interface dashboardProps {}

const Dashboard: React.FC<dashboardProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState('');
  const router = useRouter();

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

  const submit = async () => {
    const response = await axios.post('http://localhost:4000/posts/create', {
      post,
    });
    console.log(response);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <DashboardContainer>
        <div className='flex '>
          <div className='p-10'>
            <div className='max-w-sm rounded-3xl overflow-hidden shadow-lg'>
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>Mountain</div>
                <p className='text-gray-700 text-base'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, Nonea! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className='px-6 pt-4 pb-2'>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  #photography
                </span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  #travel
                </span>
                <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
                  #winter
                </span>
              </div>
            </div>
          </div>
         
        </div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
