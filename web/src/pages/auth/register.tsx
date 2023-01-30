import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import main from '../../../public/images/main.png';
import AuthInput from '../../components/auth/AuthInput';
import Button from '../../components/auth/AuthButton';
import { LoginMethodButton } from '../../components/auth/Button';
import Terms from '../../components/elements/authPage/Terms';

const Register = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const router = useRouter();

  const submit = async () => {
    const response = await axios.post('http://localhost:4000/auth/register', {
      email,
      password,
    });
    console.log(response.data);

    router.push('/dashboard/');
  };

  return (
    <>
      <div className='flex justify-center mr-3'>
        <span className='font-semibold text-2xl dark:text-white flex'>
          <Image width={80} height={50} src={main} alt='asd' />
        </span>
        <div className='text-3xl font-bold mt-6 text-secondary'>
          {process.env.NEXT_PUBLIC_NAME}
        </div>
      </div>
      <LoginMethodButton
        className='bg-blue-500 hover:bg-blue-700'
        name={'WEITER MIT APPLE'}
      />
      <LoginMethodButton
        className=' text-white bg-transparent border-2 font-bold rounded-full'
        name={'WEITER MIT GOOGLE'}
      />
      <div className='inline-flex items-center justify-center w-full'>
        <hr className='w-96 my-8 border-1 text-gray-700' />
        <span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white '>
          or
        </span>
      </div>
      <div className='flex justify-center font-bold text-xl mb-10'>
        Sign up with your email address
      </div>

      <AuthInput
        type='email'
        value={email}
        onChange={setEmail}
        placeholder='Enter your email.'
        label={'Whats your email?'}
      />

      <AuthInput
        onChange={setConfirm}
        type='email'
        placeholder='Confirm your email.'
        value={confirm}
        label={'Confirm your email'}
      />

      <AuthInput
        type='password'
        value={password}
        onChange={setPassword}
        placeholder='Password'
        label={'Enter your password'}
      />

      <div className='flex justify-center mt-10'>
        <input
          type='checkbox'
          required
          className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
        />
        <div className='ml-2 text-sm '>
          <Terms />
        </div>
      </div>
      <Button onClick={() => submit()} name='Register' />

      <div className='flex justify-center mt-5 font-semibold'>
        Have an account?
        <span
          className='text-secondary ml-1 underline'
          onClick={() => {
            return router.push('auth/login');
          }}
        >
          Log in.
        </span>
      </div>
      <button
        className='bg-green-500'
        onClick={() => {
          return router.push('/dashboard');
        }}
      >
        asd
      </button>
    </>
  );
};

export default Register;
