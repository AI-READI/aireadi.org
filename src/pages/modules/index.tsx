import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeadingWithDescription from '@/components/content/ContentHeadingDescription';
import FaqList from '@/components/content/FaqList';
import FeatureList from '@/components/content/FeatureList';
import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
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

          <HeroCroppedImage
            title='Equitable, multimodal data collection'
            image='https://tinyurl.com/yeyjvptc'
            tagline='The project will aim to collect data from 4,000 participants. To ensure the data is population-representative, the 4,000 participants will be balanced for three factors: disease severity, race/ethnicity, and sex. Various data types will be collected from each participant, including vitals, electrocardiogram, glucose monitoring, physical activity, ophthalmic evaluation, etc.'
            showButtons
            primaryButton='Learn more about the study'
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
