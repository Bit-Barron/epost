import React from 'react';
import Input from '../elements/Input';

interface NameProps {}

const Name: React.FC<NameProps> = ({}) => {
  return (
    <div className='flex flex-wrap mb-6 mx-auto'>
      <div className='w-96 px-3'>
        <label
          className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
          htmlFor='grid-password'
        >
          Vorname
        </label>
        <Input />
      </div>
      <div className='w-96 px-3'>
        <label
          className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
          htmlFor='grid-password'
        >
          Nachname
        </label>
        <Input />
      </div>
    </div>
  );
};

export default Name;
