import { HomeIcon, ViewListIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsBoxSeam, BsFillKeyFill } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';
import { HiMail } from 'react-icons/hi';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { SiMinutemailer } from 'react-icons/si';
import main from '../../../../public/images/main.png';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon, current: true },
  { name: 'Postbox', href: '/dashboard', icon: BsBoxSeam, current: true },

  {
    name: 'AuftragsÜbersicht',
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
  { name: 'Upload Post', href: '/dashboard/post/uploadpost', icon: SiMinutemailer, current: false },
  {
    name: 'Write Post',
    href: '/dashboard/post/writepost',
    icon: HiMail,
    current: false,
  },
];

const shieldPost = [
  { name: 'Preis', href: '#', icon: AiOutlineArrowRight, current: false },
  {
    name: 'Kontakt / Support',
    href: '#',
    icon: AiOutlineArrowRight,
    current: false,
  },
  { name: 'Lösungen', href: '#', icon: AiOutlineArrowRight, current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const DashboardDesktopSidebar: React.FC = ({ children }: any) => {
  return (
    <div className='hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 lg:border-r lg:border-gray-200 lg:pt-5 lg:pb-4 lg:bg-gray-100'>
      <div>
        <div className='flex'>
          <Image src={main} alt='main' width={70} height={70} />
          <div className='font-bold text-2xl mt-4'>Postshield</div>
        </div>
        <nav className='px-3 '>
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
                  className='group flex items-center hover:bg-secondary px-2 py-1 text-sm font-semibold hover:text-gray-900 '
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
                  className='group flex items-center mt-2 hover:bg-secondary px-2 py-1 text-sm font-semibold hover:text-gray-900 '
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
          <div className='mt-3'>
            <a href='/' className='bg-secondary p-1 text-white font-bold w-full rounded'>
              Kundenbereich verlassen
            </a>
          </div>
          {children}
        </nav>
      </div>
    </div>
  );
};

export default DashboardDesktopSidebar;
