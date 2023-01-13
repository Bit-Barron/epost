import React from 'react';

interface DashboardMobileNavbarProps {}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Order overview', href: '#' },
  { name: 'Recent', href: '#' },
];

export const DashboardMobileNavbar: React.FC<
  DashboardMobileNavbarProps
> = ({}) => {
  return (
    <div className='mt-5 flex-1 h-0 overflow-y-auto'>
      <nav className='px-2'>
        <div className='space-y-1'>
          {navigation.map((item: any) => (
            <a
              key={item.name}
              href={item.href}
              className={classNames(
                item.current
                  ? 'bg-gray-100 text-gray-900'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50',
                'group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md'
              )}
              aria-current={item.current ? 'page' : undefined}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className='mt-8'>
          <h3
            className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
            id='mobile-teams-headline'
          >
            Teams
          </h3>
          <div
            className='mt-1 space-y-1'
            role='group'
            aria-labelledby='mobile-teams-headline'
          ></div>
        </div>
      </nav>
    </div>
  );
};
