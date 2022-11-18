import styled from '@emotion/styled';

import Button from '@/components/buttons/Button';

const Container = styled.section`
  & {
    height: 40vh;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
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
  header,
  text,
}: {
  header: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <Container>
      <div className='mx-auto grid max-w-screen-xl px-4 py-8 text-white lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
        <div className='mr-auto place-self-center lg:col-span-7'>
          <h1 className='relative pb-5 text-6xl font-black'>{header}</h1>
          <p className='relative pb-5 text-2xl font-medium'>{text}</p>
          <div className='relative flex space-x-4'>
            <Button>Get Started</Button>
            <Button variant='outline'>Learn More</Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
