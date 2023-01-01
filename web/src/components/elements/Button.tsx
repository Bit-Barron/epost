import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';

interface ButtonProps {
  name?: string;
  log?: string;
  className: string;
}

const Button: React.FC<ButtonProps> = ({ name, className }) => {
  return (
    <>
      <div className='flex justify-center'>
        <button className={className}>
          <span className='ml-2'>{name}</span>
        </button>
      </div>
    </>
  );
};

export default Button;
