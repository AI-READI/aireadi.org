import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import Button from '@/components/buttons/Button';
import ImagesWithHeadingAndDescription from '@/components/content/ContentWithImages';
import FeatureList from '@/components/content/FeatureList';
import StatsText from '@/components/content/StatsText';
import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import SideImage from '@/components/hero/HeroSideImage';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
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

          <section
            className={`relative flex h-[60vh] w-full items-center justify-center text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-home-hero-image before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[0.4] before:content-[''] md:h-[40vh]`}
          >
            <div className='mx-auto grid max-w-screen-2xl px-6 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
              <div className='mr-auto place-self-center lg:col-span-8'>
                <h1 className='relative pb-5 text-4xl font-black sm:text-5xl md:text-6xl'>
                  Artificial Intelligence Ready and Equitable Atlas for Diabetes
                  Insights (AI-READI)
                </h1>

                <p className='relative pb-5 text-xl font-medium sm:text-2xl'>
                  Generating a flagship AI-ready and ethically-sourced dataset
                  to support future AI-driven discoveries in diabetes
                </p>

                <div className='relative flex space-x-4'>
                  <ButtonLink href='/study' variant='primary'>
                    Enroll in the study
                  </ButtonLink>
                  <ButtonLink
                    href='/mentorship'
                    variant='outline'
                    className='bg-slate-100'
                  >
                    Join our mentorship program
                  </ButtonLink>
                  <ButtonLink href='/data' variant='dark'>
                    View our data
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-sky-100/50'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center  py-8 px-4 text-gray-500 sm:text-lg lg:py-16 lg:px-6'>
              <h2 className='mb-5 text-center text-4xl font-bold tracking-tight text-gray-900 md:text-5xl'>
                Generating data, best practices, and tools to boost future
                AI-driven research in diabetes
              </h2>
              <p className='mb-4 text-center font-normal'>
                AI-READI is one of the data generation projects funded by the
                National Institutes of Health (NIH)'s Bridge2AI Program. The
                AI-READI project seeks to create and share a flagship
                ethically-sourced dataset of type 2 diabetes mellitus (T2DM)
                that is agnostic to existing classification criteria or biases.
                The data will be optimized for future artificial
                intelligence/machine learning (AI/ML) analysis that could
                provide critical insights into T2DM and especially shade light
                on the salutogenic pathways from diabetes to return to health.
              </p>

              <div className='py-4'>
                <Button>Learn more about Bridge2AI</Button>
              </div>
            </div>
          </section>

          <HeroCroppedImage
            title='Equitable, multimodal data collection'
            image='https://tinyurl.com/yeyjvptc'
            tagline='The project will aim to collect data from 4,000 participants. To ensure the data is population-representative, the 4,000 participants will be balanced for three factors: disease severity, race/ethnicity, and sex. Various data types will be collected from each participant, including vitals, electrocardiogram, glucose monitoring, physical activity, ophthalmic evaluation, etc.'
            showButtons
            primaryButton='Learn more about the study'
          />
          <SideImage
            title='Ethical, FAIR, AI-ready data sharing'
            image='https://images.unsplash.com/photo-1528553688096-8e0735356dae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2325&q=80'
            tagline='The resulting dataset will be curated and shared following ethical and FAIR (Findable, Accessible, Interoperable, and Reusable) principles such that it is ready for future AI/ML-driven analysis. The data will be shared periodically through our dedicated web platform called fairhub.io. We will aim to make as much of the data as possible openly available to maximize discoveries.'
            showButtons
            // primaryButton='Get Started'
            secondaryButton='View our data'
          />
          <ImagesWithHeadingAndDescription
            title='Tools and best practices to help future data generation project'
            text={[
              'We will develop and openly share tools, standards, and guidelines so that future data generation projects can follow our approach for sharing ethical, FAIR, and AI-ready datasets.',
              'Learn more about our tools and guidelines',
            ]}
            image1='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
            image2='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
          />
          <SideImage
            title='Community engagement'
            image='https://images.unsplash.com/photo-1528553688096-8e0735356dae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2325&q=80'
            tagline='Community members will be engaged along the way to ensure their suggestions and concerns regarding data collection, management, and sharing are addressed.'
            showButtons
            // primaryButton='Get Started'
            secondaryButton='Learn More'
          />
          <StatsText />
          <FeatureList />
          {/* <FaqList /> */}
        </main>
      </Layout>
    </>
  );
}
