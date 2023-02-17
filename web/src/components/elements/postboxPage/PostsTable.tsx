import axios from 'axios';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFillFileEarmarkPdfFill, BsTrash } from 'react-icons/bs';
import { GeneralStore } from '../../../store/Generalstore';

function PostsTable() {
  const [data, setData] = useState<any[]>([]);
  const { addAlert } = GeneralStore();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddAlert = () => {
    addAlert({
      id: 'unique-id',
      message: 'Der Auftrag wurde erfolgreich gelöscht.',
      type: 'success',
    });
  };

  const getPosts = async () => {
    const response = await axios.get('/letter/all-user');
    setData(response.data);
  };

  const deleteallposts = async () => {
    await axios.delete('/letter/all-letter');
    getPosts();
  };

  async function deleteposts(id: number) {
    await axios.delete(`/letter/${id}`);
    getPosts();
  }

  const submit = async () => {
    console.log('submit');
  };

  useEffect(() => {
    getPosts();
  }, []);

  let date = dayjs().format('DD.MM.YYYY');

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-semibold">Users</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex">
          <button
            onClick={() => deleteallposts()}
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
          >
            POSTBOX LEEREN
          </button>
          <div className="ml-10">
            <button
              type="button"
              onClick={() => submit()}
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
            >
              SENDUNGEN ZUSAMMENFÜHREN
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 pl-4 pr-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500 sm:pl-6"
                    >
                      Dokument / Eigenschaften
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Briefe
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Seiten
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Umschlag
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Hinzugefügt
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      Preis
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500"
                    >
                      PDF
                    </th>
                    <th scope="col" className="relative py-3 pl-3 pr-4 sm:pr-6">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-white">
                  {data.map((letter, index) => (
                    <tr key={index} className="hover:bg-gray-800">
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                        {letter.documents}
                        <div className="text-xs text-gray-500 mt-2">
                          {letter.side}, {letter.color}
                        </div>
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                        {letter.posts}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                        {letter.pages}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                        {letter.envelope}
                      </td>

                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                        {date}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6">
                        {letter.price * letter.pages}€
                      </td>
                      <td className="whitespace-nowrap py-2 pl-2 pr-1 text-sm font-medium text-white sm:pl-6 ">
                        <BsFillFileEarmarkPdfFill className="text-xl text-pink-500" />
                      </td>
                      <td className="flex mt-3">
                        <AiOutlineEdit
                          className="text-xl mt-4"
                          onClick={() => {
                            return router.push(`/edit/${letter.id}`);
                          }}
                        />
                        <button
                          type="submit"
                          className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-6"
                          onClick={() => {
                            deleteposts(letter.id);
                            toggle();
                            handleAddAlert();
                          }}
                        >
                          <BsTrash className="text-xl" />
                        </button>
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
