import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

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
          title='Data Acquisition'
          image='https://images.unsplash.com/photo-1640158615573-cd28feb1bf4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
          tagline='Collecting data across multiple sites.'
          showButtons={false}
          primaryButton='Learn more about the study'
        />

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

            <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8'>
              {TeamMembers.map((member) => (
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

                    <h3 className='pt-4 text-2xl font-extrabold text-slate-800'>
                      {member.name}
                    </h3>

                    <p className='pb-4 pt-1 text-base font-semibold text-slate-600'>
                      {member.role}
                    </p>
                  </div>
                </UnstyledLink>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  </>
);

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
  TeamMembers = TeamMembers.filter((member) => member.modules.includes('data'));

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
