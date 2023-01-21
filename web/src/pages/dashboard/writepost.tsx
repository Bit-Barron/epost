import axios from 'axios';
import { useRouter } from 'next/router';
import React, {  useEffect, useState } from 'react';
import { DashboardContainer } from '../../components/controller/DashboardContainer';

interface dashboardProps {}

const WritePost: React.FC<dashboardProps> = ({}) => {
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
        <div>asdf</div>
      </DashboardContainer>
    </>
  );
};

export default WritePost;
