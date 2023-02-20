import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';

interface AddonProps {}

const Addon: React.FC<AddonProps> = ({}) => {
  return (
    <DashboardContainer>
      <div className='flex justify-center'>
        <div></div>
      </div>
    </DashboardContainer>
  );
};

export default Addon;
