/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineDribbble,
} from 'react-icons/ai';

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
        title: 'Blog',
        href: '/blog',
      },
      {
        title: 'Partnerships',
        href: '/partnerships',
      },
      {
        title: 'Case studies',
        href: '/case-studies',
      },
      {
        title: 'Media Assets',
        href: '/media-assets',
      },
    ],
  },
  {
    title: 'Product',
    links: [
      {
        title: 'How it works',
        href: '/how-it-works',
      },
      {
        title: 'Pricing',
        href: '/pricing',
      },
      {
        title: 'Use Cases',
        href: '/use-cases',
      },
      {
        title: 'Integrations',
        href: '/integrations',
      },
      {
        title: 'SAML SSO',
        href: '/saml-sso',
      },
    ],
  },
  {
    title: 'Legal',
    links: [
      {
        title: 'Terms of Service',
        href: '/terms',
      },
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
    <footer className=' bg-indigo-700 '>
      <div className='mx-auto max-w-screen-lg  p-4 sm:p-6'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <a href='https://aireadi.org/' className='flex items-center'>
              <img
                src='https://flowbite.com/docs/images/logo.svg'
                className='mr-3 h-8'
                alt='FlowBite Logo'
              />
              <span className='self-center whitespace-nowrap text-2xl font-semibold text-white'>
                AI-READI
              </span>
            </a>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-6'>
            {footerLinks.map((footerLink) => (
              <div key={footerLink.title}>
                <h3 className='mb-3 text-lg font-semibold text-blue-50 '>
                  {footerLink.title}
                </h3>
                <ul className='mt-2 space-y-2'>
                  {footerLink.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} passHref>
                        <span className='text-base font-medium text-gray-50 transition-all hover:text-gray-300'>
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
            <a href='#' className='text-sky-50 hover:text-gray-400 '>
              <AiFillFacebook size={30} />
              <span className='sr-only'>Facebook page</span>
            </a>
            <a href='#' className='text-sky-50 hover:text-gray-400 '>
              <AiFillInstagram size={30} />
              <span className='sr-only'>Instagram page</span>
            </a>
            <a href='#' className='text-sky-50 hover:text-gray-400'>
              <AiFillTwitterSquare size={30} />
              <span className='sr-only'>Twitter page</span>
            </a>
            <a href='#' className='text-sky-50 hover:text-gray-400'>
              <AiFillGithub size={30} />
              <span className='sr-only'>GitHub account</span>
            </a>
            <a href='#' className='text-sky-50 hover:text-gray-400'>
              <AiOutlineDribbble size={30} />
              <span className='sr-only'>Dribble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
