import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import ResourcesItemIcon from '@/components/icons/ResourcesItemIcon';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

const DataModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Data Acquisition' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Data Acquisition'
          image='/images/modules/data-hero.svg'
          tagline='Develop and implement a protocol that will generate a diverse and ethically-sourced dataset for the study of type 2 diabetes.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-8 text-left md:grid-cols-2 lg:px-6 lg:py-16'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Overview of the Data Acquisition Module
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The University of Alabama at Birmingham (UAB) will oversee and
                coordinate data acquisition activities over 3 sites: UAB,
                University of California San Diego (UCSD) and University of
                Washington (UW).
              </p>
            </div>
            <div className=''>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                Data is responsible for:
              </p>
              <ul className='list mb-3 list-inside list-disc text-lg font-normal text-gray-700'>
                <li>Determining all domains and variables for the dataset.</li>
                <li>Developing the protocol.</li>
                <li>Drafting the Manual of Procedures (MOP).</li>
                <li>
                  Implementing the protocol for data collection, starting with
                  the hiring, training, and certification of Clinical Research
                  Coordinators (CRCs), followed by the enrollment of
                  participants and participant visits.
                </li>
                <li>
                  Overseeing the biorepository storage of biospecimens at UAB
                  for future ancillary studies.
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
  const TeamMembers = await ModuleMembersFilter('data');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default DataModule;
