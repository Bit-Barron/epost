import axios from 'axios';
import React, { useState } from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import { SettingsContainer } from '../../../components/container/SettingsContainer';
import AuthButton from '../../../components/elements/auth/AuthButton';
import AuthInput from '../../../components/elements/auth/AuthInput';

interface settingsProps {}

const Changepassword: React.FC<settingsProps> = ({}) => {
  const [pass, setPass] = useState('');

  const submit = async () => {
    const response = await axios.post('/user/password', {
      pass,
    });
  };

  return (
    <DashboardContainer>
      <SettingsContainer>
        <div className="p-10 bg-[#181a1b] mx-auto">
          <div className="flex justify-center">
            <AuthInput
              type={'password'}
              placeholder="Passwort"
              label="Passwort"
              onChange={(e: any) => setPass(e.target?.value)}
              className="w-[600px]"
            />
          </div>
          <div className="flex justify-center">
            <AuthInput
              type={'text'}
              placeholder="Neus Passwort"
              label="Neues Passwort"
              className="w-[600px]"
            />
          </div>
          <div className="flex justify-center">
            <AuthInput
              type={'text'}
              placeholder="Wiederholen sie ihr neues Passwort"
              label="Referenz-/Bestellnummer"
              className="w-[600px]"
            />
          </div>

          <div className="mt-10">
            <AuthButton
              name={'Password Speichern'}
              className="w-[300px]"
              onClick={() => submit()}
            />
          </div>
        </div>
      </SettingsContainer>
    </DashboardContainer>
  );
};

export default Changepassword;
