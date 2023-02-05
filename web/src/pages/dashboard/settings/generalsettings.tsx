import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import { SettingsContainer } from '../../../components/container/SettingsContainer';
import AuthButton from '../../../components/elements/auth/AuthButton';
import AuthInput from '../../../components/elements/auth/AuthInput';

interface settingsProps {}

const generalsettings: React.FC<settingsProps> = ({}) => {
  return (
    <DashboardContainer>
      <SettingsContainer>
        <div className='bg-[#181a1b] p-10'>
          <div className='font-bold text-xl'>Rechnungen</div>
          <div className='mt-4 flex justify-start'>
            <AuthInput
              type={'text'}
              className='w-[600px]'
              label={'Einzelverbindungsnachweis  immer einfügen'}
              placeholder='ja / nein'
            />
          </div>
          <div className='flex justify-start'>
            <AuthInput
              type={'text'}
              placeholder='ja / nein '
              label='Rechnungen, sobald verfügbar, per E-Mail als PDF erhalten'
              className='w-[600px]'
            />
            <div className='ml-20'>
              <AuthInput
                type={'text'}
                placeholder='ja / nein '
                label='Rechnungen, sobald verfügbar, per E-Mail als PDF erhalten'
                className='w-[600px]'
              />
            </div>
          </div>
          <div className='flex justify-start'>
            <AuthInput
              type={'text'}
              placeholder='ja / nein '
              label='Referenz-/Bestellnummer'
              className='w-[600px]'
            />
          </div>
          <div className='flex items-center mt-7'>
            <AuthButton name={'Änderung speichern'} className={'rounded-lg'} />
          </div>
        </div>
      </SettingsContainer>
    </DashboardContainer>
  );
};

export default generalsettings;
