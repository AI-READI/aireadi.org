import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import Layout from '@/components/layout/Layout';
import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import ModuleMembersFilter from '@/utils/moduleMembersFilter';

const EthicsModule: React.FC<ModuleMembersPageProps> = ({ TeamMembers }) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Community Engagement' />

      <main>
        <SkipNavContent />

        <HeroCroppedImage
          title='Community Engagement'
          image='https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          tagline='Receiving guidance and expertise from members of the community.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-slate-50'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 px-4 py-8 text-left md:grid-cols-2 lg:py-16'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                The AI-READI Advisory Council (AAC)
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The AI-READI Advisory Council (AAC) was established on May 31,
                2023 as an external community peer review, providing community
                guidance related to the collection of a large multi-ethnic,
                multi-domain health data repository for the Artificial
                Intelligence Ready and Equitable Atlas for Diabetes Insights
                (AI-READI) Project.
              </p>
            </div>
            <div>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                The Advisory Council members reflect diverse individuals
                selected from the catchment areas of the University of
                Washington, Seattle, the University of California, San Diego,
                and the University of Alabama, Birmingham, who are considered
                'representative' of their community and the potential
                participants of the repository study. The Advisory Council
                focuses on reviewing all aspects of the research process
                regarding the urgency, relevance, efficacy, safety, and
                community impact of the proposed study.
              </p>
            </div>
          </div>
        </section>

        <ModuleMembers Team={TeamMembers} />
      </main>
    </Layout>
  </>
);

export const getStaticProps = async () => {
  const TeamMembers = await ModuleMembersFilter('community-engagement');

  return {
    props: {
      TeamMembers,
    },
  };
};

export default EthicsModule;
