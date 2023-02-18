import axios from 'axios';
import React, { useEffect } from 'react';
import AdminContainer from '../../../components/container/AdminContainer';

interface postboxProps {}

const Postbox: React.FC<postboxProps> = ({}) => {
  const [posts, setPosts] = React.useState<any[]>([]);

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
      <div className='font-bold text-xl text-center mt-10'>PostBox</div>
      <div>
        {posts.map((item) => (
          <div key={item} className="bg-[#181a1b]">
            <div>{item.street}</div>
          </div>
        ))}
      </div>
    </AdminContainer>
  );
};

export default Postbox;
