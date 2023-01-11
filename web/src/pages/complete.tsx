import React from 'react';
import Button from '../components/elements/Button';
import Company from '../components/informations/Company';
import Name from '../components/informations/Name';
import Location from '../components/informations/Location';
import Input from '../components/elements/Input';

interface completeProps {}

const complete: React.FC<completeProps> = ({}) => {
  return (
    <section className='bg-[#181a1b] container mx-auto mt-52 p-20 w-1/2'>
      <div className='font-bold flex text-lg ml-56 mb-10'>
        Please complete your profile to be able to use Epost to its full
        potential.
      </div>
      <Company />
      <Name />
      <Location />
      <div className='flex flex-wrap mb-6 mx-auto'>
        <div className='w-96 px-3 ml-52'>
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
      <div className='flex justify-start ml-[220px]'>
        <Button
          className={
            'bg-[#bd0f4c] hover:bg-[#ae1047] text-white font-bold py-2 px-4 rounded w-[370px] '
          }
          name='Save'
        />
      </div>
    </section>
  );
};

export default complete;
