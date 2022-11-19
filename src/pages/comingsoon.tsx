import LottieAnimation from '@/components/lotties';
import Seo from '@/components/Seo';

import heroLottie from '~/lotties/construction.json';

export default function NotFoundPage() {
  return (
    <>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='layout flex h-[calc(100vh-60px)] flex-col items-center justify-center text-center'>
          <div className='flex flex-col items-center justify-center space-x-4'>
            <LottieAnimation
              animationData={heroLottie}
              width={500}
              height={500}
            />
            <div className='max-w-screen-lg text-left'>
              <h2 className='text-center text-6xl font-black'>
                This page is under construction. Please check back later.
              </h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
