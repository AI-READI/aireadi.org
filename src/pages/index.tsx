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

import ImageWithCredit from '@/components/images/ImageWithCredit';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

/**
 * SVGR Supportgray
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
        <Seo templateTitle='Home' />

        <main>
          <SkipNavContent />

          <section
            className={`relative flex h-[60vh] min-h-[600px] w-full items-center justify-center text-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-home-hero-image before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[0.3] before:content-[''] md:h-[40vh]`}
          >
            <div className='mx-auto grid max-w-screen-xl flex-col px-6 py-16 md:grid-cols-12 md:gap-8 lg:py-16 xl:gap-0 '>
              <div className='col-span-12 mr-auto place-self-center md:col-span-8'>
                <h1 className='relative pb-5 text-4xl font-black text-white sm:text-5xl'>
                  Artificial Intelligence Ready and Equitable Atlas for Diabetes
                  Insights
                </h1>

                <p className='relative pb-5 text-xl font-medium text-white sm:text-2xl'>
                  Generating a flagship AI-ready and ethically-sourced dataset
                  to support future AI-driven discoveries in diabetes
                </p>
              </div>

              <div className='col-span-12'>
                <div className='relative flex w-max flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0'>
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

          <section className='pb-8 pt-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center px-8  lg:px-6'>
              <h2 className='mb-5 max-w-screen-lg text-center text-4xl font-bold tracking-tight  sm:text-4xl'>
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

          <section className='pb-16 pt-4'>
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
                <ImageWithCredit
                  src='https://ucarecdn.com/b6105868-0deb-49d6-bb1e-7f309654f5eb/-/quality/smart_retina/-/format/auto/-/progressive/yes/'
                  alt='Photo of the UAB Callahan Eye Hospital'
                  author='UAB Media Department'
                />

                <ImageWithCredit
                  src='https://ucarecdn.com/3b4fea21-2260-41fd-b297-cef11c1554fd/-/crop/1142x762/0,0/-/preview/3000x3000/-/quality/smart_retina/-/format/auto/-/progressive/yes/'
                  alt='Photo of the UCSD Medical Center'
                  author='Board of Regents of the University of California'
                />
                <ImageWithCredit
                  src='https://ucarecdn.com/1ce55225-2e61-4734-a6a3-e19c5a95549b/-/crop/5625x3750/0,0/-/preview/3000x3000/-/quality/smart_retina/-/format/auto/-/progressive/yes/'
                  alt='Photo of the UW Medicine building'
                  author='Clare McLean/UW Medicine'
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
                <ImageWithCredit
                  src='https://ucarecdn.com/ef5a74b5-4fa6-46b9-99b1-9d44546f413a/-/quality/smart_retina/-/format/auto/-/progressive/yes/'
                  alt=''
                  author='UAB Media Department'
                />
              </div>
            </div>
          </section>

          <section className='bg-slate-50 py-16'>
            <div className='mx-auto max-w-screen-xl items-center gap-16 px-8 lg:grid lg:grid-cols-2 '>
              <div>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Tools and best practices to help future data generation
                  projects
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
                <div className='flex items-start'>
                  <ImageWithCredit
                    src='https://ucarecdn.com/678e126d-febe-4db4-887e-ae7e6733f99f/-/crop/3283x4359/2388,0/-/preview/3000x3000/-/quality/smart_retina/-/format/auto/-/progressive/yes/'
                    alt=''
                    author='UAB Media Department'
                  />
                </div>
                <div className='mt-4 w-full rounded-lg lg:mt-10'>
                  <ImageWithCredit
                    src='https://ucarecdn.com/4825d169-5780-4191-a6cb-277bd40b1725/-/crop/4187x5504/630,0/-/preview/3000x3000/-/quality/smart_retina/-/format/auto/-/progressive/yes/'
                    alt=''
                    author='UAB Media Department'
                  />
                </div>
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
                <ImageWithCredit
                  src='https://ucarecdn.com/dddbf822-3778-4eb0-af18-0d898125d892/-/quality/smart_retina/-/format/auto/-/progressive/yes/'
                  alt=''
                  author='UAB Media Department'
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

              <div className='grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
                {LogosList.map((logo, index) => (
                  <UnstyledLink href={logo.href} key={index}>
                    <div className='group relative mt-2 flex h-[120px] items-center justify-center rounded-lg bg-gray-50 p-2 transition-all hover:bg-gray-100 md:mt-0'>
                      <img
                        src={logo.image}
                        alt=''
                        className={logo.imageHeight}
                      />
                      <span className='pointer-events-none absolute bottom-[-5px] text-sm font-medium text-slate-600 opacity-0 transition-all group-hover:bottom-1 group-hover:opacity-100 lg:text-xs'>
                        {logo.caption}
                      </span>
                    </div>
                  </UnstyledLink>
                ))}
              </div>
              <div className='pt-2 text-center text-xs text-slate-400'>
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
    description:
      'Collecting type 2 diabetes-related data across multiple sites',
    icon: <AiFillDatabase size={20} />,
    href: '/modules/data',
  },
  {
    title: 'Ethical and Trustworthy AI',
    description:
      'Establishing guidelines for colllecting and sharing ethically sourced data',
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
    description:
      'Applying and advancing team science while supporting interdisciplinary collaboration',
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
    imageHeight: 'h-16',
    href: 'https://calmi2.org/',
    caption: 'California Medical Innovations Institute',
  },
  {
    image:
      'https://1000logos.net/wp-content/uploads/2022/07/Johns-Hopkins-University-Logo.png',
    imageHeight: 'h-16',
    href: 'https://www.jhu.edu/',
    caption: 'Johns Hopkins University',
  },
  {
    image:
      'https://nativebio.org/wp-content/uploads/2020/12/NBDC_web_logo_transparent_340x156.png',
    imageHeight: 'h-16',
    href: 'https://nativebio.org/',
    caption: 'Native BioData Consortium',
  },
  {
    image: '/images/member-orgs/ohsu.png',
    imageHeight: 'h-20',
    href: 'https://www.ohsu.edu/',
    caption: 'Oregon Health & Science University',
  },
  {
    image:
      'https://logos-world.net/wp-content/uploads/2021/10/Stanford-Symbol.png',
    imageHeight: 'h-16',
    href: 'https://www.stanford.edu/',
    caption: 'Stanford University',
  },
  {
    image:
      'https://ucarecdn.com/91c68c74-82ad-49dc-9c31-0daf608b0685/-/resize/x216/-/quality/smart/-/format/auto/',
    imageHeight: 'h-5',
    href: 'https://www.uab.edu/home/',
    caption: 'University of Alabama at Birmingham',
  },
  {
    image: '/images/member-orgs/ucsd.png',
    imageHeight: 'h-7',
    href: 'https://ucsd.edu/',
    caption: 'University of California, San Diego',
  },
  {
    image: '/images/member-orgs/uw.png',
    imageHeight: 'h-14',
    href: 'https://www.washington.edu/',
    caption: 'University of Washington',
  },
];
