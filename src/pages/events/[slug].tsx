import { Tag, VStack } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import { Icon } from '@iconify/react';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import markdownToHtml from '@/lib/markdownToHtml';

import EventDates from '@/components/events/EventDates';
import Layout from '@/components/layout/Layout';
import PostBody from '@/components/post/PostBody';
import Seo from '@/components/Seo';

// The page for each post
const EventPost: React.FC<EventItem> = ({ slug, frontMatter, content }) => {
  const {
    title,
    startDateTime,
    endDateTime,
    heroImage,
    subtitle,
    type,
    location,
    timezone,
  } = frontMatter;

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
            <span className='mb-3 text-lg font-bold text-sky-600 transition-all'>
              {type}
            </span>

            <h1 className='mb-3 max-w-screen-lg text-5xl font-extrabold text-slate-700'>
              {title}
            </h1>

            <p className='text-xl text-slate-600 sm:text-2xl'>{subtitle}</p>
          </div>

          <div className='relative mb-5 h-auto min-h-[200px] w-full sm:min-h-[300px] md:min-h-[450px]'>
            <Image
              src={heroImage}
              alt={title}
              fill
              className='h-full w-full rounded-xl object-contain'
              sizes='(max-width: 768px) 100vw, 50vw'
              priority
            />
          </div>

          <div className='flex items-center justify-between pb-4'>
            <VStack spacing={1} align='flex-start'>
              <EventDates
                startDateTime={startDateTime}
                endDateTime={endDateTime}
              />

              <Tag variant='subtle' colorScheme='twitter'>
                {location || `Online`}
              </Tag>
            </VStack>

            <AddToCalendarButton
              name={title}
              options={['Apple', 'Google', 'iCal', 'Outlook.com']}
              location={location || `Online`}
              startDate={dayjs(endDateTime).format(`YYYY-MM-DD`)}
              endDate={dayjs(endDateTime).format(`YYYY-MM-DD`)}
              startTime={dayjs(startDateTime).format(`HH:mm`)}
              endTime={dayjs(endDateTime).format(`HH:mm`)}
              timeZone={timezone || `America/Los_Angeles`}
              size='5'
              lightMode='system'
            />
          </div>

          <hr className='border border-sky-600' />

          <PostBody content={content} />

          <hr className='my-3 border-slate-300' />

          <div className='mb-10 flex flex-row items-center'>
            <span className='mr-2 text-base text-slate-600'>
              Share this event:{` `}
            </span>

            <a
              href={`http://twitter.com/share?text=Here is an event y'all need to take a look at&url=https://aireadi.org/events/${slug}&hashtags=FAIRData,OpenScience,OpenSource`}
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
              href={`https://www.facebook.com/sharer/sharer.php?u=https://aireadi.org/events/${slug}"`}
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
              href={`https://www.linkedin.com/sharing/share-offsite/?url=https://aireadi.org/events/${slug}`}
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
  const files = fs.readdirSync(`./events`);

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

  const fileName = fs.readFileSync(`events/${slug}.md`, `utf-8`);

  const { data: frontMatter, content: fileContent } = matter(fileName);

  const content = await markdownToHtml(fileContent || ``);

  return {
    props: {
      slug,
      frontMatter,
      content,
    },
  };
};

export default EventPost;
