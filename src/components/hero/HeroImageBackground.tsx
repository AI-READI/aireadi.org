import styled from '@emotion/styled';

import Button from '@/components/buttons/Button';

const Container = styled.section`
  &:before {
    content: '';
    background-image: url(https://images.unsplash.com/photo-1583912086096-8c60d75a53f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.4);
  }
`;

export default function HeroImageBackground({
  title,
  tagline,
  showButtons = false,
  primaryButton,
  secondaryButton,
}: HeroContent) {
  return (
    <Container className='relative flex h-[70vh] w-full items-center justify-center text-white sm:h-[40vh]'>
      <div className='mx-auto grid max-w-screen-xl px-6 py-8  lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='relative pb-5 text-5xl font-black sm:text-6xl'>
            {title}
          </h1>

          {tagline && (
            <p className='relative pb-5 text-2xl font-medium'>{tagline}</p>
          )}

          {showButtons && (
            <div className='relative flex space-x-4'>
              {primaryButton && <Button>{primaryButton}</Button>}

              {secondaryButton && (
                <Button variant='outline'>{secondaryButton}</Button>
              )}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
