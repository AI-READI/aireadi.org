const StatsList = [
  {
    heading: '4,000',
    text: 'Participants anticipated in the study',
  },
  {
    heading: '15+',
    text: 'Data types to be collected (vitals, electrocardiogram, etc.)',
  },
  {
    heading: '8',
    text: `Research institutions involved`,
  },
  {
    heading: '50+',
    text: 'Team members',
  },
];

export default function StatsText() {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>
        <h2 className='mb-4 text-4xl font-bold tracking-tight'>
          Snapshot of the AI-READI project
        </h2>
        <p className='max-w-screen-md text-2xl font-light text-slate-600'>
          Some key numbers from the project
        </p>
        <div className='grid pt-8 text-left md:grid-cols-4 md:gap-8'>
          {StatsList.map((stat) => (
            <div key={stat.heading}>
              <div className='mb-5'>
                <dt className='mb-3 flex items-center text-4xl font-bold text-gray-900'>
                  {stat.heading}
                </dt>

                <dd className='text-lg font-light text-slate-500'>
                  {stat.text}
                </dd>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
