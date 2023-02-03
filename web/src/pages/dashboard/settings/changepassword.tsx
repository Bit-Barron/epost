import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';
import Settings from '../../../components/elements/settings/personalinformations';

interface settingsProps {}

const changepassword: React.FC<settingsProps> = ({}) => {
  return (
    <DashboardContainer>
      <Settings />
    </DashboardContainer>
  );
};

export default changepassword;
