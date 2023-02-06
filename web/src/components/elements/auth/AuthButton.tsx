import React from 'react';

interface inputProps {
  onClick?: any;
  name: string;
  className: string;
}

const AuthButton: React.FC<inputProps> = ({ onClick, name, className }) => {
  return (
    <div className='flex justify-center mt-5'>
      <button
        type='button'
        className={`bg-secondary p-2 w-49 text-white font-bold rounded-full hover:bg-[#b16d29] ${className}`}
        onClick={() => onClick()}
      >
        {name}
      </button>
    </div>
  );
};

export default AuthButton;
