/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsGlobe } from 'react-icons/bs';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import TeamMembers from '~/data/team.json';

export default function TeamPage() {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        {/* <Seo templateTitle='Home' /> */}
        <Seo />

        <main>
          <SkipNavContent />

          <section className='bg-white !font-primary'>
            <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6 '>
              <div className='mx-auto mb-8 max-w-screen-sm text-center lg:mb-16'>
                <h1 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                  Our Team
                </h1>
                <p className='mb-6 text-xl font-medium text-slate-600 sm:mb-8'>
                  Meet the people behind the scenes who make it all happen.
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                {TeamMembers.map((member) => (
                  <div
                    className='flex w-full flex-col items-start overflow-hidden rounded-lg bg-gray-50 shadow-lg sm:flex md:flex-row'
                    key={member.name}
                  >
                    <div className='h-full w-full md:w-2/5'>
                      <img
                        className='h-full w-full object-cover object-center'
                        src={member.image}
                        alt={member.name + ' image'}
                      />
                    </div>

                    <div className='w-full py-8 px-6 text-left md:w-3/5 md:p-4'>
                      <h3 className='text-xl font-extrabold  text-gray-900'>
                        {member.name}
                      </h3>

                      <p className='font-semibold'>{member.role}</p>

                      <div className='my-2'>
                        <div className='my-1 flex items-start font-medium text-gray-600'>
                          <div className='mt-1 h-[20px] w-[20px]'>
                            <IoSchoolSharp size={20} />
                          </div>
                          <p className='ml-2'>{member.department}</p>
                        </div>

                        <div className='my-1 flex items-start font-semibold text-sky-700'>
                          <div className='mt-1 h-[20px] w-[20px]'>
                            <BiBuildingHouse size={20} />
                          </div>
                          <p className='ml-2'>{member.organization}</p>
                        </div>
                      </div>

                      <p className='mt-3 mb-1 px-1 text-base'>
                        {member.caption}
                      </p>

                      <div className='mb-5 flex items-center font-semibold text-sky-700'>
                        <MdLocationOn size={20} />
                        <p className='ml-1 '>{member.location}</p>
                      </div>

                      <ul className='flex space-x-3  sm:mt-0'>
                        {'twitter' in member.social && (
                          <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                            <a
                              href={member.social.twitter}
                              rel='noopener noreferrer'
                              target='_blank'
                            >
                              <AiOutlineTwitter size={25} />
                              <span className='sr-only'> Twitter page </span>
                            </a>
                          </li>
                        )}

                        {'github' in member.social && (
                          <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                            <a
                              href={member.social.github}
                              rel='noopener noreferrer'
                              target='_blank'
                            >
                              <AiFillGithub size={25} />
                              <span className='sr-only'> Github page </span>
                            </a>
                          </li>
                        )}

                        {'linkedin' in member.social && (
                          <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                            <a
                              href={member.social.linkedin}
                              rel='noopener noreferrer'
                              target='_blank'
                            >
                              <AiFillLinkedin size={25} />
                              <span className='sr-only'> Linkedin </span>
                            </a>
                          </li>
                        )}

                        {'website' in member.social && (
                          <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                            <a
                              href={member.social.website}
                              rel='noopener noreferrer'
                              target='_blank'
                            >
                              <BsGlobe size={20} />
                              <span className='sr-only'> website </span>
                            </a>
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
