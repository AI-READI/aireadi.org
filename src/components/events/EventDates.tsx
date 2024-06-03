import dayjs from 'dayjs';

interface EventDateItemProps {
  startDateTime: string;
  endDateTime: string;
}

const EventDates: React.FC<EventDateItemProps> = ({
  startDateTime,
  endDateTime,
}) => {
  const isSameDay = dayjs(startDateTime).isSame(dayjs(endDateTime), 'day');

  return (
    <p className='font-medium'>
      <time className='text-base text-slate-700'>
        {dayjs(startDateTime).format(`dddd, MMMM D, YYYY - hh:mm a`)}
      </time>{' '}
      <span className='font-normal text-slate-600'>to</span>{' '}
      {isSameDay ? (
        <time className='text-base text-slate-700'>
          {dayjs(endDateTime).format(`hh:mm a`)}
        </time>
      ) : (
        <time className='text-base text-slate-700'>
          {dayjs(endDateTime).format(`dddd, MMMM D, YYYY - hh:mm a`)}
        </time>
      )}
    </p>
  );
};

export default EventDates;
