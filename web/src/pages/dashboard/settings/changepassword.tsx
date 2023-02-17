import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import { SettingsContainer } from '../../../components/container/SettingsContainer';
import AuthButton from '../../../components/elements/auth/AuthButton';
import AuthInput from '../../../components/elements/auth/AuthInput';

interface settingsProps {}

const changepassword: React.FC<settingsProps> = ({}) => {
  return (
    <DashboardContainer>
      <SettingsContainer>
        <div className="p-10 bg-[#181a1b]">
          <div className="flex justify-start">
            <AuthInput
              type={'text'}
              placeholder="Passwort"
              label="Passwort"
              className="w-[600px]"
            />
          </div>
          <div className="flex justify-start">
            <AuthInput
              type={'text'}
              placeholder="Neus Passwort"
              label="Neues Passwort"
              className="w-[600px]"
            />
          </div>
          <div className="flex justify-start">
            <AuthInput
              type={'text'}
              placeholder="Wiederholen sie ihr neues Passwort"
              label="Referenz-/Bestellnummer"
              className="w-[600px]"
            />
          </div>
          <div className="text-gray-300 text-sm mt-5">
            Das Passwort muss mindestens 8 Zeichen lang sein und aus mindestens
            einem: Großbuchstaben [A-Z], Kleinbuchstaben [a-z], Zahlen [0-9] und
            folgenden Sonderzeichen [! # $ % & ( ) * § + , - . / : ; {'< = >'} ?
            @ \ ] [ ^ _` {'|'} ~] bestehen.
          </div>
          <div className="mt-10">
            <AuthButton name={'Password Speichern'} className="w-[300px]" />
          </div>
        </div>
      </SettingsContainer>
    </DashboardContainer>
  );
};

export default changepassword;
