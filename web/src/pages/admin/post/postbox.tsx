import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AdminContainer from '../../../components/container/AdminContainer';

interface postboxProps {}

const Postbox: React.FC<postboxProps> = ({}) => {
  const [posts, setPosts] = React.useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/setting/all`);
      console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <AdminContainer>
      <div className="font-bold text-xl text-center mt-10">PostBox</div>
      <div className="flex justify-center mt-10">
        {posts.map((item) => (
          <div key={item}>ASDK</div>
        ))}
      </div>
    </AdminContainer>
  );
};

export default Postbox;
