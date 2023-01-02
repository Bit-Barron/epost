import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Index: React.FC = ({}) => {
  const router = useRouter();

  useEffect(() => {
    () => void (!localStorage.getItem('username') && router.push('/login'));
  });
  return (
    <div>
      <div>asd</div>
    </div>
  );
};
export default Index;
