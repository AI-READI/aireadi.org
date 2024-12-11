import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

export default function ContactUs() {
  return (
    <>
      <Head>
        <script async src='https://tally.so/widgets/embed.js'></script>
      </Head>

      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Frequently Asked Questions' />

        <main>
          <SkipNavContent />

          <section className='bg-white'>
            <div className='mx-auto max-w-screen-xl px-4 py-8 lg:py-16'>
              <h1 className='mb-1 text-left text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Frequently Asked Questions
              </h1>

              <p className='mb-7 text-left text-xl font-normal text-slate-600'>
                Have a different question and can't find the answer you're
                looking for?
                <br />
                <UnderlineLink
                  href='https://aireadi.org/contact'
                  className='text-sky-600'
                >
                  Contact us
                </UnderlineLink>{' '}
                and we'll get back to you as soon as we can.
              </p>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  How do I access the controlled set of the AI-READI dataset?
                </dt>
                <dd className='col-span-7 mt-2 text-lg md:mt-0'>
                  <p className=''>
                    We are currently working on a suitable process for getting
                    access to our controlled set and do not have an anticipated
                    date for completing it. Please keep checking our{' '}
                    <UnderlineLink href='/' className='text-sky-600'>
                      website
                    </UnderlineLink>{' '}
                    to learn when it is out.
                  </p>
                </dd>
              </div>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  What is the tentative schedule for releasing subsequent
                  versions of the AI-READI dataset with data from additional
                  study participants?
                </dt>
                <dd className='col-span-7 mt-2 text-lg md:mt-0'>
                  <p className=''>
                    Note that this is an ongoing study and we are releasing data
                    progressively as it is being collected. Our next release is
                    planned towards the end of Fall 2024 with data from
                    approximately 1,000 participants. Another release will
                    likely be made a year later before the final release with
                    data from 4,000 participants is made during Fall or Winter
                    2026.
                  </p>
                </dd>
              </div>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  How long would it take for me to receive the download link for
                  the dataset after I complete the access process?
                </dt>
                <dd className='col-span-7 mt-2 text-lg md:mt-0'>
                  <p className=''>
                    You should receive the link typically within 2 weeks if not
                    sooner depending on the number of requests we receive during
                    that time. If you have not received it after 3 weeks, please
                    reach out to us through our{' '}
                    <UnderlineLink
                      href='https://aireadi.org/contact'
                      className='text-sky-600'
                    >
                      contact form
                    </UnderlineLink>
                    .
                  </p>
                </dd>
              </div>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  Does the dataset include EHR data or patient visit summaries?
                  Will there be a version with PHI data?
                </dt>
                <dd className='col-span-7 mt-2 text-lg md:mt-0'>
                  <p className=''>
                    Currently, the dataset does not include EHR data, but this
                    may be added in future releases. Patient visit summaries are
                    not planned to be shared. A version of the dataset with PHI
                    data is under consideration, but details and a release
                    timeline are not yet available.
                  </p>
                </dd>
              </div>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  Can we access diabetes medication information to aid our
                  analysis?
                </dt>
                <dd className='col-span-7 mt-2 text-lg md:mt-0'>
                  <p className=''>
                    Medication data, including diabetes medications, is part of
                    the protected dataset and is not currently available for
                    general access.
                  </p>
                </dd>
              </div>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  Does the dataset include image grading data or labels?
                </dt>
                <dd className='col-span-7 mt-2 text-lg md:mt-0'>
                  <p className=''>
                    The dataset does not include grading data for images, but
                    the images themselves are available for analysis.
                  </p>
                </dd>
              </div>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  What is the structure and composition of the dataset? Does it
                  include longitudinal data?
                </dt>
                <dd className='col-span-7 mt-2 text-lg md:mt-0'>
                  <p className=''>
                    The dataset includes information on the number of
                    participants and various data points. Details about the
                    dataset's structure and any available longitudinal data can
                    be found in the documentation.
                  </p>
                </dd>
              </div>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  Were participants asked to fast before blood tests, and is
                  fasting duration data available?
                </dt>
                <dd className='col-span-7 mt-2 text-lg md:mt-0'>
                  <p className=''>
                    Participants were not required to fast before their blood
                    tests due to practical and health considerations. However,
                    they were asked to report how long it had been since their
                    last meal before the blood draw, and this information is
                    included in the dataset.
                  </p>
                </dd>
              </div>

              {/* <p className='my-12 hidden w-full rounded-lg bg-yellow-50 p-10 text-center text-xl font-normal text-slate-600 sm:mb-8'>
                We are not taking any queries at this time. <br /> We hope you
                can find all the necessary information on our website.
              </p> */}
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
