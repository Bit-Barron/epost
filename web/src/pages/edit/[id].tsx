import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DashboardContainer } from '../../components/container/DashboardContainer';
import AuthButton from '../../components/elements/auth/AuthButton';
import AuthInput from '../../components/elements/auth/AuthInput';
import Checkboxes from '../../components/elements/Checkboxes';
import Impresum from '../../components/elements/pricepage/Impresum';

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

  const submit = () => {
    
  };

  return (
    <DashboardContainer>
      <div>
        <h1 className='font-bold text-2xl text-center mt-20 mb-10'>
          Auftrag {id} bearbeiten
        </h1>
        <div className='justify-center p-5 flex mt-20'>
          <div className='bg-[#212323] p-10'>
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
              <div className='ml-28'>
                <Checkboxes name={'Doppelseitig'} />
              </div>
            </div>
          </div>
          <div className='bg-[#212323] p-10'>
            <h1 className='text-secondary font-bold'>Versandeinstellungen</h1>
            <div className='mt-5 text-gray-500 flex'>
              <AuthInput type={''} label={'Einschreiben'} className='w-60' />
              <div className='ml-20'>
                <AuthInput
                  type={''}
                  label={'Zeitversetzer Versand '}
                  className='w-60'
                />
              </div>
            </div>
            <Checkboxes
              name={`C4 Kuvertierhülle: Kuvertierung in einem Umschlag`}
            />
            <div className='ml-8 text-gray-700'>
              ohne Falzung (weniger als 9 Blatt)
            </div>
          </div>
        </div>
        <div>
          <AuthButton name={'Speichern'} className={'w-96'} />
        </div>
      </div>

      <div className='mt-20'>
        <Impresum />
      </div>
    </DashboardContainer>
  );
};

export default Edit;
