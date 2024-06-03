/* eslint-disable @next/next/no-img-element */
import { Divider } from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { BiBuildingHouse } from 'react-icons/bi';
import { BsGlobe, BsMastodon } from 'react-icons/bs';
import { FaHospitalUser } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import TEAM_JSON from '~/data/team.json';

const TeamPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  TeamMembers,
}) => (
  <>
    <SkipNavLink>Skip to content</SkipNavLink>

    <Layout>
      <Seo templateTitle='Meet the Team' />

      <main>
        <SkipNavContent />

        <section className='bg-white !font-primary'>
          <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
            <div className='mx-auto mb-8 max-w-screen-sm text-center lg:mb-16'>
              <h1 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Our Team
              </h1>
              <p className='mb-6 text-xl font-medium text-slate-600 sm:mb-8'>
                Meet the people behind the scenes who make it all happen
              </p>
            </div>

            <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
              {TeamMembers.map((member, index) => (
                <div
                  className='flex w-full flex-col items-start overflow-hidden rounded-lg bg-gray-50 shadow-lg md:flex-row'
                  key={member.name}
                  id={member.id}
                >
                  <div className='relative h-full min-h-[500px] w-full md:min-h-fit md:w-[45%]'>
                    <Image
                      src={member.image}
                      alt='user profile picture'
                      fill
                      placeholder='blur'
                      priority={index < 6}
                      blurDataURL={member.blurDataURL}
                      className='h-full w-full object-cover object-top md:object-center'
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                  </div>

                  <div className='w-full px-6 py-8 text-left md:w-[55%] md:p-4'>
                    <h3 className='text-xl font-extrabold text-gray-900'>
                      {member.name}{' '}
                      {member.pronoun && (
                        <span className='text-large font-medium text-gray-600'>
                          ({member.pronoun})
                        </span>
                      )}
                    </h3>

                    {member.roles.map((role, index) => (
                      <p className='font-semibold' key={index}>
                        {role}
                      </p>
                    ))}

                    <Divider className='my-1' />

                    <div className='my-2'>
                      {member.department && (
                        <div className='my-1 flex items-start font-medium text-gray-600'>
                          <div className='mt-1 h-[20px] w-[20px]'>
                            <IoSchoolSharp size={20} />
                          </div>
                          <p className='ml-2'>{member.department}</p>
                        </div>
                      )}

                      {member.organization && (
                        <div className='my-1 flex items-start font-semibold text-sky-700'>
                          <div className='mt-1 h-[20px] w-[20px]'>
                            <BiBuildingHouse size={20} />
                          </div>
                          <p className='ml-2'>{member.organization}</p>
                        </div>
                      )}
                    </div>

                    <div className='mb-3 flex items-center font-semibold text-slate-600'>
                      <MdLocationOn size={20} />
                      <p className='ml-2'>{member.location}</p>
                    </div>

                    <Divider />

                    <p className='mb-1 mt-3 px-1 text-lg md:text-base'>
                      {member.caption}
                    </p>

                    {/* <Divider className='my-2' /> */}

                    {/* <ModulesSection modules={member.modules} /> */}

                    {Object.keys(member.social).length > 0 && (
                      <Divider className='my-2' />
                    )}

                    <ul className='flex space-x-3 sm:mt-0'>
                      {'twitter' in member.social && (
                        <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                          <a
                            href={member.social.twitter}
                            rel='noopener noreferrer'
                            target='_blank'
                            className='cursor-newtab'
                          >
                            <AiOutlineTwitter size={25} />
                            <span className='sr-only'> Twitter page </span>
                          </a>
                        </li>
                      )}

                      {'mastodon' in member.social && (
                        <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                          <a
                            href={member.social.mastodon}
                            rel='noopener noreferrer'
                            target='_blank'
                            className='cursor-newtab'
                          >
                            <BsMastodon size={20} />
                            <span className='sr-only'> mastodon page </span>
                          </a>
                        </li>
                      )}

                      {'instagram' in member.social && (
                        <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                          <a
                            href={member.social.instagram as string}
                            rel='noopener noreferrer'
                            target='_blank'
                            className='cursor-newtab'
                          >
                            <RiInstagramFill size={20} />
                            <span className='sr-only'> instagram page </span>
                          </a>
                        </li>
                      )}

                      {'github' in member.social && (
                        <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                          <a
                            href={member.social.github}
                            rel='noopener noreferrer'
                            target='_blank'
                            className='cursor-newtab'
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
                            className='cursor-newtab'
                          >
                            <AiFillLinkedin size={25} />
                            <span className='sr-only'> Linkedin </span>
                          </a>
                        </li>
                      )}

                      {'profiles' in member.social && (
                        <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                          <a
                            href={member.social.profiles}
                            rel='noopener noreferrer'
                            target='_blank'
                            className='cursor-newtab'
                          >
                            <HiUserGroup size={20} />
                            <span className='sr-only'> website </span>
                          </a>
                        </li>
                      )}

                      {'medprofile' in member.social && (
                        <li className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'>
                          <a
                            href={member.social.medprofile}
                            rel='noopener noreferrer'
                            target='_blank'
                            className='cursor-newtab'
                          >
                            <FaHospitalUser size={22} />
                            <span className='sr-only'> website </span>
                          </a>
                        </li>
                      )}

                      {'website' in member.social &&
                        member.social.website?.map((website: string) => (
                          <li
                            className='flex items-center justify-center text-gray-500 transition-all hover:text-sky-600'
                            key={website}
                          >
                            <a
                              href={website}
                              rel='noopener noreferrer'
                              target='_blank'
                              className='cursor-newtab'
                            >
                              <BsGlobe size={20} />
                              <span className='sr-only'> website </span>
                            </a>
                          </li>
                        ))}
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

export const getStaticProps = async () => {
  const TeamMembers = await Promise.all(
    TEAM_JSON.map(async (member) => {
      const {
        base64,
        // eslint-disable-next-line unused-imports/no-unused-vars
        img: { width, height, ...img },
      } = await getPlaiceholder(member.image);

      return {
        ...img,
        alt: `${member.name} profile picture`,
        ...member,
        blurDataURL: base64,
      };
    }),
  ).then((values) => values);

  // sort by name
  TeamMembers.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }

    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });

  // sort modules by name
  TeamMembers.forEach((member) => {
    member.modules.sort((a, b) => {
      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });
  });

  return {
    props: {
      TeamMembers,
    },
  };
};

export default TeamPage;
