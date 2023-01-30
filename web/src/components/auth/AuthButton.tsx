import React from 'react';

interface inputProps {
  onClick: any;
  name: string
}

const AuthButton: React.FC<inputProps> = ({ onClick, name }) => {
  return (
    <div className='flex justify-center mt-5'>
      <button
        className='bg-secondary p-2 w-32 text-white font-bold rounded-full'
        onClick={() => onClick()}
      >
        {name}
      </button>
    </div>
  );
};

export default AuthButton;
