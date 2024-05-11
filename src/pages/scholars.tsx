/* eslint-disable @next/next/no-img-element */
import {
  Button,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tag,
  useDisclosure,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { motion } from 'framer-motion';
import { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';
import { IoSchoolSharp } from 'react-icons/io5';
import { RiAwardFill, RiExpandUpDownLine } from 'react-icons/ri';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import Layout from '@/components/layout/Layout';
// import ModuleMembers from '@/components/modules/ModuleMembers';
import Seo from '@/components/Seo';

import { FramerContainer } from '@/utils/framer';

import SCHOLARS_JSON from '~/data/scholars.json';

const ScholarsPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ AllScholars }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Data Collection' />

        <main>
          <SkipNavContent />

          <HeroCroppedImage
            title='Scholars'
            image='https://ucarecdn.com/2b081802-f0a0-40b5-b333-b1438e89415e/'
            tagline='This page is dedicated to promoting the AI-READI Scholars that are part of our internship program. Learn more about their background, interests, and opportunities they are looking for after their internship ends at the end of July 2024.'
            showButtons={false}
            primaryButton='Learn more about the study'
          />

          <motion.div
            variants={FramerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            className='mx-auto grid max-w-screen-xl gap-8 px-4 py-8 text-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 lg:px-6 lg:py-16'
          >
            {AllScholars.map((scholar) => (
              <motion.div
                // variants={FadeFramerItem}
                key={scholar.id + Math.random()}
                id={scholar.id}
              >
                <div
                  className='h-full rounded-lg border-solid bg-slate-50 px-4 py-4 transition-all'
                  key={scholar.name}
                >
                  <div className='relative mx-auto mb-2 min-h-[350px] w-full sm:min-h-[250px]'>
                    <Image
                      src={`${scholar.image}${
                        scholar.moduleImageParams != ''
                          ? scholar.moduleImageParams
                          : ''
                      }`}
                      alt={scholar.name + ' image'}
                      fill
                      placeholder='blur'
                      blurDataURL={scholar.blurDataURL}
                      className='h-full w-full rounded-lg object-cover object-top'
                      sizes='(max-width: 768px) 100vw, 50vw'
                    />
                  </div>

                  <h3 className='pb-1 text-2xl font-extrabold text-slate-800'>
                    {scholar.name}
                  </h3>

                  <Grid templateColumns='repeat(10, 1fr)'>
                    <GridItem>
                      <IoSchoolSharp size={20} />
                    </GridItem>

                    <GridItem colSpan={9}>
                      <p className='mb-2 ml-2 text-left font-semibold text-slate-600'>
                        {scholar.education[0].degree}
                      </p>
                    </GridItem>

                    <GridItem>
                      <RiAwardFill size={20} />
                    </GridItem>

                    <GridItem colSpan={9}>
                      <Wrap>
                        {scholar.expertise.map((expertise, index) => (
                          <WrapItem key={index}>
                            <Tag colorScheme='blue'>{expertise}</Tag>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </GridItem>
                  </Grid>

                  <Button
                    size='sm'
                    colorScheme='teal'
                    className='mt-5'
                    rightIcon={<RiExpandUpDownLine />}
                    onClick={onOpen}
                  >
                    Expand
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <Modal isOpen={isOpen} onClose={onClose} isCentered size='3xl'>
            <ModalOverlay />
            <ModalContent>
              <ModalCloseButton />
              <ModalBody>
                <Grid templateColumns='repeat(10, 1fr)' gap={3}>
                  <GridItem colSpan={4}>
                    <VStack spacing={4} align='stretch'>
                      <img
                        src='https://ucarecdn.com/2b081802-f0a0-40b5-b333-b1438e89415e/'
                        alt='Jane Doe'
                        className='rounded-lg'
                      />

                      <Grid templateColumns='repeat(10, 1fr)'>
                        <GridItem>
                          <IoSchoolSharp size={20} />
                        </GridItem>

                        <GridItem colSpan={9}>
                          <p className='mb-2 ml-2 text-left font-semibold text-slate-600'>
                            Linkedin Profile
                          </p>
                        </GridItem>

                        <GridItem>
                          <RiAwardFill size={20} />
                        </GridItem>

                        <GridItem colSpan={9}>
                          <p className='mb-2 ml-2 text-left font-semibold text-slate-600'>
                            Resume
                          </p>
                        </GridItem>
                      </Grid>
                    </VStack>
                  </GridItem>
                  <GridItem colSpan={6}>
                    <VStack spacing={4} align='stretch'>
                      <h2 className='text-2xl font-bold text-slate-800'>
                        Jane Doe
                      </h2>

                      <h3>Education</h3>

                      <ul>
                        <li>
                          PhD in Mathematics from the University of California,
                          Berkeley
                        </li>
                        <li>
                          Masters in Computer Science from Stanford University
                        </li>
                      </ul>

                      <h3>About Me</h3>

                      <p>
                        I am from .... My background is in .... Currently, I am
                        working in the AI-READI project where I am contributing
                        to... When I am not working I like to... See my linkedin
                        profile and resume for more details
                      </p>

                      <h3>After AI-READI</h3>

                      <p>
                        After the AI-READI internship I am looking for.... I am
                        open to work anywhere in the US. I am currently on an
                        HI1 visa and will not need authorized to work.
                      </p>
                    </VStack>
                  </GridItem>
                </Grid>
              </ModalBody>
            </ModalContent>
          </Modal>
        </main>
      </Layout>
    </>
  );
};

export const getStaticProps = async () => {
  const AllScholars = await Promise.all(
    SCHOLARS_JSON.map(async (member) => {
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
  AllScholars.sort((a, b) => {
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
      AllScholars,
    },
  };
};

export default ScholarsPage;
