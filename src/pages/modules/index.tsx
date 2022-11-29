import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeadingWithDescription from '@/components/content/ContentHeadingDescription';
import FaqList from '@/components/content/FaqList';
import FeatureList from '@/components/content/FeatureList';
import SideImage from '@/components/hero/HeroSideImage';
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

          <SideImage
            title='Creating AI-ready datasets for the future'
            image='https://images.unsplash.com/photo-1528553688096-8e0735356dae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2325&q=80'
            tagline='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            showButtons
            primaryButton='Get Started'
            secondaryButton='Learn More'
          />
          <HeadingWithDescription
            title='Powering innovation at 200,000+ companies worldwide'
            text='Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.'
            showButtons
            primaryButton='Get Started'
          />
          <FeatureList />
          <FaqList />
        </main>
      </Layout>
    </>
  );
}
