/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import ResourcesItemIcon from '@/components/icons/ResourcesItemIcon';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

const SkillsModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Skills & Workforce Development' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Skills & Workforce Development'
          image='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          tagline='Training and expanding the AI/ML-biomedical research workforce.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-8 text-left md:grid-cols-2 lg:px-6 lg:py-16'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Overview of the Skills & Workforce Development Module
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The overall objective of the AI-READI Skills and Workforce
                Development Module is to develop and deploy training and career
                development activities for individuals who will effectively
                contribute to translational AI research, particularly in the
                biomedical/clinical domain.
              </p>
            </div>
            <div>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                To achieve this objective, our module is engaged in the
                following aims:
              </p>
              <ul className='mb-3 list-inside list-disc text-lg font-normal text-gray-700'>
                <li>
                  Design and implement a structured, yearlong mentored research
                  internship program to facilitate exposure to skills in AI and
                  data science for post-baccalaureate students, medical
                  students, pre-doctoral students, postdoctoral fellows, and
                  other health care professionals wanting to gain AI expertise.
                </li>
                <li>
                  Deploy training and skills development activities for
                  researchers at all levels using the flagship datasets,
                  spanning ethics, tools, and standards.
                </li>
                <li>
                  Increase the range of perspectives by encouraging broad
                  exposure to AI-READI dataset from a variety of individuals.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='bg-white'>
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
        <section className='bg-sky-50'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
            <div className='mx-auto mb-6 max-w-screen-sm text-center lg:mb-8'>
              <h2 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Intern Orientation and Onboarding
              </h2>
            </div>

            <div className='mx-auto mb-16 flex max-w-screen-xl flex-col-reverse items-center gap-16 md:flex-col'>
              <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
                <img
                  className='rounded-lg'
                  src='https://ucarecdn.com/b6521517-979e-4ae4-baff-69ade647a982/'
                  alt='Photo of the UAB Callahan Eye Hospital'
                />

                <img
                  className='rounded-lg'
                  src='https://ucarecdn.com/43f384e1-ec90-410f-b3b5-7d72f3eda492/-/crop/16:9/bottom/'
                  alt='Photo of the UCSD Medical Center'
                />
                <img
                  className='rounded-lg'
                  src='https://ucarecdn.com/2b081802-f0a0-40b5-b333-b1438e89415e/'
                  alt='Photo of the UW Medicine building'
                />
              </div>
            </div>
            <p className='mb-6 text-lg font-normal text-gray-700 sm:mb-8'>
              Faculty at UC San Diego hosted an immersive AI training bootcamp
              for a group of interns participating in the AI-READI program.
              Program PIs{' '}
              <UnstyledLink
                href='/team#Sally-Baxter'
                className='w-max items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
              >
                Sally Baxter, MD
              </UnstyledLink>
              , and{' '}
              <UnstyledLink
                href='/team#Linda-Zangwill'
                className='w-max items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
              >
                Linda Zangwill, PhD
              </UnstyledLink>{' '}
              are overseeing the{' '}
              <UnstyledLink
                href='https://shileyeye.ucsd.edu/research/ai_readi'
                className='w-max items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
              >
                yearlong research internship program
              </UnstyledLink>
              , and the bootcamp itself was led by UC San Diego Halıcıoğlu Data
              Science Institute faculty{' '}
              <UnstyledLink
                href='/team#Virginia-de-Sa'
                className='w-max items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
              >
                Virginia de Sa, PhD
              </UnstyledLink>
              ,{' '}
              <UnstyledLink
                href='/team#Bradley-Voytek'
                className='w-max items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
              >
                Bradley Voytek, PhD
              </UnstyledLink>
              , and Gary Cottrell, PhD. <br />
              Bootcamp participants engaged in hands-on practice in programming
              languages and learning fundamentals regarding AI and machine
              learning. The participants included a wide range of individuals
              ranging from master's students to postdoctoral fellows coming from
              a broad range of disciplines.
            </p>
          </div>
        </section>
        <ModuleMembers Team={TeamMembers} />
      </main>
    </Layout>
  </>
);

const Resources = [
  {
    title: 'AI-READI Internship Program',
    description:
      'One component of AI-READI is the Skills and Workforce Development Module, which includes the development of a yearlong mentored research internship program aimed at expanding the future workforce at the intersection of data science/AI and the biomedical sciences and clinical research.',
    link: 'https://shileyeye.ucsd.edu/research/ai_readi',
    type: 'website',
  },
];

export const getStaticProps = async () => {
  const TeamMembers = await ModuleMembersFilter('skills');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default SkillsModule;
