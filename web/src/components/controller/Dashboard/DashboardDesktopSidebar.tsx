import React from 'react';

interface DashboardDesktopSidebarProps {}

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ClockIcon, HomeIcon, ViewListIcon } from '@heroicons/react/outline';
import { SelectorIcon } from '@heroicons/react/solid';
const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
  { name: 'Order overview', href: '#', icon: ViewListIcon, current: false },
  { name: 'Recent', href: '#', icon: ClockIcon, current: false },
];
const teams = [
  { name: 'Engineering', href: '#', bgColorClass: 'bg-indigo-500' },
  { name: 'Human Resources', href: '#', bgColorClass: 'bg-green-500' },
  { name: 'Customer Success', href: '#', bgColorClass: 'bg-yellow-500' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const DashboardDesktopSidebar: React.FC<
  DashboardDesktopSidebarProps
> = ({}) => {
  return (
    <div className='hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100'>
      <div className='flex items-center flex-shrink-0 px-6'></div>
      <div className='mt-6 h-0 flex-1 flex flex-col overflow-y-auto'>
        <Menu as='div' className='px-3 relative inline-block text-left'>
          <div>
            <Menu.Button className='group w-full bg-gray-100 rounded-md px-3.5 py-2 text-sm text-left font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-purple-500'>
              <span className='flex w-full justify-between items-center'>
                <span className='flex min-w-0 items-center justify-between space-x-3'>
                  {/* <img
                    className='w-10 h-10 bg-gray-300 rounded-full flex-shrink-0'
                    src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80'
                    alt=''
                  /> */}
                  <span className='flex-1 flex flex-col min-w-0'>
                    <span className='text-gray-900 text-sm font-medium truncate'>
                      Jessy Schwarz
                    </span>
                    <span className='text-gray-500 text-sm truncate'>
                      @jessyschwarz
                    </span>
                  </span>
                </span>
                <SelectorIcon
                  className='flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500'
                  aria-hidden='true'
                />
              </span>
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='z-10 mx-3 origin-top absolute right-0 left-0 mt-1 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none'>
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
          </Transition>
        </Menu>
        {/* Sidebar Search */}
        <div className='px-3 mt-5'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
            <div
              className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'
              aria-hidden='true'
            ></div>
            <input
              type='text'
              name='search'
              id='search'
              className='focus:outline-none block w-full p-2 pl-9 sm:text-sm border-gray-300 rounded-md'
              placeholder='Search'
            />
          </div>
        </div>
        <nav className='px-3 mt-6'>
          <div className='space-y-1'>
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? 'bg-gray-200 text-[#5A5FDE]'
                    : ' ',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? 'text-[#d4]'
                      : 'text-[#5A5FDE] group-hover:text-gray-500',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden='true'
                />
                {item.name}
              </a>
            ))}
          </div>
          <div className='mt-8'>
            <h3
              className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
              id='desktop-teams-headline'
            >
              Teams
            </h3>
            <div>
              {teams.map((team) => (
                <a
                  key={team.name}
                  href={team.href}
                  className='group flex items-center px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50'
                >
                  <span
                    className={classNames(team.bgColorClass)}
                    aria-hidden='true'
                  />
                  <span className='truncate'>{team.name}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default DashboardDesktopSidebar;
