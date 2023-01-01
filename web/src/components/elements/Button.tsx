import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({}) => {
  return (
    <>
      <div className='flex justify-center'>
        <button className='bg-[#bd0f4c] hover:bg-[#ae1047] text-white font-bold py-2 px-4 rounded w-[570px] mt-5 flex justify-center'>
          <MdExitToApp className='mt-1 text-lg' />
          <span className='ml-2'>Login</span>
        </button>
      </div>
      <div className='text-center mt-5'>OR</div>
      <div className='flex justify-center mt-5'>
        <button className='bg-[#040404] text-white font-bold py-3 px-5 w-[570px] rounded flex justify-center'>
          <BsPlusLg className='mt-1 text-lg' />
          <span className='ml-2'>Create a new account</span>
        </button>
      </div>
      <div className='text-[#961e48] font-bold text-center mt-5 hover:text-[#811a3e]'>
        Forgot Password?
      </div>
    </>
  );
};

export default Button;
