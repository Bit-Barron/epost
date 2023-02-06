import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import { SettingsContainer } from '../../../components/container/SettingsContainer';
import AuthButton from '../../../components/elements/auth/AuthButton';

interface settingsProps {}

const changepassword: React.FC<settingsProps> = ({}) => {
  return (
    <DashboardContainer>
      <SettingsContainer>
        <div className='p-10 bg-[#181a1b]'>
          <div className='flex justify-start'>
            <div className='mb-3 xl:w-96'>
              <label
                htmlFor='exampleFormControlInput1'
                className='form-label inline-block mb-2 text-gray-700'
              >
                Dein Password
              </label>
              <input
                type='password'
                className='form-control block w-[600px] px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none'
                id='exampleFormControlInput1'
                placeholder='Password'
              />
            </div>
          </div>
          <div className='flex justify-start'>
            <div className='mb-3 xl:w-96'>
              <label
                htmlFor='exampleFormControlInput1'
                className='form-label inline-block mb-2 text-gray-700'
              >
                New password
              </label>
              <input
                type='password'
                className='form-control block w-[600px] px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none'
                id='exampleFormControlInput1'
                placeholder='Neues Passwort eingeben'
              />
              <div className='text-gray-500 mt-2'>
                Bitte mindestins 8 zeichen eingeben
              </div>
            </div>
          </div>
          <div className='flex justify-start'>
            <div className='mb-3 xl:w-96'>
              <label
                htmlFor='exampleFormControlInput1'
                className='form-label inline-block mb-2 text-gray-700'
              >
                Repeat new password
              </label>
              <input
                type='password'
                className='form-control block w-[600px] px-3 py-1.5 text-base font-normal  text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-secondary focus:outline-none'
                id='exampleFormControlInput1'
                placeholder='Password bestätigen'
              />
            </div>
          </div>
          <div className='text-gray-300 text-sm mt-5'>
            Das Passwort muss mindestens 8 Zeichen lang sein und aus mindestens
            einem: Großbuchstaben [A-Z], Kleinbuchstaben [a-z], Zahlen [0-9] und
            folgenden Sonderzeichen [! # $ % & ( ) * § + , - . / : ; {'< = >'} ?
            @ \ ] [ ^ _` {'|'} ~] bestehen.
          </div>
          <div className='mt-10'>
            <AuthButton name={'Password Speichern'} className='w-[300px]' />
          </div>
        </div>
      </SettingsContainer>
    </DashboardContainer>
  );
};

export default changepassword;
