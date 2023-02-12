import React, { useEffect, useState } from 'react';
import AdminContainer from '../../../components/container/AdminContainer';
import InformationTable from '../../../components/elements/admin/InformationTable';
import { Searchbar } from '../../../components/elements/admin/Searchbar';

interface usermanagmentProps {}

const Usermanagment: React.FC<usermanagmentProps> = ({}) => {
  return (
    <AdminContainer>
      <div className="">
        <h1 className="font-bold text-center text-2xl mt-10">Usermanagment</h1>
        <div className="">
          <Searchbar />
        </div>

        <div>
          <div className="mt-10 p-10">
            <InformationTable />
          </div>
        </div>
      </div>
    </AdminContainer>
  );
};

export default Usermanagment;
