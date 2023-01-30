import React from 'react';

interface inputProps {
  onClick?: () => void;
}

const Input: React.FC<inputProps> = ({ onClick }) => {
  return (
    <div>
      <button
        className='bg-secondary p-2 w-32 text-white font-bold rounded-full'
        onClick={onClick}
      />
    </div>
  );
};

export default Input;
