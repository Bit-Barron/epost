import React from 'react';

interface LoginMethodButtonProps {
  name: string;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<LoginMethodButtonProps> = ({
  name,
  onClick,
  className,
}) => {
  return (
    <div className='flex justify-center mt-5'>
      <button
        onClick={onClick}
        className={`${className} p-3 w-96 text-white font-bold rounded-full`}
      >
        {name}
      </button>
    </div>
  );
};
export default Button;