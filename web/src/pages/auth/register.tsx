import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import main from '../../../public/images/main.png';
import AuthInput from '../../components/elements/auth/AuthInput';
import Button from '../../components/elements/Button';
import Terms from '../../components/elements/authPage/Terms';
import AuthButton from '../../components/elements/auth/AuthButton';
import { GeneralStore } from '../../store/Generalstore';
import { Alerts } from '../../utils/Alerts';

const Register = ({}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const { alerts, addAlert } = GeneralStore();
  const router = useRouter();

  const submit = async () => {
    try {
      await axios.post('/auth/register', {
        email,
        password,
      });
      addAlert({
        id: 'unique-id',
        message: `Account Erstellt`,
        type: 'success',
      });
      router.push('/account/complete-profile/');
    } catch (err: unknown) {
      if ((err as AxiosError).response?.status === 400) {
        addAlert({
          id: 'unique-id',
          message: `Email Schon Vergeben`,
          type: 'failure',
        });
      }
    }
  };

  return (
    <>
      <div className="">
        {alerts.map((alert) => (
          <div key={alert.id}>
            <Alerts />
          </div>
        ))}
        <div className="flex justify-center mr-3">
          <span className="font-semibold text-2xl dark:text-white flex">
            <Image width={80} height={50} src={main} alt="asd" />
          </span>
          <div className="text-3xl font-bold mt-6 text-secondary">
            {process.env.NEXT_PUBLIC_NAME}
          </div>
        </div>
        <Button
          className="bg-blue-500 hover:bg-blue-700"
          name={'WEITER MIT APPLE'}
        />
        <Button
          className=" text-white bg-transparent border-2 font-bold rounded-full"
          name={'WEITER MIT GOOGLE'}
        />
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-96 my-8 border-1 text-gray-700" />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-[#181a1b] left-1/2 dark:text-white ">
            or
          </span>
        </div>
        <div className="flex justify-center font-bold text-xl mb-10">
          Sign up with your email address
        </div>

        <AuthInput
          type="email"
          className="w-96"
          onChange={setEmail}
          placeholder="Enter your email."
          label={'Whats your email?'}
        />

        <AuthInput
          onChange={setConfirm}
          type="email"
          className="w-96"
          placeholder="Confirm your email."
          label={'Confirm your email'}
        />

        <AuthInput
          type="password"
          onChange={setPassword}
          placeholder="Password"
          className="w-96"
          label={'Enter your password'}
        />

        <div className="flex justify-center mt-10">
          <input
            type="checkbox"
            required
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
          />
          <div className="ml-2 text-sm ">
            <Terms />
          </div>
        </div>
        <AuthButton onClick={() => submit()} name="Register" className={''} />

        <div className="flex justify-center mt-5 font-semibold">
          Have an account?
          <span
            className="text-secondary ml-1 underline"
            onClick={() => {
              return router.push('/auth/login');
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
