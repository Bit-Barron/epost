import React from 'react';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({}) => {
  return (
    <>
      <div className='flex justify-center'>
        <button className='bg-[#bd0f4c] hover:bg-[#ae1047] text-white font-bold py-2 px-4 rounded w-[570px] mt-5'>
          <span>Login</span>
        </button>
      </div>
      <div className='text-center mt-5'>OR</div>
      <div className='flex justify-center mt-5'>
        <button className='bg-[#040404] text-white font-bold py-3 px-5 w-[570px] rounded '>
          Create a new account
        </button>
      </div>
      <div className='text-[#961e48] font-bold text-center mt-5 hover:text-[#811a3e]'>Forgot Password?</div>
    </>
  );
};

export default Button;
