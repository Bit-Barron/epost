import React, { FormEvent, useState } from 'react';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import axios from 'axios';

interface loginProps {}

const Login: React.FC<loginProps> = () => {
  const [username, setUsername] = useState('test@test');
  const [password, setPassword] = useState<string>('test@test');

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post('/api/login', {
      username,
      password,
    });
    console.log(res);
  };

  return (
    <>
      <div className='mt-52'>
        <h1 className='text-sm font-semibold text-center mt-10'>Login</h1>
        <form className='mb-6 mx-auto' onSubmit={submit}>
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
          <Button />
        </form>
      </div>
    </>
  );
};

export default Login;
