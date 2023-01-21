import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { DashboardContainer } from '../../components/controller/DashboardContainer';
import Image from 'next/image';
import test from '../../../public/images/test.jpg';
import CreatePost from '../../components/elements/CreatePost/CreatePost';

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
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
