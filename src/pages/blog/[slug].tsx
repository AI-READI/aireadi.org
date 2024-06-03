import { Avatar, Tag } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import { Icon } from '@iconify/react';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import markdownToHtml from '@/lib/markdownToHtml';

import Layout from '@/components/layout/Layout';
import PostBody from '@/components/post/PostBody';
import Seo from '@/components/Seo';

import TEAM_JSON from '~/data/team.json';

interface PostProps {
  slug: string;
  frontMatter: {
    title: string;
    date: string;
    authors: string[];
    heroImage: string;
    imageAuthor: string;
    imageAuthorLink: string;
    tags: string[];
    subtitle: string;
    categories: string[];
  };
  postContent: string;
}

interface Author {
  id: string;
  name: string;
  image: string;
  moduleImageParams: string;
}

const AllAuthors: Record<string, Author> = {};

TEAM_JSON.forEach((author) => {
  AllAuthors[author.id] = author;
});

// The page for each post
const BlogPost: React.FC<PostProps> = ({ slug, frontMatter, postContent }) => {
  const { title, authors, date, heroImage, categories, subtitle, tags } =
    frontMatter;

  const transformedAuthors: { name: string; image: string }[] = [];

  authors.forEach((author) => {
    if (AllAuthors[author]) {
      transformedAuthors.push({
        name: AllAuthors[author].name,
        image: AllAuthors[author].image + AllAuthors[author].moduleImageParams,
      });
    } else {
      transformedAuthors.push({
        name: author,
        image: `https://api.dicebear.com/6.x/shapes/svg?seed=${author}`,
      });
    }
  });

  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(`https://aireadi.org/blog/${slug}`)
      .then(() => {
        toast.success(`Copied to clipboard succesfully.`, {
          position: `bottom-right`,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((_error) => {
        toast.error(`Failed to copy to clipboard.`, {
          position: `bottom-right`,
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle={title + ` - Blog`} templateDescription={subtitle} />

        <div className='relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden px-5 py-5 sm:px-10 sm:py-10'>
          <div className='mb-10'>
            <ul className='flex items-center justify-start space-x-4'>
              {categories.map((category) => (
                <Link href={`category/${category}`} passHref key={category}>
                  <li className='mb-2 cursor-pointer text-lg font-bold text-sky-700 transition-all hover:text-sky-500'>
                    {category}
                  </li>
                </Link>
              ))}
            </ul>

            <h1 className='mb-3 max-w-screen-lg text-5xl font-extrabold text-slate-700'>
              {title}
            </h1>

            <p className='text-xl font-medium text-slate-600 sm:text-2xl'>
              {subtitle}
            </p>
          </div>

          <div className='relative mb-10 h-auto min-h-[200px] w-full sm:min-h-[300px] md:min-h-[450px]'>
            <Image
              src={heroImage}
              alt={title}
              fill
              className='h-full w-full rounded-xl object-cover object-top md:object-center'
              sizes='(max-width: 768px) 100vw, 50vw'
            />
          </div>

          <hr className='my-4 hidden border-dashed border-slate-200' />

          <div className='flex items-center justify-between divide-x py-3'>
            <ul className='flex flex-wrap text-sm leading-6'>
              {transformedAuthors.map((author) => (
                <li key={author.name} className='my-2 mr-5 flex items-center'>
                  <Avatar name={author.name} src={author.image} />

                  <div className='ml-3 flex flex-col justify-center'>
                    <span className='text-base font-medium'>{author.name}</span>
                  </div>
                </li>
              ))}
            </ul>

            <time dateTime={date} className='w-max p-2 text-sm text-slate-500'>
              {dayjs(date).format(`MMMM D, YYYY`)}
            </time>
          </div>

          <hr className='my-2 border border-sky-600' />

          <PostBody content={postContent} />

          <div className='my-3 flex items-center'>
            <span className='mr-3 font-medium'>Tags:</span>

            <div className='flex flex-wrap items-center justify-start space-x-3'>
              {tags.map((tag) => (
                <Link
                  href={`tag/${encodeURIComponent(tag)}`}
                  passHref
                  key={tag}
                >
                  <Tag variant='subtle' colorScheme='telegram'>
                    {tag}
                  </Tag>
                </Link>
              ))}
            </div>
          </div>

          <hr className='my-3 border-slate-300' />

          <div className='mb-10 flex flex-row items-center'>
            <span className='mr-2 text-base text-slate-600'>
              Share this article:{` `}
            </span>

            <a
              href={`http://twitter.com/share?text=I just read this article and think y'all need to take a look at this&url=https://aireadi.org/blog/${slug}&hashtags=FAIRData,OpenScience,OpenSource`}
              target='_blank'
              rel='noopener noreferrer'
              className='mx-2 text-slate-500 transition-all hover:text-sky-500'
              data-umami-event='Share article'
              data-umami-event-type='Twitter'
              aria-label='Share on Twitter'
            >
              <Icon icon='ri:twitter-x-fill' width='20' height='20' />
            </a>

            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://aireadi.org/blog/${slug}"`}
              target='_blank'
              rel='noopener noreferrer'
              className='mx-2 text-slate-500 transition-all hover:text-sky-500'
              data-umami-event='Share article'
              data-umami-event-type='Facebook'
              aria-label='Share on Facebook'
            >
              <Icon icon='akar-icons:facebook-fill' width='20' height='20' />
            </a>

            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://aireadi.org/blog/${slug}`}
              target='_blank'
              rel='noopener noreferrer'
              className='mx-2 text-slate-500 transition-all hover:text-sky-500'
              data-umami-event='Share article'
              data-umami-event-type='LinkedIn'
              aria-label='Share on LinkedIn'
            >
              <Icon
                icon='akar-icons:linkedin-box-fill'
                width='20'
                height='20'
              />
            </a>

            <div
              onClick={copyLinkToClipboard}
              className='mx-2 cursor-pointer text-slate-500 transition-all hover:text-sky-500'
              data-umami-event='Share article'
              data-umami-event-type='Copy URL'
              aria-label='Copy to clipboard'
            >
              <Icon icon='akar-icons:link-chain' width='20' height='20' />
            </div>
          </div>
        </div>

        <ToastContainer />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(`./blog`);

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(`.md`, ``),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// The page for each post

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug;

  const fileName = fs.readFileSync(`blog/${slug}.md`, `utf-8`);

  const { data: frontMatter, content: fileContent } = matter(fileName);

  const postContent = await markdownToHtml(fileContent || ``);

  return {
    props: {
      slug,
      frontMatter,
      postContent,
    },
  };
};

export default BlogPost;
