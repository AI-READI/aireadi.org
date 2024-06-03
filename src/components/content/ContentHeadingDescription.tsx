import Button from '@/components/buttons/Button';

export default function ContentHeadingDescription({
  title,
  text,
  showButtons = false,
  primaryButton,
}: TextContent) {
  return (
    <section className=''>
      <div className='mx-auto max-w-screen-xl px-4 py-8 text-gray-500 sm:text-lg lg:px-6 lg:py-16'>
        <h2 className='mb-4 text-4xl font-bold tracking-tight text-gray-900'>
          {title}
        </h2>
        <p className='mb-4 font-normal'>{text}</p>
        {showButtons && (
          <div className='py-4'>
            {primaryButton && <Button>{primaryButton}</Button>}
          </div>
        )}
      </div>
    </section>
  );
}
