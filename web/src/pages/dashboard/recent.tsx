import React from 'react';
import DashboardContainer from '../../components/controller/DashboardContainer';

interface recentProps {}

const recent: React.FC<recentProps> = ({}) => {
  return (
    <div>
      <DashboardContainer>
        <div>Recent</div>
      </DashboardContainer>
    </div>
  );
};
