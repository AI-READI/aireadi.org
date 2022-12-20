import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  const sendEmail = () => {
    fetch(`/api/contact`, {
      method: `POST`,
      body: JSON.stringify({
        email: document.getElementById('email')!.value,
        subject: document.getElementById('subject')!.value,
        message: document.getElementById('message')!.value,
      }),
    }).then(async (response) => {
      const res = await response.json();
      console.log(res);
      if (res.success) {
        // successNotify();
        // handleReset();
      } else {
        // errorNotify();
      }
    });
  };

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
              <h1 className='mb-1 text-center text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Contact Us
              </h1>

              <p className='mb-6 text-center text-xl font-normal text-slate-600 sm:mb-8'>
                Have a question about our project? Want more information about
                our study? Need help using our data? Let us know!
              </p>

              <form action='#' className='space-y-8'>
                <div>
                  <label className='mb-2 block text-sm font-medium text-gray-900 '>
                    Your email
                  </label>
                  <input
                    type='email'
                    id='email'
                    value='dev@aireadi.org'
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
                    value='test'
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
                    value='test'
                    className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500'
                    placeholder='Leave a comment...'
                  ></textarea>
                </div>

                <Button onClick={sendEmail}>Send message</Button>
              </form>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
