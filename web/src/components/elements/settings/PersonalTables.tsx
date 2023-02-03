const people = [
  {
    name: 'Lindsay Walton',
    title: 'Front-end Developer',
    email: 'lindsay.walton@example.com',
    role: 'Member',
  },
];

export default function Example() {
  return (
    <div className='px-4 sm:px-6 lg:px-8 p-10'>
      <div className='sm:flex sm:items-center'>
        <div className='sm:flex-auto'></div>
      </div>
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
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      Title
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-3 py-3 text-left text-xs font-medium uppercase tracking-wide text-gray-500'
                    >
                      Role
                    </th>
                    <th scope='col' className='relative py-3 pl-3 pr-4 sm:pr-6'>
                      <span className='sr-only'>Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white'>
                  {people.map((person) => (
                    <tr key={person.email}>
                      <td className='whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6'>
                        {person.name}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {person.title}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {person.email}
                      </td>
                      <td className='whitespace-nowrap px-3 py-4 text-sm text-gray-500'>
                        {person.role}
                      </td>
                      <td className='relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'>
                        <a
                          href='#'
                          className='text-indigo-600 hover:text-indigo-900'
                        >
                          Edit<span className='sr-only'>, {person.name}</span>
                        </a>
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
