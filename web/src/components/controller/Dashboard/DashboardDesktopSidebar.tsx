import React from 'react';
import { ClockIcon, HomeIcon, ViewListIcon } from '@heroicons/react/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  {
    name: 'Order overview',
    href: 'dashboard/recent',
    icon: ViewListIcon,
    current: false,
  },
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

const DashboardDesktopSidebar: React.FC = ({ children }: any) => {
  return (
    <div className='hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100'>
      <div className='mt-6 h-0 flex-1 flex flex-col overflow-y-auto'>
        <div className='px-3 mt-5'>
          <label htmlFor='search' className='sr-only'>
            Search
          </label>
          <div className='mt-1 relative rounded-md shadow-sm'>
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
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? '' : 'j font-light',
                  'group flex items-center px-2 py-2 text-sm font-medium rounded-md '
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current ? '' : '',
                    'mr-3 flex-shrink-0 h-6 w-6'
                  )}
                  aria-hidden='true'
                />
                <div className=''>{item.name}</div>
              </Link>
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
                  className='group flex items-center px-3 py-2 text-sm font-medium  rounded-md hover:text-gray-900 hover:bg-gray-50'
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
          {children}
        </nav>
      </div>
    </div>
  );
};

export default DashboardDesktopSidebar;
