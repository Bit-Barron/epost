import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import { SettingsContainer } from '../../../components/container/SettingsContainer';
import AuthButton from '../../../components/elements/auth/AuthButton';

interface settingsProps {}

const generalsettings: React.FC<settingsProps> = ({}) => {
  return (
    <DashboardContainer>
      <SettingsContainer>
        <div className='bg-[#181a1b] p-5'>
            <div className='font-bold text-xl'>Rechnungen</div>
        </div>
      </SettingsContainer>
    </DashboardContainer>
  );
};

export default generalsettings;
