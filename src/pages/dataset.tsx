/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import Viz from '@/components/Viz';

const Dataset: React.FC = () => {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='' />

        <main>
          <SkipNavContent />

          <section className='mx-auto grid max-w-screen-xl py-8 font-primary lg:grid-cols-12 lg:gap-8 xl:gap-0'>
            <div className='mx-auto place-self-center px-6 py-2 lg:col-span-9 xl:px-0'>
              <h1 className='relative pb-4 text-4xl font-black sm:text-5xl'>
                About
              </h1>

              <p className='relative pb-5 text-xl font-normal sm:text-2xl'>
                The AI-READI dataset is accessible from FAIRhub at fairhub.io.
                The dataset's landing page on FAIRhub contains various
                information about the dataset. Additional details are available
                in the dataset documentation at docs.aireadi.org
              </p>

              <div className='relative flex w-max flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0'>
                <ButtonLink
                  href='https://fairhub.io/datasets/2'
                  variant='primary'
                >
                  Access our data
                </ButtonLink>
                <ButtonLink
                  href='https://docs.aireadi.org'
                  variant='outline'
                  // className='bg-stone-100'
                >
                  See our documentation
                </ButtonLink>
              </div>
            </div>
          </section>

          <section className='pb-16 pt-4 bg-slate-50'>
            <div className='px-8'>
              <div className='m-2 mx-auto max-w-screen-xl rounded-lg p-4 text-center'>
                <h1 className='mb-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Dataset snapshot
                </h1>
              </div>

              <Viz />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Dataset;
