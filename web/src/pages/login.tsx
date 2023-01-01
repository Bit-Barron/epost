import React, { useState } from 'react';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import Image from 'next/image';

interface loginProps {}

const Login: React.FC<loginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <div className='mt-52'>
        {/* <Image
          width={200}
          className='mx-auto'
          src='https://www.letterxpress.de/images/logo.png'
          alt='a'
          height={200}
        /> */}

        <h1 className='text-sm font-semibold text-center mt-10'>Login</h1>
        <div className='mb-6 mx-auto'>
          <Input
            type='text'
            placeholder='Username'
            onChange={setUsername}
            value={username}
          />
          <Input
            type='password'
            placeholder='Password'
            onChange={setPassword}
            value={password}
          />
        </div>
        <Button />
      </div>
    </>
  );
};

export default Login;
