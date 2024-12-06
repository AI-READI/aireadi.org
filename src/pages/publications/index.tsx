import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import fs from 'fs';
import { GetStaticProps } from 'next';

import markdownToHtml from '@/lib/markdownToHtml';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const PublicationsPage: React.FC<{ pageContent: string }> = ({
  pageContent,
}) => {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Publications' />

        <main className='relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden px-5 py-5 sm:px-10 sm:pb-20'>
          <SkipNavContent />

          <div className='prose-a:text-primary prose prose-slate max-w-none lg:prose-base prose-h1:text-slate-700 prose-h2:text-slate-700 prose-h3:text-slate-700 prose-img:mx-auto prose-img:rounded-md prose-img:shadow-xl'>
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
          </div>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fileContent = fs.readFileSync(
    `src/pages/publications/content.md`,
    `utf-8`,
  );

  const pageContent = await markdownToHtml(fileContent || ``);

  return {
    props: {
      pageContent,
    },
  };
};

export default PublicationsPage;
