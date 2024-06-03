import { SkipNavLink } from '@chakra-ui/skip-nav';
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

interface PageProps {
  tagsList: string[];
}

// The Blog Page Content

const TagsPage: React.FC<PageProps> = ({ tagsList }) => {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Tags - Blog' />

        <section className='relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden px-8 sm:py-10 lg:px-6'>
          <div className='mb-5 px-2 pt-5 sm:pt-0 md:px-7'>
            <h1 className='mb-2 text-left text-5xl font-bold'>Tags</h1>
          </div>

          <hr className='mx-6 my-2 border-dashed border-slate-200' />

          <div className='mb-2 flex w-full flex-col px-2 py-3 md:px-7 md:py-5'>
            <ul className='flex flex-col'>
              {tagsList.map((tag) => {
                return (
                  <Link href={`/blog/tag/${tag}`} key={tag}>
                    <li className='text-url my-2 w-max cursor-pointer text-xl font-semibold hover:underline'>
                      {tag}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Get the posts from the `blog` directory
  const files = fs.readdirSync(`./blog`);

  const PostsList = files.map((fileName) => {
    // Read the raw content of the file and parse the frontMatter
    const rawFileContent = fs.readFileSync(`blog/${fileName}`, `utf-8`);

    const { data: frontMatter } = matter(rawFileContent);

    return {
      frontMatter,
    };
  });

  const tagsList: string[] = [];

  for (const post of PostsList) {
    const { frontMatter } = post;

    const { tags } = frontMatter;

    for (const tag of tags) {
      if (!tagsList.includes(tag)) {
        tagsList.push(tag);
      }
    }
  }

  tagsList.sort();

  return {
    props: {
      tagsList,
    },
  };
}

export default TagsPage;
