import React from 'react';

interface AlertProps {
  title: string;
  color: string;
}

const Alert: React.FC<AlertProps> = ({ title, color }) => {
  return (
    <div
      className={`${color}  rounded-lg bg-green-100 p-4 text-sm text-green-700 mt-4 mr-10 absolute`}
    >
      {title}
    </div>
  );
};

export default Alert;
