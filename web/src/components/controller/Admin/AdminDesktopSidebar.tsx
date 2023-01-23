import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBoxSeam } from 'react-icons/bs';
import { HiMail } from 'react-icons/hi';
import { SiMinutemailer } from 'react-icons/si';
import main from '../../../../public/images/main.png';
import { FiUsers } from 'react-icons/fi';

const navigation = [
  { name: 'Postbox', href: '/admin/postbox', icon: BsBoxSeam, current: true },
];

const post = [
  {
    name: 'Upload Post',
    href: '/dashboard/post/uploadpost',
    icon: SiMinutemailer,
    current: false,
  },
  {
    name: 'Write Post',
    href: '/dashboard/post/writepost',
    icon: HiMail,
    current: false,
  },
];

const shieldPost = [
  {
    name: 'Support',
    href: '#',
    icon: AiOutlineArrowRight,
    current: false,
  },
  { name: 'Lösungen', href: '#', icon: AiOutlineArrowRight, current: false },
];
const user = [
  {
    name: 'User',
    href: '#',
    icon: FiUsers,
    current: false,
  },
  { name: 'Userverwaltung', href: '#', icon: AiOutlineArrowRight, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const AdminDesktopSidebar: React.FC = ({ children }: any) => {
  return (
    <div className='hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100'>
      <div>
        <div className='flex'>
          <Image src={main} alt='main' width={70} height={70} />
          <div className='font-bold text-2xl mt-4'>Postshield</div>
        </div>
        <nav className='px-3'>
          <h3
            className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
            id='desktop-teams-headline'
          >
            Post
          </h3>
          <div className='space-y-1'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? '' : '',
                  'group flex items-center hover:bg-secondary px-2 py-1 text-sm font-semibold hover:text-gray-900 '
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
          <h3
            className='px-3 mt-5 text-xs font-semibold text-gray-500 uppercase tracking-wider'
            id='desktop-teams-headline'
          >
            User
          </h3>
          <div className='space-y-1'>
            {user.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? '' : '',
                  'group flex items-center hover:bg-secondary px-2 py-1 text-sm font-semibold hover:text-gray-900 '
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

          <div className='mt-8'></div>
          <div className='mt-8'>
            <h3
              className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
              id='desktop-teams-headline'
            >
              SHIELDPOST.DE
            </h3>
            <div className='mt-2 mb-10'>
              {shieldPost.map((team) => (
                <a
                  key={team.name}
                  href={team.href}
                  className='group flex items-center mt-2 hover:bg-secondary px-2 py-1 text-sm font-semibold hover:text-gray-900 '
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
          {children}
        </nav>
      </div>
    </div>
  );
};

export default AdminDesktopSidebar;