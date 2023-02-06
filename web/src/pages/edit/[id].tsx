import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DashboardContainer } from '../../components/container/DashboardContainer';
import Checkboxes from '../../components/elements/edit/checkboxes';

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
        <div className='flex justify-center p-5'>
          <div className='bg-[#212323] w-1/2 p-10'>
            <h1 className='text-secondary font-bold'>Druckeinstellungen</h1>
            <div className='mt-5 text-gray-500'>
              Wählen Sie zwischen einem Schwarzweiß- und Farbdruck <br /> aus
              und geben Sie an, ob Ihre Briefe ein- oder doppelseitig <br />
              gedruckt werden sollen.
            </div>
            <div className='flex'>
              <Checkboxes name={'Schwarzweiß'} />
              <div className='ml-20'>
                <Checkboxes name={'Farbe'} />
              </div>
            </div>
            <div className='flex'>
              <Checkboxes name={'Einseitig'} />
              <div className='ml-20'>
                <Checkboxes name={'Doppelseitig'} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardContainer>
  );
};

export default Edit;
