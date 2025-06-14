/* eslint-disable @next/next/no-img-element */
import { Stack, StackDivider, Tag, VStack } from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import dayjs from 'dayjs';
import { motion } from 'framer-motion';
import fs from 'fs';
import matter from 'gray-matter';
import parse from 'html-react-parser';
import Link from 'next/link';
import { AiFillDatabase } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { GoLaw } from 'react-icons/go';
import { MdReduceCapacity } from 'react-icons/md';
import { TbArrowNarrowRight } from 'react-icons/tb';

import EventDates from '@/components/events/EventDates';
import ImageWithCredit from '@/components/images/ImageWithCredit';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import {
  FadeFramerItem,
  WidthFramerContainer,
  WidthFramerItem,
} from '@/utils/framer';
/**
 * SVGR Supportgray
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

const HomePage: React.FC<EventItem> = ({ slug, frontMatter }) => {
  const {
    title,
    startDateTime,
    endDateTime,
    location,
    subtitle,
    heroImage,
    timezone,
    type,
  } = frontMatter;

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='' />

        <main>
          <SkipNavContent />

          <section className="relative flex h-[60vh] min-h-[600px] w-full items-center justify-center text-white before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-home-hero-image before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[0.3] before:content-[''] md:h-[40vh]">
            <div className='mx-auto grid max-w-screen-xl flex-col px-6 py-16 md:grid-cols-12 md:gap-8 lg:py-16 xl:gap-0'>
              <div className='col-span-12 mr-auto place-self-center md:col-span-8'>
                <h1 className='relative pb-5 text-4xl font-black text-white sm:text-5xl'>
                  Artificial Intelligence Ready and Exploratory Atlas for
                  Diabetes Insights
                </h1>

                <p className='relative pb-5 text-xl font-medium text-white sm:text-2xl'>
                  Generating a flagship AI-ready and ethically-sourced dataset
                  to support future AI-driven discoveries in diabetes
                </p>
              </div>

              <div className='col-span-12'>
                <div className='relative flex w-max flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0'>
                  <ButtonLink
                    href='https://fairhub.io/datasets/2'
                    variant='primary'
                  >
                    Access our data
                  </ButtonLink>
                  <ButtonLink
                    href='https://docs.aireadi.org'
                    variant='outline'
                    className='bg-stone-100'
                  >
                    See our documentation
                  </ButtonLink>

                  <ButtonLink
                    href='/mentorship'
                    variant='dark'
                    className='hidden bg-slate-100'
                  >
                    Join our mentorship program
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>

          <section className='pb-8 pt-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center px-8 lg:px-6'>
              <h2 className='mb-5 max-w-screen-lg text-center text-4xl font-bold tracking-tight sm:text-4xl'>
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
                      dataset of type 2 diabetes.
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
              <div className='m-2 mx-auto max-w-screen-xl rounded-lg bg-slate-100 p-8 text-center'>
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

          <section className='bg-sky-50 py-16'>
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
                  Collecting multimodal data
                </h1>

                <p className='mb-2 text-lg font-normal text-gray-700'>
                  The project aims to collect data from 4,000 participants
                  across three sites: the University of Alabama at Birmingham
                  (UAB), the University of California San Diego (UCSD), and the
                  University of Washington (UW). The aim is to collect 1000
                  participants in each of four diabetes severity categories: 1)
                  No Diabetes, 2) Prediabetes or Lifestyle-Controlled Diabetes,
                  3) Oral and Non-Insulin Injectable Controlled Diabetes, and 4)
                  Insulin-Controlled Diabetes.
                </p>

                <div className='flex'>
                  <Link
                    href='/goals/data-collection'
                    passHref
                    className='mb-7 flex w-max items-center space-x-1 text-xl font-medium text-sky-700 transition-all hover:text-sky-500'
                  >
                    <span>Learn more about data collection</span>
                    <TbArrowNarrowRight size={20} />
                  </Link>
                </div>
              </div>

              <div className='my-20 w-full'>
                <motion.div
                  variants={WidthFramerContainer}
                  initial='hidden'
                  whileInView='show'
                  viewport={{ once: true, amount: 1 }}
                  className='relative h-[40px] w-full'
                >
                  <div className='h-full rounded-full border border-blue-100 bg-white shadow-[inset_0_0_8px_rgba(0,0,0,0.3)]'>
                    <motion.div
                      variants={WidthFramerItem}
                      className='absolute inset-0 max-w-[100%] rounded-full bg-blue-300'
                    />
                    <motion.div
                      variants={FadeFramerItem}
                      className='total-participants'
                    >
                      <span className='block text-xl font-bold'>Goal</span>
                      <span className='text-[16px] font-normal'>
                        data collection from 4,000 participants
                      </span>
                    </motion.div>
                    <motion.div
                      variants={FadeFramerItem}
                      className='completed-consent-text'
                    >
                      <span className='block text-xl font-bold'>4,300+</span>
                      <span className='text-[16px] font-normal'>
                        participants completed the consent process
                      </span>
                    </motion.div>

                    <motion.div
                      variants={WidthFramerItem}
                      className='absolute inset-0 max-w-[59%] rounded-full bg-blue-600'
                    />
                    <motion.div
                      variants={FadeFramerItem}
                      className='completed-study-text'
                    >
                      <span className='block text-xl font-bold'>2,390+</span>
                      <span className='text-[16px] font-normal'>
                        participants completed in-person study visit
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className='bg-slate-50 py-16'>
            <div className='mx-auto max-w-screen-xl items-center gap-16 px-8 lg:grid lg:grid-cols-2'>
              <div>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Sharing AI-ready dataset
                </h1>

                <p className='mb-6 text-lg font-normal text-gray-700 sm:mb-4'>
                  The resulting dataset is shared periodically through our
                  dedicated web platform called fairhub.io following Findable,
                  Accessible, Interoperable, and Reusable principles such that
                  it is ready for future AI/ML-driven analysis. The associated
                  tools, standards, and guidelines for making data AI-ready are
                  being openly shared so that future data generation projects
                  can also make their data AI-ready.
                </p>

                <div className='flex items-center space-x-2'>
                  <ButtonLink
                    href='https://fairhub.io/datasets/2'
                    variant='primary'
                  >
                    Access our data
                  </ButtonLink>

                  <ButtonLink href='/goals/data-sharing' variant='outline'>
                    Learn more about data sharing
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

          <section className='py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Training future AI-workforce
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  The AI-READI project is developing and deploying training and
                  career development activities for individuals who will
                  effectively contribute to translational AI research,
                  particularly in the biomedical/clinical domain.
                </p>

                <div>
                  <ButtonLink href='/goals/capacity-building' variant='outline'>
                    Learn more about capacity building
                  </ButtonLink>
                </div>
              </div>
              <div className='flex w-full items-center justify-center px-5 py-5'>
                <img
                  className='rounded-lg'
                  src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  alt='mockup'
                />
              </div>
            </div>
          </section>

          <section className='bg-sky-50 py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Advancing our understanding of team science
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  We apply team science to promote transdisciplinary
                  collaboration. In doing so, we also aim to advance our
                  understanding of teaming in the context of multi-team systems.
                </p>

                <div>
                  <ButtonLink href='/goals/team-science' variant='outline'>
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

          <section className='bg-slate-50/50 py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center justify-between px-4 lg:flex-row-reverse'>
              <div className='px-5 lg:max-w-2xl'>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Engaging community members
                </h1>
                <p className='mb-6 text-lg text-gray-700 sm:mb-4'>
                  Community members are engaged along the way to ensure their
                  suggestions and concerns regarding data collection,
                  management, and sharing are considered.
                </p>

                <div>
                  <ButtonLink
                    href='/goals/community-engagement'
                    variant='outline'
                  >
                    Learn more about community engagement
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
            <div className='mx-auto max-w-screen-xl px-4 lg:px-6'>
              <div className='g:mb-16 mb-8 text-center'>
                <h1 className='mb-3 text-3xl font-bold tracking-tight sm:text-4xl'>
                  AI-READI Members
                </h1>

                <p className='mb-2 text-xl font-medium text-slate-600'>
                  The following organizations are part of the AI-READI project
                </p>

                <div className='relative mb-6 flex justify-center space-x-4'>
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

              <div className='grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-4'>
                {MembersLogosList.map((logo, index) => (
                  <UnstyledLink href={logo.href} key={index}>
                    <div className='group relative mt-2 flex h-[120px] items-center justify-center rounded-lg bg-slate-50 p-2 transition-all hover:border hover:bg-slate-100 md:mt-0'>
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
            </div>
          </section>

          <section className='border-t py-16'>
            <div className='mx-auto max-w-screen-xl px-4 lg:px-6'>
              <div className='g:mb-16 mb-8 text-center'>
                <h1 className='mb-3 text-3xl font-bold tracking-tight sm:text-4xl'>
                  AI-READI Industry Partners
                </h1>

                <p className='mb-6 text-xl font-medium text-slate-600 sm:mb-8'>
                  The following organizations are instrumental to the AI-READI
                  project
                </p>
              </div>

              <div className='grid-cols-1 gap-4 md:grid md:grid-cols-2 lg:grid-cols-3'>
                {CollaboratorsLogosList.map((logo, index) => (
                  <UnstyledLink href={logo.href} key={index}>
                    <div className='hover:bg-slate-10 group relative mt-2 flex h-[120px] items-center justify-center rounded-lg bg-slate-50 p-2 transition-all hover:border hover:bg-slate-100 md:mt-0'>
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

          <section className='bg-slate-50/40 py-16'>
            <div className='mb-8 text-center lg:mb-16'>
              <h1 className='mb-3 text-3xl font-bold tracking-tight sm:text-4xl'>
                Upcoming Events
              </h1>
            </div>
            <div className='mx-auto grid max-w-screen-xl grid-cols-12 rounded-xl border px-4 py-8 shadow-lg'>
              <div className='col-span-8 px-5 lg:max-w-2xl'>
                <VStack spacing={4} align='flex-start'>
                  <Stack direction='row' spacing={2} align='center'>
                    <Tag variant='subtle' colorScheme='orange'>
                      Upcoming Event
                    </Tag>

                    <Tag variant='subtle' colorScheme='twitter'>
                      {type}
                    </Tag>
                  </Stack>

                  <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                    {title}
                  </h1>
                </VStack>

                <p className='mb-2 text-lg text-gray-700'>{subtitle}</p>

                <EventDates
                  startDateTime={startDateTime}
                  endDateTime={endDateTime}
                />

                <Stack
                  direction='row'
                  spacing={2}
                  align='center'
                  className='mt-3'
                >
                  <ButtonLink variant='outline' href={`/events/${slug}`}>
                    View event details
                  </ButtonLink>

                  <AddToCalendarButton
                    name={title}
                    options={['Apple', 'Google', 'iCal', 'Outlook.com']}
                    location={location || `Online`}
                    startDate={dayjs(endDateTime).format(`YYYY-MM-DD`)}
                    endDate={dayjs(endDateTime).format(`YYYY-MM-DD`)}
                    startTime={dayjs(startDateTime).format(`HH:mm`)}
                    endTime={dayjs(endDateTime).format(`HH:mm`)}
                    timeZone={timezone || `America/Los_Angeles`}
                    size='5'
                    lightMode='system'
                  />
                </Stack>
              </div>
              <div className='col-span-4 flex w-full items-center justify-center px-5 py-5'>
                <img className='rounded-lg' src={heroImage} alt='mockup' />
              </div>
            </div>
          </section>

          <section className='hidden bg-slate-50 py-16'>
            <div className='mx-auto max-w-screen-xl px-8'>
              <div className='mb-8 text-center lg:mb-14'>
                <h1 className='mb-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Project Goals
                </h1>

                <p className='text-xl font-medium text-slate-600'>
                  The AI-READI project has several goals and milestones that we
                  are working towards achieving.
                </p>

                <div className='relative hidden justify-center space-x-4'>
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

              <div className='mx-auto max-w-screen-md gap-x-8 md:grid md:grid-cols-2 md:gap-12 lg:grid-cols-2'>
                {GoalsList.map((feature) => (
                  <Link
                    href={feature.href}
                    key={feature.title}
                    className='mt-12 flex flex-col items-center rounded-2xl border border-sky-300 bg-white px-6 py-8 shadow-md transition-all hover:shadow-lg md:mt-2'
                  >
                    <div className='flex h-12 w-12 items-center justify-center rounded-lg text-sky-600 md:mb-2 md:h-10 md:w-10'>
                      {feature.icon}
                    </div>

                    <h3 className='mt-1 text-center text-2xl font-bold'>
                      {feature.title}
                    </h3>

                    <p className='leading-2 mt-1 text-center text-lg font-medium text-gray-500'>
                      {feature.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

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

const GoalsList = [
  {
    title: 'Project Wide Milestones',
    description: 'A high-level overview of the project goals and objectives.',
    icon: <BsTools size={40} />,
    href: '/goals/project-wide-milestones',
  },
  {
    title: 'Data Collection',
    description: 'Policy and procedures for data collection and management.',
    href: '/goals/data-collection',
    icon: <AiFillDatabase size={40} />,
  },
  {
    title: 'Considerations for Releasing Data',
    description: 'Guidelines for releasing data to the public.',
    href: '/goals/considerations-for-releasing-data',
    icon: <GoLaw size={40} />,
  },
  {
    title: 'Capacity Building Initiatives',
    description: 'Training and resources for capacity building.',
    href: '/goals/capacity-building-initiatives',
    icon: <MdReduceCapacity size={40} />,
  },
];

const MembersLogosList = [
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

const CollaboratorsLogosList = [
  {
    image: '/images/member-orgs/dexcom.png',
    imageHeight: 'h-8',
    href: 'https://www.dexcom.com',
    caption: 'Dexcom',
  },
  {
    image: '/images/member-orgs/optomed.png',
    imageHeight: 'h-9',
    href: 'https://www.optomed.com/',
    caption: 'Optomed',
  },
  {
    image: '/images/member-orgs/topcon.png',
    imageHeight: 'h-12',
    href: 'https://topconhealthcare.com/',
    caption: 'Topcon Healthcare',
  },
  {
    image: '/images/member-orgs/icare.svg',
    imageHeight: 'h-8',
    href: 'https://www.icare-world.com',
    caption: 'iCare',
  },
  {
    image: '/images/member-orgs/heidelberg.png',
    imageHeight: 'h-20',
    href: 'https://www.heidelbergengineering.com/us/',
    caption: 'Heidelberg Engineering',
  },
  {
    image: '/images/member-orgs/microsoft.svg  ',
    imageHeight: 'h-8',
    href: 'https://www.microsoft.com/en-us/',
    caption: 'Microsoft',
  },
];

export async function getStaticProps() {
  // Get the events from the `events` directory
  const files = fs.readdirSync(`./events`);

  const eventList = files.map((fileName) => {
    // Remove the .md extension and use the file name as the slug
    const slug = fileName.replace(`.md`, ``);

    // Read the raw content of the file and parse the frontMatter
    const rawFileContent = fs.readFileSync(`events/${fileName}`, `utf-8`);

    const { data: frontMatter } = matter(rawFileContent);

    return {
      slug,
      frontMatter,
    };
  });

  // Get the next upcoming event
  let closestUpcomingEvent = eventList
    .filter((event) => dayjs(event.frontMatter.startDateTime).isAfter(dayjs()))
    .sort(
      (a, b) =>
        dayjs(a.frontMatter.startDateTime).valueOf() -
        dayjs(b.frontMatter.startDateTime).valueOf(),
    )[0];

  if (!closestUpcomingEvent) {
    // If there are no upcoming events, get the most recent event
    closestUpcomingEvent = eventList.sort(
      (a, b) =>
        dayjs(b.frontMatter.startDateTime).valueOf() -
        dayjs(a.frontMatter.startDateTime).valueOf(),
    )[0];
  }

  // Return the posts data to the page as props
  return {
    props: {
      slug: closestUpcomingEvent.slug || '',
      frontMatter: closestUpcomingEvent.frontMatter || {},
    },
  };
}

export default HomePage;
