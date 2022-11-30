import { AiFillDollarCircle, AiOutlineAreaChart } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { HiBriefcase } from 'react-icons/hi';
import { IoSettings } from 'react-icons/io5';
import { RiStackFill } from 'react-icons/ri';

const FeaturesList = [
  {
    title: 'Data Acquisition',
    description: 'Collecting data across multiple sites',
    icon: <AiOutlineAreaChart size={25} />,
  },
  {
    title: 'Ethics',
    description:
      'Establishing ethical guidelines for sharing AI-ready datasets',
    icon: <FaGraduationCap size={25} />,
  },
  {
    title: 'Standards',
    description:
      'Establishing standards for preparing and sharing AI-ready datasets',
    icon: <HiBriefcase size={25} />,
  },
  {
    title: 'Teaming',
    description: 'Bringing together multidiciplinary teams',
    icon: <AiFillDollarCircle size={25} />,
  },
  {
    title: 'Tools',
    description:
      'Developing tools and software for managing, curating, and sharing AI-ready datasets',
    icon: <RiStackFill size={25} />,
  },
  {
    title: 'Skills & Workforce Development',
    description: 'Developing a diverse AI/ML-biomedical research workforce',
    icon: <IoSettings size={25} />,
  },
];

export default function FeatureList() {
  return (
    <section className='bg-white '>
      <div className='mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6'>
        <div className='mb-8 max-w-screen-md lg:mb-16'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 '>
            AI-READI Team
          </h2>
          <p className='text-gray-500  sm:text-xl'>
            The project team is structured into six modules, each leading a key
            aspect. Meet our team
          </p>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:grid-cols-3'>
          {FeaturesList.map((feature) => (
            <div key={feature.title}>
              <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary-100  lg:h-12 lg:w-12'>
                {feature.icon}
              </div>
              <h3 className='mb-2 text-xl font-bold '>{feature.title}</h3>
              <p className='text-gray-500 '>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
