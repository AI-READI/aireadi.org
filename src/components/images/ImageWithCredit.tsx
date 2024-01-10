/* eslint-disable @next/next/no-img-element */
import { Icon } from '@iconify/react';

interface ImageProps {
  src: string;
  alt: string;
  author: string;
  authorLink?: string;
}

const ImageWithCredit: React.FC<ImageProps> = ({
  src,
  alt,
  author,
  authorLink,
}) => {
  return (
    <div className='group relative h-max w-full'>
      <img
        className='w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10'
        src={src}
        alt={alt}
      />

      <div className='overlay absolute bottom-0 right-0 z-20 flex w-full flex-row justify-end rounded-lg pb-1 pt-4 opacity-0 transition-all group-hover:opacity-100'>
        {(authorLink && (
          <a
            href={authorLink}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Image author'
          >
            <div className='flex items-center justify-center rounded-md py-1 pr-2 text-slate-50'>
              <Icon icon='ic:baseline-photo-camera-front' />
              {` `}
              <span className='ml-1 text-xs font-medium'>{author}</span>
            </div>
          </a>
        )) || (
          <div className='pointer-events-none flex items-center justify-center rounded-md py-1 pr-2 text-slate-50'>
            <Icon icon='ic:baseline-photo-camera-front' />
            {` `}
            <span className='ml-1 text-xs font-medium'>{author}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageWithCredit;
