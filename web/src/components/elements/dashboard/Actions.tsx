import {
  ClockIcon,
  BadgeCheckIcon,
  UsersIcon,
  CashIcon,
  ReceiptRefundIcon,
  AcademicCapIcon,
} from '@heroicons/react/outline';
import React from 'react';

interface ActiontsProps {}

export const Actions: React.FC<ActiontsProps> = ({}) => {
  const actions = [
    {
      icon: ClockIcon,
      name: 'Request time off',
      href: '#',
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-400',
    },
    {
      icon: BadgeCheckIcon,
      name: 'Benefits',
      href: '#',
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-400',
    },
    {
      icon: UsersIcon,
      name: 'Schedule a one-on-one',
      href: '#',
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-400',
    },
    {
      icon: CashIcon,
      name: 'Payroll',
      href: '#',
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-400',
    },
    {
      icon: ReceiptRefundIcon,
      name: 'Submit an expense',
      href: '#',
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-400',
    },
    {
      icon: AcademicCapIcon,
      name: 'Training',
      href: '#',
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-400',
    },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="rounded-lg overflow-hidden shadow divide-y  divide-gray-200 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
      <h2 className="sr-only" id="quick-links-title">
        Quick links
      </h2>
      {actions.map((action, actionIdx) => (
        <div
          key={action.name}
          className={classNames(
            actionIdx === 0
              ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
              : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === actions.length - 1
              ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
              : '',
            'relative group bg-[#181a1b] p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500',
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'rounded-lg inline-flex p-3 bg-ring-4 ring-white',
              )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-medium">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span className="absolute inset-0" aria-hidden="true" />
                {action.name}
              </a>
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Doloribus dolores nostrum quia qui natus officia quod et dolorem.
              Sit repellendus qui ut at blanditiis et quo et molestiae.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
