import React from 'react';
import Input from '../elements/Input';

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
        <Input />
      </div>
      <div className='w-96 px-3'>
        <label
          className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
          htmlFor='grid-password'
        >
          Anrede
        </label>
        <Input />
      </div>
    </form>
  );
};

export default Company;
