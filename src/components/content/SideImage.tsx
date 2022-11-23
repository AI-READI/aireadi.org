/* eslint-disable @next/next/no-img-element */
import Button from '@/components/buttons/Button';

export default function HeroSideImage({
  header,
  text,
}: {
  header: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <section className='bg-white'>
      <div className='mx-auto grid max-w-screen-xl px-4 py-8 sm:grid-cols-12 sm:gap-8 sm:py-16 xl:gap-0'>
        <div className='mr-auto place-self-center sm:col-span-7'>
          <h1 className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl'>
            {header}
          </h1>
          <p className='mb-6 max-w-2xl font-medium text-gray-500 sm:mb-8 sm:text-xl md:text-lg'>
            {text}
          </p>
          <div className='relative flex space-x-4'>
            <Button>Get Started</Button>
            <Button variant='outline'>Learn More</Button>
          </div>
        </div>
        <div className=' sm:col-span-5 sm:mt-0 sm:flex'>
          <img
            src='https://images.unsplash.com/photo-1587334274328-64186a80aeee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80'
            alt='mockup'
          />
        </div>
      </div>
    </section>
  );
}
