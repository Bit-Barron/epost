/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }5
  ```
*/
import { useState } from 'react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Combobox } from '@headlessui/react';
import axios from 'axios';

const people = [
  { id: 1, name: 'Herr' },
  { id: 1, name: 'Frau' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  const [query, setQuery] = useState('');
  const [salutation, setSalutation] = useState('Herr');

  const submit = async () => {
    const response = await axios.post('/setting/create', {
      salutation,
    });
    console.log(response.data);
  };

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Combobox as='div'>
      <Combobox.Label className='block text-sm font-medium text-gray-700'>
        Anrede
      </Combobox.Label>
      <div className='relative mt-1'>
        <Combobox.Input
          className='w-96 rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 shadow-sm focus:border-secondary focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(person: any) => person.name}
        />
        <Combobox.Button className='absolute inset-y-0 right-0 mr-[500px] flex items-center rounded-r-md px-2 focus:outline-none'>
          <SelectorIcon className='h-5 w-5 text-gray-400' aria-hidden='true' />
        </Combobox.Button>

        {filteredPeople.length > 0 && (
          <Combobox.Options className='absolute z-10 mt-1 max-h-60 w-96 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {filteredPeople.map((person) => (
              <Combobox.Option
                onClick={() => submit()}
                key={person.name}
                value={person}
                className={({ active }) =>
                  classNames(
                    'relative cursor-default select-none py-2 pl-8 pr-4',
                    active ? 'bg-secondary text-white' : 'text-gray-900'
                  )
                }
              >
                {({ active, selected }) => (
                  <>
                    <span className={classNames('block truncate')}>
                      {person.name}
                    </span>

                    {selected && (
                      <span
                        className={classNames(
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                          active ? 'text-white' : 'text-indigo-600'
                        )}
                      >
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    )}
                  </>
                )}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  );
}
