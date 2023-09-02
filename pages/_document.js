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
          <header>
            <h1>Welcome to Thumbnail Website</h1>
            <p>By using this tool, you can easily get thumbnails from YouTube videos and then download them for free. This service works for computers, tablets, and mobile devices.</p>
          </header>
          <Main />
          <NextScript />
          
          {/* Add your text content here */}
          <div className="bg-gray-200 p-4">
            <p>It will always find the thumbnails in the highest quality and with max resolution.</p>
            <p>To get the thumbnail, you need to copy the YouTube video URL into our tool.</p>
          </div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;



