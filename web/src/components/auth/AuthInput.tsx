import React from 'react';

interface InputProps {
  value: string;
  onChange: (value: any) => void;
  type: string;
  placeholder?: string;
}

const AuthInput: React.FC<InputProps> = ({ value, onChange, type, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-sm block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
      placeholder={placeholder}
    />
  );
};

export default AuthInput;
