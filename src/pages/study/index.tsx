/* eslint-disable @next/next/no-img-element */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
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
        <Seo templateTitle='Home' />

        <main>
          <SkipNavContent />

          <section className='py-8'>
            <div className='mx-auto flex max-w-screen-xl flex-col items-center px-2 text-gray-500 lg:px-6'>
              <div className='relative isolate overflow-hidden bg-white px-6 pt-2 sm:pt-5 lg:overflow-visible lg:px-0'>
                <div className='mx-auto grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-5'>
                  <div className='lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
                    <div className='lg:pr-4'>
                      <div className='lg:max-w-lg'>
                        <h1 className='text-3xl font-bold sm:text-4xl'>
                          Did you know that an estimated 33 million people are
                          living with diabetes in the United States?
                        </h1>
                        <p className='my-4 text-xl text-gray-700'>
                          Type 2 diabetes accounts for 90-95% of all cases of
                          diabetes, and while it typically develops in adults
                          over the age of 45, there are increasing numbers of
                          children, teenagers, and young adults diagnosed each
                          year.
                        </p>

                        <ButtonLink href='/study' variant='primary'>
                          Enroll in the study
                        </ButtonLink>
                      </div>
                    </div>
                  </div>
                  <div className='-mt-12 -ml-12 p-8 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden'>
                    <img
                      className=' w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10'
                      src='https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                      alt=''
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-slate-50 py-16'>
            <div className='mx-auto flex max-w-screen-xl flex-col-reverse items-center gap-x-16 gap-y-8 px-8 md:flex-col'>
              <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
                <img
                  className='w-full rounded-lg '
                  src='https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80'
                  alt='University of Alabama at Birmingham'
                />
                <img
                  className='w-full rounded-lg'
                  src='https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                  alt='University of California, San Diego'
                />
                <img
                  className='w-full rounded-lg '
                  src='https://images.unsplash.com/photo-1550617749-4ec0d574c429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                  alt='University of Washington'
                />
              </div>
              <div>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  About the study
                </h1>

                <p className='mb-6 text-lg font-normal text-gray-700 sm:mb-3'>
                  Roughly 38% of the adult population (96 million) in the United
                  States have prediabetes. Having type 2 diabetes places one at
                  risk for serious health issues and due to its overwhelming
                  prevalence, we are all impacted by this disease.
                </p>
                <p className='mb-6 text-lg font-normal text-gray-700 '>
                  Our team, funded by the National Institutes of Health (NIH),
                  is undertaking an innovative and exciting study on persons
                  with type 2 diabetes. We are developing a thoughtfully
                  designed, ethically collected, and comprehensive dataset for
                  researchers to use with the ultimate goal of identifying the
                  root causes of type 2 diabetes so that treatments and
                  prevention strategies can be successfully developed. Most
                  importantly, we are focused on studying a diverse group of
                  people from three geographic locations in the US - Alabama,
                  California, and Washington. This study will be inclusive and
                  diverse so that it might lead to important break-throughs in
                  type 2 diabetes that will help everyone. We are also inviting
                  people who do not have type 2 diabetes to participate in the
                  study.
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

          <section className='py-16'>
            <div className='mx-auto max-w-screen-xl items-center px-8'>
              <div>
                <h1 className='mb-4 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Frequently asked questions
                </h1>
                <p className='mb-8'>
                  Have a different question and can't find the answer you're
                  looking for? Reach out to us and we'll get back to you as soon
                  as we can.
                </p>

                <Accordion defaultIndex={[0]} allowMultiple>
                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Who can participate in AI-READI?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        We are enrolling persons aged 40 years and over, with
                        and without type 2 diabetes. Although type 2 diabetes
                        can occur at any age, most people are diagnosed after
                        the age of 40. People without diabetes are also eligible
                        to participate in AI-READI. You received a personalized
                        letter because you have been identified as a person who
                        is eligible for participation.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          How will the AI-READI study help people?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        Type 2 diabetes has implications on many aspects of your
                        health - and your life in general. There is no cure for
                        type 2 diabetes and we want to take steps toward finding
                        treatments. The AI-READI study aims to help people with
                        type 2 diabetes by conducting a large survey and testing
                        a diverse group of people with and without diabetes. The
                        data collected will be analyzed by scientists with the
                        help of machine learning and artificial intelligence to
                        gain a deeper understanding of the physiological
                        complications of the disease. By refining our methods of
                        controlling diabetes, we hope to identify pathways and
                        opportunities for a cure, ultimately improving the
                        quality of life for individuals with type 2 diabetes.
                        The AI-READI study has the potential to help people with
                        type 2 diabetes return to happier and healthier lives.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Where does the study take place?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <div className='flex flex-col'>
                        <p>
                          Study visits take place at three locations, one of
                          which will be convenient for you:
                        </p>
                        <div className='mt-8 grid grid-cols-1 gap-4 text-center text-sm md:grid-cols-3'>
                          <UnstyledLink
                            href='https://uab.edu'
                            className='flex flex-col space-y-2'
                          >
                            <img
                              className='w-full rounded-lg '
                              src='https://ucarecdn.com/b6105868-0deb-49d6-bb1e-7f309654f5eb/-/quality/smart_retina/-/format/auto/-/progressive/yes/'
                              alt='University of Alabama at Birmingham'
                            />

                            <span className=' font-semibold'>
                              Birmingham, Alabama at UAB
                            </span>
                          </UnstyledLink>

                          <UnstyledLink
                            href='https://ucsd.edu'
                            className='flex flex-col space-y-2'
                          >
                            <img
                              className='w-full rounded-lg'
                              src='https://images.unsplash.com/photo-1656139789467-db3307d775ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                              alt='University of California, San Diego'
                            />

                            <span className=' font-semibold'>
                              San Diego, California at UCSD
                            </span>
                          </UnstyledLink>

                          <UnstyledLink
                            href='https://uw.edu'
                            className='flex flex-col space-y-2'
                          >
                            <img
                              className='w-full rounded-lg '
                              src='https://images.unsplash.com/photo-1627626308661-034701a77028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80'
                              alt='University of Washington'
                            />

                            <span className=' font-semibold'>
                              Seattle, Washington at UW
                            </span>
                          </UnstyledLink>
                        </div>
                        <p className='mt-2'>
                          We will enroll about 4,000 people in these three
                          states. Researchers from all three universities - UAB,
                          UCSD, and UW - are overseeing this study.
                        </p>
                      </div>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          What does my participation involve?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        We are studying many features of health and everyday
                        life that can be impacted by, or contribute to, type 2
                        diabetes. These include your health history, medications
                        you may be taking, physical activity, lifestyle
                        characteristics, vision, memory and thinking, blood
                        chemistry, and heart health.
                      </p>
                      <p className='mt-2'>
                        You will be asked to complete some questionnaires at
                        your convenience prior to visiting us. The
                        questionnaires may be completed on a computer, tablet,
                        or smartphone, but we also have other options if you are
                        unable to complete the questionnaires electronically
                        (contact us using the information above and we will help
                        you!). At your in-person visit with us, the first half
                        may feel like a routine wellness exam. We will take your
                        vital signs, check your heart function by performing a
                        quick electrocardiogram (ECG), test your nerve response
                        to light touch, take a blood sample, and test your
                        vision. We will also take pictures of your eyes.
                      </p>
                      <p className='mt-2'>
                        Participation in this study also involves an at-home
                        component. Before you leave our office, we will give you
                        a “take-home kit” that includes a continuous glucose
                        monitor (aka. CGM), a physical activity monitor (Apple
                        watch designed for research), and an environmental
                        sensor. The CGM and physical activity monitor will need
                        to be worn for 10 days to collect information about how
                        your glucose levels change during your daily activities,
                        how much time you spend walking, sitting, sleeping, or
                        exercising, your heart rate, and the oxygen level in
                        your blood. The environmental sensor will need to be
                        placed in your residence for 10 days and will collect
                        information on the air, light, temperature, and
                        particles in your home. These devices do not have
                        cameras or a microphone. They cannot collect any videos,
                        photographs, or sound recordings from your home. After
                        the 10-day monitoring period is complete, we will ask
                        you to return the devices using the box and prepaid
                        shipping label provided to you. Once we receive the
                        devices back from you, your participation is complete.
                      </p>
                      <p className='mt-2'>
                        This study is voluntary and will not impact any
                        healthcare you receive.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          How long will participation in the study last?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        For most people, the in-person visit will last between 3
                        ½ and 4 hours, but the exact timing will vary. If you
                        feel weary during the visit, we can always take a break!
                        We also have snacks if you feel hungry. Your parking
                        will be free of charge in a parking area at or very near
                        our facility. You will wear and use the monitors for 10
                        days total before sending them back to us.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          What will you do with the data you obtain from my
                          participation?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        Data obtained from you in AI-READI will be collected
                        responsibly, fairly, and ethically. You are
                        participating in an anonymous fashion with respect to
                        the information contained in the study. None of your
                        identifying characteristics such as your name, address,
                        phone number, email or any other identifying
                        characteristic will be included in the publicly
                        available dataset that will be used by scientists for
                        analysis. The only identifying information that will be
                        released is the whole genome sequencing (genetic
                        information), this will be released in a limited dataset
                        that will be available by application only.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Will I be compensated for participating in AI-READI?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        As a token of our appreciation, we will provide you with
                        a stipend of $125 after you complete the study visit,
                        questionnaires, and have returned the monitoring devices
                        to us. Progress in scientific knowledge cannot happen
                        without volunteers like you!
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Who will use the information you collect?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        The AI-READI study is being specifically designed for
                        researchers who develop technologies that identify
                        patterns, trends, and relationships in data. The goal is
                        to develop a deeper understanding of the risk factors,
                        causes, and consequences of type 2 diabetes. Researchers
                        will be using artificial intelligence approaches to do
                        this, which is why it is so important to make sure that
                        the data they analyze is inclusive and better represents
                        the diversity of people afflicted with the disease. The
                        goal of these analyses is to identify solutions for
                        complex challenges in type 2 diabetes. The data will be
                        made available to researchers from around the world who
                        are seeking to help resolve the complexities of type 2
                        diabetes. The researchers will NOT have access to your
                        personally identifying information. Your whole genome
                        sequencing (genetic information) will only be available
                        to researchers who apply and are approved by a review
                        panel.
                      </p>
                      <p className='mt-2'>
                        The AI-READI project is one of several projects funded
                        under the NIH's Bridge to Artificial Intelligence
                        (Bridge2AI) initiative. The goal of Bridge2AI is to
                        advance the use of new artificial intelligence
                        technologies in solving real-world problems in medicine,
                        and doing so in a manner that is ethical and inclusive.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          What is Machine Learning and Artificial Intelligence,
                          and what do they have to do with this study?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        Machine learning is a type of artificial intelligence
                        that involves training computers to learn from data and
                        make predictions or decisions based on that learning. In
                        the context of health research, machine learning can be
                        used to analyze large amounts of data collected from
                        individuals who have participated in studies. This data
                        may include information about medical history, lifestyle
                        factors, genetic information, and other health-related
                        details. By analyzing this data using machine learning,
                        researchers can identify patterns and relationships that
                        may not be immediately apparent to the human eye. For
                        example, machine learning algorithms may be able to
                        identify risk factors for certain diseases or
                        conditions, or predict the effectiveness of different
                        treatments for specific individuals based on their
                        unique characteristics.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Will personal identifying information be shared
                          publicly?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        The protection of your privacy and personal information
                        is one of our highest priorities. Only a small number of
                        the study staff will have access to personal information
                        such as your name, birthdate and phone number. A random
                        participant ID will be generated for the data collected
                        from your participation. We will remove any information
                        that can potentially be traced back to you.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          What will happen to my blood and urine samples?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        For your blood, we will first run a few tests similar to
                        what they do at your physician’s office, such as A1c and
                        a lipid analysis. Some of the blood will be put into a
                        “library” for scientists to access; one of the future
                        uses for this library may be gene sequencing. Your urine
                        sample will be used to look at kidney function and any
                        remaining urine will be disposed of.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Will I be able to withdraw from the study?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        Yes, if you have changed your mind about participation,
                        you may contact us to withdraw your consent. Please
                        note, however, that any data we have collected until
                        that time will not be able to be withdrawn from our
                        database; this is because of the way we de-identify and
                        store them.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Why am I asked to place an environmental sensor in my
                          residence?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        We are interested in learning how the specifics about
                        the environment you live in may affect your health. The
                        sensor will collect light levels, quality of air, and
                        temperature. Again, we respect you and your family’s
                        privacy and boundaries; we will only record the factors
                        listed above, and no photography or audio recording is
                        possible with the sensor. They are designed and built
                        without these capabilities.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Will my doctor be notified about my participation?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        Providers with access to your electronic health records
                        may be able to see your enrollment in our study;
                        however, they will not be able to see your results
                        unless you send it to them. Your participation or
                        refusal of participation will not influence the quality
                        of care you receive at UW Medicine/UCSD Health/UAB
                        Medicine.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Will I receive my results from the study?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        At the end of the study visit, you will receive a
                        personalized code/link. This code is only for you.
                        Within one year of the visit, you will be able to access
                        some of your results from your research visit, including
                        your vitals, vision test, and urine and blood testing.
                        Most of the results returned to you are intended for
                        physician use only, and although we cannot provide
                        medical guidance about your results, we encourage you to
                        discuss them with your primary care provider.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          Can I skip some tests or questions in the surveys?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        Please let us know if you are not comfortable with any
                        of the tests, and we can stop and talk about your
                        options. You will be given the option to not answer
                        questions in questionnaires that make you uncomfortable.
                        However, some components of the study are essential,
                        meaning we cannot complete a visit without them; in that
                        case, we can withdraw you from the study if you choose
                        not to continue.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          I lost my letter and personalized link to the study.
                          What do I do now?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        If you received an invitation letter in the mail but
                        lost your personalized link, click here (hyperlink to
                        UAB email?) to contact us so we can get you to the right
                        place. You may also call us at a number listed above for
                        a site that is local to you.
                      </p>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2 className='py-1'>
                      <AccordionButton className='study-faq flex items-center justify-between !px-0 hover:!bg-slate-100'>
                        <span className='pr-4 text-left font-medium'>
                          I have more questions, who can answer them?
                        </span>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>

                    <AccordionPanel pb={4}>
                      <p>
                        Our study team is happy to answer any questions you
                        have. Please use the personalized link provided in the
                        invitation letter or email we sent you to take you to
                        our study interface. There will be an option to have a
                        staff member call you to answer your questions. We also
                        welcome your call or email! The phone numbers and email
                        addresses for each of our study sites are listed above.
                        We'd enjoy giving you any additional information on
                        AI-READI. We hope to hear from you!
                      </p>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
