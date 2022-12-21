import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import Image from 'next/image';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
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
              <div className='mx-auto mb-6 max-w-screen-sm lg:mb-8'>
                <h2 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                  Module Members
                </h2>

                <p className='mb-4 text-xl font-medium text-slate-600'>
                  Meet the people behind the scenes who make it all happen.
                </p>
              </div>

              <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8'>
                {TeamMembers.map((member) =>
                  member.modules.includes('skills') ? (
                    <UnstyledLink href={`/team#${member.id}`} key={member.id}>
                      <div
                        className='h-full cursor-pointer rounded-lg border-solid bg-slate-100 px-4 py-4 transition-all hover:bg-sky-100'
                        key={member.name}
                      >
                        <div className='relative mx-auto mb-2 min-h-[350px] w-full'>
                          <Image
                            src={member.image}
                            alt={member.name + ' image'}
                            fill
                            className='h-full w-full rounded-lg object-cover '
                            sizes='(max-width: 768px) 100vw, 50vw'
                          />
                        </div>

                        <h3 className='pt-4 text-2xl font-extrabold text-slate-800'>
                          {member.name}
                        </h3>

                        <p className='pb-4 pt-1 text-base font-semibold text-slate-600'>
                          {member.role}
                        </p>
                      </div>
                    </UnstyledLink>
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
