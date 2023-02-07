import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import { SettingsContainer } from '../../../components/container/SettingsContainer';

interface settingsProps {}

const Personalinformations: React.FC<settingsProps> = ({}) => {
  const [data, setData] = useState<any[]>([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`/setting/all-user`);
      setData(response.data);
    };
    getData();
  }, []);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('/user/user');
        setUser(response.data.email);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <DashboardContainer>
      <SettingsContainer>
        <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
          <div className='border-t border-gray-200'>
            <dl>
              {data.map((item) => (
                <div key={item.name}>
                  <div className='bg-[#1b1d1e] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>Firma</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      Optional
                    </dd>
                  </div>
                  <div className='bg-[#181a1b] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 '>
                    <dt className='text-sm font-medium text-gray-500'>
                      Anrede
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex flex-col'>
                      <span className='align-self-center'>
                        {item.salutation}
                      </span>
                    </dd>
                  </div>
                  <div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#1b1d1e]'>
                    <dt className='text-sm font-medium text-gray-500'>Email</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {user}
                    </dd>
                  </div>
                  <div className='bg-[#181a1b] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      vorname
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {item.firstname}
                    </dd>
                  </div>
                  <div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#1b1d1e]'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Nachname
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {item.lastname}
                    </dd>
                  </div>
                  <div className='bg-[#181a1b] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      straße
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      <dd
                        role='list'
                        className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'
                      >
                        {item.street}
                      </dd>
                    </dd>
                  </div>
                  <div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#1b1d1e]'>
                    <dt className='text-sm font-medium text-gray-500'>PLZ</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      {item.PLZ}
                    </dd>
                  </div>
                  <div className='bg-[#181a1b] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>Ort</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex flex-col'>
                      <span className='align-self-center'>{item.location}</span>
                    </dd>
                  </div>
                  <div className='px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 bg-[#1b1d1e]'>
                    <dt className='text-sm font-medium text-gray-500'>LAND</dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
                      DE
                    </dd>
                  </div>
                  <div className='bg-[#181a1b] px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
                    <dt className='text-sm font-medium text-gray-500'>
                      Telefon
                    </dt>
                    <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 flex flex-col'>
                      <span className='align-self-center'>+{item.phone}</span>
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <hr className='h-px my-8 border-0 dark:bg-gray-700' />
          <div className='flex ml-10 mb-10'>
            <button
              type='button'
              className='inline-flex items-center p-3 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Konto unweigerlich löschen
            </button>
            <div className='flex justify-end ml-[1400px]'>
              <button
                type='button'
                className='inline-flex items-center p-3 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Änderungen speichern
              </button>
            </div>
          </div>
        </div>
      </SettingsContainer>
    </DashboardContainer>
  );
};

export default Personalinformations;
