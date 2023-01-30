import React from 'react';

interface inputProps {
  onClick?: () => void;
  name: string
}

const Input: React.FC<inputProps> = ({ onClick, name }) => {
  return (
    <div>
      <button
        className='bg-secondary p-2 w-32 text-white font-bold rounded-full'
        onClick={onClick}
      >
        {name}
      </button>
    </div>
  );
};

export default Input;
