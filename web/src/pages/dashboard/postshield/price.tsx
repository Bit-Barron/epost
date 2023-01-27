import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CheckIcon as CheckIconOutline,
  CursorClickIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline';
import { CheckIcon as CheckIconSolid } from '@heroicons/react/solid';
import Image from 'next/image';

import { Navbar } from '../../../components/elements/Navbar';
import Impresum from '../../../components/price/impresum/Impresum';
import Partnership from '../../../components/price/partnership/Partnership';

const solutions = [
  {
    name: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: CursorClickIcon,
  },
  {
    name: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Integrations',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    description:
      'Build strategic funnels that will drive your customers to convert',
    href: '#',
    icon: RefreshIcon,
  },
];

const resources = [
  {
    id: 1,
    name: 'Help Center',
    description:
      'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    id: 2,
    name: 'Guides',
    description:
      'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    id: 3,
    name: 'Events',
    description:
      'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  {
    id: 4,
    name: 'Security',
    description: 'Understand how we take your privacy seriously.',
    href: '#',
    icon: ShieldCheckIcon,
  },
];

const tiers = [
  {
    name: '1 Post',
    href: '#',
    priceMonthly: 1,
    description: 'All the basics for starting a new business',
    features: [
      'Potenti felis, in cras at at ligula nunc.',
      'Orci neque eget pellentesque.',
    ],
  },
  {
    name: '5 Posts',
    href: '#',
    priceMonthly: 3,
    description: 'All the basics for starting a new business',
    features: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
  },
  {
    name: '5 Posts',
    href: '#',
    priceMonthly: 3,
    description: 'All the basics for starting a new business',
    features: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
    ],
  },

  {
    name: 'Enterprise',
    href: '#',
    priceMonthly: 48,
    description: 'All the basics for starting a new business',
    features: [
      'Potenti felis, in cras at at ligula nunc. ',
      'Orci neque eget pellentesque.',
      'Donec mauris sit in eu tincidunt etiam.',
      'Faucibus volutpat magna.',
      'Id sed tellus in varius quisque.',
      'Risus egestas faucibus.',
      'Risus cursus ullamcorper.',
    ],
  },
];
const features = [
  {
    name: 'Invite team members',
    description:
      'Tempor tellus in aliquet eu et sit nulla tellus. Suspendisse est, molestie blandit quis ac. Lacus.',
  },
  {
    name: 'Notifications',
    description:
      'Ornare donec rhoncus vitae nisl velit, neque, mauris dictum duis. Nibh urna non parturient.',
  },
  {
    name: 'List view',
    description:
      'Etiam cras augue ornare pretium sit malesuada morbi orci, venenatis. Dictum lacus.',
  },
  {
    name: 'Boards',
    description:
      'Interdum quam pulvinar turpis tortor, egestas quis diam amet, natoque. Mauris sagittis.',
  },
  {
    name: 'Keyboard shortcuts',
    description:
      'Ullamcorper in ipsum ac feugiat. Senectus at aliquam vulputate mollis nec. In at risus odio.',
  },
  {
    name: 'Reporting',
    description:
      'Magna a vel sagittis aliquam eu amet. Et lorem auctor quam nunc odio. Sed bibendum.',
  },
  {
    name: 'Calendars',
    description:
      'Sed mi, dapibus turpis orci posuere integer. A porta viverra posuere adipiscing turpis.',
  },
  {
    name: 'Mobile app',
    description:
      'Quisque sapien nunc nisl eros. Facilisis sagittis maecenas id dignissim tristique proin sed.',
  },
];
const faqs = [
  {
    id: 1,
    question: 'How do you make holy water?',
    answer:
      'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 2,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  {
    id: 3,
    question: 'What do you call someone with no body and no nose?',
    answer:
      'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
  },
  {
    id: 4,
    question: 'Why do you never see elephants hiding in trees?',
    answer:
      "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
];

export default function Example() {
  return (
    <div className='bg-white'>
      <Popover className='relative bg-white'>
        <Navbar />
        <Transition
          as={Fragment}
          enter='duration-200 ease-out'
          enterFrom='opacity-0 scale-95'
          enterTo='opacity-100 scale-100'
          leave='duration-100 ease-in'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <Popover.Panel
            focus
            className='absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'
          >
            <div className='rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50'>
              <div className='pt-5 pb-6 px-5 space-y-6'>
                <div className='flex items-center justify-between'>
                  <div>
                    <Image
                      width={50}
                      height={50}
                      className='h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-purple-600.svg'
                      alt='Workflow'
                    />
                  </div>
                  <div className='-mr-2'>
                    <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500'>
                      <span className='sr-only'>Close menu</span>
                      <XIcon className='h-6 w-6' aria-hidden='true' />
                    </Popover.Button>
                  </div>
                </div>
                <div className='mt-6'>
                  <nav className='grid gap-y-8'>
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-m-3 p-3 flex items-center rounded-md hover:bg-gray-50'
                      >
                        <item.icon
                          className='flex-shrink-0 h-6 w-6 text-purple-600'
                          aria-hidden='true'
                        />
                        <span className='ml-3 text-base font-medium text-gray-900'>
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className='py-6 px-5 space-y-6'>
                <div className='grid grid-cols-2 gap-y-4 gap-x-8'>
                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Pricing
                  </a>

                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Docs
                  </a>

                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Blog
                  </a>

                  <a
                    href='#'
                    className='text-base font-medium text-gray-900 hover:text-gray-700'
                  >
                    Contact Sales
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className='text-base font-medium text-gray-900 hover:text-gray-700'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className='space-y-6'>
                  <a
                    href='#'
                    className='w-full bg-purple-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white hover:bg-purple-700'
                  >
                    Sign up
                  </a>
                  <p className='text-center text-base font-medium text-gray-500'>
                    Existing customer?{' '}
                    <a
                      href='#'
                      className='text-purple-600 hover:text-purple-500'
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      <div className='bg-gradient-to-b from-white to-gray-50 mx-auto'>
        <div className='max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:flex-col mr-10 sm:align-center'>
            <h1 className='text-5xl font-extrabold text-gray-900 sm:text-center'>
              Pricing Plans
            </h1>
            <p className='mt-5 text-xl text-gray-500 sm:text-center'>
              Start building for free, then add a site plan to go live. Account
              plans unlock additional features.
            </p>
          </div>
          <div className='mt-12 ml-40 flex space-y-2 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4'>
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className='border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200'
              >
                <div className='p-6'>
                  <h2 className='text-lg leading-6 font-medium text-gray-900'>
                    {tier.name}
                  </h2>
                  <p className='mt-4 text-sm text-gray-500'>
                    {tier.description}
                  </p>
                  <p className='mt-8'>
                    <span className='text-4xl font-extrabold text-gray-900'>
                      ${tier.priceMonthly}
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    className='mt-8 block w-full bg-secondary border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center'
                  >
                    Buy {tier.name}
                  </a>
                </div>
                <div className='pt-6 pb-8 px-6'>
                  <h3 className='text-xs font-medium text-gray-900 tracking-wide uppercase'>
                    Whats included
                  </h3>
                  <ul role='list' className='mt-6 space-y-4'>
                    {tier.features.map((feature) => (
                      <li key={feature} className='flex space-x-3'>
                        <CheckIconSolid
                          className='flex-shrink-0 h-5 w-5 text-green-500'
                          aria-hidden='true'
                        />
                        <span className='text-sm text-gray-500'>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature list */}
        <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8'>
          <div className='max-w-3xl mx-auto text-center'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              All-in-one platform
            </h2>
            <p className='mt-4 text-lg text-gray-500'>
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla nec.
            </p>
          </div>
          <dl className='mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8'>
            {features.map((feature) => (
              <div key={feature.name} className='relative'>
                <dt>
                  <CheckIconOutline
                    className='absolute h-6 w-6 text-green-500'
                    aria-hidden='true'
                  />
                  <p className='ml-9 text-lg leading-6 font-medium text-gray-900'>
                    {feature.name}
                  </p>
                </dt>
                <dd className='mt-2 ml-9 flex text-base text-gray-500 lg:py-0 lg:pb-4'>
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className='bg-secondary'>
        <Partnership />
      </div>

      <div className='max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8'>
        <div className='lg:grid lg:grid-cols-3 lg:gap-8'>
          <div className='space-y-4'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              Frequently asked questions
            </h2>
            <p className='text-lg text-gray-500'>
              Can’t find the answer you’re looking for? Reach out to our{' '}
              <a href='#' className='font-medium text-secondary'>
                customer support
              </a>{' '}
              team.
            </p>
          </div>
          <div className='mt-12 lg:mt-0 lg:col-span-2'>
            <dl className='space-y-12'>
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className='text-lg leading-6 font-medium text-gray-900'>
                    {faq.question}
                  </dt>
                  <dd className='mt-2 text-base text-gray-500'>{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
      <Impresum />

      {/* Footer 4-column with newsletter and localization dark */}
    </div>
  );
}
