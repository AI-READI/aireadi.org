import { AiFillDollarCircle, AiOutlineAreaChart } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { HiBriefcase } from 'react-icons/hi';
import { IoSettings } from 'react-icons/io5';
import { RiStackFill } from 'react-icons/ri';

const FeaturesList = [
  {
    title: 'Marketing',
    description:
      'Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.',
    icon: <AiOutlineAreaChart size={25} />,
  },
  {
    title: 'Legal',
    description:
      'Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.',
    icon: <FaGraduationCap size={25} />,
  },
  {
    title: 'Business Automation',
    description:
      'Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.',
    icon: <HiBriefcase size={25} />,
  },
  {
    title: 'Finance',
    description:
      'Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.',
    icon: <AiFillDollarCircle size={25} />,
  },
  {
    title: 'Enterprise Design',
    description:
      'Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.',
    icon: <RiStackFill size={25} />,
  },
  {
    title: 'Operations',
    description:
      "Keep your company's lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
    icon: <IoSettings size={25} />,
  },
];

export default function FeatureList() {
  return (
    <section className='bg-white '>
      <div className='mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6'>
        <div className='mb-8 max-w-screen-md lg:mb-16'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-gray-900 '>
            Designed for business teams like yours
          </h2>
          <p className='text-gray-500  sm:text-xl'>
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
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
