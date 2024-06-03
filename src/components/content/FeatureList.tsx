import Link from 'next/link';
import { AiFillDatabase } from 'react-icons/ai';
import { BsTools } from 'react-icons/bs';
import { FaPencilRuler } from 'react-icons/fa';
import { GoLaw } from 'react-icons/go';
import { MdReduceCapacity } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { TbArrowNarrowRight } from 'react-icons/tb';

const FeaturesList = [
  {
    title: 'Data Acquisition',
    description: 'Collecting data across multiple sites',
    icon: <AiFillDatabase size={20} />,
    href: '/modules/data',
  },
  {
    title: 'Ethical and Trustworthy Artificial Intelligence',
    description:
      'Establishing ethical guidelines for sharing AI-ready datasets',
    icon: <GoLaw size={20} />,
    href: '/modules/ethics',
  },
  {
    title: 'Standards',
    description:
      'Establishing standards for preparing and sharing AI-ready datasets',
    icon: <FaPencilRuler size={20} />,
    href: '/modules/standards',
  },
  {
    title: 'Teaming',
    description: 'Bringing together multidisciplinary teams',
    icon: <RiTeamFill size={20} />,
    href: '/modules/teaming',
  },
  {
    title: 'Tools',
    description:
      'Developing tools and software for managing, curating, and sharing AI-ready datasets',
    icon: <BsTools size={20} />,
    href: '/modules/tools',
  },
  {
    title: 'Skills & Workforce Development',
    description: 'Developing a diverse AI/ML-biomedical research workforce',
    icon: <MdReduceCapacity size={20} />,
    href: '/modules/skills',
  },
];

export default function FeatureList() {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6'>
        <div className='g:mb-16 mb-8'>
          <h1 className='mb-2 text-center text-5xl font-bold tracking-tight'>
            AI-READI Team
          </h1>

          <p className='mb-12 text-center text-2xl font-medium text-slate-600'>
            The project team is structured into six modules, each leading a key
            aspect. Meet our team
          </p>
        </div>

        <div className='gap-x-8 md:grid md:grid-cols-2 md:gap-y-12 md:space-y-0 lg:grid-cols-3'>
          {FeaturesList.map((feature) => (
            <div key={feature.title}>
              <div className='mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white lg:h-12 lg:w-12'>
                {feature.icon}
              </div>
              <h3 className='text-lg font-semibold'>{feature.title}</h3>
              <p className='pb-3 font-normal text-gray-500'>
                {feature.description}
              </p>
              <Link
                href={feature.href}
                passHref
                className='flex w-max items-end space-x-1 text-base font-medium text-sky-700 transition-all hover:text-sky-500'
              >
                <span className=''>Read more</span>
                <TbArrowNarrowRight size={20} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
