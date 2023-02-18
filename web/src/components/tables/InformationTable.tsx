import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';

export default function InformationTable() {
  const [data, setData] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('/user/all');
      setData(response.data);
    };
    getData();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-500 sm:rounded-lg bg-[#000000]">
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
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-[#1d1f20]">
                {data.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                      {person.id}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {person.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      {person.role}
                    </td>
                    <td className="text-xl text-red-500 hover:text-red-300">
                      <AiFillEdit
                        onClick={() => {
                          return router.push(`/editprofile/${person.id}`);
                        }}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
