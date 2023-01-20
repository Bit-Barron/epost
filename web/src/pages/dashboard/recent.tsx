import React from 'react';
import {DashboardContainer} from '../../components/controller/DashboardContainer';

interface recentProps {}

const recent: React.FC<recentProps> = ({}) => {
  return (
    <>
      <DashboardContainer>
        <div className='text-3xl text-white'>Recent</div>
      </DashboardContainer>
    </>
  );
};
export default recent;
