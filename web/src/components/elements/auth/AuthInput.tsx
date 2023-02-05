import React from 'react';

interface InputProps {
  value?: string;
  onChange?: any;
  type: string;
  placeholder?: string;
  label: string;
  className?: string;
}

const AuthInput: React.FC<InputProps> = ({
  value,
  onChange,
  type,
  label,
  placeholder,
  className,
}) => {
  return (
    <div className='flex justify-center mt-5'>
      <div>
        <div>
          <div className='mr-28  mb-2'>{label}</div>
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${className}  focus:border-secondary focus:outline-none bg-transparent border border-gray-300 text-gray-900 text-sm rounded-sm w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default AuthInput;
