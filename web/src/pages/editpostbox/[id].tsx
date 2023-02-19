import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AdminContainer from '../../components/container/AdminContainer';

const PostboxEdit = () => {
  const [isData, setData] = useState<any>({});
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  console.log(id);

  useEffect(() => {
    const handleDynamicRoute = async () => {
      try {
        const res = await axios.get(`/letter/${id}`);
        console.log(res.data);
      } catch (err: unknown) {
        if ((err as AxiosError).response?.status === 500) {
          router.push('/dashboard/letter/postbox/postbox');
        }
      }
    };
    handleDynamicRoute();
  }, [id, router]);

  // useEffect(() => {
  //   const handleDynamicRoute = async () => {
  //     try {
  //       const res = await axios.get(`/letter/${id}`);
  //       console.log(res.data);
  //     } catch (err: unknown) {
  //       if ((err as AxiosError).response?.status === 500) {
  //         console.log(err);
  //       }
  //     }
  //   };
  //   handleDynamicRoute();
  // }, [id, router]);

  // const item = isData?.data[`${id}`];

  return (
    <div>
      <AdminContainer>
        <div className="font-bold text-xl text-center mt-10">
          Post von id {id} verwalten
        </div>
        {/* <div>{item?.street}</div> */}
      </AdminContainer>
    </div>
  );
};

export default PostboxEdit;
