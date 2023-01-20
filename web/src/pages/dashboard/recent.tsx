import React from 'react';
import DashboardContainer from '../../components/controller/DashboardContainer';

interface recentProps {}

const recent: React.FC<recentProps> = ({}) => {
  return (
    <div>
      <DashboardContainer>
        <div className='text-3xl'>Recent</div>
        <div>aaölkdalskjd</div>
      </DashboardContainer>
    </div>
  );
};
export default recent;
