import { useEffect } from 'react';
import { AiFillInfoCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { GeneralStore } from '../../store/Generalstore';
import { AlertType } from '../../types';

interface AlertNotificationProps {
  id: string;
  className?: string;
  type?: AlertType;
  message: string;
}

export const AlertNotification: React.FC<AlertNotificationProps> = ({
  id,
  message,
  type,
  className,
}) => {
  const { removeAlert } = GeneralStore();

  useEffect(() => {
    setTimeout(() => removeAlert(id), 10000);
  }, [id, removeAlert]);

  let colors: {
    background: string;
    icon: string;
  };

  if (type === 'failure') {
    colors = {
      background: 'border-red-500 bg-red-100 text-red-700',
      icon: 'bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400',
    };
  } else if (type === 'gray') {
    colors = {
      background: 'border-gray-500 bg-gray-100 text-gray-700',
      icon: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400',
    };
  } else if (type === 'info') {
    colors = {
      background: 'border-blue-500 bg-blue-100 text-blue-700',
      icon: 'bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400',
    };
  } else if (type === 'success') {
    colors = {
      background: 'border-green-500 bg-green-100 text-green-700',
      icon: 'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400',
    };
  } else if (type === 'warning') {
    colors = {
      background: 'border-orange-500 bg-orange-100 text-orange-700',
      icon: 'bg-orange-100 text-orange-500 hover:bg-orange-200 focus:ring-orange-400',
    };
  } else {
    colors = {
      background: 'border-gray-500 bg-gray-100 text-gray-700',
      icon: 'bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-2 focus:ring-gray-400',
    };
  }

  return (
    <div className={`${className} `}>
      <div className={`mb-4 flex border-t-4 p-4 ${colors.background}`}>
        <AiFillInfoCircle className='text-2xl' />
        <div className='ml-3 text-sm font-medium'>{message}</div>
        <AiOutlineCloseCircle
          onClick={() => removeAlert(id)}
          className={`-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg  p-1.5 focus:ring-2 ${colors.icon}`}
        />
      </div>
    </div>
  );
};
