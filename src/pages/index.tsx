/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import Button from '@/components/buttons/Button';
import FeatureList from '@/components/content/FeatureList';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <main>
          <SkipNavContent />

          <section
            className={`relative flex h-[60vh] w-full items-center justify-center text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-home-hero-image before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[0.4] before:content-[''] md:h-[40vh]`}
          >
            <div className='mx-auto grid max-w-screen-2xl px-6 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
              <div className='mr-auto place-self-center lg:col-span-8'>
                <h1 className='relative pb-5 text-4xl font-black sm:text-5xl md:text-6xl'>
                  Artificial Intelligence Ready and Equitable Atlas for Diabetes
                  Insights (AI-READI)
                </h1>

                <p className='relative pb-5 text-xl font-medium sm:text-2xl'>
                  Generating a flagship AI-ready and ethically-sourced dataset
                  to support future AI-driven discoveries in diabetes
                </p>

                <div className='relative flex space-x-4'>
                  <ButtonLink href='/study' variant='primary'>
                    Enroll in the study
                  </ButtonLink>
                  <ButtonLink
                    href='/mentorship'
                    variant='outline'
                    className='bg-slate-100'
                  >
                    Join our mentorship program
                  </ButtonLink>
                  <ButtonLink href='/data' variant='dark'>
                    View our data
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-sky-100/50'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center py-8 px-4 text-gray-500 sm:text-lg lg:py-16 lg:px-6'>
              <h2 className='mb-5 text-center text-4xl font-bold tracking-tight text-gray-900 md:text-5xl'>
                Generating data, best practices, and tools to boost future
                AI-driven research in diabetes
              </h2>
              <p className='mb-4 text-center font-normal'>
                AI-READI is one of the data generation projects funded by the
                National Institutes of Health (NIH)'s Bridge2AI Program. The
                AI-READI project seeks to create and share a flagship
                ethically-sourced dataset of type 2 diabetes mellitus (T2DM)
                that is agnostic to existing classification criteria or biases.
                The data will be optimized for future artificial
                intelligence/machine learning (AI/ML) analysis that could
                provide critical insights into T2DM and especially shade light
                on the salutogenic pathways from diabetes to return to health.
              </p>

              <div className='py-4'>
                <Button>Learn more about Bridge2AI</Button>
              </div>
            </div>
          </section>

          <section className='flex justify-center'>
            <div className=' flex max-w-screen-xl flex-col items-center justify-between px-4 py-8 md:py-16 lg:flex-row'>
              <div className='max-w-2xl px-5'>
                <h1 className='mb-4 text-5xl font-bold tracking-tight'>
                  Ethical, FAIR, AI-ready data sharing
                </h1>
                <p className='mb-6 text-gray-700 sm:mb-8 sm:text-xl md:text-lg'>
                  The resulting dataset will be curated and shared following
                  ethical and FAIR (Findable, Accessible, Interoperable, and
                  Reusable) principles such that it is ready for future
                  AI/ML-driven analysis. The data will be shared periodically
                  through our dedicated web platform called fairhub.io. We will
                  aim to make as much of the data as possible openly available
                  to maximize discoveries.
                </p>

                <div className='relative flex space-x-4'>
                  <Button variant='outline'> Learn more </Button>
                </div>
              </div>
              <div className='px-5 md:mt-0'>
                <img
                  className='rounded-lg'
                  src='https://images.unsplash.com/photo-1528553688096-8e0735356dae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2325&q=80'
                  alt='mockup'
                />
              </div>
            </div>
          </section>

          <section className='bg-white'>
            <div className='mx-auto max-w-screen-xl items-center gap-16 py-8 px-4 lg:grid lg:grid-cols-2 lg:py-16 lg:px-6'>
              <div className='font-normal text-gray-500 sm:text-lg'>
                <h2 className='mb-4 text-4xl font-bold tracking-tight text-gray-900 '>
                  Tools and best practices to help future data generation
                  project
                </h2>

                <p className='mb-4'>
                  We will develop and openly share tools, standards, and
                  guidelines so that future data generation projects can follow
                  our approach for sharing ethical, FAIR, and AI-ready datasets.
                </p>

                <div className='relative flex space-x-4'>
                  <Button variant='outline'>
                    Learn more about our tools and guidelines
                  </Button>
                </div>
              </div>
              <div className='mt-8 grid grid-cols-2 gap-4'>
                <img
                  className='w-full rounded-lg'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
                  alt='office content 1'
                />
                <img
                  className='mt-4 w-full rounded-lg lg:mt-10'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
                  alt='office content 2'
                />
              </div>
            </div>
          </section>

          <section className='flex justify-center'>
            <div className=' flex max-w-screen-xl flex-col-reverse items-center justify-between px-4 py-8 md:py-16 lg:flex-row-reverse'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-5xl font-bold tracking-tight'>
                  Community engagement
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-8'>
                  Community members will be engaged along the way to ensure
                  their suggestions and concerns regarding data collection,
                  management, and sharing are addressed.
                </p>

                <div className='relative flex space-x-4'>
                  <Button variant='outline'> Learn more </Button>
                </div>
              </div>
              <div className='px-5 py-5 md:mt-0'>
                <img
                  className='rounded-lg'
                  src='https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                  alt='mockup'
                />
              </div>
            </div>
          </section>

          <section className='bg-white '>
            <div className='mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6'>
              <h1 className='mb-4 text-center text-5xl font-bold tracking-tight'>
                Snapshot of the AI-READI project
              </h1>

              <p className='mb-4 text-center text-2xl font-medium text-slate-600'>
                Some key numbers from the project
              </p>

              <div className='flex flex-col space-x-4 pt-8 text-left md:flex-row md:divide-x-2'>
                {StatsList.map((stat) => (
                  <div
                    key={stat.heading}
                    className='flex flex-col items-center justify-center space-y-3 p-3 text-center'
                  >
                    <dt className='text-5xl font-bold text-sky-600'>
                      {stat.heading}
                    </dt>

                    <dd className=' text-lg font-medium text-slate-700'>
                      {stat.text}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <FeatureList />
        </main>
      </Layout>
    </>
  );
}

const StatsList = [
  {
    heading: '4,000',
    text: 'Participants anticipated in the study',
  },
  {
    heading: '15+',
    text: 'Data types to be collected (vitals, electrocardiogram, etc.)',
  },
  {
    heading: '8',
    text: `Research institutions involved`,
  },
  {
    heading: '50+',
    text: 'Team members',
  },
];
