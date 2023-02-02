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
      <SettingHeader />
      <div className='mx-auto w-1/2 bg-[#181a1b]'>
        <div className='text-center'>{children}</div>
      </div>
    </>
  );
};