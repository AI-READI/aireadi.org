/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Viz from '@/components/Viz';

const Dataset: React.FC = () => {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='' />

        <main>
          <SkipNavContent />

          <section className='pb-8 pt-16'>
            <Viz />
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Dataset;
