import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import fs from 'fs';
import { GetStaticProps } from 'next';

import markdownToHtml from '@/lib/markdownToHtml';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

const PrivacyPolicyPage: React.FC<{ pageContent: string }> = ({
  pageContent,
}) => {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Privacy Policy' />

        <main className='relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden px-5 py-5 pt-10 sm:px-10 sm:pb-20'>
          <SkipNavContent />

          <div className='prose-a:text-primary prose prose-slate max-w-none lg:prose-base prose-img:mx-auto prose-img:rounded-md prose-img:shadow-xl'>
            <div dangerouslySetInnerHTML={{ __html: pageContent }} />
          </div>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const fileContent = fs.readFileSync(`src/pages/privacy/content.md`, `utf-8`);

  const pageContent = await markdownToHtml(fileContent || ``);

  return {
    props: {
      pageContent,
    },
  };
};

export default PrivacyPolicyPage;
