/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import ResourcesItemIcon from '@/components/icons/ResourcesItemIcon';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

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

const EthicsModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Capacity Building' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Capacity Building'
          image='https://ucarecdn.com/43f384e1-ec90-410f-b3b5-7d72f3eda492/'
          tagline='Training and expanding the AI/ML-biomedical research workforce'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-sky-50 py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Monthly Speaker Series
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                We are hosting a monthly speaker series related to the ethical,
                social and legal implications of the AI-READI project and any
                relevant issues that arise during the project implementation.
              </p>

              <div>
                <ButtonLink
                  href='/blog/category/Virtual%20Monthly%20Speaker%20Series'
                  variant='outline'
                >
                  View the virtual series
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

        <section className='bg-slate-50 py-16'>
          <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'>
            <div className='px-5 lg:max-w-2xl'>
              <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                Internship Program
              </h1>
              <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                A talented group of students were selected to participate in an
                year-long structured internship program. The program is designed
                to facilitate exposure to skills in AI and data science for
                post-baccalaureate students, medical students, pre-doctoral
                students, postdoctoral fellows, and other health care
                professionals wanting to gain AI expertise.
              </p>

              <div>
                <ButtonLink
                  href='https://shileyeye.ucsd.edu/research/ai_readi'
                  variant='outline'
                >
                  Learn more about the program
                </ButtonLink>
              </div>
            </div>
            <div className='flex w-full items-center justify-center px-5 py-5'>
              <img
                className='rounded-lg'
                src='https://ucarecdn.com/b6521517-979e-4ae4-baff-69ade647a982/'
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

export const getStaticProps = async () => {
  const TeamMembers = await ModuleMembersFilter('capacity-building');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default EthicsModule;
