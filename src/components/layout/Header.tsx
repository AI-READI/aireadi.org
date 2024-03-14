/* eslint-disable @next/next/no-img-element */
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import { Fragment, useState } from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

const goals = [
  {
    name: 'Project Wide Milestones',
    description: 'A high-level overview of the project goals and objectives.',
    href: '#',
    icon: 'ic:baseline-bar-chart',
  },
  {
    name: 'Data Collection',
    description: 'Policy and procedures for data collection and management.',
    href: '#',
    icon: 'ic:baseline-chat',
  },
  {
    name: 'Considerations for Releasing Data',
    description: 'Guidelines for releasing data to the public.',
    href: '#',
    icon: 'ic:baseline-lock',
  },
  {
    name: 'Capacity Building Initiatives',
    description: 'Training and resources for capacity building.',
    href: '#',
    icon: 'ic:baseline-extension',
  },
];

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: 'ic:baseline-play-arrow' },
  { name: 'Contact sales', href: '#', icon: 'ic:baseline-phone' },
];

const regularLinks = [
  {
    href: '/team',
    title: 'Team',
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
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
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
        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
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
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl  bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='grid grid-cols-7 divide-x divide-gray-900/5'>
                  <div className='col-span-4 p-4'>
                    {goals.map((item) => (
                      <div
                        key={item.name}
                        className='group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 transition-all hover:bg-gray-50'
                      >
                        <div className='flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 transition-all group-hover:bg-white'>
                          <Icon icon={item.icon} />
                        </div>
                        <div className='flex-auto'>
                          <a
                            href={item.href}
                            className='block font-semibold text-gray-900'
                          >
                            {item.name}
                            <span className='absolute inset-0' />
                          </a>
                          <p className='mt-1 text-gray-600'>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className='col-span-3 p-4'>
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100'
                      >
                        <Icon icon={item.icon} />
                        {item.name}
                      </a>
                    ))}
                  </div>
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
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <img
                className='h-8 w-auto'
                src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
                alt=''
              />
            </a>
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
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Product
                        <Icon icon='ic:round-keyboard-arrow-down' />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {[...goals, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as='a'
                            href={item.href}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Features
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Marketplace
                </a>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Company
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='#'
                  className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
