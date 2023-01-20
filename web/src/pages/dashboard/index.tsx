import { Transition, Dialog } from '@headlessui/react';
import axios from 'axios';
import React, { Fragment, useState } from 'react';
import { DashboardContainer } from '../../components/controller/DashboardContainer';

interface dashboardProps {}

const Dashboard: React.FC<dashboardProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState('');

  const submit = async () => {
    const response = await axios.post('http://localhost:4000/posts/create', {
      post,
    });
    console.log(response);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <DashboardContainer>
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
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
