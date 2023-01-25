import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';

interface indexProps {}

const PostShield: React.FC<indexProps> = ({}) => {
  return (
    <DashboardContainer>
      <div className='container mx-auto'>
        <div className='text-secondary font-bold text-3xl  mt-20'>Kontakt</div>
      </div>
    </DashboardContainer>
  );
};
export default PostShield;
