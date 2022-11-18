import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import fs from 'fs';
import { GetStaticProps } from 'next';

import markdownToHtml from '@/lib/markdownToHtml';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const TermsOfServicePage: React.FC<{ pageContent: string }> = ({
  pageContent,
}) => {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />

        <main className='relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden py-5 px-5  sm:px-10 sm:pb-20'>
          <SkipNavContent />

          <div className='prose-a:text-primary prose prose-slate max-w-none prose-img:mx-auto prose-img:rounded-md prose-img:shadow-xl lg:prose-base'>
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
          </div>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fileContent = fs.readFileSync(`src/pages/terms/content.md`, `utf-8`);
  const pageContent = await markdownToHtml(fileContent || ``);

  return {
    props: {
      pageContent,
    },
  };
};

export default TermsOfServicePage;
