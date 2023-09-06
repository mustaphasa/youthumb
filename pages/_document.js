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
          <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }} className="bg-gray-200 p-4 text-center">
            <div>
              <p>It will always find the thumbnails in the highest quality and with max resolution.</p>
              <p>To get the thumbnail, you need to copy the YouTube video URL into our tool.</p>

              {/* Add a Call to Action (CTA) */}
              <p>Want to get started? Simply paste the YouTube video URL above and hit the "Download Thumbnails" button below.</p>

              {/* Your additional text content here */}
              <p>Save YT Video Thumbnails</p>
              <p>Get free thumbnail image of any YouTube videos in Full HD(1080), HD (720), SD, and also in small size. it's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos</p>

              <p>What is the use of this YouTube Thumbnail Grabber website?</p>
              <p>People use this YouTube thumbnail downloader website for getting thumbnail from any YouTube videos. That can be used in presentation, animation work or many other activities.</p>

              {/* ... Add more paragraphs ... */}

              <p>Is reusing YouTube thumbnails are SEO friendly?</p>
              <p>Nope it's not, in short answer it's not SEO friendly because almost all thumbnails which are on YouTube are indexed by Google. So which one is unique and which one is duplicate google know it. So it's not SEO friendly as you know. But you can do some stuff on that thumbnail I mean getting some unique effects using Photoshop or any other software that can make your thumbnail unique again so that can be reused and make that SEO friendly again.</p>
            </div>
          </div>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;







