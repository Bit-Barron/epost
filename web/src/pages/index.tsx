import { Quicksand } from '@next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import { Navbar } from '../components/elements/Navbar';
import Impresum from '../components/elements/pricepage/Impresum';
import Steps from '../components/elements/Steps';

const quicksand = Quicksand({
  weight: '700',
  subsets: ['latin'],
});

const Index: React.FC = ({}) => {
  const router = useRouter();

  return (
    <div>
      <header className="bg-main text-white p-4 flex justify-center">
        <span className={`${quicksand.className} mt-2 mr-2`}>
          kennen sie postflix kennen!
        </span>
        <button className="bg-[#454b4e] p-2 rounded-full font-bold hover:border-dashed hover:border-secondary hover:border-2 hover:duration-300">
          Unsere Webintermine
        </button>
      </header>
      <Navbar />
      <div className="bg-[#1f2123] h-[500px]">
        <div className="flex justify-center">
          <Image
            width={500}
            height={50}
            className="mt-10 mr-10"
            alt="Briefe online versenden"
            src="https://www.letterxpress.de/images/animation/desktop/lxp_desktop_109.jpg"
          />
          <span className={`mt-32 text-3xl text-white ${quicksand.className}`}>
            Briefe online versenden
            <ul className="text-lg text-gray-500">
              <li className="mt-4 flex ">
                <GiCheckMark className="mt-1 mr-2 text-secondary" /> Ab 0,72 €
                pro Brief inkl. Porto und zzgl. MwSt. (0,86 € brutto)
              </li>
              <li className="mt-4 flex">
                <GiCheckMark className="mt-1 mr-2 text-secondary" />
                Ab 0,72 € pro Brief inkl. Porto und zzgl. MwSt. (0,86 € brutto)
              </li>
              <li className="mt-4 flex">
                <GiCheckMark className="mt-1 mr-2 text-secondary" />
                Keine Vertragslaufzeiten oder monatliche Grundpreise
              </li>
              <li className="mt-4 flex">
                <GiCheckMark className="mt-1 mr-2 text-secondary" />
                Sofort nutzbar, keine zusätzliche Hardware notwendig
              </li>
              <li className="mt-4 flex">
                <GiCheckMark className="mt-1 mr-2 text-secondary" /> Eigene
                Produktion, Versand durch die Deutsche Post AG mit GOGREEN
              </li>
              <button
                className="bg-secondary hover:text-secondary hover:bg-[#181a1b] hover:duration-300 text-white font-bold py-2 px-4 rounded-full mt-10"
                onClick={() => {
                  return router.push('/auth/login');
                }}
              >
                Jetzt kostenlos testen
              </button>
            </ul>
          </span>
        </div>
      </div>
      <div className="bg-[#181a1b] p-4 h-[300px] flex justify-center">
        <div className="font-bold text-2xl text-center mt-10 text-[#f7902c]">
          Brief einfach online <br /> <span className="ml-5">übertragen</span>
          <div className="font-normal text-lg mt-4 text-gray-500 ">
            Die Lösung für alle Geschäftskunden! Zu jeder Zeit <br /> und von
            jedem Ort Briefe verschicken - Taggleicher <br /> Versand bei
            Übertragung bis 16 Uhr.
          </div>
        </div>
        <div className="font-bold text-2xl text-center ml-40 mt-10 text-[#f7902c]">
          Brief einfach online <br /> <span className="ml-5">übertragen</span>
          <div className="font-normal text-lg mt-4 text-gray-500 ">
            Die Lösung für alle Geschäftskunden! Zu jeder Zeit <br /> und von
            jedem Ort Briefe verschicken - Taggleicher <br /> Versand bei
            Übertragung bis 16 Uhr.
          </div>
        </div>
        <div className="font-bold text-2xl text-center ml-40 mt-10 text-[#f7902c]">
          Brief einfach online <br /> <span className="ml-5">übertragen</span>
          <div className="font-normal text-lg mt-4 text-gray-500 ">
            Die Lösung für alle Geschäftskunden! Zu jeder Zeit <br /> und von
            jedem Ort Briefe verschicken - Taggleicher <br /> Versand bei
            Übertragung bis 16 Uhr.
          </div>
        </div>
      </div>
      <div className="bg-[#1d1f20] text-white p-5">
        <div className="font-bold text-center text-2xl mt-10">
          In drei Schritten zum zugestellten Brief
        </div>
        <div className="flex font-bold text-2xl justify-center mb-20">
          <div className="mt-10 w-1/2">
            <Steps />
          </div>
        </div>
      </div>
      <Impresum />
    </div>
  );
};
export default Index;
