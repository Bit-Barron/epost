import React from 'react';
import { SettingsContainer } from '../../container/SettingsContainer';
import AuthInput from '../auth/AuthInput';
import { SettingInputs } from './SettingInputs';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  return (
    <SettingsContainer>
      <div className='flex'>
        <SettingInputs label='First Name' type='text' />
      </div>
    </SettingsContainer>
  );
};

export default Settings;
