import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import ResourcesItemIcon from '@/components/icons/ResourcesItemIcon';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

const TeamingModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Teaming' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Teaming'
          image='https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
          tagline='Applying and advancing team science while transforming our AI-READI project from a multidisciplinary endeavor into a high-performing, interdisciplinary collaboration.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-8 text-left md:grid-cols-2 lg:px-6 lg:py-16'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Overview of the Teaming Module
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The Teaming module is working across AI-READI modules to develop
                an effective multi-team system, capable of achieving individual
                module, AI-READI, and Bridge2AI goals to create and share a
                flagship, ethically sourced, dataset for Type 2 diabetes.
              </p>
            </div>
            <div>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                We are applying team science by recognizing boundaries and
                interaction patterns of our multi-team system, and analyzing and
                intervening on interaction patterns to promote teaming. We are
                advancing team science by leveraging quantitative and
                qualitative methods to develop a new understanding of teaming
                across disciplinary and community interfaces. We also support
                AI-READI's committee charged with achieving our Plan for
                Enhancing Diverse Perspectives.
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
                      className='flex w-auto items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
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
    title: 'Multi-team system baseline questionnaire',
    description:
      'You are invited to participate in a questionnaire about how individuals, teams, and systems of teams collaborate and coordinate to create an ethically sourced dataset for use with artificial intelligence.',
    link: 'https://stanforduniversity.qualtrics.com/jfe/form/SV_2rz7byaK1HPwX9c',
    type: 'survey',
  },
];

export const getStaticProps = async () => {
  const TeamMembers = await ModuleMembersFilter('teaming');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default TeamingModule;
