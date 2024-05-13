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
import { useState } from 'react';
import { BsPlusCircleDotted } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import { IoSchoolSharp } from 'react-icons/io5';
import { RiAwardFill } from 'react-icons/ri';

import HeroCroppedImage from '@/components/hero/HeroCroppedImage';
import Layout from '@/components/layout/Layout';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import { FramerContainer } from '@/utils/framer';

import SCHOLARS_JSON from '~/data/scholars.json';

interface Scholar {
  id: string;
  name: string;
  image: string;
  blurDataURL: string;
  moduleImageParams: string;
  education: { degree: string; institution: string }[];
  expertise: string[];
  tag: string;
  about: string;
  after: string;
  social: { linkedin?: string; resume?: string; medprofile?: string };
}

const ScholarsPage: React.FC<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ AllScholars }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedScholar, setSelectedScholar] = useState<Scholar | null>(null);

  const openModal = (scholarid: string) => {
    const scholar = AllScholars.find((scholar) => scholar.id === scholarid);

    if (!scholar) {
      return;
    }

    setSelectedScholar(scholar);

    onOpen();
  };

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
                      className='h-full w-full rounded-lg object-cover object-center'
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
                            <Tag colorScheme='blue' size='sm'>
                              {expertise}
                            </Tag>
                          </WrapItem>
                        ))}
                      </Wrap>
                    </GridItem>
                  </Grid>

                  <Button
                    size='sm'
                    colorScheme='teal'
                    className='mt-5'
                    rightIcon={<BsPlusCircleDotted />}
                    onClick={() => openModal(scholar.id)}
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
                <Grid
                  templateColumns='repeat(10, 1fr)'
                  gap={6}
                  className='px-2 py-3'
                >
                  <GridItem colSpan={4}>
                    <VStack spacing={4} align='stretch'>
                      <img
                        src={selectedScholar?.image}
                        alt={selectedScholar?.name}
                        className='h-full w-full rounded-lg object-cover object-center'
                      />

                      <Grid templateColumns='repeat(10, 1fr)' rowGap={3}>
                        {'linkedin' in (selectedScholar?.social || {}) && (
                          <>
                            <GridItem>
                              <div className='flex items-center'>
                                <FaLinkedin size={20} />
                              </div>
                            </GridItem>

                            <GridItem colSpan={9}>
                              <UnstyledLink
                                href={selectedScholar?.social.linkedin || ''}
                                className='ml-2 text-left font-semibold text-slate-600'
                              >
                                LinkedIn Profile
                              </UnstyledLink>
                            </GridItem>
                          </>
                        )}

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
                    <VStack align='stretch'>
                      <h2 className='text-2xl font-bold text-slate-800'>
                        {selectedScholar?.name}
                      </h2>

                      <h3 className='text-lg font-semibold text-slate-700'>
                        Education
                      </h3>

                      <ul>
                        {selectedScholar?.education.map((edu, index) => (
                          <li key={index} className='text-base font-normal'>
                            {edu.degree} ({edu.institution})
                          </li>
                        ))}
                      </ul>

                      <h3 className='text-lg font-semibold text-slate-700'>
                        Expertise
                      </h3>

                      <p>
                        {selectedScholar?.expertise.map((expertise, index) => (
                          <Tag
                            key={index}
                            colorScheme='blue'
                            size='sm'
                            className='mr-2'
                          >
                            {expertise}
                          </Tag>
                        ))}
                      </p>

                      <h3 className='text-lg font-semibold text-slate-700'>
                        About Me
                      </h3>

                      <p className='text-base font-normal text-slate-600'>
                        {selectedScholar?.about}
                      </p>

                      <h3 className='text-lg font-semibold text-slate-700'>
                        After AI-READI
                      </h3>

                      <p className='text-base font-normal text-slate-600'>
                        {selectedScholar?.after}
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
