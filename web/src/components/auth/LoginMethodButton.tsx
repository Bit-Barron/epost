import React from 'react';

interface LoginMethodButtonProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

export const LoginMethodButton: React.FC<LoginMethodButtonProps> = ({
  name,
  onClick,
  className,
}) => {
  return (
    <div className='flex justify-center border-white mt-5'>
      <button
        onClick={onClick}
        className={`${className} border border-white p-3 w-96 text-white font-bold rounded-full`}
      >
        {name}
      </button>
    </div>
  );
};