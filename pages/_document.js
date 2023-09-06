import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add meta description and title for SEO */}
          <meta name="description" content="Download high-quality thumbnails from YouTube videos." />
          <title>YouTube Thumbnail Downloader</title>

          {/* Add favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />

          {/* Add AdSense script */}
          <script
            data-ad-client="YOUR_AD_CLIENT_ID"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>
        </Head>
        <body>
          {/* Header Section */}
          <header className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">YouTube Thumbnail Downloader</h1>
            <p>Download high-quality thumbnails from YouTube videos.</p>
          </header>

          {/* Main Content */}
          <Main />

          {/* Footer Section */}
          <footer className="bg-gray-800 text-white text-center p-4">
            &copy; {new Date().getFullYear()} YouTube Thumbnail Downloader
          </footer>

          {/* Additional Text Content */}
          <div className="bg-gray-200 p-4 text-center">
            <p>It will always find the thumbnails in the highest quality and with max resolution.</p>
            <p>To get the thumbnail, you need to copy the YouTube video URL into our tool.</p>

            {/* Add a Call to Action (CTA) */}
            <p>Want to get started? Simply paste the YouTube video URL above and hit the "Download Thumbnails" button below.</p>
          </div>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;




