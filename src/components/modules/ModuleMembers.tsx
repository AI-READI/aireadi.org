import { motion } from 'framer-motion';
import Image from 'next/image';

import UnstyledLink from '@/components/links/UnstyledLink';

import { FadeFramerItem, FramerContainer } from '@/utils/framer';

type ComponentProps = {
  Team: ModuleMembersType;
};

const ModuleMembers: React.FC<ComponentProps> = ({ Team }) => {
  return (
    <section className='bg-white'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16'>
        <div className='mx-auto mb-6 max-w-screen-sm lg:mb-8'>
          <h2 className='mb-1 text-3xl font-extrabold tracking-tight sm:text-4xl'>
            Team
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
          {Team.map((member) => (
            <motion.div
              variants={FadeFramerItem}
              key={member.id}
              id={member.id}
            >
              <UnstyledLink href={`/team#${member.id}`} key={member.id}>
                <div
                  className='h-full cursor-pointer rounded-lg border-solid bg-slate-50 px-4 py-4 transition-all hover:bg-sky-100'
                  key={member.name}
                >
                  <div className='relative mx-auto mb-2 min-h-[350px] w-full sm:min-h-[250px]'>
                    <Image
                      src={`${member.image}${
                        member.moduleImageParams != ''
                          ? member.moduleImageParams
                          : ''
                      }`}
                      alt={member.name + ' image'}
                      fill
                      placeholder='blur'
                      blurDataURL={member.blurDataURL}
                      className='h-full w-full rounded-lg object-cover object-top'
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                  </div>

                  <h3 className='pb-1 pt-4 text-2xl font-extrabold text-slate-800'>
                    {member.name}
                  </h3>

                  <p className='text-sm font-medium text-slate-600'>
                    {member.roles[0]}
                  </p>

                  {/* {member.roles.map((role, index) => (
                    <p
                      className='text-sm font-medium text-slate-600'
                      key={index}
                    >
                      {role}
                    </p>
                  ))} */}
                </div>
              </UnstyledLink>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModuleMembers;
