import React from 'react';

interface SettingInputsProps {
  label: string;
  type: string;
  className?: string;
  placeholder?: string;
}

export const SettingInputs: React.FC<SettingInputsProps> = ({
  label,
  type,
  className,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor='email'
        className='block text-sm font-medium text-gray-700'
      >
        {label}
      </label>
      <div className='mt-1'>
        <input
          type={type}
          placeholder={placeholder}
          className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${className}`}
        />
      </div>
    </div>
  );
};
