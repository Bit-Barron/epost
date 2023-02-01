import { Menu, Popover, Transition } from '@headlessui/react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import { Fragment, useEffect } from 'react';
import { DashboardContainer } from '../../components/container/DashboardContainer';
import { Actions } from '../../components/elements/dashboard/Actions';
import { Announcements } from '../../components/elements/dashboard/Announcements';
import { ProfileOverview } from '../../components/elements/dashboard/ProfileOverview';

import Impresum from '../../components/elements/pricepage/price/impresum/Impresum';

interface dashboardProps {}

function Dashboard({}: dashboardProps) {
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        await axios.post('/user/dashboard');
      } catch (err: unknown) {
        if ((err as AxiosError).response?.status === 403) {
          console.log('err');
          router.push('/auth/login');
        } else {
          console.log(err);
        }
      }
    };
    getUser();
  }, [router]);

  return (
    <DashboardContainer>
      <div>
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
                        <Menu.Items className='origin-top-right z-40 absolute -right-2 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'></Menu.Items>
                      </Transition>
                    </Menu>
                  </div>

                  <div className='absolute right-0 flex-shrink-0 lg:hidden'></div>
                </div>
              </div>
            </>
          )}
        </Popover>
        <main className='-mt-24 pb-8'>
          <div className='max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h1 className='sr-only'>Profile</h1>
            <div className='grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8'>
              <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
                <ProfileOverview />
                <section aria-labelledby='quick-links-title'>
                  <Actions />
                </section>
              </div>

              <div className='grid grid-cols-1 gap-4'>
                <Announcements />
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Impresum />
        </footer>
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;