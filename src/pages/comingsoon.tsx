import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';

import LottieAnimation from '@/components/lotties';
import Seo from '@/components/Seo';

import heroLottie from '~/lotties/construction.json';

export default function NotFoundPage() {
  const router = useRouter();

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'p') {
        router.push('/team');
      }
    },
    [router]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <>
      <Seo templateTitle='Not Found' />

      <main>
        <section className='flex h-full '>
          <div className='mx-auto flex flex-col items-center justify-center'>
            <LottieAnimation
              animationData={heroLottie}
              width={500}
              height={500}
            />
            <div className='max-w-screen-lg px-3 text-left'>
              <h2 className='text-center text-5xl font-black'>
                This page is under construction. Please check back later.
              </h2>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
