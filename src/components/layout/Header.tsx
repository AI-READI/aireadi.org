/* eslint-disable @next/next/no-img-element */
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import clsx from 'clsx';
import { Fragment, useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const goals = [
  {
    name: 'Data Collection',
    description: 'Collecting data from various sources.',
    icon: 'ic:baseline-chat',
    href: '/goals/data-collection',
  },
  {
    name: 'Data Sharing',
    description: 'Sharing data with researchers and the public.',
    icon: 'ic:baseline-extension',
    href: '/goals/data-sharing',
  },
  {
    name: 'Community Engagement',
    description: 'Engaging with the community.',
    icon: 'ic:round-people-alt',
    href: '/goals/community-engagement',
  },
  {
    name: 'Capacity Building',
    description: 'Building capacity for data science research.',
    icon: 'ic:baseline-lock',
    href: '/goals/capacity-building',
  },
  {
    name: 'Advancing Team Science',
    description: 'Promoting team science.',
    icon: 'ic:baseline-bar-chart',
    href: '/goals/team-science',
  },
  {
    name: 'American Indian Engagement',
    description: 'Engaging with American Indian communities.',
    icon: 'fluent:people-16-filled',
    href: '/goals/american-indian-engagement',
  },
];

const regularLinks = [
  {
    href: '/team',
    title: 'Team',
  },
  {
    href: '/events',
    title: 'Events',
  },
  {
    href: '/publications',
    title: 'Publications',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '/contact',
    title: 'Contact Us',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 z-10  w-full border-b bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <UnstyledLink
            href='/'
            className='pl-3 text-lg font-bold transition-all hover:text-sky-500'
          >
            AI-READI
          </UnstyledLink>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Icon icon='ic:round-menu' />
          </button>
        </div>
        <Popover.Group className='hidden lg:flex lg:gap-x-6'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 font-semibold text-gray-800 transition-all hover:text-blue-400'>
              Goals
              <Icon
                icon='ic:round-keyboard-arrow-down'
                width={20}
                height={20}
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {goals.map((item) => (
                    <UnstyledLink
                      key={item.name}
                      href={item.href}
                      className={clsx(
                        'group relative my-2 flex w-full items-start gap-x-6 rounded-lg p-4 text-sm transition-all hover:bg-sky-50'
                      )}
                    >
                      <div
                        className={clsx(
                          'flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-sky-100 group-hover:bg-white group-hover:text-sky-500'
                        )}
                      >
                        <Icon icon={item.icon} width={20} />
                      </div>
                      <div className='flex-auto'>
                        <div className='block text-left font-semibold text-gray-900'>
                          {item.name}
                        </div>
                        <p className='mt-1 text-left text-gray-600'>
                          {item.description}
                        </p>
                      </div>
                    </UnstyledLink>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {regularLinks.map((link, index) => (
            <UnstyledLink
              key={index}
              href={link.href}
              className='font-semibold text-gray-800 transition-all hover:text-blue-400'
            >
              {link.title}
            </UnstyledLink>
          ))}
        </Popover.Group>
      </nav>

      {/* Mobile Menu */}

      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <UnstyledLink
              href='/'
              className='-m-1.5 p-1.5 text-lg font-bold transition-all hover:text-sky-500 '
            >
              AI-READI
            </UnstyledLink>

            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <Icon icon='ic:round-close' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Goals
                        <Icon icon='ic:round-keyboard-arrow-down' />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {goals.map((item) => (
                          <UnstyledLink
                            key={item.name}
                            href={item.href}
                            className='flex gap-x-2 rounded-lg py-2 pl-7 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </UnstyledLink>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                {regularLinks.map((link, index) => (
                  <UnstyledLink
                    key={index}
                    href={link.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {link.title}
                  </UnstyledLink>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
