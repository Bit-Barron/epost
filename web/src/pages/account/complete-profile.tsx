import { Quicksand } from '@next/font/google';
import axios, { AxiosError } from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import AuthButton from '../../components/elements/auth/AuthButton';
import AuthInput from '../../components/elements/auth/AuthInput';
import Dropdown from '../../components/elements/Dropdown';
import { GeneralStore } from '../../store/Generalstore';
import { Alerts } from '../../utils/Alerts';
import main from '../../../public/images/main.png';

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
  const [salutation, setSalutation] = useState('Herr');
  const router = useRouter();
  const { alerts, addAlert } = GeneralStore();

  const submit = async () => {
    try {
      await axios.post('/setting/create', {
        firstname,
        lastname,
        street,
        PLZ,
        salutation,
        location,
        phone,
      });
      router.push('/dashboard/');
    } catch (err: unknown) {
      if ((err as AxiosError).status === 500) {
        addAlert({
          id: 'unique-id',
          message: `Telefon Nummer ist bereits vergeben`,
          type: 'failure',
        });
        console.error(err);
      }
    }
  };

  return (
    <>
      <div>
        {alerts.map((alert) => (
          <div key={alert.id}>
            <Alerts />
          </div>
        ))}
        <div className="bg-[#181a1b] w-[1000px] mt-60 mx-auto p-16 rounded-lg">
          <div className="">
            <span className="self-center font-semibold whitespace-nowrap text-2xl dark:text-white flex justify-center">
              <Image width={80} height={50} src={main} alt="asd" />
              <div
                className={`${quicksand.className} text-4xl mt-5 text-[#f7902c]`}
              >
                Postshield
              </div>
            </span>
            <div className="font-bold text-xl mt-10">
              Bitte vervollständigen Sie Ihr Profil, um
              {process.env.NEXT_PUBLIC_NAME}
              vollumfänglich nutzen zu können.
            </div>
            <div className="mt-10">
              <Dropdown />
            </div>
            <div className="flex justify-start">
              <AuthInput
                value={firstname}
                onChange={setFirstname}
                type={'text'}
                label={'Vorname'}
                className="w-96"
              />
              <div className="ml-10">
                <AuthInput
                  onChange={setLastname}
                  value={lastname}
                  type={'text'}
                  label={'Nachname'}
                  className="w-96"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <AuthInput
                onChange={setStreet}
                type={'text'}
                className="w-96"
                label={'Straße'}
                value={street}
              />
              <div className="ml-10">
                <AuthInput
                  onChange={setPLZ}
                  value={PLZ}
                  type={'text'}
                  label={'PLZ'}
                  className="w-96"
                />
              </div>
            </div>
            <div className="flex justify-start">
              <AuthInput
                onChange={setLocation}
                type={'text'}
                className="w-96"
                label={'Ort'}
                value={location}
              />
              <div className="ml-10 mt-[52px] custom-container-class">
                <PhoneInput
                  containerClass="!bg-transparent"
                  country={'us'}
                  searchClass="!bg-transparent"
                  buttonClass="!bg-transparent !text-black"
                  inputClass="custom-input-class !bg-transparent"
                  value={phone}
                  onChange={setPhone}
                />
              </div>
            </div>
            <div>
              
            </div>
            <div className="flex items-end">
              <AuthButton
                name={'Speichen'}
                onClick={() => submit()}
                className={''}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Completeprofile;
