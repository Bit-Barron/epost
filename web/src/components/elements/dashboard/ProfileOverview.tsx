import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface ProfileOverviewProps {}

export const ProfileOverview: React.FC<ProfileOverviewProps> = ({}) => {
  const user = {
    email: 'chelseahagon@example.com',
    role: 'Human Resources Manager',
  };

  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('/user/user');
        setUsername(response.data.email);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  return (
    <section aria-labelledby='profile-overview-title'>
      <div className='rounded-lg bg-white overflow-hidden shadow'>
        <h2 className='sr-only' id='profile-overview-title'>
          Profile Overview
        </h2>
        <div className='bg-white p-6'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <div className='sm:flex sm:space-x-5'>
              <div className='mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left'>
                <p className='text-sm font-medium text-gray-600'>
                  Welcome back,
                </p>
                <p className='text-xl font-bold text-gray-900 sm:text-2xl'>
                  {username}
                </p>
                <p className='text-sm font-medium text-gray-600'>{user.role}</p>
              </div>
            </div>
            <div className='mt-5 flex justify-center sm:mt-0'>
              <a
                href='#'
                className='flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
              >
                View profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
