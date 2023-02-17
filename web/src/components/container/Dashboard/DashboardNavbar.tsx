import { Menu } from '@headlessui/react';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Profile from './Profile';

const DashboardNavbar = () => {
  const [user, setUser] = useState<string>('');

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
    <div className='border-b border-gray-200 px-4 p-3.5 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'>
      <div>
        <h1 className='text-lg font-medium leading-6 text-white sm:truncate'>
          Dashboard
        </h1>
      </div>
      <div className='mt-4 flex sm:mt-0 sm:ml-4'>
        <div className='mr-2'>
          <Link
            href='/'
            type='button'
            className='order-1 ml-3 inline-flex items-center px-4 py-2 border border-dashed border-gray-600 shadow-sm text-sm font-medium rounded-md text-white focus:outline-none'
          >
            Kundenbereich verlassen
          </Link>
        </div>
        <Menu as='div'>
          <Menu.Button className='rounded-md bg-[#25282A] py-2 px-4 text-white'>
            {user}
          </Menu.Button>
          <Profile />
        </Menu>
      </div>
    </div>
  );
};

export default DashboardNavbar;