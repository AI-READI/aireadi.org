/* eslint-disable @next/next/no-img-element */
import { Divider } from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';

const Modules = [
  {
    title: 'Data Acquisition',
    image:
      'https://images.unsplash.com/photo-1673300502682-4c0550c18b01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline: 'Collecting data across multiple sites',
    href: '/modules/data',
  },
  {
    title: 'Ethical and Trustworthy Artificial Intelligence',
    image:
      'https://images.unsplash.com/photo-1673286900865-ab88ead9285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline: 'Establishing ethical guidelines for sharing AI-ready datasets',
    href: '/modules/ethics',
  },
  {
    title: 'Standards',
    image:
      'https://images.unsplash.com/photo-1673209378872-a36ba431f248?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline:
      'Establishing standards for preparing and sharing AI-ready datasets',
    href: '/modules/standards',
  },
  {
    title: 'Teaming',
    image:
      'https://images.unsplash.com/photo-1673270696103-5063483d0a33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1796&q=80',
    tagline: 'Bringing together multidisciplinary teams',
    href: '/modules/teaming',
  },
  {
    title: 'Tools',
    image:
      'https://images.unsplash.com/photo-1673322880779-9c257a0cae44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline:
      'Developing tools and software for managing, curating, and sharing AI-ready datasets',
    href: '/modules/tools',
  },
  {
    title: 'Skills & Workforce Development',
    image:
      'https://images.unsplash.com/photo-1672888881666-2482c288d001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline: 'Developing a diverse AI/ML-biomedical research workforce',
    href: '/modules/skills',
  },
  {
    title: 'Plan for Enhancing Diverse Perspectives',
    image:
      'https://images.unsplash.com/photo-1672707222128-2eb88b6646c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    tagline: 'Creating a plan for enhancing diverse perspectives',
    href: '/modules/pedp',
  },
  {
    title: 'Administration',
    image:
      'https://images.unsplash.com/photo-1672935347581-ad3363263d56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline: 'Managing the project',
  },
];

export default function HomePage() {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />

        <main>
          <SkipNavContent />

          <HeroCroppedImage
            title='AI-READI Modules'
            image='https://images.unsplash.com/photo-1673107287387-065fd7b9e758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80'
            tagline='The project team is structured into six modules, each leading a key aspect.'
            showButtons={false}
          />

          <section className='bg-white'>
            <div className='mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6'>
              {Modules.map((module) => (
                <div
                  className='mb-6 flex justify-between space-x-5 rounded-lg border'
                  key={module.title}
                >
                  <img
                    src={module.image}
                    className='mr-4 w-4/12 '
                    alt='mockup'
                  />

                  <div className='flex w-8/12 flex-col justify-center px-2 text-left'>
                    <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                      {module.title}
                    </h2>

                    <Divider className='my-2' />

                    <p className='mb-6 text-lg font-normal text-gray-700 sm:mb-4'>
                      {module.tagline}
                    </p>

                    {module.href && (
                      <div className='flex justify-start'>
                        <ButtonLink href={module.href} variant='primary'>
                          Learn more about the {module.title} module
                        </ButtonLink>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
