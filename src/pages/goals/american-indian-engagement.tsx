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
      <Seo templateTitle='American Indian Engagement' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='American Indian Engagement'
          image='/images/modules/pedp-hero.jpeg'
          tagline='Working with the American Indian Communities to define suitable parameters for participation in the AI-READI study.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-8 text-left md:grid-cols-2 lg:py-16'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Working with tribe representatives and scholars
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                Artificial intelligence (AI) and machine learning (ML) have
                fundamentally challenged the status quo of publicly funded
                research in the USA and the adequacy of Individual Informed
                Consent & the Common Rule for this new landscape. This not only
                requires an interrogation of risks and concerns for the general
                US citizenry, but, American Indians and Alaska Natives require
                more consideration and engagement due to their sovereign status
                as Domestic Dependent Nations.
              </p>
            </div>
            <div>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The AI-READI project will provide an opportunity for the
                evaluation of conventional tools such as MOUs, Contracts Data
                Use and Access agreements, and form(s) of Assured Return of
                Benefit and Sustainable Input, Control and Monitoring of Tribal
                Data with the understanding, supported by NIH policy, that all
                data will reside under Tribal Sovereign Authority. Current NIH
                policy upholds Tribal Sovereignty over data. As such, the
                AI-READI project will engage with the Cheyenne River Sioux Tribe
                toward a goal of adding tribal participation and a data
                collection protocol aligned to the AI-READI's designed outcomes
                (with the ability for the tribe to modify the protocol as
                needed/preferred).
              </p>
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
  const TeamMembers = await ModuleMembersFilter('american-indian-engagement');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default EthicsModule;
