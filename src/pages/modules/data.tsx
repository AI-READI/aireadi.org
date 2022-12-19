/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
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

          <HeroCroppedImage
            title='Equitable, multimodal data collection'
            image='https://tinyurl.com/yeyjvptc'
            tagline='The project will aim to collect data from 4,000 participants. To ensure the data is population-representative, the 4,000 participants will be balanced for three factors: disease severity, race/ethnicity, and sex. Various data types will be collected from each participant, including vitals, electrocardiogram, glucose monitoring, physical activity, ophthalmic evaluation, etc.'
            showButtons
            primaryButton='Learn more about the study'
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
                  member.modules.includes('data') ? (
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
