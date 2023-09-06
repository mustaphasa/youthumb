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
        <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
          <div style={{ flex: 1 }} className="bg-gray-200 p-4 text-center">
            {/* Your additional text content here */}
          </div>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;






