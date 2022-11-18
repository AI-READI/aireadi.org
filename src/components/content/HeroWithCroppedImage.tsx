/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';

import Button from '@/components/buttons/Button';

const Container = styled.section`
  clip-path: polygon(7% 0, 100% 0%, 100% 100%, 0% 100%);
`;

export default function HeroWithCroppedImage() {
  return (
    <section className='bg-white'>
      <div className='mx-auto grid lg:grid-cols-12 lg:gap-8  xl:gap-0'>
        <div className='mx-auto place-self-center lg:col-span-7'>
          <h1 className='mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl'>
            Creating AI-ready datasets for the future
          </h1>
          <p className=' mb-6 max-w-2xl font-medium text-gray-500 md:text-lg lg:mb-8 lg:text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className='relative flex space-x-4'>
            <Button>Get Started</Button>
            <Button variant='outline'>Learn More</Button>
          </div>
        </div>
        <Container className='hidden lg:col-span-5 lg:mt-0 lg:flex'>
          <img src='https://tinyurl.com/yeyjvptc' alt='mockup' />
        </Container>
      </div>
    </section>
  );
}
