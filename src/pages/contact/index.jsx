import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import Head from 'next/head';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ContactUs() {
  return (
    <>
      <Head>
        <script async src='https://tally.so/widgets/embed.js'></script>
      </Head>

      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitel='Contact Us' />

        <main>
          <SkipNavContent />

          <section className='bg-white '>
            <div className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
              <h1 className='mb-1 text-center text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Contact Us
              </h1>

              <p className='mb-6 text-center text-xl font-normal text-slate-600 sm:mb-8'>
                Have a question about our project? Want more information about
                our study? Need help using our data? Let us know!
              </p>

              <p className='my-12 hidden w-full rounded-lg bg-yellow-50 p-10 text-center text-xl font-normal text-slate-600 sm:mb-8'>
                We are not taking any queries at this time. <br /> We hope you
                can find all the necessary information on our website.
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
