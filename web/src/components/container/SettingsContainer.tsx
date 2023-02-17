import React from 'react';
import SettingHeader from '../elements/headings/SettingHeader';

interface SettingsContainerProps {
  children: React.ReactNode;
}

export const SettingsContainer: React.FC<SettingsContainerProps> = ({
  children,
}) => {
  return (
    <>
      <div>
        <h1 className="mt-10 font-bold text-2xl text-center">Settings</h1>
        <SettingHeader />

        <div className="mx-auto w-10/12">
          <div>{children}</div>
        </div>
      </div>
    </>
  );
};
