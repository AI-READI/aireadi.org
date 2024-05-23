import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function ContactUs() {
  const successNotify = () =>
    toast.success(` Your message was received! We will get back to you soon.`, {
      position: `bottom-right`,
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const errorNotify = () =>
    toast.error(
      ` Something went wrong! Please try again later or send us an email at contact@aireadi.org`,
      {
        position: `bottom-right`,
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  const handleReset = () => {
    // do nothing
  };

  return (
    <>
      <script async src='https://tally.so/widgets/embed.js'></script>

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
                height='200'
                frameborder='0'
                marginheight='0'
                marginwidth='0'
                title='Contact form'
              ></iframe>

              <Formik
                initialValues={{
                  email: ``,
                  subject: ``,
                  message: ``,
                }}
                validate={(values) => {
                  const errors = {};

                  if (!values.email) {
                    errors.email = `Required`;
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = `Invalid email address`;
                  }

                  if (!values.subject) {
                    errors.subject = `Required`;
                  }

                  if (!values.message) {
                    errors.message = `Required`;
                  }
                  return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                  // post data to edge function

                  fetch(`/api/contact`, {
                    method: `POST`,
                    body: JSON.stringify(values),
                  }).then(async (response) => {
                    const res = await response.json();
                    if (res.success) {
                      successNotify();
                      handleReset();
                    } else {
                      errorNotify();
                    }
                  });

                  setSubmitting(false);
                }}
              >
                {({ isSubmitting, dirty, handleReset }) => (
                  <Form className='hidden'>
                    <div className='flex flex-col py-3'>
                      <label
                        htmlFor='email'
                        className='mb-2 block text-sm font-medium text-gray-900 '
                      >
                        Email Address
                      </label>
                      <Field
                        disabled={true}
                        type='email'
                        name='email'
                        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500'
                      />
                      <ErrorMessage
                        name='email'
                        component='span'
                        className='pt-1 text-sm text-red-500'
                      />
                    </div>

                    <div className='flex flex-col py-3'>
                      <label
                        htmlFor='subject'
                        className='mb-2 block text-sm font-medium text-gray-900 '
                      >
                        Subject
                      </label>
                      <Field
                        disabled={true}
                        type='text'
                        name='subject'
                        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500'
                      />
                      <ErrorMessage
                        name='subject'
                        component='span'
                        className='pt-1 text-sm text-red-500'
                      />
                    </div>

                    <div className='flex flex-col py-3'>
                      <label
                        htmlFor='message'
                        className='mb-2 block text-sm font-medium text-gray-900 '
                      >
                        Your Message
                      </label>
                      <Field
                        disabled={true}
                        as='textarea'
                        name='message'
                        rows='4'
                        className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500'
                      />
                      <ErrorMessage
                        name='message'
                        component='span'
                        className='pt-1 text-sm text-red-500'
                      />
                    </div>

                    <div className='flex w-full flex-row items-center justify-center space-x-4 py-5'>
                      <button
                        type='button'
                        onClick={handleReset}
                        disabled={!dirty || isSubmitting}
                        className='hidden cursor-pointer rounded border-none bg-black px-6 py-2 text-lg text-white ring-2 ring-transparent ring-offset-2 transition-all hover:ring-pink-600 focus:outline-none focus:ring-pink-600'
                      >
                        Reset
                      </button>

                      <Button type='submit' disabled={isSubmitting}>
                        Send message
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>

              <ToastContainer
                position='bottom-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
