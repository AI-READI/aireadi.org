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
      <Seo templateTitle='PEDP' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Plan for Enhancing Diverse Perspectives'
          image='/images/modules/pedp-hero.jpeg'
          imageAlt='A group of people sitting around a table at the January 2023 All-Hands First Annual AI-READI Workshop'
          tagline='A cross disciplinary PEDP Committee focused on better understanding and finding tangible, equitable strategies to enhance diversity in the realm of AI/ML and health'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-8 text-left md:grid-cols-2 lg:px-6 lg:py-16'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Overview of the Plan for Enhancing Diverse Perspectives
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                Our mission is to help ensure that AI-READI and the science we
                design and conduct works to reduce health disparities caused or
                perpetuated by AI/ML.
              </p>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                An early outcome to gauge and enhance diverse perspectives is
                the formation of the AI-READI PEDP Committee with
                representative(s) from each module.
              </p>
            </div>
            <div>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                In its work, the PEDP Committee will assess the current state of
                AI/ML and precision health approaches, and their impact on
                health equity, and work with the modules to implement strategies
                to enhance inclusion of underrepresented and traditionally
                underemphasized voices at all stages of the project.
              </p>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                Our PEDP Committee is particularly focused on diversity and
                inclusion with regard to:
              </p>
              <ul className='list mb-3 list-inside list-disc text-lg font-normal text-gray-700'>
                <li>Insights from a range of academic disciplines</li>
                <li>Insights from a range of skill levels</li>
                <li>
                  Insights from diverse geographies and populations (led by
                  ETAI)
                </li>
              </ul>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'></p>
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
  const TeamMembers = await ModuleMembersFilter('pedp');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default PedpModule;
