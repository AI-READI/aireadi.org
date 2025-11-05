/* eslint-disable @next/next/no-img-element */
import { SkipNavContent, SkipNavLink } from '@chakra-ui/skip-nav';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import Viz from '@/components/Viz';
import citationData from '~/data/citations.json';

const Dataset: React.FC = () => {
  const { mainCitation, citingPublications } = citationData;

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
                  href='https://fairhub.io/datasets/3'
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


           <section className="bg-slate-50 pb-12 pt-8">
              <div className="px-8 mx-auto max-w-screen-lg">
                <h2 className="mb-3 text-3xl font-bold tracking-tight text-center sm:text-4xl">
                  Citation
                </h2>

                <div className="rounded-lg bg-white p-2 shadow-sm">
                <div className="mt-4 text-gray-700 space-y-2 leading-relaxed">
                  <p className="text-base text-gray-800 italic">
                    {Array.isArray(mainCitation.authors)
                      ? mainCitation.authors.map((a) => a.name).join(', ')
                      : mainCitation.authors}{' '}
                    {mainCitation.year && `(${mainCitation.year}). `}
                    <span className="not-italic font-semibold text-gray-900">
                      {mainCitation.title}.
                    </span>{' '}
                    <span className="italic">
                      {mainCitation.source?.split(' - ')[0] || 'Journal'}
                    </span>
                    {mainCitation.link && (
                      <>
                        {' '}
                        <a
                          href={mainCitation.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-600 hover:underline font-medium"
                        >
                          {mainCitation.link.replace(/^https?:\/\//, '')}
                        </a>
                      </>
                    )}
                  </p>

                </div>
                </div>

                <div className="pb-4 bg-white shadow-sm">
                  <details className="group">
                    <summary className="cursor-pointer pl-2 text-lg font-bold list-none">
                      <span className="inline-flex gap-2 hover:underline">
                        Citing Publications ({citingPublications.length})
                        <span className="transition-transform group-open:rotate-180">▼</span>
                      </span>
                    </summary>

                <div className="mt-6 space-y-6">
                  {citingPublications.map((pub, idx) => {
                    const authors =
                      Array.isArray(pub.authors) && pub.authors.length > 0
                        ? pub.authors
                            .map((a) => {
                              const parts = a.name.trim().split(" ");
                              const last = parts.pop();
                              const first = parts[0] || "";
                              return last ? `${last}, ${first.charAt(0)}.` : a.name;
                            })
                            .join(", ")
                            .replace(/,([^,]*)$/, " &$1")
                        : pub.authors || "—";

                    return (
                      <div
                        key={idx}
                        className="rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <p className="text-gray-800 text-base leading-relaxed">
                          <>
                            {authors} {pub.year && <span className="text-gray-700">({pub.year}). </span>}
                            <span className="italic">{pub.title}</span>.{" "}
                            {pub.link && (
                              <a
                                href={pub.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-600 hover:underline"
                              >
                                {pub.link}
                              </a>
                            )}
                          </>
                        </p>
                      </div>
                    );
                  })}
                </div>
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
