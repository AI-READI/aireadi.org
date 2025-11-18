/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

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
                <ButtonLink
                  href='https://fairhub.io/'
                  variant='primary'
                >
                  Access our data
                </ButtonLink>
                <ButtonLink
                  href='https://docs.aireadi.org'
                  variant='outline'
                  // className='bg-stone-100'
                >
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

          <section className='bg-slate-50 pb-12 pt-8'>
            <div className='mx-auto max-w-screen-lg px-8'>
              <h2 className='mb-3 text-center text-3xl font-bold tracking-tight'>
                Citations
              </h2>
              <p>
                {' '}
                Projects that publish using our datasets are required to cite
                both our marker paper and dataset. Below, we provide a list of
                those citations.
              </p>
              <h3 className='pb-2 text-center text-xl font-bold tracking-tight'>
                Marker paper
              </h3>
              <div className='rounded-lg bg-white p-2 shadow-sm'>
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
                      href={markerMainCite.source}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sky-600 hover:underline'
                    >
                      {markerMainCite.link}
                    </a>
                  </p>
                </div>
              </div>

              <div className='bg-white pb-4 shadow-sm'>
                <details className='group'>
                  <summary className='cursor-pointer pl-2 text-lg font-bold'>
                    <span className='inline-flex gap-2 hover:underline'>
                      Citing resources ({markerSubCite.length})
                    </span>
                  </summary>

                  <ol className='mt-6 list-decimal space-y-6 pl-6'>
                    {markerSubCite.map((pub, i) => (
                      <li key={i}>
                        <div className='rounded-lg bg-white p-5 shadow-sm transition-shadow hover:shadow-md'>
                          <p className='text-base leading-relaxed text-gray-800'>
                            {(Array.isArray(pub.authors)
                              ? pub.authors.map((a) => a.name).join(', ')
                              : pub.authors) || '—'}
                            {'. '}
                            {pub.source?.match(/\b(19|20)\d{2}\b/)?.[0] ?? '—'}.{' '}
                            <span className='italic'>{pub.title}</span>.{' '}
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
                </details>
              </div>

              <h3 className='py-2 text-center text-xl font-bold tracking-tight'>
                AI-READI dataset
              </h3>
              <div className='rounded-lg bg-white p-2 shadow-sm'>
                <div className='mt-4 space-y-2 leading-relaxed text-gray-700'>
                  <p className='text-base text-gray-800'>
                    {datasetMainCite.authors?.[0]?.name}
                    {'. '}
                    <span>{datasetMainCite.citation.trim().slice(-5, -1)}</span>
                    {'. '}
                    <span className='italic text-gray-900'>
                      {datasetMainCite.title}
                    </span>
                  </p>
                  <a
                    href='https://fairhub.io/datasets/3'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-sky-600 hover:underline'
                  >
                      fairhub.io/datasets/3
                  </a>
                </div>
              </div>

              <div className='bg-white pb-4 shadow-sm'>
                <details className='group'>
                  <summary className='cursor-pointer pl-2 text-lg font-bold'>
                    <span className='inline-flex gap-2 hover:underline'>
                      Citing resources ({datasetSubCite.length})
                    </span>
                  </summary>

                  <ol className='mt-6 list-decimal space-y-6 pl-6'>
                    {datasetSubCite.map((pub, i) => (
                      <li key={i}>
                        <div className='rounded-lg bg-white p-5 shadow-sm transition-shadow hover:shadow-md'>
                          <p className='text-base leading-relaxed text-gray-800'>
                            {(Array.isArray(pub.authors)
                              ? pub.authors.map((a) => a.name).join(', ')
                              : pub.authors) || '—'}
                            {'. '}
                            {pub.source?.match(/\b(19|20)\d{2}\b/)?.[0] ?? '—'}.{' '}
                            <span className='italic'>{pub.title}</span>.{' '}
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
                </details>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Dataset;
