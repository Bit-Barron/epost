import React from 'react';
import Input from '../components/elements/input';
import Button from '../components/elements/Button';

interface LoginProps {}

const login: React.FC<LoginProps> = ({}) => {
  return (
    <>
      <div>
        <h1 className='text-sm font-semibold text-center mt-52'>Login</h1>
        <div className='mb-6 mx-auto'>
          <Input placeholder='Username' />
          <Input placeholder='Password' />
        </div>
        <Button />
      </div>
    </>
  );
};

export default login;
