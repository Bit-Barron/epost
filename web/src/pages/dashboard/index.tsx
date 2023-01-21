import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { DashboardContainer } from '../../components/controller/DashboardContainer';
import CreatePost from '../../components/elements/CreatePost/CreatePost';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

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
  console.log(post);

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
        <div className='text-center font-bold text-2xl  mt-10'>
          Einen Brief direkt online schreiben und versenden lassen
        </div>
        <div className='mt-10 flex justify-center'></div>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
