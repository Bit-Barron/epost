import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import { SettingsContainer } from '../../../components/container/SettingsContainer';
import AuthButton from '../../../components/elements/auth/AuthButton';
import Settings from './personalinformations';

interface settingsProps {}

const changepassword: React.FC<settingsProps> = ({}) => {
  return (
    <DashboardContainer>
      <SettingsContainer>
        <div className='p-3'>
          <div className='flex justify-start'>
            <div className='mb-3 xl:w-96'>
              <label
                htmlFor='exampleFormControlInput1'
                className='form-label inline-block mb-2 text-gray-700'
              >
                Neus Passwort
              </label>
              <input
                type='text'
                className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                id='exampleFormControlInput1'
                placeholder='Example label'
              />
              <div className='text-gray-500 mt-2'>
                Bitte mindestins 8 zeichen
              </div>
            </div>
          </div>
          <div className='text-gray-300 text-sm'>
            Das Passwort muss mindestens 8 Zeichen lang sein und aus mindestens
            einem: Großbuchstaben [A-Z], Kleinbuchstaben [a-z], Zahlen [0-9] und
            folgenden Sonderzeichen [! # $ % & ( ) * § + , - . / : ; {'< = >'} ?
            @ \ ] [ ^ _` {'|'} ~] bestehen.
          </div>
          <div className='mt-5'>
            <button
              type='button'
              className='inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
              Password speichern
            </button>
          </div>
        </div>
      </SettingsContainer>
    </DashboardContainer>
  );
};

export default changepassword;
