/* eslint-disable @next/next/no-img-element */
import styled from '@emotion/styled';

import Button from '@/components/buttons/Button';

const Container = styled.div`
  position: relative;
`;

export default function HeroWithCroppedImage({
  title,
  tagline,
  image,
  showButtons = false,
  primaryButton,
  secondaryButton,
}: HeroContent) {
  return (
    <section className='mx-auto grid font-primary lg:grid-cols-12 lg:gap-8 xl:gap-0'>
      <div className='mx-auto place-self-center py-20 px-6 lg:col-span-7 xl:px-0'>
        <h1 className='mb-4 max-w-2xl pb-5 text-5xl font-extrabold leading-none tracking-tight sm:text-6xl'>
          {title}
        </h1>
        <p className=' mb-6 max-w-2xl font-medium text-gray-500 md:mb-8  md:text-xl'>
          {tagline}
        </p>
        {showButtons && (
          <div className='relative flex space-x-4'>
            {primaryButton && <Button>{primaryButton}</Button>}

            {secondaryButton && (
              <Button variant='outline'>{secondaryButton}</Button>
            )}
          </div>
        )}
      </div>
      {image && (
        <Container className='lg:hero-cropped-clip-path p-4 lg:col-span-5 lg:mt-0 lg:flex lg:p-0'>
          <img
            src={image}
            className='rounded-lg lg:rounded-none'
            alt='mockup'
          />
        </Container>
      )}
    </section>
  );
}
