import React from 'react';
import Image from 'next/image';

interface partnershipProps {}

const Partnership: React.FC<partnershipProps> = ({}) => {
  const logos = [
    {
      name: 'Tuple',
      url: 'https://tailwindui.com/img/logos/tuple-logo-purple-200.svg',
    },
    {
      name: 'Mirage',
      url: 'https://tailwindui.com/img/logos/mirage-logo-purple-200.svg',
    },
    {
      name: 'StaticKit',
      url: 'https://tailwindui.com/img/logos/statickit-logo-purple-200.svg',
    },
    {
      name: 'Transistor',
      url: 'https://tailwindui.com/img/logos/transistor-logo-purple-200.svg',
    },
    {
      name: 'Workcation',
      url: 'https://tailwindui.com/img/logos/workcation-logo-purple-200.svg',
    },
  ];
  return (
    <div className='bg-secondary'>
      <div className='max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
        <div className='lg:space-y-10'>
          <h2 className='text-3xl font-extrabold text-white'>
            The worlds most innovative companies use Workflow
          </h2>
          <div className='mt-8 flow-root lg:mt-0'>
            <div className='-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4'>
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'
                >
                  <Image
                    className='h-12'
                    width={90}
                    height={90}
                    src={logo.url}
                    alt={logo.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partnership;
