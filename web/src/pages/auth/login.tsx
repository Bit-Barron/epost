import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import main from '../../../public/images/main.png';
import AuthButton from '../../components/elements/auth/AuthButton';
import AuthInput from '../../components/elements/auth/AuthInput';
import Button from '../../components/elements/Button';
import { GeneralStore } from '../../store/Generalstore';
import { Alerts } from '../../utils/Alerts';

const Login = () => {
  const [email, setEmail] = useState('test@test');
  const [password, setPassword] = useState<string>('123123');
  const { alerts, addAlert } = GeneralStore();

  const router = useRouter();

  const submit = async () => {
    try {
      await axios.post('/auth/login', {
        email,
        password,
        withCredentials: true,
      });
      addAlert({
        id: 'unique-id',
        message: 'Benutzer erfolgreich angemeldet',
        type: 'success',
      });
      router.push('/dashboard');
    } catch (err: unknown) {
      if ((err as AxiosError).response?.status === 500) {
        addAlert({
          id: 'unique-id',
          message: `Falsche E-Mail oder Passwort`,
          type: 'failure',
        });
      }
    }
  };

  return (
    <>
      <div className="flex justify-center">
        {alerts.map((alert) => (
          <div key={alert.id}>
            <Alerts />
          </div>
        ))}
        <span className="font-semibold text-2xl dark:text-white flex">
          <Image width={80} height={50} src={main} alt="main" />
        </span>
        <div className="text-3xl font-bold mt-6 text-secondary">
          {process.env.NEXT_PUBLIC_NAME}
        </div>
      </div>

      <form className="flex justify-center align-center h-screen">
        <div>
          <Button
            className="bg-blue-500 hover:bg-blue-700"
            name={'WEITER MIT FACEBOOK'}
          />
          <Button className="bg-black" name={'WEITER MIT APPLE'} />

          <Button
            className="bg-transparent border border-white"
            name={'WEITER MIT GOOGLE'}
          />

          {/* <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-96 my-8 border-1 text-[#363b3d]' />
          <span className='absolute px-3 font-medium text-[#363b3d] -translate-x-1/2 bg-white left-1/2'>
            or
          </span>
        </div> */}

          <AuthInput
            type="email"
            value={email}
            className="w-96"
            onChange={setEmail}
            placeholder="E-Mail-Adresse oder Benutzername"
            label={'E-Mail-Adresse oder Benutzername'}
          />

          <AuthInput
            className="w-96"
            type="password"
            value={password}
            onChange={setPassword}
            placeholder="Password"
            label={'Password'}
          />

          <div className="flex justify-center mt-5">
            <a href="/account/resetpassword" className="flex mt-5 underline">
              Password Vergessen
            </a>
            <div className="ml-32">
              <AuthButton
                onClick={() => submit()}
                name={'Anmelden'}
                className={''}
              />
            </div>
          </div>

          <div className="inline-flex items-center justify-center w-full">
            <hr className="w-96 my-8 border-1 text-gray-700" />
          </div>

          <div className="font-bold flex justify-center rounded-full border- border-white">
            Du hast kein Konto ?
          </div>

          <Button
            className="border-gray-200 border-2 bg-transparent"
            onClick={() => router.push('auth/register')}
            name={`Bei ${process.env.NEXT_PUBLIC_NAME} Regestrieren`}
          />
        </div>
      </form>
    </>
  );
};

export default Login;
