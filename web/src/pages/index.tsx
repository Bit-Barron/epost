import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { MdFileUpload } from 'react-icons/md';
import Upload from '../../public/images/Upload.png';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Order overview', href: '#', current: false },
];
const secondaryNavigation = [
  { name: 'Settings', href: '#' },
  { name: 'Access data', href: '#' },
  { name: 'accounting', href: '#' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='min-h-full'>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as='div'
            className='fixed inset-0 flex z-40 lg:hidden'
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter='transition-opacity ease-linear duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='transition-opacity ease-linear duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='-translate-x-full'
              enterTo='translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='translate-x-0'
              leaveTo='-translate-x-full'
            >
              <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-in-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in-out duration-300'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <div className='absolute top-0 right-0 -mr-12 pt-2'>
                    <button
                      type='button'
                      className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className='sr-only'>Close sidebar</span>
                      {/* <XIcon className="h-6 w-6 text-white" aria-hidden="true" /> */}
                    </button>
                  </div>
                </Transition.Child>

                <nav
                  className='mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto'
                  aria-label='Sidebar'
                >
                  <div className='px-2 space-y-1'></div>
                  <div className='mt-6 pt-6'>
                    <div className='px-2 space-y-1'>
                      <div>Account</div>
                      {secondaryNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className='group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-[#390011]'
                        >
                          {/* <item.icon className="mr-4 h-6 w-6 text-cyan-200" aria-hidden="true" /> */}
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 w-14' aria-hidden='true'>
              {/* Dummy element to force sidebar to shrink to fit close icon */}
            </div>
          </Dialog>
        </Transition.Root>

        <div className='hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0'>
          <div className='flex flex-col flex-grow bg-[#a5033c] pt-5 pb-4 overflow-y-auto'>
            <div className='flex items-center flex-shrink-0 px-4'>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg'
                alt='Easywire logo'
              />
            </div>
            <nav
              className='mt-5 flex-1 flex flex-col divide-y bg-[#181a1b] overflow-y-auto'
              aria-label='Sidebar'
            >
              <div className='px-2 space-y-1 mt-5'>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'hover:bg-[#390011]'
                        : 'hover:bg-[#390011]',
                      'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {/* <item.icon className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200" aria-hidden="true" /> */}
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='mt-6 pt-6'>
                <div className='px-2 space-y-1'>
                  <div className='ml-2 font-bold text-sm '>Account</div>
                  {secondaryNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md hover:bg-[#390011]'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className='lg:pl-64 flex flex-col flex-1'>
          <div className='relative z-10 flex-shrink-0 flex h-[75px] bg-[#181a1b] border-b border-gray-200 lg:border-none '>
            <button
              type='button'
              className='px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
            </button>
            <div className='flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8'>
              <div className='flex-1 flex'></div>
              <div className='ml-4 flex items-center md:ml-6'>
                <button
                  type='button'
                  className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500'
                >
                  <span className='sr-only'>View notifications</span>
                </button>

                <Menu as='div' className='ml-3 relative'>
                  <div className='flex'>
                    <Menu.Button className='max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50'>
                      <span className='hidden ml-3 text-gray-700 text-sm font-medium lg:block'>
                        <span className='sr-only'>Open user menu for </span>
                        Emilia Birch
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
                    <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                      <Menu.Item>
                        {({ active }: any) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }: any) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }: any) => (
                          <a
                            href='#'
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Logout
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <div className='bg-[#1f2123] p-10'>
            <div className='container mx-auto'>
              <div className='text-xl font-bold ml-10'>Dashboard</div>
            </div>
          </div>
          <div className='container mx-auto mt-10'>
            <div className='bg-[#181a1b] p-10'>
              <div className='text-lg font-bold'>User management</div>
              <div className='text-gray-500 mt-10'>
                The user administration allows the creation of multiple users
                and groups (e.g. departments, cost centers) for a customer
                account. A 4-eyes approval process is implemented. Booking this
                add-on incurs monthly costs of €18.99 net (€22.60 gross) and a
                €0.01 net surcharge per shipment on the shipment price. Term
                monthly, the first month is free of charge, can be cancelled at
                any time.
              </div>
            </div>
            {/* <div className='mt-10 border-gray-700 bg-[#181a1b] w-[400px] rounded-lg p-7 '>
              <div className='flex'>
                <div className='flex text-2xl font-bold mx-auto'>
                  <MdFileUpload className='mx-auto text-5xl text-green-800' />
                  <span className='mt-2'>UPLOAD</span>
                </div>
              </div>
              <div className='text-lg font-bold text-center'>
                Upload Image/s
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
