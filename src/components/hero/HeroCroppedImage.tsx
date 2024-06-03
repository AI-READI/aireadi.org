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
  imageAlt = 'Alt text',
  showButtons = false,
  primaryButton,
  secondaryButton,
}: HeroContent) {
  return (
    <section className='mx-auto grid max-w-screen-xl py-8 font-primary lg:grid-cols-12 lg:gap-8 xl:gap-0'>
      <div className='mx-auto place-self-center px-6 py-2 lg:col-span-6 xl:px-0'>
        <h1 className='relative pb-4 text-4xl font-black sm:text-5xl'>
          {title}
        </h1>

        <p className='relative pb-5 text-xl font-normal sm:text-2xl'>
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
      <div className='lg:col-span-1'></div>
      {image && (
        <Container className='lg:hero-cropped-clip-path p-4 lg:col-span-5 lg:mt-0 lg:flex lg:p-0'>
          <img
            src={image}
            className='rounded-lg lg:rounded-none'
            alt={imageAlt}
          />
        </Container>
      )}
    </section>
  );
}
