import axios from 'axios';
import { useEffect, useState } from 'react';

function PostsTable() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios.get('http://localhost:4000/letter/all-user');
      console.log(response.data);
      setData(response.data);
    };
    getPosts();
  }, []);

  return (
    <div className='px-4 sm:px-6 lg:px-8'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'>
          <h1 className='text-xl font-semibold text-gray-900'>Users</h1>
          <p className='mt-2 text-sm text-gray-700'>
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex'>
          <button
            type='button'
            className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
          >
            POSTBOX LEEREN
          </button>
          <div className='ml-10'>
            <button
              type='button'
              className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto'
            >
              SENDUNGEN ZUSAMMENFÜHREN
            </button>
          </div>
        </div>
      </div>
      <div></div>
      <div className='mt-8 flex flex-col'>
        <div className='-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
            <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg'>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th
                      scope='col'
                      className='py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6'
                    >
                      Dokument / Eigenschaften
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      Briefe
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      Seiten
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      Umschlag
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      Gruppe
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      Hinzugefügt
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      Preis
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      PDF
                    </th>
                    <th scope='col' className='relative py-3 pl-3 pr-4 sm:pr-6'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {data.map((letter) => (
                    <tr key={letter.idx} className='hover:bg-gray-200'>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {letter.content}
                      </td>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {letter.posts}
                      </td>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {letter.pages}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostsTable;
