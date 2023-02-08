import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import ResourcesItemIcon from '@/components/icons/ResourcesItemIcon';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

const PedpModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Plan for Enhancing Diverse Perspectives'
          image='https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          tagline='A cross disciplinary PEDP Committee focused on better understanding and finding tangible, equitable strategies to enhance diversity in the realm of AI/ML and health'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-white'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 py-8 px-4 text-left md:grid-cols-2 lg:py-16 lg:px-6'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Overview of the Plan for Enhancing Diverse Perspectives
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                An early outcome to gauge and enhance diverse perspectives is
                the formation of the AI-READI PEDP Committee with
                representative(s) from each module.
              </p>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                Our mission is to reduce gaps in AI/ML health disparity.
              </p>
            </div>
            <div>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The PEDP Committee approaches will include assessment and
                understanding of current state AI/ML and precision health
                approaches, and account for the inclusion of underrepresented
                and traditionally underemphasized voices within- and between-
                modules, and across skill levels, and among diverse communities.
              </p>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                Our PEDP Committee is focused on assessing inclusion and
                equitable strategies to enhance diversity across three themes:
              </p>
              <ul className='list mb-3 list-disc text-lg font-normal text-gray-700'>
                <li>Cross-discipline</li>
                <li>Across skill levels</li>
                <li>
                  insights from diverse locations and populations (led by ETAI)
                </li>
              </ul>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'></p>
            </div>
          </div>
        </section>

        <section className='hidden bg-white'>
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
  const TeamMembers = await ModuleMembersFilter('pedp');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default PedpModule;
