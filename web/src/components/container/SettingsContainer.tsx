import React from 'react';
import SettingHeader from '../elements/Headings/SettingHeader';

interface SettingsContainerProps {
  children: React.ReactNode;
}

export const SettingsContainer: React.FC<SettingsContainerProps> = ({
  children,
}) => {
  return (
    <>
      <div className='text-center font-bold mt-52 text-2xl'>
        Configure Your Preferences: Personalize Your User Experience with Our
        Settings
      </div>
      <SettingHeader />

      <div className='mx-auto w-10/12'>
        <div>{children}</div>
      </div>
    </>
  );
};
