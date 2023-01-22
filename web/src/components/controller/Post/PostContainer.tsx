import React from 'react';
import { DashboardContainer } from '../DashboardContainer';

interface PostContainerProps {}

const PostContainer: React.FC<PostContainerProps> = ({}) => {
  return (
    <DashboardContainer>
      <div className='text-center font-bold text-2xl mt-52'>
        Einen Brief direkt online schreiben und versenden lassen
      </div>
      <div className='bg-[#212426] w-1/2 mx-auto p-10 mt-10'>
        <div className=''>
          <div className='flex'>
            <label
              htmlFor='small-input'
              className='block mb-2 text-sm mt-2 font-medium text-gray-900 dark:text-white'
            >
              Betreff
            </label>
            <input
              type='text'
              id='small-input'
              className='block w-1/2 p-2 focus:outline-none ml-5 text-gray-900 border border-gray-300 bg-gray-50 sm:text-xs mb-10'
            />
          </div>
        </div>

        <div className=''>
          <div className='flex'>
            <a
              href='/post/writepost'
              className='mb-3 ml-2 hover:text-secondary'
            >
              Schreiben
            </a>
            <div className='mb-3 ml-2 hover:text-secondary'>Senden</div>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-10'>
        <button className='bg-secondary w-96 text-white font-bold py-2 px-4 rounded'>
          Send
        </button>
      </div>
    </DashboardContainer>
  );
};
export default PostContainer;
