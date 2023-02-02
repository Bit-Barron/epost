import { GeneralStore } from '../../store/Generalstore';
import { Alert } from '../../types';

interface AlertNotificationProps {
  id: string;
  className?: string;
  type?: Alert;
  message: string;
}

export const AlertNotification: React.FC<AlertNotificationProps> = ({
  id,
  message,
  type,
  className,
}) => {
  const { removeAlert } = GeneralStore();

  let colors: {
    background: string;
    icon: string;
  };

  if (type === 'success') {
    colors = {
      background: 'border-green-500 bg-green-100 text-green-700',
      icon: 'bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400',
    };
  }
  return <div></div>;
};
