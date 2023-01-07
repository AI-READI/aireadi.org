/* eslint-disable @next/next/no-img-element */
import { Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const footerLinks = [
  {
    title: 'Modules',
    links: [
      {
        title: 'Ethics',
        href: '/ethics',
      },
      {
        title: 'Teaming',
        href: '/teaming',
      },
      {
        title: 'Standards',
        href: '/standards',
      },
      {
        title: 'Data',
        href: '/data',
      },
      {
        title: 'Tools',
        href: '/tools',
      },
      {
        title: 'Skills',
        href: '/skills',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        title: 'Study',
        href: '/study',
      },
      {
        title: 'Resources',
        href: '/resources',
      },
      {
        title: 'Publications',
        href: '/publications',
      },
      {
        title: 'GitHub',
        href: '/components',
      },
      {
        title: 'Contact Us',
        href: '/contact',
      },
    ],
  },

  {
    title: 'Legal',
    links: [
      {
        title: 'Privacy Policy',
        href: '/privacy',
      },

      {
        title: 'Cookie Policy',
        href: '/cookies',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className=' bg-sky-600 '>
      <div className='mx-auto max-w-screen-xl  p-4 sm:p-6'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 flex max-w-xl flex-col md:mb-0'>
            <a href='https://aireadi.org/' className='flex items-center'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='mr-3 h-8'
                alt='FlowBite Logo'
              />
              <span className='self-center whitespace-nowrap text-4xl font-bold text-white'>
                AI-READI
              </span>
            </a>
            <span className='pt-3 pb-2 text-lg font-semibold text-white'>
              Artificial Intelligence Ready and Equitable Atlas for Diabetes
              Insights
            </span>

            <Divider orientation='horizontal' />

            <p className='pt-2 text-sm font-medium text-slate-100'>
              This project is funded by the NIH under award number 1OT2OD032644.
              <br />
              The content is solely the responsibility of the authors and does
              not necessarily represent the official views of the NIH.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
            {footerLinks.map((footerLink) => (
              <div key={footerLink.title}>
                <h3 className='mb-3 text-xl font-semibold text-blue-50 '>
                  {footerLink.title}
                </h3>
                <ul className='mt-2 space-y-2'>
                  {footerLink.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} passHref>
                        <span className='text-lg font-medium text-gray-50 transition-all hover:text-gray-300'>
                          {link.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className='my-6 border-gray-200  sm:mx-auto lg:my-8' />

        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-base font-medium text-white  sm:text-center'>
            © {new Date().getFullYear()} {` `}
            <a href='https://aireadi.org/' className='hover:underline'>
              AI-READI™
            </a>
            . All Rights Reserved.
          </span>
          <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>
            <a
              href='https://github.com/AI-READI'
              className='text-sky-50 hover:text-slate-300'
            >
              <AiFillGithub size={30} />
              <span className='sr-only'>GitHub account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
