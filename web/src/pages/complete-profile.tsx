import { Quicksand } from '@next/font/google';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import main from '../../public/images/main.png';
import Dropdown from '../components/elements/completeProfilePage/Dropdown';
import AuthInput from '../components/elements/auth/AuthInput';
import AuthButton from '../components/elements/auth/AuthButton';
import axios from 'axios';
import { useRouter } from 'next/router';

interface completeprofileProps {}

const quicksand = Quicksand({
  weight: '700',
  subsets: ['latin'],
});

const Completeprofile: React.FC<completeprofileProps> = ({}) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [street, setStreet] = useState('');
  const [PLZ, setPLZ] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [salutation, setSalutation] = useState('');
  const router = useRouter();

  const submit = async () => {
    const response = await axios.post('/setting/create', {
      firstname,
      lastname,
      street,
      PLZ,
      salutation,
      location,
      phone,
    });
    console.log(response.data);
    router.push('/dashboard/');
  };

  return (
    <div>
      <div className='bg-[#181a1b] w-[1000px] mt-52 mx-auto p-16 rounded-lg'>
        <div className='mx-auto container'>
          <span className='self-center font-semibold whitespace-nowrap text-2xl dark:text-white flex justify-center'>
            <Image width={80} height={50} src={main} alt='asd' />
            <div
              className={`${quicksand.className} text-4xl mt-5 text-[#f7902c]`}
            >
              Postshield
            </div>
          </span>
          <div className='font-bold text-xl mt-10'>
            Bitte vervollständigen Sie Ihr Profil, um Postshield vollumfänglich
            nutzen zu können.
          </div>
          <div className='mt-10'>
            <Dropdown />
          </div>
          <div className='flex justify-start'>
            <AuthInput
              value={firstname}
              onChange={setFirstname}
              type={'text'}
              label={'Vorname'}
            />
            <div className='ml-10'>
              <AuthInput
                onChange={setLastname}
                className=''
                value={lastname}
                type={'text'}
                label={'Nachname'}
              />
            </div>
          </div>
          <div className='flex justify-start'>
            <AuthInput
              onChange={setStreet}
              type={'text'}
              label={'Straße'}
              value={street}
            />
            <div className='ml-10'>
              <AuthInput
                onChange={setPLZ}
                className=''
                value={PLZ}
                type={'text'}
                label={'PLZ'}
              />
            </div>
          </div>
          <div className='flex justify-start'>
            <AuthInput
              onChange={setLocation}
              type={'text'}
              label={'Ort'}
              value={location}
            />
            <div className='ml-10'>
              <AuthInput
                onChange={setPhone}
                className=''
                value={phone}
                placeholder='Optional'
                type={'text'}
                label={'Telefon'}
              />
            </div>
          </div>
          <div className='flex items-end'>
            <AuthButton name={'Speichen'} onClick={() => submit()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completeprofile;
