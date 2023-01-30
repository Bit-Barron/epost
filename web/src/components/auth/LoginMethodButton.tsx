import React from 'react';

interface LoginMethodButtonProps {
  name: string;
  className?: string;
}

export const LoginMethodButton: React.FC<LoginMethodButtonProps> = ({
  name,
  className,
}) => {
  return (
    <div className='flex justify-center border-white mt-5'>
      <button
        className={`${className} border border-white p-3 w-96 text-white font-bold rounded-full`}
      >
        WEITER MIT {name}
      </button>
    </div>
  );
};
