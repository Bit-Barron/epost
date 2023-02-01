import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';

const DashboardNavbar = () => {
  const [user, setUser] = useState<string>('');

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
  console.log(user);

  return (
    <div className='border-b border-gray-200 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
      <div className='flex-1 min-w-0'>
        <h1 className='text-lg font-medium leading-6 text-gray-900 sm:truncate'>
          Dashboard
        </h1>
      </div>
      <div className='mt-4 flex sm:mt-0 sm:ml-4'>
        <div className='mr-2'>
          <Link
            href='/'
            type='button'
            className='order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0'
          >
            Kundenbereich verlassen
          </Link>
        </div>
        <button
          type='button'
          className='order-1 ml-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-0 sm:ml-0'
        >
          {user}
          <AiOutlineArrowDown className='ml-1' />
        </button>
      </div>
    </div>
  );
};

export default DashboardNavbar;
