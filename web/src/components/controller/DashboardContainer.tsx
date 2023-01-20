import { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { MenuAlt1Icon, XIcon } from '@heroicons/react/outline';
import DashboardNavbar from './Dashboard/DashboardNavbar';
import DashboardDesktopSidebar from './Dashboard/DashboardDesktopSidebar';
import { DashboardMobileNavbar } from './Dashboard/DashboardMobileNavbar';
import axios from 'axios';
import OrderOverWiev from '../Tabs/OrderOverwiev/OrderoverWiev';

export default function Example({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState('');
  const [displayText, setDisplayText] = useState('');

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const submit = async () => {
    const response = await axios.post('http://localhost:4000/posts/create', {
      post,
    });
  };

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
              <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white'>
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
                      <XIcon
                        className='h-6 w-6 text-white'
                        aria-hidden='true'
                      />
                    </button>
                  </div>
                </Transition.Child>

                <DashboardMobileNavbar />
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
        <DashboardDesktopSidebar />

        <div className='lg:pl-64 flex flex-col'>
          <div className='sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden'>
            <button
              type='button'
              className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden'
              onClick={() => setSidebarOpen(true)}
            >
              <span className='sr-only'>Open sidebar</span>
              <MenuAlt1Icon className='h-6 w-6' aria-hidden='true' />
            </button>
            <div className='flex-1 flex justify-between px-4 sm:px-6 lg:px-8'>
              <div className='flex items-center'>
                <Menu as='div' className='ml-3 relative'>
                  <div>
                    <Menu.Button className='max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'>
                      <span className='sr-only'>Open user menu</span>
                    </Menu.Button>
                  </div>
                </Menu>
              </div>
            </div>
          </div>
          <DashboardNavbar />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-96 mt-10 ml-10'
            onClick={openModal}
          >
            Write text and send
          </button>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as='div'
              className='fixed inset-0 z-10 overflow-y-auto'
              onClose={closeModal}
            >
              <div className='min-h-screen px-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0'
                  enterTo='opacity-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Dialog.Overlay className='fixed inset-0' />
                </Transition.Child>

                <span
                  className='inline-block h-screen align-middle'
                  aria-hidden='true'
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <div className='my-8 inline-block w-full max-w-md transform overflow-hidden rounded-2xl bg-[#17171a] p-6 text-left align-middle shadow-xl transition-all'>
                    <Dialog.Title
                      as='h3'
                      className='text-lg font-medium leading-6 text-white'
                    >
                      Write you Post
                    </Dialog.Title>
                    <textarea
                      className='bg-transparent focus:outline-none mt-10 w-full h-full'
                      onChange={(e: any) => setPost(e.target.value)}
                    />
                    <div className='mt-4'>
                      <button
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-blue-500 px-4 py-2 text-sm duration-300 hover:bg-red-200'
                        onClick={() => {
                          closeModal();
                          submit();
                          setDisplayText(post);
                        }}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </div>
        {children}
      </div>
    </>
  );
}
