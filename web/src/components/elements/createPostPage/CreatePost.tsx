import { Edit } from './Edit';
import React from 'react';

interface CreatePostProps {}

const CreatePost: React.FC<CreatePostProps> = ({}) => {
  return (
    <>
      <Edit />
      <form className='mt-20'>
        <div className='w-full mb-4 border border-gray-200 rounded-lg '>
          <div className='px-4 py-2  rounded-b-lg'>
            <label htmlFor='editor' className='sr-only'>
              Publish post
            </label>
            <textarea
              id='editor'
              className='block w-full h-96 px-0 text-sm text-gray-800 border-0  focus:outline-none dark:text-white bg-transparent dark:placeholder-gray-400'
              placeholder='Write an article...'
              required
            />
          </div>
        </div>
        <button
          type='submit'
          className='inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800'
        >
          Publish post
        </button>
      </form>
    </>
  );
};

export default CreatePost;
