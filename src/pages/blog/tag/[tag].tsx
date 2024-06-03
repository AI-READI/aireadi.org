import { SkipNavLink } from '@chakra-ui/skip-nav';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import wordsCount from 'words-count';

import BlogPostsLayout from '@/components/blog/BlogPostsLayout';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

type PostsList = {
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
  filteredPostsList: PostsList[];
}

const TagPage: React.FC<BlogProps> = ({ filteredPostsList }) => {
  const router = useRouter();

  const { tag } = router.query;

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle={tag + ' - Blog'} />

        <section className='relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden px-8 sm:py-10 lg:px-6'>
          <div className='mb-5 px-2 pt-5 sm:pt-0 md:px-7'>
            <h2 className='text-left text-lg'>Tag</h2>

            <h1 className='mb-2 text-left text-5xl font-bold'>{tag}</h1>
          </div>

          <BlogPostsLayout PostList={filteredPostsList} />
        </section>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
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

  const paths = [];

  for (const tag of tagsList) {
    paths.push({
      params: {
        tag,
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Get the posts from the `blog` directory
  const files = fs.readdirSync(`./blog`);

  const PostsList = files.map((fileName) => {
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
  PostsList.sort((a, b) => {
    const a_date = dayjs(a.frontMatter.date, `YYYY-MM-DD`) as unknown as number;

    const b_date = dayjs(b.frontMatter.date, `YYYY-MM-DD`) as unknown as number;

    return b_date - a_date;
  });

  const filteredPostsList = PostsList.filter((post) => {
    const { tags } = post.frontMatter;

    return tags.includes(params?.tag);
  });

  // Return the posts data to the page as props
  return {
    props: {
      filteredPostsList,
    },
  };
};

export default TagPage;
