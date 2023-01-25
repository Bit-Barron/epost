import axios from 'axios';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import main from '../../public/images/main.png';

const Register = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');
  const router = useRouter();

  const submit = async () => {
    const getInputClassName = () => {
      if (email !== confirm) {
        return 'bg-transparent border border-gray-300 text-gray-900 text-sm rounded-sm block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-red-500';
      } else {
        return 'bg-transparent border border-gray-300 text-gray-900 text-sm rounded-sm block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white border-green-700';
      }
    };
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
        <span className='self-center font-semibold whitespace-nowrap text-2xl dark:text-white flex'>
          <Image width={80} height={50} src={main} alt='asd' />
        </span>
        <div className='text-3xl font-bold mt-6 text-secondary'>Postshield</div>
      </div>
      <div className='flex justify-center border-white mt-10'>
        <button className='bg-blue-500 hover:bg-blue-700 border border-white p-3 w-96 text-white font-bold rounded-full'>
          WEITER MIT FACEBOOK
        </button>
      </div>
      <div className='flex justify-center mt-3 border-white'>
        <button className='p-3 w-96 text-white bg-transparent border-2 font-bold rounded-full'>
          WEITER MIT GOOGLE
        </button>
      </div>
      <div className='inline-flex items-center justify-center w-full'>
        <hr className='w-96 h-px my-8  border-0bg-gray-700' />
        <span className='absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white '>
          or
        </span>
      </div>
      <div className='flex justify-center font-bold text-xl'>
        Sign up with your email address
      </div>
      <div className='mt-10 flex justify-center'>
        <div className=''>
          <div>
            <div className='mr-28 font-bold mb-2'>Whats your email?</div>
          </div>
          <input
            type='email'
            id='helper-text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby='helper-text-explanation'
            className='bg-transparent border border-gray-300  text-gray-900 text-sm rounded-sm block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
            placeholder='Enter your email.'
          />
        </div>
      </div>
      <div className='mt-10 flex justify-center'>
        <div className=''>
          <div>
            <div className='mr-28 font-bold mb-2'>Confirm your email</div>
          </div>
          <input
            onChange={(e) => setConfirm(e.target.value)}
            type='email'
            id='helper-text'
            aria-describedby='helper-text-explanation'
            className='bg-transparent border border-gray-300  text-gray-900 text-sm rounded-sm block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
            placeholder='Enter your email.'
          />
        </div>
      </div>
      <div className='mt-10'>
        <div className='flex mr-[310px] justify-center font-bold mb-2'>
          Register
        </div>

        <div className='flex justify-center'>
          <input
            type='password'
            id='helper-text'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby='helper-text-explanation'
            className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-sm block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
            placeholder='Password'
          />
        </div>
        <div className='flex justify-center mt-10'>
          <div className='flex items-center h-5'>
            <input
              id='helper-checkbox'
              aria-describedby='helper-checkbox-text'
              type='checkbox'
              value=''
              required
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 '
            />
          </div>
          <div className='ml-2 text-sm '>
            <label
              htmlFor='helper-checkbox'
              className='font-medium text-gray-900 dark:text-gray-300'
            >
              I hereby agree to the Terms of Service and consent to the <br />
              collection, processing and use of my personal data, as <br />
              described in more detail in the Privacy Statement.
            </label>
          </div>
        </div>
        <div className='flex justify-center mt-5'>
          <div className='flex justify-center '>
            <button
              className='bg-secondary p-2 w-32 text-white font-bold rounded-full'
              onClick={() => submit()}
            >
              Password
            </button>
          </div>
        </div>
        <div className='flex justify-center mt-5 font-semibold'>
          Have an account?{' '}
          <span
            className='text-secondary ml-1 underline'
            onClick={() => {
              return router.push('/login');
            }}
          >
            Log in.
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
