import { Menu } from '@headlessui/react';
import React from 'react';

interface ProfileProps {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export const Profile: React.FC<ProfileProps> = ({}) => {
  return (
    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'>
      <div className='py-1'>
        <Menu.Item>
          {({ active }) => (
            <a
              href='#'
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              View profile
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href='#'
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href='#'
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Notifications
            </a>
          )}
        </Menu.Item>
      </div>
      <div className='py-1'>
        <Menu.Item>
          {({ active }) => (
            <a
              href='#'
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Get desktop app
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              href='#'
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Support
            </a>
          )}
        </Menu.Item>
      </div>
      <div className='py-1'>
        <Menu.Item>
          {({ active }) => (
            <a
              href='#'
              className={classNames(
                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                'block px-4 py-2 text-sm'
              )}
            >
              Logout
            </a>
          )}
        </Menu.Item>
      </div>
    </Menu.Items>
  );
};
