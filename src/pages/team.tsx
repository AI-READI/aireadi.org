/* eslint-disable @next/next/no-img-element */
import { Divider } from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { BiBuildingHouse, BiNetworkChart } from 'react-icons/bi';
import { BsGlobe, BsMastodon } from 'react-icons/bs';
import { FaHospitalUser } from 'react-icons/fa';
import { HiUserGroup } from 'react-icons/hi';
import { IoSchoolSharp } from 'react-icons/io5';
import { MdLocationOn } from 'react-icons/md';
import { RiInstagramFill } from 'react-icons/ri';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import TEAM_JSON from '~/data/team.json';

const ModulesSection = ({ modules }: { modules: string[] }) => {
  const getModule = (module: string) => {
    switch (module) {
      case 'ethics':
        return 'Ethics';
      case 'data':
        return 'Data';
      case 'skills':
        return 'Skills and Workforce Development';
      case 'tools':
        return 'Tools';
      case 'standards':
        return 'Standards';
      case 'teaming':
        return 'Teaming';
      case 'administration':
        return 'Administration';
      default:
        return 'Unknown';
    }
  };

  return (
    <div className='flex space-x-2'>
      <BiNetworkChart size={25} />
      <div className='divide-x-2'>
        {modules.map((module) => (
          <a
            href={`/modules${module !== 'administration' ? '/' + module : ''}`}
            key={module}
            rel='noopener noreferrer'
            className='pl-1 text-sm font-medium text-gray-500 transition-all hover:text-sky-600'
          >
            <span className=''> {getModule(module)} </span>
          </a>
        ))}
      </div>
    </div>
  );
};

const TeamPage: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  TeamMembers,
}) => (
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
                  className='flex w-full flex-col items-start overflow-hidden rounded-lg bg-gray-50 shadow-lg md:flex-row'
                  key={member.name}
                  id={member.id}
                >
                  <div className='relative h-full min-h-[500px] w-full md:min-h-fit md:w-2/5 '>
                    <Image
                      src={member.image}
                      alt='user profile picture'
                      fill
                      placeholder='blur'
                      blurDataURL={member.blurDataURL}
                      className='h-full w-full object-cover object-top md:object-center'
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                  </div>

                  <div className='w-full py-8 px-6 text-left md:w-3/5 md:p-4'>
                    <h3 className='text-xl font-extrabold  text-gray-900'>
                      {member.name}
                    </h3>

                    <p className='font-semibold'>{member.role}</p>

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

                      <div className='my-1 flex items-start font-semibold text-sky-700'>
                        <div className='mt-1 h-[20px] w-[20px]'>
                          <BiBuildingHouse size={20} />
                        </div>
                        <p className='ml-2'>{member.organization}</p>
                      </div>
                    </div>

                    <div className='mb-3 flex items-center font-semibold text-slate-600'>
                      <MdLocationOn size={20} />
                      <p className='ml-2 '>{member.location}</p>
                    </div>

                    <Divider />

                    <p className='mt-3 mb-1 px-1 text-lg md:text-base'>
                      {member.caption}
                    </p>

                    <Divider className='my-2' />

                    <ModulesSection modules={member.modules} />

                    <Divider className='my-2' />

                    <ul className='flex space-x-3  sm:mt-0'>
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
                            href={member.social.instagram}
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
                            <FaHospitalUser size={20} />
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
    })
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

  return {
    props: {
      TeamMembers,
    },
  };
};

export default TeamPage;
