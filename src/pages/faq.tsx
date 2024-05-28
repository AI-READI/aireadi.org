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

          <section className='bg-white '>
            <div className='mx-auto max-w-screen-xl px-4 py-8 lg:py-16'>
              <h1 className='mb-1 text-left text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Frequently Asked Questions
              </h1>

              <p className='mb-7 text-left text-xl font-normal text-slate-600'>
                Have a different question and can't find the answer you're
                looking for?
                <br />
                <UnderlineLink href='/contact' className='text-sky-600'>
                  Contact us
                </UnderlineLink>{' '}
                and we'll get back to you as soon as we can.
              </p>

              <div className='grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 text-xl font-medium'>
                  How do I access the controlled set of the AI-READI dataset?
                </dt>
                <dd className='col-span-7 mt-1 text-lg md:mt-0'>
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

              <div className='hidden grid-cols-12 gap-10 border-t py-10 lg:grid'>
                <dt className='col-span-5 hidden text-xl font-medium'>
                  What is the tentative schedule for releasing subsequent
                  versions of the AI-READI dataset with data from additional
                  study participants?
                </dt>
                <dd className='col-span-7 mt-1 hidden text-lg md:mt-0'>
                  <p className=''>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vitae quos accusantium voluptate ipsa rerum alias eveniet,
                    quod blanditiis voluptatibus sit veritatis explicabo omnis,
                    porro voluptas similique at natus illum assumenda.
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
