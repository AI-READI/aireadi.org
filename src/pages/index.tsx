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

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';

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
            className={`relative flex h-[60vh] min-h-[600px] w-full items-center justify-center text-white before:absolute before:top-0 before:left-0 before:h-full before:w-full before:bg-home-hero-image before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[0.3] before:content-[''] md:h-[40vh]`}
          >
            <div className='mx-auto grid max-w-screen-xl flex-col px-6 py-16 md:grid-cols-12 md:gap-8 lg:py-16 xl:gap-0 '>
              <div className='col-span-12 mr-auto place-self-center md:col-span-8'>
                <h1 className='relative pb-5 text-4xl font-black sm:text-5xl '>
                  Artificial Intelligence Ready and Equitable Atlas for Diabetes
                  Insights
                </h1>

                <p className='relative pb-5 text-xl font-medium sm:text-2xl'>
                  Generating a flagship AI-ready and ethically-sourced dataset
                  to support future AI-driven discoveries in diabetes
                </p>
              </div>

              <div className='col-span-12'>
                <div className='relative flex w-max flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4'>
                  <ButtonLink href='https://fairhub.io' variant='primary'>
                    View our data
                  </ButtonLink>
                  <ButtonLink href='/study' variant='dark' className='hidden'>
                    Enroll in the study
                  </ButtonLink>
                  <ButtonLink
                    href='/mentorship'
                    variant='outline'
                    className='hidden bg-slate-100'
                  >
                    Join our mentorship program
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>

          <section className='pt-16 pb-8'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center px-8 text-gray-500 lg:px-6'>
              <h2 className='mb-5 max-w-screen-lg text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Generating data, best practices, and tools to boost future
                AI-driven research in diabetes
              </h2>
              <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'>
                <div className='md:px-5 lg:max-w-2xl'>
                  <ul className='mb-3 list-disc text-lg font-normal text-gray-700'>
                    <li>
                      AI-READI is one of the data generation projects of the
                      National Institutes of Health (NIH) funded Bridge2AI
                      Program.
                    </li>
                    <li>
                      The AI-READI project seeks to create and share a flagship
                      ethically-sourced dataset of type 2 diabetes.
                    </li>
                    <li>
                      The data will be optimized for future artificial
                      intelligence/machine learning (AI/ML) analysis that could
                      provide critical insights and especially shine light on
                      the salutogenic pathways from diabetes to return to
                      health.
                    </li>
                  </ul>

                  <div className='lg:py-4'>
                    <ButtonLink
                      href='https://commonfund.nih.gov/bridge2ai'
                      variant='outline'
                      className='text-center sm:text-left'
                    >
                      Learn more about Bridge2AI
                    </ButtonLink>
                  </div>
                </div>
                <div className='flex w-full items-center justify-center px-5 py-5'>
                  <img
                    className='rounded-lg lg:h-[300px]'
                    src='https://fairdataihub.org/images/hero/aireadi-logo.png'
                    alt='mockup'
                  />
                </div>
              </div>
            </div>
          </section>

          <section className='pt-4 pb-16'>
            <div className='px-8'>
              <div className='m-2 mx-auto max-w-screen-xl rounded-lg bg-slate-100 p-8  text-center'>
                <h1 className='mb-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Snapshot of the AI-READI project
                </h1>

                <p className='mb-12 text-xl font-medium text-slate-600'>
                  Some key numbers from the project
                </p>

                <div className='flex justify-center'>
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

                        <dd className='text-lg font-medium text-gray-700'>
                          {parse(stat.text)}
                        </dd>
                      </div>
                    ))}
                  </Stack>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-slate-50 py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col-reverse items-center gap-16 px-8 md:flex-col'>
              <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
                <img
                  className='w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1656139789467-db3307d775ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                  alt='University of California, San Diego'
                />
                <img
                  className='w-full rounded-lg '
                  src='https://images.unsplash.com/photo-1649259406421-922f26d4c39a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                  alt='University of Alabama at Birmingham'
                />
                <img
                  className='w-full rounded-lg '
                  src='https://images.unsplash.com/photo-1627626308661-034701a77028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                  alt='University of Washington'
                />
              </div>
              <div>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Equitable, multimodal data collection
                </h1>

                <p className='mb-6 text-lg font-normal text-gray-700 sm:mb-8'>
                  The project will aim to collect data from 4,000 participants
                  across three sites: the University of Alabama at Birmingham
                  (UAB), the University of California San Diego (UCSD), and the
                  University of Washington (UW). To ensure the data is
                  population-representative, the 4,000 participants will be
                  balanced for three factors: disease severity, ethnicity, and
                  sex.
                </p>

                <div className='hidden'>
                  <ButtonLink href='/study' variant='outline'>
                    Learn more about the study
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>

          <section className='py-16 '>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between space-y-2 px-4 lg:flex-row-reverse'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Ethical, FAIR, AI-ready data sharing
                </h1>
                <p className='mb-6 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                  The resulting dataset will be curated and shared following
                  ethical and FAIR (Findable, Accessible, Interoperable, and
                  Reusable) principles such that it is ready for future
                  AI/ML-driven analysis. The data will be shared periodically
                  through our dedicated web platform called fairhub.io.
                </p>

                <ButtonLink href='https://fairhub.io' variant='outline'>
                  View our data
                </ButtonLink>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <img
                  className='rounded-lg'
                  src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
                  alt='mockup'
                />
              </div>
            </div>
          </section>

          <section className='bg-slate-50 py-16'>
            <div className='mx-auto max-w-screen-xl items-center gap-16 px-8 lg:grid lg:grid-cols-2 '>
              <div>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Tools and best practices to help future data generation
                  project
                </h1>

                <p className='mb-6 text-lg font-normal text-gray-700 sm:mb-4'>
                  We will develop and openly share tools, standards, and
                  guidelines so that future data generation projects can follow
                  our approach for sharing ethical, FAIR, and AI-ready datasets.
                </p>

                <div>
                  <ButtonLink href='/modules/tools' variant='outline'>
                    Learn more about our tools and guidelines
                  </ButtonLink>
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

          <section className='bg-sky-50 py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Community engagement
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  Community members will be engaged along the way to ensure
                  their suggestions and concerns regarding data collection,
                  management, and sharing are addressed.
                </p>

                <div>
                  <ButtonLink href='/modules/pedp' variant='outline'>
                    Learn more about our plan for enhancing diversity
                  </ButtonLink>
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

          <section className='py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Advancing our understanding of team science
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  We will support the AI-READI project by applying team science
                  to promote transdisciplinary collaboration across
                  disciplinary, hierarchical, demographic, and other boundaries.
                  In doing so, we aim to advance our understanding of teaming in
                  the context of multi-team systems involving multidisciplinary
                  scientists, trainees, and communities.
                </p>

                <div>
                  <ButtonLink href='/modules/teaming' variant='outline'>
                    Learn more about our team science approach
                  </ButtonLink>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <img
                  className='rounded-lg'
                  src='https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                  alt='mockup'
                />
              </div>
            </div>
          </section>

          <section className='bg-slate-50 py-16'>
            <div className='mx-auto max-w-screen-xl px-8'>
              <div className='mb-8 text-center lg:mb-16'>
                <h1 className='mb-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                  AI-READI Team
                </h1>

                <p className='mb-4 text-xl font-medium text-slate-600'>
                  The project team is structured into six modules, each leading
                  a key aspect.
                </p>

                <div className='relative flex justify-center space-x-4'>
                  <Link
                    href='/team'
                    passHref
                    className='flex w-max items-center space-x-1 text-xl font-semibold text-sky-700 transition-all hover:text-sky-500'
                  >
                    <span className=''>Meet our team</span>
                    <TbArrowNarrowRight size={20} />
                  </Link>
                </div>
              </div>

              <div className='gap-x-8 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-3'>
                {FeaturesList.map((feature) => (
                  <div key={feature.title} className='mt-12 md:mt-2'>
                    <div className='flex flex-row items-center space-x-4 md:flex-col md:items-start md:space-x-0'>
                      <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-sky-600 text-white md:mb-2 md:h-10 md:w-10  '>
                        {feature.icon}
                      </div>
                      <h3 className='text-xl font-semibold'>{feature.title}</h3>
                    </div>
                    <p className='py-1 text-lg font-normal tracking-tight text-gray-500'>
                      {feature.description}
                    </p>
                    <Link
                      href={feature.href}
                      passHref
                      className='flex w-max items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
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
                <h1 className='mb-3 text-3xl font-bold tracking-tight sm:text-4xl'>
                  AI-READI Members
                </h1>

                <p className=' mb-6 text-xl font-medium text-slate-600 sm:mb-8'>
                  The following organizations are part of the AI-READI project
                </p>
              </div>

              <div className='grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-5'>
                {LogosList.map((logo, index) => (
                  <UnstyledLink href={logo.href} key={index}>
                    <div className='group relative mt-2 flex h-[120px] items-center justify-center rounded-lg bg-gray-50 p-2 transition-all hover:bg-gray-100 md:mt-0'>
                      <img src={logo.image} alt='' className='h-12' />
                      <span className='absolute bottom-[-5px] text-sm font-medium text-slate-600 opacity-0 transition-all group-hover:bottom-1 group-hover:opacity-100 lg:text-xs'>
                        {logo.caption}
                      </span>
                    </div>
                  </UnstyledLink>
                ))}
              </div>
              <div className='pt-2 text-xs text-slate-400'>
                Disclaimer: Opinions, interpretations, conclusions and
                recommendations are those of the AI-READI project and are not
                necessarily endorsed by the organizations mentioned on this
                website.
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
    text: 'Participants anticipated <br /> in the study',
  },
  {
    heading: '15+',
    text: 'Data types to be collected <br /> (vitals, electrocardiogram, etc.)',
  },
  {
    heading: '8',
    text: `Research institutions <br /> involved`,
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
    description: 'Bringing together multidisciplinary teams',
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
  {
    image:
      'https://fairdataihub.org/_next/image?url=%2Fimages%2Fcollaborators%2Fcalmi-logo.png&w=256&q=75',
    href: 'https://calmi2.org/',
    caption: 'California Medical Innovations Institute',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/University_of_Washington_signature.svg/1280px-University_of_Washington_signature.svg.png',
    href: 'https://www.washington.edu/',
    caption: 'University of Washington',
  },
  {
    image:
      'https://logos-download.com/wp-content/uploads/2019/06/Oregon_Health__Science_University_Logo_full.png',
    href: 'https://www.ohsu.edu/',
    caption: 'Oregon Health & Science University',
  },
  {
    image:
      'https://1000logos.net/wp-content/uploads/2022/07/Johns-Hopkins-University-Logo.png',
    href: 'https://www.jhu.edu/',
    caption: 'Johns Hopkins University',
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/UCSD_logo.png',
    href: 'https://ucsd.edu/',
    caption: 'University of California, San Diego',
  },
  {
    image:
      'https://branding.web-resources.upenn.edu/sites/default/files/styles/card_3x2/public/2022-03/UniversityofPennsylvania_FullLogo_RGB-4_0.png?h=ab080a2f&itok=tu_jMFEm',
    href: 'https://www.upenn.edu/',
    caption: 'University of Pennsylvania',
  },
  {
    image:
      'https://logos-world.net/wp-content/uploads/2021/10/Stanford-Symbol.png',
    href: 'https://www.stanford.edu/',
    caption: 'Stanford University',
  },
  {
    image:
      'https://nativebio.org/wp-content/uploads/2020/12/NBDC_web_logo_transparent_340x156.png',
    href: 'https://nativebio.org/',
    caption: 'Native BioData Consortium',
  },
  {
    image:
      'https://www.uab.edu/toolkit/images/downloads/logos/core/centered/UAB-color-with-R-centered_FullColor.png',
    href: 'https://www.uab.edu/home/',
    caption: 'University of Alabama at Birmingham',
  },
  {
    image: 'https://cdn.svgporn.com/logos/microsoft.svg',
    href: 'https://azure.microsoft.com/en-us/',
    caption: 'Microsoft',
  },
];
