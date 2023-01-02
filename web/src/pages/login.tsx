import React, { FormEvent, useState } from 'react';
import Input from '../components/elements/Input';
import Button from '../components/elements/Button';
import { useRouter } from 'next/router';
import axios from 'axios';

interface loginProps {}

const Login: React.FC<loginProps> = () => {
  const [username, setUsername] = useState('test@test');
  const [password, setPassword] = useState<string>('test@test');
  const router = useRouter();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/api/login', {
      username,
      password,
    });
    console.log(response);
  };
  return (
    <>
      <div className='mt-96'>
        <h1 className='text-sm font-semibold text-center mt-10'>LOGIN</h1>
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
          <Button
            onClick={() => {}}
            name={'Login'}
            className='bg-[#bd0f4c] hover:bg-[#ae1047] text-white font-bold py-2 px-4 rounded w-[570px] mt-5 flex justify-center'
          />
          <div className='text-center mt-3'>OR</div>
          <div className='mt-3'>
            <Button
              name={'Register'}
              className='bg-[#040404] text-white font-bold py-3 px-5 w-[570px] rounded flex justify-center'
            />
          </div>
          <div className='text-[#961e48] font-bold text-center mt-5 hover:text-[#811a3e]'>
            Forgot Password?
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
