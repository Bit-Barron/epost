import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';

interface ButtonProps {
  name?: string;
  log?: string;
  className: string;
  onClick?: any;
}
const Button: React.FC<ButtonProps> = ({ name, className, onClick }) => {
  return (
    <>
      <div className='flex justify-center'>
        <button
          className={
            className +
            'inline-flex items-center rounded-md border border-transparent bg-mainAlt px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 group-hover:bg-mainAlt2'
          }
          type='submit'
        >
          <span className='ml-2'>{name}</span>
        </button>
      </div>
    </>
  );
};

export default Button;
