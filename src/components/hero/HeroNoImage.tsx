import Button from '@/components/buttons/Button';

export default function HeroWithCroppedImage({
  title,
  tagline,
  showButtons = false,
  primaryButton,
  secondaryButton,
}: HeroContent) {
  return (
    <section className='mx-auto grid max-w-screen-xl py-8 font-primary lg:grid-cols-12 lg:gap-8 xl:gap-0'>
      <div className='mx-auto place-self-center px-6 py-2 lg:col-span-7 xl:px-0'>
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
    </section>
  );
}
