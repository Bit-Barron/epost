import axios from 'axios';
import React, { useEffect } from 'react';
import AdminContainer from '../../../components/container/AdminContainer';

interface postboxProps {}

const Postbox: React.FC<postboxProps> = ({}) => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/letter/all`);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <AdminContainer>
      <div>
        {posts.map((idx) => (
          <div key={idx}>
            <div>{}</div>
          </div>
        ))}
      </div>
    </AdminContainer>
  );
};

export default Postbox;
