import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import FaqList from '@/components/content/FaqList';
import FeatureList from '@/components/content/FeatureList';
import HeadingWithDescription from '@/components/content/HeadingWithDescription';
import HeroWithCroppedImage from '@/components/content/HeroWithCroppedImage';
import HeroImageBackground from '@/components/content/ImageBackground';
import ImagesWithHeadingAndDescription from '@/components/content/ImagesWithHeadingAndDescription';
import SideImage from '@/components/content/SideImage';
import StatsText from '@/components/content/StatsText';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />

        <main>
          <SkipNavContent />

          <HeroImageBackground
            header='Creating AI-ready datasets for the future'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
          <HeroWithCroppedImage />
          <SideImage
            header='Creating AI-ready datasets for the future'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          />
          <HeadingWithDescription heading='Powering innovation at 200,000+ companies worldwide'>
            <p className='mb-4 font-normal'>
              Track work across the enterprise through an open, collaborative
              platform. Link issues across Jira and ingest data from other
              software development tools, so your IT support and operations
              teams have richer contextual information to rapidly respond to
              requests, incidents, and changes.
            </p>
          </HeadingWithDescription>
          <ImagesWithHeadingAndDescription />
          <FeatureList />
          <StatsText />
          <FaqList />
        </main>
      </Layout>
    </>
  );
}

import { GetStaticProps } from 'next';
export const getStaticProps: GetStaticProps = async () => {
  const environment = process.env.NODE_ENV;

  if (environment === 'production') {
    return {
      redirect: {
        permanent: false,
        destination: '/comingsoon',
      },
    };
  }

  return {
    props: {},
  };
};