/* eslint-disable @next/next/no-img-element */
export default function ContentWithImages({
  title,
  text,
  image1,
  image2,
}: TextWithImagesContent) {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16'>
        <div className='font-normal text-gray-500 sm:text-lg'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900'>
            {title}
          </h2>
          {text.map((paragraph, index) => (
            <p key={index} className='mb-4'>
              {paragraph}
            </p>
          ))}
        </div>
        <div className='mt-8 grid grid-cols-2 gap-4'>
          <img
            className='w-full rounded-lg'
            src={image1}
            alt='office content 1'
          />
          <img
            className='mt-4 w-full rounded-lg lg:mt-10'
            src={image2}
            alt='office content 2'
          />
        </div>
      </div>
    </section>
  );
}
