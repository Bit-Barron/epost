import React from 'react';
import { DashboardContainer } from '../../../components/container/DashboardContainer';

interface uploadpostProps {}

const uploadpost: React.FC<uploadpostProps> = ({}) => {
  return (
    <DashboardContainer>
      <div className='text-center font-bold text-2xl  mt-40'>
        Mit LXP GO clever Rechnungen, Mahnungen und Mailings online versenden
      </div>
      <div className='w-1/2 mx-auto mt-10'>
        <label className='flex justify-center w-full p-10 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none'>
          <span className='flex items-center space-x-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 h-6 text-gray-600'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              stroke-width='2'
            ></svg>
            <span className='text-gray-600 font-bold text-2xl'>
              Hier klicken,{' '}
              <span className='font-semibold'>
                um die PDF-Datei(en) auszuwählen
              </span>
              <br />
              <span className='font-semibold ml-10'>
                Oder per <span className='font-bold'>Drag & Drop</span> ablegen
              </span>
            </span>
            <div></div>
          </span>
          <input type='file' name='file_upload' className='hidden' />
        </label>
      </div>
      <div className='mx-auto mt-2'>
        <button className='bg-transparent p-2 border-dashed border-2 border-secondary rounded-full text-white '>
          ALLE DATEIN ENTFERNEN
        </button>
      </div>

      <div className='bg-gray-200 mx-auto mt-10 p-4 w-1/2'>
        <div className='font-bold text-2xl text-gray-500'>
          Wusten sie schon?
        </div>
        <div className='mt-5 text-gray-500'>
          Schreiben – klicken – verschicken! Briefe können Sie jetzt auch direkt
          im Browser in einer vorgegebenen Briefvorlage schreiben <br /> und
          verschicken. Ideal auch als Deckblatt oder Kurznotiz für PDF-Anhänge
          zu nutzen.
          <span className='font-bold hover:underline'>Jetzt ausprobieren</span>
        </div>
      </div>
      <div className='flex justify-center mt-5'>
        <button className='bg-secondary text-white font-bold py-2 px-4 rounded'>
          BRIEF ZUR POSTBOX HINZUFÜGEN
        </button>
      </div>
    </DashboardContainer>
  );
};

export default uploadpost;
