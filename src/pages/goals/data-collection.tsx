/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import PrimaryLink from '@/components/links/PrimaryLink';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

const EthicsModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Data Collection' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Data Collection'
          image='/images/modules/data-hero.svg'
          tagline='Develop and implement a protocol that will generate a diverse and ethically-sourced dataset for the study of type 2 diabetes.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-8 text-left md:grid-cols-2 lg:py-16'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Multimodal Data from Diverse Participants
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The AI-READI project aims to collect data across diverse
                participants. The data will be balanced across sexes (equal
                number of male and female), ethnicities/races (equal number of
                Asian, Black, Hispanic, and White), and health states (equal
                number of non-diabetic, diet-controlled diabetic, oral
                medication-controlled diabetic, and insulin-controlled
                diabetic).
              </p>
            </div>
            <div className=''>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                To achieve that, data is being collected at three study sites:
                University of Alabama at Birmingham (UAB), University of
                California San Diego (UCSD), and University of Washington (UW).
                The same study protocol is followed at each site where a wide
                range of data types are collected from each participant
                including survey responses, vision assessment results, retinal
                imaging, and activity monitoring data. Extraction of electronic
                health records (EHRs) is also planned.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-sky-50 py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Management and Processing of Data
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                We are developing a novel platform called FAIRhub that is aimed
                at facilitating the management and sharing of data being
                collected in the project. The study management component of
                FAIRhub (
                <PrimaryLink href='https://app.fairhub.io'>
                  app.fairhub.io
                </PrimaryLink>
                ) enables the data collecting sites to upload data on the go as
                it is being collected and to track data collection through
                dashboards. The platform also includes automation tools to
                process data and extract metadata according to our selected
                standards for making the data AI-ready (see Data Sharing page).
              </p>

              <div>
                <ButtonLink href='/goals/data-sharing' variant='outline'>
                  View our data sharing standards
                </ButtonLink>
              </div>
            </div>
            <div className='flex w-full items-center justify-center px-5 py-5'>
              <img
                className='rounded-lg'
                src='https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='mockup'
              />
            </div>
          </div>
        </section>

        <ModuleMembers Team={TeamMembers} />
      </main>
    </Layout>
  </>
);

export const getStaticProps = async () => {
  const TeamMembers = await ModuleMembersFilter('data-collection');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default EthicsModule;
