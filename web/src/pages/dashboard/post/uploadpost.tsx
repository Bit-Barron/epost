import React from 'react';
import { DashboardContainer } from '../../../components/controller/DashboardContainer';

interface uploadpostProps {}

const uploadpost: React.FC<uploadpostProps> = ({}) => {
  return (
    <DashboardContainer>
      <div className='text-center font-bold text-2xl mt-10'>
        Mit LXP GO clever Rechnungen, Mahnungen und Mailings online versenden
      </div>
    </DashboardContainer>
  );
};

export default uploadpost;
