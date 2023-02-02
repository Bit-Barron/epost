import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import Settings from '../../../components/elements/settings/Settings';

interface settingsProps {}

const settings: React.FC<settingsProps> = ({}) => {
  return (
    <DashboardContainer>
      <Settings />
    </DashboardContainer>
  );
};

export default settings;
