import React from 'react';
import Image from 'next/image';
import main from '../../../../public/images/main.png';

interface PostHeaderProps {}

const PostHeader: React.FC<PostHeaderProps> = ({}) => {
  return (
    <>
      <header className='flex justify-center mr-7'>
        <span className='font-semibold text-2xl mt-2 dark:text-white flex'>
          <Image width={80} height={50} src={main} alt='main' />
        </span>
        <div className='text-4xl font-bold ml-0 mt-6 text-secondary'>
          {process.env.NEXT_PUBLIC_NAME}
        </div>
      </header>
      <div className='w-full'>
        <hr className='w-full border-1 text-gray-700' />
      </div>
    </>
  );
};
export default PostHeader;
