import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import ResourcesItemIcon from '@/components/icons/ResourcesItemIcon';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

const ToolsModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Tools' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Tools'
          image='https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80'
          tagline='Developing tools and software for managing, curating, and sharing AI-ready datasets.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-8 text-left md:grid-cols-2 lg:px-6 lg:py-16'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Overview of the Tools Module
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The Tools module is developing{' '}
                <UnstyledLink
                  href='https://fairhub.io'
                  className='w-max items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
                >
                  fairhub.io
                </UnstyledLink>
                , a platform for easily managing, preparing, and sharing FAIR
                and AI-ready datasets.
              </p>
            </div>
            <div>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                Leveraging a partnership with Microsoft,{' '}
                <UnstyledLink
                  href='https://fairhub.io'
                  className='w-max items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
                >
                  fairhub.io
                </UnstyledLink>{' '}
                will be developed using Azure Cloud Services. The platform will
                include convenient tools to track clinical and biomedical data
                collection, prepare and share FAIR data, and conveniently access
                data for future AI/ML analysis.
              </p>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                In addition, the Tools module will support the effort of the
                Data Acquisition module by setting up and managing additional
                tools such REDCap.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-sky-50'>
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
                      className='flex w-full items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
                    >
                      <p className='break-normal text-xl font-medium'>
                        {resource.title}
                      </p>
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
    title: 'The fairhub.io platform',
    description: 'Link to the fairhub.io platform',
    link: 'https://fairhub.io',
    type: 'website',
  },
  {
    title: 'GitHub organization of the AI-READI project',
    description:
      'GitHub organization of the AI-READI project where all the tools are developed from',
    link: 'https://github.com/AI-READI',
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

export default ToolsModule;
