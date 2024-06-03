import { Divider } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

interface PostItem {
  slug: string;
  timeToRead: number;

  frontMatter: {
    title: string;
    date: string;
    tags: string[];
    subtitle: string;
    categories: string[];
    heroImage: string;
  };
}

interface PostLayoutProps {
  PostList: PostItem[];
}

const PostLayout: React.FC<PostLayoutProps> = ({ PostList }) => {
  return (
    <>
      <hr className='mx-6 my-2 border-dashed border-slate-200' />

      {PostList.length > 0 ? (
        <div className='flex w-full flex-col-reverse items-start space-x-4 px-8 py-3 lg:flex-row lg:py-6'>
          <div className='px-4 py-3 lg:w-5/12 lg:px-0 lg:py-0'>
            <Link
              className='w-max'
              href={`/blog/category/${PostList[0].frontMatter.categories[0]}`}
              key={PostList[0].frontMatter.categories[0]}
            >
              <span className='mb-2 cursor-pointer text-lg font-bold text-sky-500 transition-all hover:text-sky-700'>
                {PostList[0].frontMatter.categories[0]}
              </span>
            </Link>

            <Link href={`/blog/${PostList[0].slug}`} passHref>
              <h2 className='mb-2 text-left text-3xl font-extrabold hover:underline'>
                {PostList[0].frontMatter.title}
              </h2>
            </Link>

            <p className='py-2 font-medium text-slate-700'>
              {PostList[0].frontMatter.subtitle}
            </p>

            <Divider />

            <div className='flex flex-col py-2'>
              <time className='mb-1 mr-2 mt-1 text-base font-normal text-slate-600'>
                {dayjs(PostList[0].frontMatter.date).format(`MMMM D, YYYY`)}
              </time>

              <p className='my-1 text-sm font-light text-slate-600'>
                {PostList[0].timeToRead} min read
              </p>
            </div>
          </div>

          <div className='w-full pl-8 pr-8 lg:w-7/12 lg:pr-0'>
            <Link href={`/blog/${PostList[0].slug}`} passHref>
              <div className='relative h-auto min-h-[200px] overflow-hidden rounded-xl sm:min-h-[300px] md:min-h-[300px]'>
                <Image
                  src={PostList[0].frontMatter.heroImage}
                  alt={PostList[0].frontMatter.title}
                  fill
                  className='h-full w-full cursor-pointer object-cover object-center transition-all hover:scale-[1.01] md:object-center'
                />
              </div>
            </Link>
          </div>
        </div>
      ) : null}

      {PostList.length > 1 ? (
        <>
          <div className='grid grid-cols-1 gap-6 px-1 py-6 sm:px-6 lg:grid-cols-2'>
            {PostList.map((post) => (
              <div
                className={
                  'flex flex-col border-t border-slate-200 px-4 pt-8 lg:border-b lg:pb-5 ' +
                  (post === PostList[0] ? 'hidden' : '')
                }
                key={post.slug}
              >
                <Link href={`/blog/${post.slug}`} passHref>
                  <div className='relative h-[300px] w-full overflow-hidden rounded-lg'>
                    <Image
                      src={post.frontMatter.heroImage}
                      alt={post.frontMatter.title}
                      fill
                      className='h-full w-full object-cover object-center transition-all hover:scale-[1.01]'
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                  </div>
                </Link>

                <div className='flex flex-col px-1 py-3'>
                  <Link
                    className='w-max'
                    href={`/blog/category/${post.frontMatter.categories[0]}`}
                    key={post.frontMatter.categories[0]}
                  >
                    <span className='mb-2 cursor-pointer text-lg font-bold text-sky-600 transition-all hover:text-sky-800'>
                      {post.frontMatter.categories[0]}
                    </span>
                  </Link>

                  <Link href={`/blog/${post.slug}`} passHref>
                    <h3 className='text-left text-2xl font-bold hover:underline'>
                      {post.frontMatter.title}
                    </h3>
                  </Link>

                  <p className='pt-1 font-medium text-slate-600'>
                    {post.frontMatter.subtitle}
                  </p>

                  <div className='flex flex-col py-2'>
                    <time className='pb-1 text-base font-normal text-slate-600'>
                      {dayjs(post.frontMatter.date).format(`MMMM D, YYYY`)}
                    </time>

                    <p className='text-sm font-light text-slate-600'>
                      {post.timeToRead} min read
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default PostLayout;
