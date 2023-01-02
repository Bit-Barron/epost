import React from 'react';
import { MdExitToApp } from 'react-icons/md';
import { BsPlusLg } from 'react-icons/bs';

interface ButtonProps {
  name?: string;
  log?: string;
  className: string;
  onClick?: any;
}
// onClick={() => onClickhandler()}

const Button: React.FC<ButtonProps> = ({ name, className, onClick }) => {
  return (
    <>
      <div className='flex justify-center'>
        <button className={className} type="submit">
          <span className='ml-2'>{name}</span>
        </button>
      </div>
    </>
  );
};

export default Button;
