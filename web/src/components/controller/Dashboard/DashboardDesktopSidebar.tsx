import React from 'react';
import { ClockIcon, HomeIcon, ViewListIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { SiMinutemailer } from 'react-icons/si';
import { HiMail } from 'react-icons/hi';
import { FiSettings } from 'react-icons/fi';
import { BsFillKeyFill } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import { MdOutlineAddCircleOutline } from 'react-icons/md';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  {
    name: 'Order overview',
    href: 'dashboard/recent',
    icon: ViewListIcon,
    current: false,
  },
];
const teams = [
  {
    name: 'Einstellung',
    href: '#',
    bgColorClass: 'bg-indigo-500',
    icon: FiSettings,
    current: false,
  },
  {
    name: 'Zugangsdaten',
    href: '#',
    bgColorClass: 'bg-green-500',
    icon: BsFillKeyFill,
    current: false,
  },
  {
    name: 'Buchhaltung',
    href: '#',
    bgColorClass: 'bg-yellow-500',
    icon: FaCoins,
    current: false,
  },
  {
    name: 'Add-ons',
    href: '#',
    bgColorClass: 'bg-yellow-500',
    icon: MdOutlineAddCircleOutline,
    current: false,
  },
];

const post = [
  { name: 'Upload Post', href: '#', icon: SiMinutemailer, current: false },
  {
    name: 'Write Post',
    href: '/post/writepost',
    icon: HiMail,
    current: false,
  },
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
                  item.current ? '' : '',
                  'group flex items-center px-2 py-2 text-sm font-medium hover:bg-secondary'
                )}
                aria-current={item.current ? 'page' : undefined}
              >
                <item.icon
                  className={classNames(
                    item.current ? 'text-secondary' : 'text-secondary',
                    'mr-3 flex-shrink-0 h-5 w-6'
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
              Post
            </h3>
            <div className='mt-2'>
              {post.map((team) => (
                <a
                  key={team.name}
                  href={team.href}
                  className='group flex items-center hover:bg-secondary  px-2 py-1 text-sm font-semibold hover:text-gray-900 '
                >
                  <team.icon
                    className={classNames(
                      team.current ? 'text-secondary' : 'text-secondary',
                      'mr-3 flex-shrink-0 h-5 w-6'
                    )}
                    aria-hidden='true'
                  />
                  <span aria-hidden='true' />
                  <span className='truncate'>{team.name}</span>
                </a>
              ))}
            </div>
          </div>
          <div className='mt-8'>
            <h3
              className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
              id='desktop-teams-headline'
            >
              KONTO
            </h3>
            <div className='mt-2'>
              {teams.map((team) => (
                <a
                  key={team.name}
                  href={team.href}
                  className='group flex items-center px-3 py-2 text-sm font-semibold hover:bg-secondary'
                >
                  <team.icon
                    className={classNames(
                      team.current ? 'text-secondary' : 'text-secondary',
                      'mr-3 flex-shrink-0 h-5 w-6'
                    )}
                    aria-hidden='true'
                  />
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
