import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import { SettingsContainer } from '../../../components/container/SettingsContainer';
import AuthButton from '../../../components/elements/auth/AuthButton';

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
        console.error(err);
      }
    };
    getUser();
  }, []);

  return (
    <DashboardContainer>
      <SettingsContainer>
        <div className="overflow-hidden shadow sm:rounded-lg mt-20">
          {data.map((item) => (
            <div key={item}>
              <div className='text-white font-semibold text-xl'>Profile</div>
              <div className='mt-5 text-gray-300'>This information will be displayed publicly so be careful what you share</div>
              <div>
                <hr className="h-px my-8 bg-gray-200 border-0 " />
                <div className="flex justify-between">
                  Vorname <div className="ml-20">{item.firstname}</div>
                  <div className="text-secondary">update</div>
                </div>
              </div>
              <div className="">
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex justify-between">
                  Nachname <div className="ml-20">{item.lastname}</div>
                  <div className="text-secondary">update</div>
                </div>
              </div>
              <div className="">
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex justify-between">
                  PLZ <div className="ml-20">{item.PLZ}</div>
                  <div className="text-secondary">update</div>
                </div>
              </div>
              <div className="">
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex justify-between">
                  Ort <div className="ml-20">{item.location}</div>
                  <div className="text-secondary">update</div>
                </div>
              </div>
              <div className="">
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex justify-between">
                  Nummer <div className="ml-20">+{item.phone}</div>
                  <div className="text-secondary">update</div>
                </div>
              </div>
              <div className="">
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex justify-between">
                  straße <div className="ml-20">{item.street}</div>
                  <div className="text-secondary">update</div>
                </div>
              </div>
              <div className="">
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex justify-between">
                  Anrede<div className="ml-20">{item.salutation}</div>
                  <div className="text-secondary">update</div>
                </div>
              </div>
              <div className="">
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                <div className="flex justify-between">
                  Name <div className="ml-20">{user}</div>
                  <div className="text-secondary">update</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SettingsContainer>
    </DashboardContainer>
  );
};

export default Personalinformations;
