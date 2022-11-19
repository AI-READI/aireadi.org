import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />

        <main>
          <SkipNavContent />

          <section className='bg-white '>
            <div className='mx-auto max-w-screen-md py-8 px-4 lg:py-16'>
              <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 '>
                Contact Us
              </h2>
              <p className='mb-8 text-center font-light text-gray-500  sm:text-xl lg:mb-16'>
                Got a technical issue? Want to send feedback about a beta
                feature? Need details about something else? Let us know.
              </p>
              <form action='#' className='space-y-8'>
                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-900 '>
                    Your email
                  </label>
                  <input
                    type='email'
                    id='email'
                    className=' block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500'
                    placeholder='dev@aireadi.org'
                    required
                  />
                </div>
                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-900 '>
                    Subject
                  </label>
                  <input
                    type='text'
                    id='subject'
                    className=' block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500'
                    placeholder='Let us know how we can help you'
                    required
                  />
                </div>
                <div className='sm:col-span-2'>
                  <label className='mb-2 block text-sm font-medium text-gray-900 '>
                    Your message
                  </label>
                  <textarea
                    id='message'
                    rows={6}
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500'
                    placeholder='Leave a comment...'
                  ></textarea>
                </div>

                <Button>Send message</Button>
              </form>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}

import { GetStaticProps } from 'next';
export const getStaticProps: GetStaticProps = async () => {
  const environment = process.env.NODE_ENV;

  if (environment === 'production') {
    return {
      redirect: {
        permanent: false,
        destination: '/comingsoon',
      },
    };
  }

  return {
    props: {},
  };
};
