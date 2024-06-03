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
    image: '/images/modules/data-hero.svg',
    tagline:
      'Develop and implement a protocol that will generate a diverse and ethically-sourced dataset for the study of type 2 diabetes',
    href: '/modules/data',
  },
  {
    title: 'Ethical and Trustworthy Artificial Intelligence',
    image:
      'https://images.unsplash.com/photo-1503551723145-6c040742065b-v2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline: 'Establishing ethical guidelines for sharing AI-ready datasets',
    href: '/modules/ethics',
  },
  {
    title: 'Plan for Enhancing Diverse Perspectives',
    image: '/images/modules/pedp-hero.jpeg',
    tagline:
      'A cross disciplinary PEDP Committee focused on better understanding and finding tangible, equitable strategies to enhance diversity in the realm of AI/ML and health.',
    href: '/modules/pedp',
  },
  {
    title: 'Skills & Workforce Development',
    image:
      'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline: 'Developing a diverse AI/ML-biomedical research workforce.',
    href: '/modules/skills',
  },
  {
    title: 'Standards',
    image:
      'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
    tagline:
      'Establishing standards for preparing and sharing AI-ready datasets',
    href: '/modules/standards',
  },
  {
    title: 'Teaming',
    image:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline:
      'Applying and advancing team science while transforming our AI-READI project from a multidisciplinary endeavor into a high-performing, interdisciplinary collaboration.',
    href: '/modules/teaming',
  },
  {
    title: 'Tools',
    image:
      'https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80',
    tagline:
      'Developing tools and software for managing, curating, and sharing AI-ready datasets',
    href: '/modules/tools',
  },
  {
    title: 'Administration',
    image:
      'https://images.unsplash.com/photo-1672935347581-ad3363263d56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    tagline: 'Managing the project and its resources.',
  },
];

export default function HomePage() {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='All Modules' />

        <main>
          <SkipNavContent />

          <HeroCroppedImage
            title='AI-READI Modules'
            image='https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
            tagline='The project team is structured into several modules, each leading a key aspect. A list of the modules and links to their pages is below.'
            showButtons={false}
          />

          <section className='bg-white'>
            <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16'>
              {Modules.map((module) => (
                <div
                  className='mb-6 flex flex-col justify-between rounded-lg border md:flex-row md:space-x-5'
                  key={module.title}
                >
                  <img
                    src={module.image}
                    className='mb-4 w-full md:mb-0 md:mr-4 md:w-4/12'
                    alt='mockup'
                  />

                  <div className='flex w-full flex-col justify-center px-2 text-left md:w-8/12 md:items-start'>
                    <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
                      {module.title}
                    </h2>

                    <Divider className='my-2' />

                    <p className='mb-3 text-lg font-normal text-gray-700 sm:mb-4 md:mb-6'>
                      {module.tagline}
                    </p>

                    {module.href && (
                      <div className='mb-3 flex justify-center text-center md:justify-start md:text-left'>
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
