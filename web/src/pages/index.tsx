import React, { useEffect } from 'react';
import { DashboardContainer } from '../components/controller/DashboardContainer';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Navbar } from '../components/elements/Navbar';
import Image from 'next/image';
import { GiCheckMark } from 'react-icons/gi';

const Index: React.FC = ({}) => {
  const router = useRouter();

  return (
    <div className=''>
      <header className='bg-main p-4 flex justify-center'>
        <span className='mr-5 mt-3 text-gray-500 font-semibold'>
          kennen sie postflix kennen!
        </span>
        <button className='bg-[#454b4e] text-white font-bold py-2 px-4 rounded-full'>
          Unsere Webintermine
        </button>
      </header>
      <hr className='h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700' />
      <Navbar />
      <hr className='h-px mt-2 bg-gray-200 border-0 dark:bg-gray-700' />
      <div className='bg-[#1f2123] h-[500px]'>
        <div className='flex justify-center'>
          <Image
            width={500}
            height={50}
            className='mt-10 mr-10'
            alt='Briefe online versenden'
            src='https://www.letterxpress.de/images/animation/desktop/lxp_desktop_109.jpg'
          />
          <span className='mt-32 text-3xl text-black font-semibold '>
            Briefe online versenden
            <ul className='text-lg text-gray-500'>
              <li className='mt-4 flex '>
                <GiCheckMark className='mt-1 mr-2' /> Ab 0,72 € pro Brief inkl.
                Porto und zzgl. MwSt. (0,86 € brutto)
              </li>
              <li className='mt-4 flex'>
                <GiCheckMark className='mt-1 mr-2' />
                Ab 0,72 € pro Brief inkl. Porto und zzgl. MwSt. (0,86 € brutto)
              </li>
              <li className='mt-4 flex'>
                <GiCheckMark className='mt-1 mr-2' />
                Keine Vertragslaufzeiten oder monatliche Grundpreise
              </li>
              <li className='mt-4 flex'>
                <GiCheckMark className='mt-1 mr-2' />
                Sofort nutzbar, keine zusätzliche Hardware notwendig
              </li>
              <li className='mt-4 flex'>
                <GiCheckMark className='mt-1 mr-2' /> Eigene Produktion, Versand
                durch die Deutsche Post AG mit GOGREEN
              </li>
              <button
                className='bg-[#b6003f] text-white font-bold py-2 px-4 rounded-full mt-10'
                onClick={() => {
                  return router.push('/login');
                }}
              >
                Jetzt kostenlos testen
              </button>
            </ul>
          </span>
        </div>
        <div></div>
      </div>
      <div></div>
      <div className='bg-[#181a1b] p-4 h-[300px] flex justify-center '>
        <div className='font-bold text-2xl text-center mt-10'>
          Brief einfach online <br /> <span className='ml-5'>übertragen</span>
          <div className='font-normal text-lg mt-4 text-gray-500 '>
            Die Lösung für alle Geschäftskunden! Zu jeder Zeit <br /> und von
            jedem Ort Briefe verschicken - Taggleicher <br /> Versand bei
            Übertragung bis 16 Uhr.
          </div>
        </div>
        <div className='font-bold text-2xl text-center ml-40 mt-10'>
          Brief einfach online <br /> <span className='ml-5'>übertragen</span>
          <div className='font-normal text-lg mt-4 text-gray-500 '>
            Die Lösung für alle Geschäftskunden! Zu jeder Zeit <br /> und von
            jedem Ort Briefe verschicken - Taggleicher <br /> Versand bei
            Übertragung bis 16 Uhr.
          </div>
        </div>
        <div className='font-bold text-2xl text-center ml-40 mt-10'>
          Brief einfach online <br /> <span className='ml-5'>übertragen</span>
          <div className='font-normal text-lg mt-4 text-gray-500 '>
            Die Lösung für alle Geschäftskunden! Zu jeder Zeit <br /> und von
            jedem Ort Briefe verschicken - Taggleicher <br /> Versand bei
            Übertragung bis 16 Uhr.
          </div>
        </div>
      </div>
      <div className='bg-[#1d1f20] p-5'>
        <div className='font-bold text-center text-2xl mt-10'>
          Über 27.500 Kunden vertrauen uns jährlich über 20 Millionen Briefe an
        </div>
      </div>
    </div>
  );
};
export default Index;
