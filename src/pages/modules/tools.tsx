import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { motion } from 'framer-motion';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import ResourcesItemIcon from '@/components/icons/ResourcesItemIcon';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import { FramerContainer, FramerItem } from '@/utils/framer';

import TEAM_JSON from '~/data/team.json';

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

        <HeroCroppedImage
          title='Tools'
          image='https://images.unsplash.com/photo-1629904869392-ae2a682d4d01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80'
          tagline='Developing tools and software for managing, curating, and sharing AI-ready datasets.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

        <section className='bg-white'>
          <div className='mx-auto grid max-w-screen-xl grid-cols-1 gap-10 py-8 px-4 text-left md:grid-cols-2 lg:py-16 lg:px-6'>
            <div>
              <h2 className='mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Overview of the Tools Module
              </h2>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                EThe Tools module is developing fairhub.io, a platform for
                easily managing, preparing, and sharing FAIR and AI-ready
                datasets.
              </p>
            </div>
            <div>
              <p className='mb-4 text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                Leveraging a partnership with Microsoft, fairhub.io will be
                developed using Azure Cloud Services. The platform will include
                convenient tools to track clinical and biomedical data
                collection, prepare and share FAIR data, and conveniently access
                data for future AI/ML analysis.
              </p>
              <p className='text-gray-700 sm:mb-4 sm:text-xl md:text-lg'>
                In addition, the Tools module will support the effort of the
                Data Acquisition module by setting up and managing additional
                tools such REDCap.
              </p>
            </div>
          </div>
        </section>

        <section className='bg-white'>
          <div className='mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6'>
            <div className='mx-auto mb-6 max-w-screen-sm text-center lg:mb-8'>
              <h2 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Resources
              </h2>
            </div>

            <ul>
              {Resources.map((resource) => (
                <li
                  className='mb-8 flex items-start space-x-4'
                  key={resource.title}
                >
                  <ResourcesItemIcon type={resource.type} />
                  <div className='pt-2'>
                    <UnstyledLink
                      href={resource.link}
                      className='flex w-max items-center space-x-1 text-lg font-medium text-sky-700 transition-all hover:text-sky-500'
                    >
                      <p className='text-xl font-medium'>{resource.title}</p>
                    </UnstyledLink>
                    <p className='pt-1 text-lg font-normal text-gray-700'>
                      {resource.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className='bg-white '>
          <div className='mx-auto max-w-screen-xl py-8 px-4 text-center lg:py-16 lg:px-6'>
            <div className='mx-auto mb-6 max-w-screen-sm lg:mb-8'>
              <h2 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Module Members
              </h2>

              <p className='mb-4 text-xl font-medium text-slate-600'>
                Meet the people behind the scenes who make it all happen.
              </p>
            </div>

            <motion.div
              variants={FramerContainer}
              initial='hidden'
              whileInView='show'
              viewport={{ once: true }}
              className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8'
            >
              {TeamMembers.map((member) => (
                <motion.div
                  variants={FramerItem}
                  key={member.id}
                  id={member.id}
                >
                  <UnstyledLink href={`/team#${member.id}`} key={member.id}>
                    <div
                      className='h-full cursor-pointer rounded-lg border-solid bg-slate-100 px-4 py-4 transition-all hover:bg-sky-100'
                      key={member.name}
                    >
                      <div className='relative mx-auto mb-2 min-h-[350px] w-full'>
                        <Image
                          src={member.image}
                          alt={member.name + ' image'}
                          fill
                          placeholder='blur'
                          blurDataURL={member.blurDataURL}
                          className='h-full w-full rounded-lg object-cover '
                          sizes='(max-width: 768px) 100vw, 50vw'
                        />
                      </div>

                      <h3 className='pt-4 pb-1 text-2xl font-extrabold text-slate-800'>
                        {member.name}
                      </h3>

                      {member.roles.map((role, index) => (
                        <p
                          className='text-sm font-medium text-slate-600'
                          key={index}
                        >
                          {role}
                        </p>
                      ))}
                    </div>
                  </UnstyledLink>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  </>
);

const Resources = [
  {
    title: 'The fairhub.io platform',
    description: 'Link to the fairhub.io platform',
    link: 'https://fairhub.io',
    type: 'website',
  },
  {
    title: 'GitHub organization of the AI-READI project',
    description:
      'GitHub organization of the AI-READI project where all the tools are developed from',
    link: 'https://github.com/AI-READI',
    type: 'github',
  },
];

export const getStaticProps = async () => {
  let TeamMembers = await Promise.all(
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

  // only keep members in the standards module
  TeamMembers = TeamMembers.filter((member) =>
    member.modules.includes('tools')
  );

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
