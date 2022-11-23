import Button from '@/components/buttons/Button';

export default function HeroImageBackground({
  heading,
  text,
}: {
  heading: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <section className=''>
      <div className='mx-auto max-w-screen-xl py-8 px-4 text-gray-500 sm:text-lg  lg:py-16 lg:px-6'>
        <h2 className='mb-4 text-4xl font-bold tracking-tight text-gray-900 '>
          {heading}
        </h2>
        <p className='mb-4 font-normal'>{text}</p>

        <Button>Learn more</Button>
      </div>
    </section>
  );
}
