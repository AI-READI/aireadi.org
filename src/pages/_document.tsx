import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />

          <script
            async
            defer
            data-website-id='fb499873-d5d5-41b0-8375-785e9d505a7b'
            src='https://umami.fairdataihub.org/mushroom'
          />
        </Head>
        <body
          className={`!font-primary ${
            process.env.NODE_ENV === 'development' ? 'debug-screens' : ''
          }`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
