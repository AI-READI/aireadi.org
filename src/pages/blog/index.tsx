import { SkipNavLink } from '@chakra-ui/skip-nav';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import wordsCount from 'words-count';

import BlogPostsLayout from '@/components/blog/BlogPostsLayout';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

type BlogList = {
  slug: string;
  timeToRead: number;

  frontMatter: {
    title: string;
    date: string;
    tags: string[];
    subtitle: string;
    categories: string[];
    heroImage: string;
  };
};

interface BlogProps {
  blogList: BlogList[];
}

// The Blog Page Content

const Blog: React.FC<BlogProps> = ({ blogList }) => {
  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle='Blog' />

        <section className='relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden px-8 sm:py-10 lg:px-6'>
          <div className='mb-5 px-2 pt-5 sm:pt-0 md:px-7'>
            <h1 className='mb-2 text-left text-5xl font-bold'>Blog</h1>

            <h2 className='text-left text-xl'>
              A collection of thoughts, ideas, and resources from the AI-READI
              team.
            </h2>
          </div>

          <BlogPostsLayout PostList={blogList} />
        </section>
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  // Get the posts from the `blog` directory
  const files = fs.readdirSync(`./blog`);

  const blogList = files.map((fileName) => {
    // Remove the .md extension and use the file name as the slug
    const slug = fileName.replace(`.md`, ``);

    // Read the raw content of the file and parse the frontMatter
    const rawFileContent = fs.readFileSync(`blog/${fileName}`, `utf-8`);

    const timeToRead = Math.ceil(wordsCount(rawFileContent) / 265);

    const { data: frontMatter } = matter(rawFileContent);

    return {
      slug,
      frontMatter,
      timeToRead,
    };
  });

  // sort the posts by date in descending order
  blogList.sort((a, b) => {
    const a_date = dayjs(a.frontMatter.date, `YYYY-MM-DD`) as unknown as number;

    const b_date = dayjs(b.frontMatter.date, `YYYY-MM-DD`) as unknown as number;

    return b_date - a_date;
  });

  // Return the posts data to the page as props
  return {
    props: {
      blogList,
    },
  };
}

export default Blog;
