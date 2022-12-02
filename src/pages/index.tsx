/* eslint-disable @next/next/no-img-element */
import { Stack, StackDivider } from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import parse from 'html-react-parser';
import Link from 'next/link';
import { AiFillDatabase } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { FaPencilRuler } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go';
import { MdReduceCapacity } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { TbArrowNarrowRight } from 'react-icons/tb';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import LottieAnimation from '@/components/lotties';

import searchingLottie from '~/lotties/searching.json';
import webLottie from '~/lotties/web.json';

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
        <main>
          <SkipNavContent />

          <section
            className={`relative flex h-[60vh] w-full items-center justify-center text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-home-hero-image before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[0.4] before:content-[''] md:h-[40vh]`}
          >
            <div className='mx-auto grid max-w-screen-2xl px-6 py-16 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
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

          <section className='py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center px-4 text-gray-500 sm:text-lg lg:px-6'>
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

          <section className='bg-slate-50 py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between px-4 lg:flex-row-reverse'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-5xl font-bold tracking-tight'>
                  Equitable, multimodal data collection
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-8'>
                  The project will aim to collect data from 4,000 participants.
                  To ensure the data is population-representative, the 4,000
                  participants will be balanced for three factors: disease
                  severity, race/ethnicity, and sex. Various data types will be
                  collected from each participant, including vitals,
                  electrocardiogram, glucose monitoring, physical activity,
                  ophthalmic evaluation, etc.
                </p>

                <div className='relative flex space-x-4'>
                  <Button variant='outline'>
                    {' '}
                    Learn more about the study{' '}
                  </Button>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <LottieAnimation
                  animationData={searchingLottie}
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </section>

          <section className='py-16 '>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'>
              <div className='max-w-2xl px-5'>
                <h1 className='mb-4 text-5xl font-bold tracking-tight'>
                  Ethical, FAIR, AI-ready data sharing
                </h1>
                <p className='mb-6 text-gray-700 sm:mb-8 sm:text-xl md:text-lg'>
                  The resulting dataset will be curated and shared following
                  ethical and FAIR (Findable, Accessible, Interoperable, and
                  Reusable) principles such that it is ready for future
                  AI/ML-driven analysis. The data will be shared periodically
                  through our dedicated web platform called fairhub.io. We will
                  aim to make as much of the data as possible openly available
                  to maximize discoveries.
                </p>

                <div className='relative flex space-x-4'>
                  <Button variant='outline'> Learn more </Button>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <LottieAnimation
                  animationData={webLottie}
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </section>

          <section className='bg-slate-50 py-16'>
            <div className='mx-auto max-w-screen-xl items-center gap-16 px-4 lg:grid lg:grid-cols-2 lg:px-6'>
              <div className='font-normal sm:text-lg'>
                <h1 className='mb-4 text-5xl font-bold tracking-tight'>
                  Tools and best practices to help future data generation
                  project
                </h1>

                <p className='mb-6 text-gray-700 sm:mb-8 sm:text-xl md:text-lg'>
                  We will develop and openly share tools, standards, and
                  guidelines so that future data generation projects can follow
                  our approach for sharing ethical, FAIR, and AI-ready datasets.
                </p>

                <div className='relative flex space-x-4'>
                  <Button variant='outline'>
                    Learn more about our tools and guidelines
                  </Button>
                </div>
              </div>
              <div className='mt-8 grid grid-cols-2 gap-4'>
                <img
                  className='w-full rounded-lg'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
                  alt='office content 1'
                />
                <img
                  className='mt-4 w-full rounded-lg lg:mt-10'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
                  alt='office content 2'
                />
              </div>
            </div>
          </section>

          <section className='py-16 '>
            <div className='mx-auto flex max-w-screen-xl flex-col-reverse items-center justify-between px-4 lg:flex-row-reverse'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-5xl font-bold tracking-tight'>
                  Community engagement
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-8'>
                  Community members will be engaged along the way to ensure
                  their suggestions and concerns regarding data collection,
                  management, and sharing are addressed.
                </p>

                <div className='relative flex space-x-4'>
                  <Button variant='outline'> Learn more </Button>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <img
                  className='rounded-lg'
                  src='https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                  alt='mockup'
                />
              </div>
            </div>
          </section>

          <section className='py-16 '>
            <div className='px-8'>
              <div className='m-2 mx-auto max-w-screen-xl rounded-lg bg-slate-100 p-8  text-center'>
                <h1 className='mb-2 text-5xl font-bold tracking-tight'>
                  Snapshot of the AI-READI project
                </h1>

                <p className='mb-12 text-2xl font-medium text-slate-600'>
                  Some key numbers from the project
                </p>

                <Stack
                  direction={['column', 'column', 'column', 'row']}
                  spacing='24px'
                  divider={<StackDivider borderColor='gray.200' />}
                >
                  {StatsList.map((stat) => (
                    <div
                      key={stat.heading}
                      className='flex flex-col items-center justify-start space-y-3 p-3 text-center'
                    >
                      <dt className='text-5xl font-bold text-sky-600'>
                        {stat.heading}
                      </dt>

                      <dd className='text-xl font-medium text-gray-700'>
                        {parse(stat.text)}
                      </dd>
                    </div>
                  ))}
                </Stack>
              </div>
            </div>
          </section>

          <section className='bg-slate-50 py-16'>
            <div className='mx-auto max-w-screen-xl px-4 lg:px-6'>
              <div className='mb-8 lg:mb-16'>
                <h1 className='mb-2 text-center text-5xl font-bold tracking-tight'>
                  AI-READI Team
                </h1>

                <p className='mb-4 text-center text-2xl font-medium text-slate-600'>
                  The project team is structured into six modules, each leading
                  a key aspect.
                </p>

                <div className='relative flex justify-center space-x-4'>
                  <Link
                    href='/team'
                    passHref
                    className='flex w-max items-end space-x-1 text-base font-medium text-sky-700 transition-all hover:text-sky-500'
                  >
                    <span className=''>Meet our team</span>
                    <TbArrowNarrowRight size={20} />
                  </Link>
                </div>
              </div>

              <div className='gap-x-8 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
                {FeaturesList.map((feature) => (
                  <div key={feature.title} className='mt-12 md:mt-0'>
                    <div className='mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white md:mb-4 lg:h-12 lg:w-12'>
                      {feature.icon}
                    </div>
                    <h3 className='text-lg font-semibold'>{feature.title}</h3>
                    <p className='font-normal text-gray-500 md:pb-3'>
                      {feature.description}
                    </p>
                    <Link
                      href={feature.href}
                      passHref
                      className='flex w-max items-end space-x-1 text-base font-medium text-sky-700 transition-all hover:text-sky-500'
                    >
                      <span className=''>Read more</span>
                      <TbArrowNarrowRight size={20} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className='py-16 pb-16 '>
            <div className='mx-auto max-w-screen-xl px-4 lg:px-6'>
              <div className='g:mb-16 mb-8 text-center'>
                <h1 className='mb-2 text-5xl font-bold tracking-tight'>
                  AI-READI Members
                </h1>

                <p className='te mb-6 text-lg text-gray-700 sm:mb-8'>
                  The following organizations are part of the AI-READI project
                </p>
              </div>

              <div className='grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
                {LogosList.map((logo, index) => (
                  <Link
                    href={logo.href}
                    key={index}
                    passHref
                    className='mt-2 flex h-[100px] items-center justify-center rounded-lg bg-gray-100 grayscale transition-all hover:bg-gray-200 md:mt-0'
                  >
                    <img src={logo.image} alt='' className='h-10' />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

const StatsList = [
  {
    heading: '4,000',
    text: 'Participants anticipated in the study',
  },
  {
    heading: '15+',
    text: 'Data types to be collected <br /> (vitals, electrocardiogram, etc.)',
  },
  {
    heading: '8',
    text: `Research institutions involved`,
  },
  {
    heading: '50+',
    text: 'Team members',
  },
];

const FeaturesList = [
  {
    title: 'Data Acquisition',
    description: 'Collecting data across multiple sites',
    icon: <AiFillDatabase size={20} />,
    href: '/modules/data',
  },
  {
    title: 'Ethics',
    description:
      'Establishing ethical guidelines for sharing AI-ready datasets',
    icon: <GoLaw size={20} />,
    href: '/modules/ethics',
  },
  {
    title: 'Standards',
    description:
      'Establishing standards for preparing and sharing AI-ready datasets',
    icon: <FaPencilRuler size={20} />,
    href: '/modules/standards',
  },
  {
    title: 'Teaming',
    description: 'Bringing together multidiciplinary teams',
    icon: <RiTeamFill size={20} />,
    href: '/modules/teaming',
  },
  {
    title: 'Tools',
    description:
      'Developing tools and software for managing, curating, and sharing AI-ready datasets',
    icon: <BsTools size={20} />,
    href: '/modules/tools',
  },
  {
    title: 'Skills & Workforce Development',
    description: 'Developing a diverse AI/ML-biomedical research workforce',
    icon: <MdReduceCapacity size={20} />,
    href: '/modules/skills',
  },
];

const LogosList = [
  { image: 'https://cdn.svgporn.com/logos/bubble.svg', href: '/' },
  { image: 'https://cdn.svgporn.com/logos/coda.svg', href: '/' },
  { image: 'https://cdn.svgporn.com/logos/harness.svg', href: '/' },
  { image: 'https://cdn.svgporn.com/logos/jetbrains-space.svg', href: '/' },
  { image: 'https://cdn.svgporn.com/logos/ktor.svg', href: '/' },
  { image: 'https://cdn.svgporn.com/logos/lateral.svg', href: '/' },
  { image: 'https://cdn.svgporn.com/logos/microsoft.svg', href: '/' },
  { image: 'https://cdn.svgporn.com/logos/calibre.svg', href: '/' },
];
