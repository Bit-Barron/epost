import React from 'react';
import { SettingsContainer } from '../../container/SettingsContainer';
import AuthInput from '../auth/AuthInput';
import PersonalTables from './PersonalTables';

interface SettingsProps {}

const Settings: React.FC<SettingsProps> = ({}) => {
  return (
    <SettingsContainer>
      <PersonalTables />
    </SettingsContainer>
  );
};

export default Settings;
