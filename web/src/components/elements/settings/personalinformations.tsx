import React from 'react';
import { SettingsContainer } from '../../container/SettingsContainer';
import AuthInput from '../auth/AuthInput';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  return (
    <SettingsContainer>
      <div className='flex p-2 justify-center'>
        <AuthInput
          label='Firma'
          type='text'
          placeholder='optional'
          value={''}
          className='w-96'
          onChange={undefined}
        />
        <AuthInput
          label='Branche'
          type='text'
          className='w-96 ml-4'
          placeholder='optional'
          value={''}
          onChange={undefined}
        />
        <AuthInput
          label='Steuernummer'
          type='text'
          placeholder='optional'
          className='w-96 ml-4'
          value={''}
          onChange={undefined}
        />
        <AuthInput
          label='Zusatzfeld Firma'
          type='text'
          placeholder='optional'
          className='w-96 ml-4'
          value={''}
          onChange={undefined}
        />
      </div>
      <hr className='h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 ml-4 mr-4' />
      <div className='flex p-2 justify-center'>
        <AuthInput
          label='Anrede'
          type='text'
          placeholder='optional'
          value={''}
          className='w-60 ml-4'
          onChange={undefined}
        />
        <AuthInput
          label='Titel'
          type='text'
          placeholder='optional'
          className='ml-4'
          value={''}
          onChange={undefined}
        />
        <AuthInput
          label='Vorname'
          type='text'
          placeholder='optional'
          className='ml-4'
          value={''}
          onChange={undefined}
        />
        <AuthInput
          label='Nachname'
          type='text'
          placeholder='optional'
          className='ml-4'
          value={''}
          onChange={undefined}
        />
        <AuthInput
          label='Nachname'
          type='text'
          placeholder='optional'
          className='ml-4'
          value={''}
          onChange={undefined}
        />
      </div>
    </SettingsContainer>
  );
};

export default Settings;
