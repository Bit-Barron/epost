import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import AdminContainer from '../../../components/container/AdminContainer';

interface postboxProps {}

const Postbox: React.FC<postboxProps> = ({}) => {
  const [posts, setPosts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`/setting/all`);
      console.log(response.data);
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <AdminContainer>
      <div className="font-bold text-xl text-center mt-10">PostBox</div>
      <div className="mt-10 w-[2000px] mx-auto">
        {posts.map((person, idx) => (
          <div className="flex flex-col" key={idx}>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-[#181a1b]">
                      <tr className="">
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          userId
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white  uppercase tracking-wider"
                        >
                          Street
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          PLZ
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Ort
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                        >
                          Nummer
                        </th>
                      </tr>
                    </thead>
                    <tbody
                      className="divide-y divide-gray-200 bg-[#1d1f20] hover:bg-gray-600"
                      onClick={() => router.push(`/editpostbox/${person.id}`)}
                    >
                      <tr key={person.email}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {person.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {person.street}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {person.PLZ}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {person.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                          {person.phone}
                        </td>
                      </tr>
                      {/* <AiFillEdit
                        onClick={() => {
                          return router.push(`/editprofile/${person.id}`);
                        }}
                      /> */}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminContainer>
  );
};

export default Postbox;
