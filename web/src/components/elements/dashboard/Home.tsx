import { Menu, Popover, Transition } from '@headlessui/react';
import {
  AcademicCapIcon,
  BadgeCheckIcon,
  BellIcon,
  CashIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XIcon,
} from '@heroicons/react/outline';
import { Fragment } from 'react';
import Impresum from '../pricepage/price/impresum/Impresum';

const user = {
  name: 'Chelsea Hagon',
  email: 'chelseahagon@example.com',
  role: 'Human Resources Manager',
  imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Profile', href: '#', current: false },
  { name: 'Resources', href: '#', current: false },
  { name: 'Company Directory', href: '#', current: false },
  { name: 'Openings', href: '#', current: false },
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const actions = [
  {
    icon: ClockIcon,
    name: 'Request time off',
    href: '#',
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    icon: BadgeCheckIcon,
    name: 'Benefits',
    href: '#',
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    icon: UsersIcon,
    name: 'Schedule a one-on-one',
    href: '#',
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
  {
    icon: CashIcon,
    name: 'Payroll',
    href: '#',
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    icon: ReceiptRefundIcon,
    name: 'Submit an expense',
    href: '#',
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
  },
  {
    icon: AcademicCapIcon,
    name: 'Training',
    href: '#',
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
  },
];
const recentHires = [
  {
    name: 'Leonard Krasner',
    handle: 'leonardkrasner',
    imageUrl:
      'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Floyd Miles',
    handle: 'floydmiles',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Emily Selman',
    handle: 'emilyselman',
    imageUrl:
      'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  {
    name: 'Kristin Watson',
    handle: 'kristinwatson',
    imageUrl:
      'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
];
const announcements = [
  {
    id: 1,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.',
  },
  {
    id: 2,
    title: 'New password policy',
    href: '#',
    preview:
      'Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.',
  },
  {
    id: 3,
    title: 'Office closed on July 2nd',
    href: '#',
    preview:
      'Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  return (
    <>
      <div className=''>
        <Popover
          as='header'
          className='pb-24 bg-gradient-to-r from-sky-800 to-cyan-600'
        >
          {() => (
            <>
              <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className='relative flex flex-wrap items-center justify-center lg:justify-between'>
                  <div className='hidden lg:ml-4 lg:flex lg:items-center lg:py-5 lg:pr-0.5'>
                    <button
                      type='button'
                      className='flex-shrink-0 p-1 text-cyan-200 rounded-full hover:text-white hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-white'
                    >
                      <span className='sr-only'>View notifications</span>
                    </button>

                    <Menu as='div' className='ml-4 relative flex-shrink-0'>
                      <Transition
                        as={Fragment}
                        leave='transition ease-in duration-75'
                        leaveFrom='transform opacity-100 scale-100'
                        leaveTo='transform opacity-0 scale-95'
                      >
                        <Menu.Items className='origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                          {userNavigation.map((item) => (
                            <Menu.Item key={item.name}>
                              {({ active }) => (
                                <a
                                  href={item.href}
                                  className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                  )}
                                >
                                  {item.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  {/* Menu button */}
                  <div className='absolute right-0 flex-shrink-0 lg:hidden'>
                    {/* Mobile menu button */}
                  </div>
                </div>
              </div>

              <Transition.Root as={Fragment}>
                <div className='lg:hidden'>
                  <Transition.Child
                    as={Fragment}
                    enter='duration-150 ease-out'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='duration-150 ease-in'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Popover.Overlay className='z-20 fixed inset-0 bg-black bg-opacity-25' />
                  </Transition.Child>

                  <Transition.Child
                    as={Fragment}
                    enter='duration-150 ease-out'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='duration-150 ease-in'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                  >
                    <Popover.Panel
                      focus
                      className='z-30 absolute top-0 inset-x-0 max-w-3xl mx-auto w-full p-2 transition transform origin-top'
                    >
                      <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y divide-gray-200'>
                        <div className='pt-3 pb-2'>
                          <div className='flex items-center justify-between px-4'>
                            <div>
                              <img
                                className='h-8 w-auto'
                                src='https://tailwindui.com/img/logos/workflow-mark-cyan-600.svg'
                                alt='Workflow'
                              />
                            </div>
                            <div className='-mr-2'>
                              <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500'>
                                <span className='sr-only'>Close menu</span>
                                <XIcon className='h-6 w-6' aria-hidden='true' />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className='mt-3 px-2 space-y-1'>
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800'
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                        <div className='pt-4 pb-2'>
                          <div className='flex items-center px-5'>
                            <div className='flex-shrink-0'>
                              <img
                                className='h-10 w-10 rounded-full'
                                src={user.imageUrl}
                                alt=''
                              />
                            </div>
                            <div className='ml-3 min-w-0 flex-1'>
                              <div className='text-base font-medium text-gray-800 truncate'>
                                {user.name}
                              </div>
                              <div className='text-sm font-medium text-gray-500 truncate'>
                                {user.email}
                              </div>
                            </div>
                            <button
                              type='button'
                              className='ml-auto flex-shrink-0 bg-white p-1 text-gray-400 rounded-full hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                            >
                              <span className='sr-only'>
                                View notifications
                              </span>
                              <BellIcon
                                className='h-6 w-6'
                                aria-hidden='true'
                              />
                            </button>
                          </div>
                          <div className='mt-3 px-2 space-y-1'>
                            {userNavigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className='block rounded-md px-3 py-2 text-base text-gray-900 font-medium hover:bg-gray-100 hover:text-gray-800'
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition.Child>
                </div>
              </Transition.Root>
            </>
          )}
        </Popover>
        <main className='-mt-24 pb-8'>
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h1 className='sr-only'>Profile</h1>
            {/* Main 3 column grid */}
            <div className='grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8'>
              {/* Left column */}
              <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
                {/* Welcome panel */}
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
                              {user.name}
                            </p>
                            <p className='text-sm font-medium text-gray-600'>
                              {user.role}
                            </p>
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

                {/* Actions panel */}
                <section aria-labelledby='quick-links-title'>
                  <div className='rounded-lg bg-gray-200 overflow-hidden shadow divide-y divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px'>
                    <h2 className='sr-only' id='quick-links-title'>
                      Quick links
                    </h2>
                    {actions.map((action, actionIdx) => (
                      <div
                        key={action.name}
                        className={classNames(
                          actionIdx === 0
                            ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                            : '',
                          actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                          actionIdx === actions.length - 2
                            ? 'sm:rounded-bl-lg'
                            : '',
                          actionIdx === actions.length - 1
                            ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                            : '',
                          'relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500'
                        )}
                      >
                        <div>
                          <span
                            className={classNames(
                              action.iconBackground,
                              action.iconForeground,
                              'rounded-lg inline-flex p-3 ring-4 ring-white'
                            )}
                          >
                            <action.icon
                              className='h-6 w-6'
                              aria-hidden='true'
                            />
                          </span>
                        </div>
                        <div className='mt-8'>
                          <h3 className='text-lg font-medium'>
                            <a
                              href={action.href}
                              className='focus:outline-none'
                            >
                              {/* Extend touch target to entire panel */}
                              <span
                                className='absolute inset-0'
                                aria-hidden='true'
                              />
                              {action.name}
                            </a>
                          </h3>
                          <p className='mt-2 text-sm text-gray-500'>
                            Doloribus dolores nostrum quia qui natus officia
                            quod et dolorem. Sit repellendus qui ut at
                            blanditiis et quo et molestiae.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right column */}
              <div className='grid grid-cols-1 gap-4'>
                {/* Announcements */}
                <section aria-labelledby='announcements-title'>
                  <div className='rounded-lg bg-white overflow-hidden shadow'>
                    <div className='p-6'>
                      <h2
                        className='text-base font-medium text-gray-900'
                        id='announcements-title'
                      >
                        Announcements
                      </h2>
                      <div className='flow-root mt-6'>
                        <ul
                          role='list'
                          className='-my-5 divide-y divide-gray-200'
                        >
                          {announcements.map((announcement) => (
                            <li key={announcement.id} className='py-5'>
                              <div className='relative focus-within:ring-2 focus-within:ring-cyan-500'>
                                <h3 className='text-sm font-semibold text-gray-800'>
                                  <a
                                    href={announcement.href}
                                    className='hover:underline focus:outline-none'
                                  >
                                    {/* Extend touch target to entire panel */}
                                    <span
                                      className='absolute inset-0'
                                      aria-hidden='true'
                                    />
                                    {announcement.title}
                                  </a>
                                </h3>
                                <p className='mt-1 text-sm text-gray-600 line-clamp-2'>
                                  {announcement.preview}
                                </p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className='mt-6'>
                        <a
                          href='#'
                          className='w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Impresum />
        </footer>
      </div>
    </>
  );
}
