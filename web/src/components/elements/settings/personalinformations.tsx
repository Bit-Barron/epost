import React from 'react';
import { SettingsContainer } from '../../container/SettingsContainer';
import AuthInput from '../auth/AuthInput';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  return (
    <SettingsContainer>
      <AuthInput value={''} onChange={undefined} type={''} label={'Firma'} />
    </SettingsContainer>
  );
};

export default Settings;
