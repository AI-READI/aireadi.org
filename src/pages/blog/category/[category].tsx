import { SkipNavLink } from '@chakra-ui/skip-nav';
import dayjs from 'dayjs';
import fs from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import wordsCount from 'words-count';

import BlogList from '@/components/blog/BlogPostsLayout';
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
  filteredBlogList: BlogList[];
}

// The Blog Page Content

const CategoryPage: React.FC<BlogProps> = ({ filteredBlogList }) => {
  const router = useRouter();

  const { category } = router.query;

  return (
    <>
      <SkipNavLink>Skip to content</SkipNavLink>

      <Layout>
        <Seo templateTitle={category + ' - Blog'} />

        <section className='relative mx-auto flex h-full w-full max-w-screen-xl flex-col overflow-hidden px-8 sm:py-10 lg:px-6'>
          <div className='mb-5 px-2 pt-5  sm:pt-0 md:px-7'>
            <h2 className='text-left text-lg'>Category</h2>

            <h1 className='mb-2 text-left text-5xl font-bold'>{category}</h1>
          </div>

          <BlogList blogList={filteredBlogList} />
        </section>
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Get the posts from the `blog` directory
  const files = fs.readdirSync(`./blog`);

  const blogList = files.map((fileName) => {
    // Read the raw content of the file and parse the frontMatter
    const rawFileContent = fs.readFileSync(`blog/${fileName}`, `utf-8`);

    const { data: frontMatter } = matter(rawFileContent);

    return {
      frontMatter,
    };
  });

  const categoriesList: string[] = [];

  for (const post of blogList) {
    const { frontMatter } = post;

    const { categories } = frontMatter;

    for (const category of categories) {
      if (!categoriesList.includes(category)) {
        categoriesList.push(category);
      }
    }
  }

  const paths = [];

  for (const category of categoriesList) {
    paths.push({
      params: {
        category,
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

  const filteredBlogList = blogList.filter((post) => {
    const { categories } = post.frontMatter;

    return categories.includes(params?.category);
  });

  // Return the posts data to the page as props
  return {
    props: {
      filteredBlogList,
    },
  };
};

export default CategoryPage;
