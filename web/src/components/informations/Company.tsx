import React from 'react';

interface CompanyProps {}

const Company: React.FC<CompanyProps> = ({}) => {
  return (
    <form className='flex flex-wrap mb-6 mx-auto'>
      <div className='w-96 px-3 ml-52'>
        <label
          className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
          htmlFor='grid-password'
        >
          Firma
        </label>
        <input
          className='appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white '
          id='grid-password'
        />
      </div>
      <div className='w-96 px-3'>
        <label
          className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
          htmlFor='grid-password'
        >
          Anrede
        </label>
        <input
          className='appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white '
          id='grid-password'
        />
      </div>
    </form>
  );
};

export default Company;
