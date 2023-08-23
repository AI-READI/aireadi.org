import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

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
          tagline='Developing a diverse AI/ML-biomedical research workforce.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 py-8 px-4 text-left md:grid-cols-2 lg:py-16 lg:px-6'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Overview of the Skills & Workforce Development Module
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The overall objective of the AI-READI Skills and Workforce
                Development Module is to develop and deploy training and career
                development activities for individuals from diverse backgrounds
                who will effectively contribute to translational AI research,
                particularly in the biomedical/clinical domain.
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
                  Increase the range of perspectives by creating a diverse
                  research team and encouraging broad exposure to AI-READI
                  dataset from a variety of individuals.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className='bg-sky-50'>
          <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6'>
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
        <section className='bg-white'>
          <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6'>
            <div className='mx-auto mb-6 max-w-screen-sm text-center lg:mb-8'>
              <h2 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Intern Bootcamp
              </h2>
            </div>
            <p>
              Intern Bootcamp redefines internships by offering a dynamic blend
              of hands-on projects, and mentorship. This immersive program
              focuses on tangible outcomes, empowering interns to enhance their
              technical skills. Beyond technical skills, the bootcamp hones
              communication and teamwork, shaping well-rounded professionals
              poised for success.
            </p>
            <div className='mx-auto max-w-screen-xl'>
              <ResponsiveMasonry
                columnsCountBreakPoints={{
                  200: 1,
                  300: 2,
                  350: 3,
                  650: 4,
                  100: 5,
                }}
              >
                <Masonry>
                  <img
                    alt=''
                    className='m-3 max-h-[500px] w-auto max-w-[570px] rounded-lg '
                    src='https://ucarecdn.com/b6521517-979e-4ae4-baff-69ade647a982/'
                  />
                  <img
                    alt=''
                    className=' m-3 max-h-[500px] w-auto rounded-lg'
                    src='https://ucarecdn.com/43f384e1-ec90-410f-b3b5-7d72f3eda492/'
                  />
                  <img
                    alt=''
                    className=' max-h-[500px]:2xl m-3 w-auto rounded-lg'
                    src='https://ucarecdn.com/df13a294-316d-4eea-9dac-ae68820cca5f/'
                  />
                  <img
                    alt=''
                    className='m-3 max-h-[500px] w-auto rounded-lg'
                    src='https://ucarecdn.com/00be814b-4c5a-4a6e-b61b-3411efb2553d/'
                  />
                  <img
                    alt=''
                    className='max-h-[500px]: m-3 w-auto  rounded-lg'
                    src='https://ucarecdn.com/2b081802-f0a0-40b5-b333-b1438e89415e/'
                  />
                </Masonry>
              </ResponsiveMasonry>
            </div>
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
      'One component of AI-READI is the Skills and Workforce Development Module, which includes the development of a yearlong mentored research internship program aimed at diversifying the future workforce at the intersection of data science/AI and the biomedical sciences and clinical research.',
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
