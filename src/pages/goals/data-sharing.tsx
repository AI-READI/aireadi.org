/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import Layout from '@/components/layout/Layout';
import PrimaryLink from '@/components/links/PrimaryLink';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

const EthicsModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Data Sharing' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Data Sharing'
          image='https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          tagline='Managing the sharing of data for the AI-READI project'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 pt-8 text-left md:grid-cols-2 lg:pt-16'>
            <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
              Data Standardization
            </h2>
          </div>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 pb-8 text-left md:grid-cols-2 lg:pb-16'>
            <div>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                We aim to share the AI-READI dataset such that it is easily
                reusable by anyone, especially for developing artificial
                intelligence (AI) and machine learning (ML) models. To achieve
                that, we are formatting our data according to existing standards
                or establishing new ones when there is a gap. Specifically, we
                are developing the{' '}
                <PrimaryLink href='https://cds-specification.readthedocs.io/'>
                  Clinical Dataset Structure (CDS)
                </PrimaryLink>
                , a standard for organizing multimodal clinical research data
                and metadata consistently, and following it to organize the
                AI-READI dataset.
              </p>
            </div>
            <div className=''>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                Additionally, each data modality is formatted according to
                existing standard formats such as the{' '}
                <PrimaryLink href='https://www.ohdsi.org/data-standardization/'>
                  Observational Medical Outcomes Partnership (OMOP)
                </PrimaryLink>{' '}
                Common Data Model (CDM) for clinical data and the{' '}
                <PrimaryLink href='https://dicom.nema.org/'>
                  Digital Imaging and Communications in Medicine (DICOM)
                </PrimaryLink>{' '}
                format for retinal imaging data. We are also working with the
                communities managing these standards to extend them when needed
                for our data.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-sky-50 py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                New Data Usage License
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                We have established a{' '}
                <PrimaryLink href='https://doi.org/10.5281/zenodo.10642459'>
                  new data usage license
                </PrimaryLink>{' '}
                for the AI-READI dataset. The license terms were specifically
                tailored to enable reuse of the AI-READI dataset (and other
                clinical datasets) for commercial or research purposes while
                putting strong requirements around data usage, security, and
                secondary sharing to protect study participants, especially when
                data is reused for AI/ML related applications. The license will
                continue to evolve as we receive feedback from the community
                based on the release of our pilot dataset (see below).
              </p>
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

        <section className='py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Data Use Agreement
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                At each release of the AI-READI dataset, two sets will be made
                available: a public access and a controlled access set. The
                public set will be stripped of Protected Health Information
                (PHI) as well as information related to the sex and
                race/ethnicity of the participants. It will be accessible after
                completing a few steps through our data portal (see below) such
                as logging in, providing the research purpose, and attesting to
                the proper usage of the data. The controlled set of the dataset
                will also be accessible through our data portal but will require
                additional steps for accessing. We will develop specific
                guidelines for accessing and using the controlled set of the
                dataset. We will draw on best practices from other large data
                programs that have controlled access data policies such as the
                All of Us Research Program.
              </p>
            </div>
            <div className='flex w-full items-center justify-center px-5 py-5'>
              <img
                className='rounded-lg'
                src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='mockup'
              />
            </div>
          </div>
        </section>

        <section className='bg-slate-50 py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Data Access Portal
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                We are developing a novel platform called FAIRhub for managing
                and sharing the data. It will contain two components: a study
                management platform (app.fairhub.io) for managing data and a
                data portal (fairhub.io) where data will be accessible to others
                after it is shared from the study management platform. The data
                portal is designed to make the data Findable and Accessible. The
                public set of the AI-READI pilot dataset is already available
                through FAIRhub at{' '}
                <PrimaryLink href='https://doi.org/10.60775/fairhub.2'>
                  https://doi.org/10.60775/fairhub.2
                </PrimaryLink>
                .
              </p>
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
  const TeamMembers = await ModuleMembersFilter('data-sharing');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default EthicsModule;
