import React from 'react';

interface InputProps {}

const Input: React.FC<InputProps> = ({}) => {
  return (
    <input
      className='appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white '
      id='grid-password'
    />
  );
};

export default Input;