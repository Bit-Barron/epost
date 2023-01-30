import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import main from '../../../public/images/main.png';
import AuthInput from '../../components/auth/AuthInput';
import Button from '../../components/auth/Button';

const Login = () => {
  const [email, setEmail] = useState('test@test');
  const [password, setPassword] = useState<string>('123123');
  const router = useRouter();

  const submit = async () => {
    await axios.post('http://localhost:4000/auth/login', {
      email,
      password,
      withCredentials: true,
    });
    router.push('/dashboard');
  };

  return (
    <>
      <div className='flex justify-center'>
        <span className='font-semibold text-2xl dark:text-white flex'>
          <Image width={80} height={50} src={main} alt='main' />
        </span>
        <div className='text-3xl font-bold mt-6 text-secondary'>
          {process.env.NEXT_PUBLIC_NAME}
        </div>
      </div>

      <form>
        <Button
          className='bg-blue-500 hover:bg-blue-700'
          name={'WEITER MIT FACEBOOK'}
        />
        <Button className='bg-black' name={'WEITER MIT APPLE'} />

        <Button className='bg-transparent' name={'WEITER MIT GOOGLE'} />

        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-96 my-8 border-1 text-gray-700' />
          <span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white '>
            or
          </span>
        </div>

        <AuthInput
          type='email'
          value={email}
          onChange={setEmail}
          placeholder='E-Mail-Adresse oder Benutzername'
          label={'E-Mail-Adresse oder Benutzername'}
        />

        <AuthInput
          type='password'
          value={password}
          onChange={setPassword}
          placeholder='Password'
          label={'Password'}
        />

        <div className='flex justify-center mt-5'>
          <div className='flex mt-5 underline'>Password Vergessen</div>
          <div className='ml-32'>
            <Button onClick={() => submit()} name={'Anmelden'} />
          </div>
        </div>

        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-96 my-8 border-1 text-gray-700' />
        </div>

        <div className='font-bold flex justify-center'>
          Du hast kein Konto ?
        </div>

        <Button
          className='border-gray-200 bg-transparent'
          onClick={() => router.push('/auth/register')}
          name={`Bei ${process.env.NEXT_PUBLIC_NAME} Regestrieren`}
        />
      </form>
    </>
  );
};

export default Login;
