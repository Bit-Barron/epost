import React from 'react';
import Button from '../components/elements/Button';
import Company from '../components/informations/Company';
import Name from '../components/informations/Name';
import Location from '../components/informations/Location';
import Input from '../components/elements/Input';
import { useRouter } from 'next/router';

interface completeProps {}

const Complete: React.FC<completeProps> = ({}) => {
  const router = useRouter();

  return (
    <section className='bg-[#181a1b] w-1/2 mx-auto p-10 mt-52'>
      <div className='font-bold text-lg mb-10 flex justify-center'>
        Please complete your profile to be able to use Epost to its full
        potential.
      </div>
      <div className=''>
        <div className='flex justify-center'>
          <Company />
        </div>
        <div className='flex justify-center'>
          <Name />
        </div>
        <div className='flex justify-center'>
          <Location />
        </div>
        <div className='flex flex-wrap mb-6 justify-center'>
          <div className='w-96 px-3 '>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              ORT
            </label>
            <Input />
          </div>
          <div className='w-96 px-3'>
            <label
              className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 italic'
              htmlFor='grid-password'
            >
              Telefon
            </label>
            <input
              className='appearance-none block w-full bg-transparent text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white '
              id='grid-password'
              placeholder='Optional'
            />
          </div>
        </div>
        <div className='flex justify-center'>
          <Button
          onClick={() => {
            return router.push('/');
          }}
            className={
              'bg-[#bd0f4c] hover:bg-[#ae1047] text-white font-bold py-2 px-4 rounded mr-2 w-96'
            }
            name='Save'
          />
        </div>
      </div>
    </section>
  );
};

export default Complete;
