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
        <div className='bg-[#181a1b] p-5'>
          <div className='font-bold text-xl'>Rechnungen</div>
          <div className='flex justify-start'>
            <AuthInput type={'text'} label={'Einzelverbindungsnachweis bei Rechnungen immer mit anfügen'} />
          </div>
        </div>
      </SettingsContainer>
    </DashboardContainer>
  );
};

export default generalsettings;
