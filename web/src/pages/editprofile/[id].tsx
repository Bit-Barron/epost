import { useRouter } from 'next/router';
import React from 'react';
import AdminContainer from '../../components/container/AdminContainer';
import Cards from '../../components/elements/admin/Cards';

const Editprofile = ({}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <AdminContainer>
      <h1 className="font-bold text-2xl text-center mt-20">
        Profile {id} Verwalten
      </h1>
      <div className="p-4">
        <Cards />
      </div>
      <div></div>
    </AdminContainer>
  );
};

export default Editprofile;
