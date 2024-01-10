import Button from '@/components/buttons/Button';

export default function HeroImageBackground({
  title,
  tagline,
  image,
  showButtons = false,
  primaryButton,
  secondaryButton,
}: HeroContent) {
  return (
    <section
      className={
        `relative flex h-[60vh] w-full items-center justify-center text-white md:h-[40vh] ` +
        (image === 'home-hero-image'
          ? 'before:bg-home-hero-image'
          : 'before:bg-hero-image') +
        ` before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-cover before:bg-center before:bg-no-repeat before:brightness-[0.4] before:content-['']`
      }
    >
      <div className='mx-auto grid max-w-screen-2xl px-6 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0'>
        <div className='mr-auto place-self-center lg:col-span-8'>
          <h1 className='relative pb-5 text-4xl font-black sm:text-5xl md:text-6xl'>
            {title}
          </h1>

          {tagline && (
            <p className='relative pb-5 text-xl font-medium sm:text-2xl'>
              {tagline}
            </p>
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
    </section>
  );
}
