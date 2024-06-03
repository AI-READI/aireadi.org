import Head from 'next/head';
import { useRouter } from 'next/router';

const defaultMeta = {
  title:
    'Artificial Intelligence Ready and Equitable Atlas for Diabetes Insights',
  siteName: 'AI-READI',
  description:
    'Generating a flagship AI-ready and ethically-sourced dataset to support future AI-driven discoveries in diabetes',
  url: 'https://aireadi.org',
  type: 'website',
  robots: 'follow, index',
  image:
    'https://kalai.fairdataihub.org/api/generate?app=ai-readi&title=Generating%20a%20flagship%20AI-ready%20and%20ethically-sourced%20dataset%20to%20support%20future%20AI-driven%20discoveries%20in%20diabetes&org=ai-readi&description=',
};

type SeoProps = {
  date?: string;
  templateTitle?: string;
  templateDescription?: string;
  templateImage?: string;
} & Partial<typeof defaultMeta>;

export default function Seo(props: SeoProps) {
  const router = useRouter();

  const meta = {
    ...defaultMeta,
    ...props,
  };

  meta['title'] = props.templateTitle
    ? `${props.templateTitle} | ${meta.siteName}`
    : meta.title;

  meta['description'] = props.templateDescription || meta.description;

  meta['image'] =
    `https://kalai.fairdataihub.org/api/generate?app=ai-readi&title=${encodeURIComponent(
      meta.title,
    )}&org=ai-readi&description=${encodeURIComponent(meta.description)}`;

  return (
    <Head>
      <title>{meta.title}</title>
      <meta name='robots' content={meta.robots} />
      <meta content={meta.description} name='description' />
      <meta property='og:url' content={`${meta.url}${router.asPath}`} />
      <link rel='canonical' href={`${meta.url}${router.asPath}`} />

      {/* Open Graph */}
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content={meta.siteName} />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
      <meta name='image' property='og:image' content={meta.image} />

      {/* Twitter */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@fairdataihub' />
      <meta name='twitter:title' content={meta.title} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />

      {meta.date && (
        <>
          <meta property='article:published_time' content={meta.date} />
          <meta
            name='publish_date'
            property='og:publish_date'
            content={meta.date}
          />
          <meta
            name='author'
            property='article:author'
            content='FAIR Data Innovations Hub'
          />
        </>
      )}

      {/* Favicons */}
      {favicons.map((linkProps) => (
        <link key={linkProps.href} {...linkProps} />
      ))}
      <meta name='msapplication-TileColor' content='#da532c' />
      <meta name='theme-color' content='#ffffff' />
    </Head>
  );
}

type Favicons = {
  rel: string;
  href: string;
  sizes?: string;
  color?: string;
  type?: string;
};

const favicons: Array<Favicons> = [
  {
    rel: 'apple-touch-icon',
    sizes: '180x180',
    href: '/favicon/apple-touch-icon.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: '/favicon/android-chrome-192x192.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: '/favicon/favicon-32x32.png',
  },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '16x16',
    href: '/favicon/favicon-16x16.png',
  },
  {
    rel: 'mask-icon',
    href: '/favicon/safari-pinned-tab.svg',
    color: '#5bbad5',
  },
  {
    rel: 'manifest',
    href: '/favicon/site.webmanifest',
  },
];
