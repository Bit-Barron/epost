import React from 'react';

interface inputProps {
  placeholder: string;
}

const Input: React.FC<inputProps> = ({ placeholder }) => {
  return (
    <div className='w-[600px] px-3 mt-10 mx-auto'>
      <input
        className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
        id='grid-password'
        placeholder={placeholder}
      />
    </div>
    
  );
};

export default Input;
