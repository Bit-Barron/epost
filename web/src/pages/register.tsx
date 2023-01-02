import axios from 'axios';
import React, { FormEvent, useState } from 'react';
import Button from '../components/elements/Button';
import Input from '../components/elements/Input';
import Router, { useRouter } from 'next/router';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
  const [username, setUsername] = useState('test@test');
  const [password, setPassword] = useState<string>('test@test');
  const router = useRouter();

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post('http://localhost:4000/api/create', {
      username,
      password,
    });
  };

  return (
    <>
      <div className='mt-96'>
        <h1 className='text-sm font-semibold text-center mt-10'>Register</h1>
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
            className={
              'bg-[#bd0f4c] hover:bg-[#ae1047] text-white font-bold py-2 px-4 rounded w-[570px] mt-5 flex justify-center'
            }
            name='Create'
          />
          <div className='text-center mt-5'>OR</div>
          <div className='mt-5'>
            <Button
              name={'Login'}
              className='bg-[#040404] text-white font-bold py-3 px-5 w-[570px] rounded flex justify-center'
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
