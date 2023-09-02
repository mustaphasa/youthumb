import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <script data-ad-client="YOUR_AD_CLIENT_ID" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          {/* Add your text content here */}
          <header>
            <h1>Welcome to Thumbnail Website</h1>
            <p>By using this tool, you can easily get thumbnails from YouTube videos and then download them for free. This service works for computers, tablets, and mobile devices.</p>
          </header>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;



