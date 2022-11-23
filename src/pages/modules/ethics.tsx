/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import SideImage from '@/components/content/SideImage';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import TeamMembers from '~/data/team.json';

export default function HomePage() {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />

        <main>
          <SkipNavContent />

          <SideImage
            header='Creating AI-ready datasets for the future'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />

          <section className='bg-white '>
            <div className='mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6'>
              <div className='mx-auto mb-8 max-w-screen-sm lg:mb-16'>
                <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 '>
                  Module members
                </h2>
                <p className='font-light text-gray-500  sm:text-xl'>
                  Explore the whole collection of open-source web components and
                  elements built with the utility classes from Tailwind
                </p>
              </div>
              <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-16'>
                {TeamMembers.map((member) =>
                  member.modules.includes('ethics') ? (
                    <div
                      className='text-center text-gray-500 '
                      key={member.name}
                    >
                      <img
                        className='mx-auto mb-4 h-36 w-36 rounded-full'
                        src={member.image}
                        alt={member.name + ' image'}
                      />
                      <h3 className='mb-1 text-2xl font-bold tracking-tight text-gray-900 '>
                        <a href='#'>{member.name}</a>
                      </h3>
                      <p>{member.title}</p>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
