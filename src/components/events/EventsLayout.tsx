import { Divider, Tag, VStack } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

import EventDates from '@/components/events/EventDates';

const EventsLayout: React.FC<EventsLayoutProps> = ({ eventList }) => {
  return (
    <>
      <hr className='mx-6 my-2 border-dashed border-slate-200' />

      {eventList.map((event) => (
        <div
          className='mb-4 grid w-full grid-cols-12 items-start gap-3 border-b px-2 py-4 md:px-7'
          key={event.slug}
        >
          <div className='col-span-8 px-4 py-3'>
            <VStack spacing={4} align='flex-start'>
              {dayjs(event.frontMatter.startDateTime).isAfter(dayjs()) && (
                <Tag variant='subtle' colorScheme='twitter'>
                  Upcoming
                </Tag>
              )}

              <Link href={`/events/${event.slug}`} passHref>
                <h2 className='mb-2 text-left text-3xl font-extrabold hover:underline'>
                  {event.frontMatter.title}
                </h2>
              </Link>
            </VStack>

            <p className='py-2 font-medium text-slate-700'>
              {event.frontMatter.subtitle}
            </p>

            <Divider />

            <div className='flex flex-col space-y-1 py-2'>
              <EventDates
                startDateTime={event.frontMatter.startDateTime}
                endDateTime={event.frontMatter.endDateTime}
              />

              <p className='my-1 text-sm font-light text-slate-600'>
                {event.timeToRead} min read
              </p>
            </div>
          </div>

          <div className='col-span-4 pl-8 pr-8'>
            <Link href={`/events/${event.slug}`} passHref>
              <div className='relative h-auto min-h-[200px] overflow-hidden rounded-xl sm:min-h-[300px] md:min-h-[300px]'>
                <Image
                  src={event.frontMatter.heroImage}
                  alt={event.frontMatter.title}
                  fill
                  className='h-full w-full cursor-pointer object-cover object-center transition-all hover:scale-[1.01] md:object-center'
                />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventsLayout;
