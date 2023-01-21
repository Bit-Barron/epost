import React, { FormEvent, useState } from 'react';
import Input from '../components/auth/Input';
import Button from '../components/elements/Button';
import { useRouter } from 'next/router';
import axios from 'axios';
import Alert from '../components/elements/Alert';
import Image from 'next/image';
import main from '../../public/images/main.png';

interface loginProps {}

const Login: React.FC<loginProps> = () => {
  const [email, setEmail] = useState('test@test');
  const [password, setPassword] = useState<string>('123123');
  const [alert, setAlert] = useState<string>('');
  const [color, setColor] = useState<string>('');
  const router = useRouter();

  const submit = async () => {
    const response = await axios.post('http://localhost:4000/auth/login', {
      email,
      password,
      withCredentials: true,
    });
    if (response.data.email) {
      setColor('text-green-500 bg-green-100 w-40');
      setAlert('Login Successful');
      router.push('/dashboard');
    } else {
      setColor('p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg ');
      setAlert("Email or Password doesn't match");
    }
    router.push('/dashboard/');
  };
  return (
    <>
      <div className='flex justify-end'>
        {alert && <Alert title={alert} color={color} />}
      </div>
      <div className='flex justify-center'>
        <span className='self-center font-semibold whitespace-nowrap text-2xl dark:text-white flex'>
          <Image width={80} height={50} src={main} alt='asd' />
        </span>
        <div className='text-3xl font-bold mt-6 text-secondary'>Postshield</div>
      </div>
      <hr className='h-px my-8 bg-gray-200' />
      <div className=''>
        <div className='flex justify-center border-white'>
          <button className='bg-blue-500 hover:bg-blue-700 border border-white p-3 w-96 text-white font-bold rounded-full'>
            WEITER MIT FACEBOOK
          </button>
        </div>
        <div className='flex justify-center mt-3 border-white'>
          <button className='bg-black  p-3 w-96 text-white border-white  font-bold rounded-full'>
            WEITER MIT APPLE
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
        <div>
          <div className='flex justify-center mr-28 font-bold mb-2'>
            E-Mail-Adresse oder Benutzername
          </div>

          <div className='flex justify-center'>
            <input
              type='email'
              id='helper-text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby='helper-text-explanation'
              className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-sm block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              placeholder='E-Mail-Adresse oder Benutzername'
            />
          </div>
        </div>
        <div className='mt-10'>
          <div className='flex mr-[310px] justify-center font-bold mb-2'>
            Password
          </div>

          <div className='flex justify-center'>
            <input
              type='email'
              id='helper-text'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-describedby='helper-text-explanation'
              className='bg-transparent border border-gray-300 text-gray-900 text-sm rounded-sm block w-96 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
              placeholder='Password'
            />
          </div>
          <div className='flex justify-center mt-5'>
            <div className='flex mt-5 underline'>Password Vergessen</div>
            <div className='flex justify-center ml-32'>
              <button
                className='bg-secondary p-2 w-32 text-white font-bold rounded-full'
                onClick={() => submit()}
              >
                Anmelden
              </button>
            </div>
          </div>
        </div>
        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-[400px] h-px my-8 border-0bg-gray-700' />
        </div>
        <div className='font-bold flex justify-center'>
          Du hast kein Konto ?{' '}
        </div>
        <div className='flex justify-center mt-5'>
          <button
            className='border-gray-200 p-3 border-2 w-96 bg-transparent text-white font-bold rounded-full'
            onClick={() => router.push('/register')}
          >
            Bei Postshield Regestriere
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
