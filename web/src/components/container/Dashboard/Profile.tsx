import React, { Fragment, useEffect, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface ProfileProps {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Profile: React.FC<ProfileProps> = ({}) => {
  const [user, setUser] = useState<string>('');
  const [setting, setSetting] = useState<any[]>([]);

  const router = useRouter();

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

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get('/setting/all-user');
        setSetting(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    getUser();
  }, []);

  const logout = async () => {
    const response = await axios.post('/auth/logout');
    console.log(response.data);
    return router.push('/auth/login');
  };

  return (
    <>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 mr-10 w-56 origin-top-right rounded-md bg-[#121418] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <h1 className="mt-4 text-center text-lg font-semibold text-white ">
            {user}
          </h1>
          <p className="ml-16 text-xs text-white">
            {setting.map((user) => (
              <div key={user.name} className="text-sm font-semibold ml-6">
                {user.firstname} {user.lastname}
              </div>
            ))}
          </p>
          <hr className="mt-5 mb-5" />
          <Menu.Item>
            {({ active }) => (
              <a
                href="/dashboard/settings/personalinformations"
                className={classNames(
                  active ? 'text-white hover:text-white' : '',
                  'block px-4 py-2 text-sm text-white',
                )}
              >
                My Settings
              </a>
            )}
          </Menu.Item>

          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                onClick={() => {
                  return router.push('/dashboard/settings/changepassword');
                }}
                className={classNames(
                  active ? 'hover:text-white' : '',
                  'block px-4 py-2  text-white',
                )}
              >
                Passwort ändern
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={classNames(
                  active ? 'hover:text-white' : '',
                  'block px-4 py-2 text-sm text-white',
                )}
                onClick={() => {
                  return logout;
                }}
              >
                Auslogen
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </>
  );
};

export default Profile;
