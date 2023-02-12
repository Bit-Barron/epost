import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import AdminContainer from '../../components/container/AdminContainer';
import Cards from '../../components/elements/admin/Cards';

const Editprofile = ({}) => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/setting/${id}`);
        console.log(response);
      } catch (err: unknown) {
        if ((err as AxiosError).response?.status === 403) {
          return router.push('/auth/login');
        }
        console.log(err);
      }
    };
    getData();
  }, [id, router]);

  return (
    <AdminContainer>
      <h1 className="font-bold text-2xl text-center mt-20">
        Profile {id} Verwalten
      </h1>
      <div className="p-4">
        <Cards />
      </div>
      <div className="bg-[#181a1b] mt-10 p-4">
        <div>Account Managment</div>
        <div className="mt-10 flex">
          <div className="font-semibold text-lg">Username: {}</div>
        </div>
      </div>
    </AdminContainer>
  );
};

export default Editprofile;
