/* eslint-disable @next/next/no-img-element */
import { Button, Flex } from '@chakra-ui/react';
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import Viz from '@/components/Viz';

import datasetCitationData from '~/data/dataset_citations.json';
import markerCitationData from '~/data/marker_paper.json';

const Dataset: React.FC = () => {
  const { mainCitation: markerMainCite, citingPublications: markerSubCite } =
    markerCitationData;
  const { mainCitation: datasetMainCite, citingPublications: datasetSubCite } =
    datasetCitationData;

  const itemsPerPage = 10;

  // Marker pagination
  const [markerPage, setMarkerPage] = useState(0);
  const markerTotalPages = Math.ceil(markerSubCite.length / itemsPerPage);
  const markerVisible = markerSubCite.slice(
    markerPage * itemsPerPage,
    markerPage * itemsPerPage + itemsPerPage,
  );

  // Dataset pagination
  const [datasetPage, setDatasetPage] = useState(0);
  const datasetTotalPages = Math.ceil(datasetSubCite.length / itemsPerPage);
  const datasetVisible = datasetSubCite.slice(
    datasetPage * itemsPerPage,
    datasetPage * itemsPerPage + itemsPerPage,
  );

  const datasetVersions = [
    {
      version: 'v1.0.0',
      year: 2024,
      link: 'https://doi.org/10.60775/fairhub.1',
    },
    {
      version: 'v2.0.0',
      year: 2024,
      link: 'https://doi.org/10.60775/fairhub.2',
    },
    {
      version: 'v3.0.0',
      year: 2025,
      link: 'https://doi.org/10.60775/fairhub.3',
    },
  ];
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='' />

        <main>
          <SkipNavContent />

          <section className='mx-auto grid max-w-screen-xl py-8 font-primary lg:grid-cols-12 lg:gap-8 xl:gap-0'>
            <div className='mx-auto place-self-center px-6 py-2 lg:col-span-9 xl:px-0'>
              <h1 className='relative pb-4 text-4xl font-black sm:text-5xl'>
                About
              </h1>

              <p className='relative pb-5 text-xl font-normal sm:text-2xl'>
                The AI-READI dataset is accessible from FAIRhub at fairhub.io.
                The dataset's landing page on FAIRhub contains various
                information about the dataset. Additional details are available
                in the dataset documentation at docs.aireadi.org
              </p>

              <div className='relative flex w-max flex-col space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0'>
                <ButtonLink href='https://fairhub.io/' variant='primary'>
                  Access our data
                </ButtonLink>
                <ButtonLink href='https://docs.aireadi.org' variant='outline'>
                  See our documentation
                </ButtonLink>
              </div>
            </div>
          </section>

          <section className='bg-slate-50 pb-16 pt-4'>
            <div className='px-8'>
              <div className='m-2 mx-auto max-w-screen-xl rounded-lg p-4 text-center'>
                <h1 className='mb-2 text-3xl font-bold tracking-tight sm:text-4xl'>
                  Dataset snapshot
                </h1>
              </div>
              <Viz />
            </div>
          </section>

          <section className='bg-slate-50 pb-16 pt-4'>
            <div className='mx-auto max-w-screen-lg px-8'>
              <h2 className='mb-3 text-center text-3xl font-bold tracking-tight'>
                Citations
              </h2>
              <p className='pb-4'>
                {' '}
                Projects that publish using our datasets are required to cite
                both our marker paper and dataset. Below, we provide a list of
                those citations.
              </p>
              <Tabs variant='enclosed' isFitted>
                <TabList>
                  <Tab
                    _selected={{
                      bg: 'white',
                      borderColor: 'gray.200',
                      color: 'blue.600',
                    }}
                  >
                    Marker Paper
                  </Tab>
                  <Tab
                    _selected={{
                      bg: 'white',
                      borderColor: 'gray.200',
                      color: 'blue.600',
                    }}
                  >
                    AI-READI Dataset
                  </Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <div className='bg-white px-6 py-2 shadow-sm'>
                      <div className='mt-4 space-y-2 leading-relaxed text-gray-700'>
                        <p className='text-base text-gray-800'>
                          AI-READI Consortium. {markerMainCite.year}
                          {'. '}
                          <span className='italic text-gray-900'>
                            {markerMainCite.title}
                          </span>
                          {'. '}
                          {markerMainCite.source}
                          {'. '}
                          <a
                            href={markerMainCite.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-sky-600 hover:underline'
                          >
                            {markerMainCite.link}
                          </a>
                        </p>
                      </div>

                      <Flex justify='space-between' align='center' pt={4}>
                        <h3 className='text-lg font-bold'>
                          Citing resources ({markerSubCite.length})
                        </h3>

                        <div>
                          <Button
                            size='sm'
                            variant='ghost'
                            color='blue.600'
                            onClick={() =>
                              setMarkerPage((p) => Math.max(0, p - 1))
                            }
                            isDisabled={markerPage === 0}
                          >
                            Prev
                          </Button>

                          {Array.from({ length: markerTotalPages })
                            .slice(
                              Math.max(0, markerPage - 2),
                              Math.min(markerTotalPages, markerPage + 3),
                            )
                            .map((_, i) => {
                              const pageNumber =
                                i + Math.max(0, markerPage - 2);
                              return (
                                <Button
                                  key={pageNumber}
                                  size='sm'
                                  variant={
                                    pageNumber === markerPage
                                      ? 'solid'
                                      : 'ghost'
                                  }
                                  colorScheme='blue'
                                  onClick={() => setMarkerPage(pageNumber)}
                                >
                                  {pageNumber + 1}
                                </Button>
                              );
                            })}

                          <Button
                            size='sm'
                            variant='ghost'
                            color='blue.600'
                            onClick={() =>
                              setMarkerPage((p) =>
                                Math.min(markerTotalPages - 1, p + 1),
                              )
                            }
                            isDisabled={markerPage === markerTotalPages - 1}
                          >
                            Next
                          </Button>
                        </div>
                      </Flex>

                      <ol
                        className='mt-6 list-decimal space-y-6 pl-4'
                        start={markerPage * itemsPerPage + 1}
                      >
                        {markerVisible.map((pub, i) => {
                          const index = i + markerPage * itemsPerPage;

                          return (
                            <li key={index}>
                              <div className='rounded-lg bg-gray-50 p-5'>
                                <p className='text-base leading-relaxed text-gray-800'>
                                  {(Array.isArray(pub.authors)
                                    ? pub.authors.map((a) => a.name).join(', ')
                                    : pub.authors) || '—'}
                                  {'. '}
                                  {pub.source?.match(/\b(19|20)\d{2}\b/)?.[0] ??
                                    '—'}
                                  . <span className='italic'>{pub.title}</span>.{' '}
                                  {pub.source?.split('-').pop()?.trim()}.{' '}
                                  <a
                                    href={pub.link}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-sky-600 hover:underline'
                                  >
                                    {pub.link}
                                  </a>
                                </p>
                              </div>
                            </li>
                          );
                        })}
                      </ol>
                      <Flex justify='flex-end' align='center' pt={4}>
                        <div>
                          <Button
                            size='sm'
                            variant='ghost'
                            color='blue.600'
                            onClick={() =>
                              setMarkerPage((p) => Math.max(0, p - 1))
                            }
                            isDisabled={markerPage === 0}
                          >
                            Prev
                          </Button>

                          {Array.from({ length: markerTotalPages })
                            .slice(
                              Math.max(0, markerPage - 2),
                              Math.min(markerTotalPages, markerPage + 3),
                            )
                            .map((_, i) => {
                              const pageNumber =
                                i + Math.max(0, markerPage - 2);
                              return (
                                <Button
                                  key={pageNumber}
                                  size='sm'
                                  variant={
                                    pageNumber === markerPage
                                      ? 'solid'
                                      : 'ghost'
                                  }
                                  colorScheme='blue'
                                  onClick={() => setMarkerPage(pageNumber)}
                                >
                                  {pageNumber + 1}
                                </Button>
                              );
                            })}

                          <Button
                            size='sm'
                            variant='ghost'
                            color='blue.600'
                            onClick={() =>
                              setMarkerPage((p) =>
                                Math.min(markerTotalPages - 1, p + 1),
                              )
                            }
                            isDisabled={markerPage === markerTotalPages - 1}
                          >
                            Next
                          </Button>
                        </div>
                      </Flex>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='bg-white p-6 shadow-sm'>
                      <div className='mt-4 space-y-2 leading-relaxed text-gray-700'>
                        <p className='text-base text-gray-800'>
                          {datasetMainCite.authors?.[0]?.name}
                          {'. '}
                          <span className='italic text-gray-900'>
                            {datasetMainCite.title}
                          </span>
                        </p>

                        <ul className='list-inside list-disc space-y-1'>
                          {datasetVersions.map((d) => (
                            <li key={d.version}>
                              {d.version} ({d.year}):{' '}
                              <a
                                href={d.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-sky-600 hover:underline'
                              >
                                {d.link}
                              </a>
                            </li>
                          ))}
                        </ul>

                        <Flex justify='space-between' align='center' pt={4}>
                          <h3 className='text-lg font-bold'>
                            Citing resources ({datasetSubCite.length})
                          </h3>

                          <div>
                            <Button
                              size='sm'
                              variant='ghost'
                              color='blue.600'
                              onClick={() =>
                                setDatasetPage((p) => Math.max(0, p - 1))
                              }
                              isDisabled={datasetPage === 0}
                            >
                              Prev
                            </Button>

                            {Array.from({ length: datasetTotalPages })
                              .slice(
                                Math.max(0, datasetPage - 2),
                                Math.min(datasetTotalPages, datasetPage + 3),
                              )
                              .map((_, i) => {
                                const pageNumber =
                                  i + Math.max(0, datasetPage - 2);
                                return (
                                  <Button
                                    key={pageNumber}
                                    size='sm'
                                    variant={
                                      pageNumber === datasetPage
                                        ? 'solid'
                                        : 'ghost'
                                    }
                                    colorScheme='blue'
                                    onClick={() => setDatasetPage(pageNumber)}
                                  >
                                    {pageNumber + 1}
                                  </Button>
                                );
                              })}

                            <Button
                              size='sm'
                              variant='ghost'
                              color='blue.600'
                              onClick={() =>
                                setDatasetPage((p) =>
                                  Math.min(datasetTotalPages - 1, p + 1),
                                )
                              }
                              isDisabled={datasetPage === datasetTotalPages - 1}
                            >
                              Next
                            </Button>
                          </div>
                        </Flex>
                      </div>

                      <ol
                        className='mt-6 list-decimal space-y-6 pl-4'
                        start={datasetPage * itemsPerPage + 1}
                      >
                        {datasetVisible.map((pub, i) => (
                          <li key={i}>
                            <div className='rounded-lg bg-gray-50 p-5'>
                              <p className='text-base leading-relaxed text-gray-800'>
                                {(Array.isArray(pub.authors)
                                  ? pub.authors.map((a) => a.name).join(', ')
                                  : pub.authors) || '—'}
                                {'. '}
                                {pub.source?.match(/\b(19|20)\d{2}\b/)?.[0] ??
                                  '—'}
                                . <span className='italic'>{pub.title}</span>.{' '}
                                {pub.source?.split('-').pop()?.trim()}.{' '}
                                <a
                                  href={pub.link}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                  className='text-sky-600 hover:underline'
                                >
                                  {pub.link}
                                </a>
                              </p>
                            </div>
                          </li>
                        ))}
                      </ol>

                      <Flex justify='flex-end' align='center' pt={4}>
                        <div>
                          <Button
                            size='sm'
                            variant='ghost'
                            color='blue.600'
                            onClick={() =>
                              setDatasetPage((p) => Math.max(0, p - 1))
                            }
                            isDisabled={datasetPage === 0}
                          >
                            Prev
                          </Button>

                          {Array.from({ length: datasetTotalPages })
                            .slice(
                              Math.max(0, datasetPage - 2),
                              Math.min(datasetTotalPages, datasetPage + 3),
                            )
                            .map((_, i) => {
                              const pageNumber =
                                i + Math.max(0, datasetPage - 2);
                              return (
                                <Button
                                  key={pageNumber}
                                  size='sm'
                                  variant={
                                    pageNumber === datasetPage
                                      ? 'solid'
                                      : 'ghost'
                                  }
                                  colorScheme='blue'
                                  onClick={() => setDatasetPage(pageNumber)}
                                >
                                  {pageNumber + 1}
                                </Button>
                              );
                            })}

                          <Button
                            size='sm'
                            variant='ghost'
                            color='blue.600'
                            onClick={() =>
                              setDatasetPage((p) =>
                                Math.min(datasetTotalPages - 1, p + 1),
                              )
                            }
                            isDisabled={datasetPage === datasetTotalPages - 1}
                          >
                            Next
                          </Button>
                        </div>
                      </Flex>
                    </div>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Dataset;
