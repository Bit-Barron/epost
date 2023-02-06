import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DashboardContainer } from '../../components/container/DashboardContainer';

const Edit = () => {
  const [isData, setData] = useState<any[]>([]);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('/letter/all-user');
      console.log(response.data);
      setData(response.data);
    };
    getPosts();
  }, []);

  return (
    <DashboardContainer>
      <div>
        <h1 className='font-bold text-2xl text-center mt-52'>
          Auftrag {id} bearbeiten
        </h1>
        <div className='mx-auto bg-[#1e2021]'>
          <div>asd</div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Edit;
