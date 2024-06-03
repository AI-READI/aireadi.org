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
        <Seo templateTitle='Contact Us' />

        <main>
          <SkipNavContent />

          <section className='bg-white'>
            <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
              <h1 className='mb-1 text-center text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Contact Us
              </h1>

              <p className='mb-3 text-center text-xl font-normal text-slate-600'>
                Have a question about our project? Want to provide feedback
                about our dataset or anything else? Need help using our data?
                Let us know!
              </p>

              <p className='my-2 w-full rounded-lg bg-yellow-50 p-2 text-center text-base font-normal text-slate-600'>
                Please read our <UnderlineLink href='/faq'>FAQ</UnderlineLink>{' '}
                first - the answer to your question could be there!
              </p>

              <p className='mb-7 text-center text-sm font-normal text-slate-400'>
                Note that we are mostly looking for feedback at this moment but
                will try our best to answer questions. Please use an
                institutional email for faster response and preventing your
                query from being flagged as a spam.
              </p>

              <iframe
                data-tally-src='https://tally.so/embed/wdY71y?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'
                loading='lazy'
                width='100%'
                height='276'
                title='AI-READI Contact Form'
              ></iframe>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
