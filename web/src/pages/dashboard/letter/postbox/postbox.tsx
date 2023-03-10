import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { DashboardContainer } from '../../../../components/container/DashboardContainer';
import AuthButton from '../../../../components/elements/auth/AuthButton';
import PostsTable from '../../../../components/tables/PostsTable';
import Impresum from '../../../../components/elements/pricepage/Impresum';
import { GeneralStore } from '../../../../store/Generalstore';
import { Alerts } from '../../../../utils/Alerts';

interface recentProps {}

const Recent: React.FC<recentProps> = ({}) => {
  const [data, setData] = useState<any[]>([]);
  const { alerts } = GeneralStore();

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('/letter/all-user');
      setData(response.data);
    };
    getPosts();
  }, []);

  return (
    <>
      <DashboardContainer>
        <div className="container mx-auto">
          <div className="text-2xl mt-10 text-white text-center">Postbox</div>
          <div>
            {alerts.map((alert) => (
              <div key={alert.id}>
                <Alerts />
              </div>
            ))}
            <div className="relative overflow-hidden mt-20">
              {data && data.length > 0 ? (
                <div>
                  <PostsTable />
                </div>
              ) : (
                <button
                  type="button"
                  className=" w-full p-3 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Postbox ist leer
                </button>
              )}
            </div>

            <div className="ml-10 mt-10">
              <AuthButton
                className="p-2 rounded-lg !w-96 bg-secondary"
                name={'BRIEF F??R 1,71 ??? INKL. MWST. VERSENDEN'}
              />
            </div>
          </div>
        </div>
        <div className="mt-32">
          <Impresum />
        </div>
      </DashboardContainer>
    </>
  );
};
export default Recent;
