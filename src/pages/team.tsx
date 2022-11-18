/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import {
  AiFillFacebook,
  AiFillGithub,
  AiFillTwitterSquare,
} from 'react-icons/ai';
import { BsGlobe } from 'react-icons/bs';

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

          <section className=' bg-white'>
            <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6 '>
              <div className='mx-auto mb-8 max-w-screen-sm text-center lg:mb-16'>
                <h2 className=' mb-4 text-5xl font-extrabold tracking-tight text-gray-900'>
                  Our Team
                </h2>
                <p className=' font-normal text-gray-500 sm:text-xl lg:mb-16'>
                  Meet the people behind the scenes who make it all happen. We
                  are a small team of scientists and engineers who are
                  passionate about making the world a better place.
                </p>
              </div>
              <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
                {TeamMembers.map((member) => (
                  <div
                    className='flex w-full flex-col items-center overflow-hidden rounded-lg bg-gray-50 shadow-lg sm:flex md:flex-row'
                    key={member.name}
                  >
                    <div className='h-auto w-full md:w-2/5'>
                      <a href='#'>
                        <img
                          className='h-full w-full rounded-none object-cover object-center'
                          src={member.image}
                          alt={member.name + ' image'}
                        />
                      </a>
                    </div>
                    <div className='w-full space-y-2 p-6 text-left md:w-3/5 md:p-4'>
                      <h3 className=' text-xl font-bold tracking-tight text-gray-900'>
                        <a href='#'>{member.name}</a>
                      </h3>
                      <span className=' text-gray-500'>{member.title}</span>
                      <p className=' mt-3 mb-4 font-light text-gray-500'>
                        {member.caption}
                      </p>
                      <ul className='flex space-x-4 sm:mt-0'>
                        {member.social.facebook && (
                          <li>
                            <a
                              href={member.social.facebook}
                              className='text-gray-500 transition-all hover:text-gray-900 '
                            >
                              <AiFillFacebook size={20} />
                              <span className='sr-only'>Facebook page</span>
                            </a>
                          </li>
                        )}
                        {member.social.twitter && (
                          <li>
                            <a
                              href={member.social.twitter}
                              className='text-gray-500 transition-all hover:text-gray-900 '
                            >
                              <AiFillTwitterSquare size={20} />
                              <span className='sr-only'>Twitter page</span>
                            </a>
                          </li>
                        )}
                        {member.social.github && (
                          <li>
                            <a
                              href={member.social.github}
                              className='text-gray-500 transition-all hover:text-gray-900 '
                            >
                              <AiFillGithub size={20} />
                              <span className='sr-only'>Github page</span>
                            </a>
                          </li>
                        )}
                        {member.social.website && (
                          <li>
                            <a
                              href={member.social.website}
                              className='text-gray-500 transition-all hover:text-gray-900 '
                            >
                              <BsGlobe size={20} />
                              <span className='sr-only'>website </span>
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
