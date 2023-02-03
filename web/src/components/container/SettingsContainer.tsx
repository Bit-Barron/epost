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
      <div className='mx-auto w-10/12 bg-[#181a1b]'>
        <div className=''>{children}</div>
      </div>
    </>
  );
};
