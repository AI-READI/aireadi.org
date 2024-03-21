/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import ResourcesItemIcon from '@/components/icons/ResourcesItemIcon';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
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
          image='https://images.unsplash.com/photo-1710435389932-ca1bf85e3e45?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          tagline='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-sky-50 py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Data Standardization and Harmonization
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quod vitae esse quas sint praesentium repudiandae
                aliquid dolor maiores rerum dicta dolores officiis
                exercitationem sunt deleniti tempore voluptatem, omnis ullam.
              </p>
            </div>
            <div className='flex w-full items-center justify-center px-5 py-5'>
              <img
                className='rounded-lg'
                src='https://images.unsplash.com/photo-1710754414281-926e22cf96e9?q=80&w=2613&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='mockup'
              />
            </div>
          </div>
        </section>

        <section className='bg-white py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Public Data: License and Attestations
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quod vitae esse quas sint praesentium repudiandae
                aliquid dolor maiores rerum dicta dolores officiis
                exercitationem sunt deleniti tempore voluptatem, omnis ullam.
              </p>
            </div>
            <div className='flex w-full items-center justify-center px-5 py-5'>
              <img
                className='rounded-lg'
                src='https://images.unsplash.com/photo-1710744722644-2114b2624557?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='mockup'
              />
            </div>
          </div>
        </section>

        <section className='bg-slate-50 py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Controlled Data: Data Use Agreement
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quod vitae esse quas sint praesentium repudiandae
                aliquid dolor maiores rerum dicta dolores officiis
                exercitationem sunt deleniti tempore voluptatem, omnis ullam.
              </p>
            </div>
            <div className='flex w-full items-center justify-center px-5 py-5'>
              <img
                className='rounded-lg'
                src='https://images.unsplash.com/photo-1685028647245-aa3edbb61c45?q=80&w=2664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='mockup'
              />
            </div>
          </div>
        </section>

        <section className='bg-sky-50 py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Tools for ethically sourced and managed, FAIR, and AI-ready
                datasets
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus quod vitae esse quas sint praesentium repudiandae
                aliquid dolor maiores rerum dicta dolores officiis
                exercitationem sunt deleniti tempore voluptatem, omnis ullam.
              </p>
            </div>
            <div className='flex w-full items-center justify-center px-5 py-5'>
              <img
                className='rounded-lg'
                src='https://images.unsplash.com/photo-1710724267366-4f86badd3244?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='mockup'
              />
            </div>
          </div>
        </section>

        <section className='hidden bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-8 text-left md:grid-cols-2 lg:px-6 lg:py-16'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Multidisciplinary Team Science
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The goal of the ETAI module is to establish a culture of ethical
                inquiry throughout the data generation project team.
              </p>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                ETAI will have continuous interactions with the other five
                modules within AI-READI and with the Bridge2AI Center.
              </p>
            </div>
            <div>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The ETAI module is responsible for:
              </p>
              <ul className='mb-3 list-inside list-disc text-lg font-normal text-gray-700'>
                <li>
                  Developing an in-depth needs assessment of each module on
                  their understanding of the unique ethical, legal and social
                  implications (ELSIs) of big data research.
                </li>
                <li>
                  Delivering educational activities tailored for each module to
                  improve their grasp of ELSIs.
                </li>
                <li>
                  Developing Community Intercultural Partnership Councils;
                  Members will be asked to help to develop accessible informed
                  consent and patient recruitment communications, and to
                  identify barriers to participation that can be addressed in
                  the protocol.
                </li>
                <li>
                  Seeking ways to establish pathways for partnership with the
                  Native American tribes to identify facilitators and barriers
                  to data acquisition and usage.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='hidden bg-white'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
            <div className='mx-auto mb-6 max-w-screen-sm text-center lg:mb-8'>
              <h2 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Resources
              </h2>
            </div>

            <ul>
              {Resources.map((resource) => (
                <li
                  className='mb-8 flex items-start space-x-4'
                  key={resource.title}
                >
                  <ResourcesItemIcon type={resource.type} />
                  <div className='pt-2'>
                    <UnstyledLink
                      href={resource.link}
                      className='flex items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
                    >
                      <p className='text-xl font-medium'>{resource.title}</p>
                    </UnstyledLink>
                    <p className='pt-1 text-lg font-normal text-gray-700'>
                      {resource.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <ModuleMembers Team={TeamMembers} />
      </main>
    </Layout>
  </>
);

const Resources = [
  {
    title: 'Data Acquisition Module',
    description: 'A collection of resources to help you get started.',
    link: '/data',
    type: 'publication',
  },
  {
    title: 'Github',
    description: 'A collection of resources to help you get started.',
    link: '/data',
    type: 'github',
  },
];

export const getStaticProps = async () => {
  const TeamMembers = await ModuleMembersFilter('tools');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default EthicsModule;
