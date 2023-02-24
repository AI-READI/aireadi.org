import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import LottieAnimation from '@/components/lotties';
import Seo from '@/components/Seo';

import heroLottie from '~/lotties/404.json';

export default function NotFoundPage() {
  return (
    <Layout>
      <Seo templateTitle='404' />

      <main>
        <section className='layout flex h-[calc(100vh-60px)] flex-col items-center justify-center text-center'>
          <div className='flex items-center justify-center space-x-4'>
            <LottieAnimation
              animationData={heroLottie}
              width={250}
              height={250}
            />
            <div className='max-w-lg text-left'>
              <h1 className='mt-8 text-6xl font-black'>404!</h1>
              <h2 className='my-4 text-2xl'>
                The page you are looking for might have been removed or had its
                name changed or is temporarily unavailable.
              </h2>
              <ArrowLink
                className='mt-4 inline-flex items-center md:text-lg'
                href='/'
                as={ButtonLink}
                variant='light'
              >
                Back to Home
              </ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
