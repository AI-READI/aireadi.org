const StatsList = [
  {
    heading: '$76 billion',
    text: 'Money saved by companies using our platform',
  },
  {
    heading: '600+',
    text: 'Datasets listed on our platform',
  },
  {
    heading: '90 million',
    text: `Registered users who trust us`,
  },
  {
    heading: '<0.10%',
    text: 'False positive rate',
  },
];

export default function StatsText() {
  return (
    <section className='bg-white '>
      <div className='mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6'>
        <h2 className='mb-4 text-4xl font-bold tracking-tight'>
          Sign up for our newsletter
        </h2>
        <p className='max-w-screen-md text-2xl font-light text-slate-600'>
          Stay up to date with the roadmap progress, announcements and exclusive
          discounts feel free to sign up with your email.
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
