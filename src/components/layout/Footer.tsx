/* eslint-disable @next/next/no-img-element */
import { Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { AiFillGithub } from 'react-icons/ai';

const footerLinks = [
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

  {
    title: 'Resources',
    links: [
      // {
      //   title: 'Study',
      //   href: '/study',
      // },
      {
        title: 'Publications',
        href: '/publications',
      },
      {
        title: 'GitHub',
        href: 'https://github.com/AI-READI',
      },
      {
        href: '/blog',
        title: 'Blog',
      },
      {
        href: '/scholars',
        title: 'Scholars',
      },
      {
        href: '/faq',
        title: 'Frequently Asked Questions',
      },
      // {
      //   title: 'Components',
      //   href: '/components',
      // },
      {
        title: 'Contact Us',
        href: '/contact',
      },
    ],
  },

  {
    title: 'Goals',
    links: [
      { href: '/goals/data-collection', title: 'Data Collection' },
      { href: '/goals/data-sharing', title: 'Data Sharing' },
      { href: '/goals/community-engagement', title: 'Community Engagement' },
      { href: '/goals/capacity-building', title: 'Capacity Building' },
      { href: '/goals/team-science', title: 'Advancing Team Science' },
      {
        href: '/goals/american-indian-engagement',
        title: 'American Indian Engagement',
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='bg-slate-100'>
      <div className='mx-auto max-w-screen-xl p-4 sm:p-6'>
        <div className='md:flex md:justify-between md:space-x-12'>
          <div className='mb-6 flex flex-col md:mb-0 md:max-w-md lg:max-w-xl'>
            <a href='https://aireadi.org/' className='flex items-center'>
              <img
                className='mr-3 h-16'
                src='https://fairdataihub.org/images/hero/aireadi-logo.png'
                alt='ai-readi logo'
              />
              <span className='self-center whitespace-nowrap text-5xl font-bold text-sky-900'>
                AI-READI
              </span>
            </a>
            <span className='pb-2 pt-3 text-lg font-semibold text-sky-900'>
              Artificial Intelligence Ready and Equitable Atlas for Diabetes
              Insights
            </span>

            <Divider orientation='horizontal' />

            <div className='flex flex-col pt-6'>
              <div className='flex flex-col justify-start'>
                <p className='pt-2 text-sm font-medium text-sky-900'>
                  This project is funded by the NIH under award number
                  1OT2OD032644. The content on this website is solely the
                  responsibility of the authors and does not necessarily
                  represent the official views of the NIH.
                </p>
                <img
                  src='https://github.com/AI-READI/Bridge2AI-logo/blob/main/logo-transparent.png?raw=true'
                  className='h-auto w-[130px]'
                  alt='FlowBite Logo'
                />
              </div>
            </div>

            <Divider orientation='horizontal' className='py-4 md:hidden' />
          </div>

          <div className='grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6'>
            {footerLinks.map((footerLink) => (
              <div key={footerLink.title} className='w-auto'>
                <h3 className='mb-3 text-xl font-semibold text-slate-800'>
                  {footerLink.title}
                </h3>
                <ul className='mt-2 space-y-2'>
                  {footerLink.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} passHref>
                        <span className='text-base font-medium text-sky-800 transition-all hover:text-slate-500'>
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

        <hr className='my-6 border-slate-300 sm:mx-auto lg:my-8' />

        <div className='flex items-center justify-between'>
          <span className='text-base font-medium text-slate-800 sm:text-center'>
            © {new Date().getFullYear()} {` `}
            <a href='https://aireadi.org/' className='hover:underline'>
              AI-READI™
            </a>
            . All Rights Reserved.
          </span>

          <div className='mt-0 flex justify-center space-x-6'>
            <a
              href='https://github.com/AI-READI'
              className='text-sky-700 hover:text-sky-900'
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
