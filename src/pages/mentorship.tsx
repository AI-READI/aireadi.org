import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import HeadingWithDescription from '@/components/content/ContentHeadingDescription';
import ImagesWithHeadingAndDescription from '@/components/content/ContentWithImages';
import FaqList from '@/components/content/FaqList';
import FeatureList from '@/components/content/FeatureList';
import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
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

          <HeroCroppedImage
            title='Equitable, multimodal data collection'
            image='https://tinyurl.com/yeyjvptc'
            tagline='The project will aim to collect data from 4,000 participants. To ensure the data is population-representative, the 4,000 participants will be balanced for three factors: disease severity, ethnicity, and sex. Various data types will be collected from each participant, including vitals, electrocardiogram, glucose monitoring, physical activity, ophthalmic evaluation, etc.'
            showButtons
            primaryButton='Learn more about the study'
          />
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
          <ImagesWithHeadingAndDescription
            title="We didn't reinvent the wheel"
            text={[
              'We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.',
              'We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.',
            ]}
            image1='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
            image2='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
          />
          <FeatureList />
          <FaqList />
        </main>
      </Layout>
    </>
  );
}
