import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add meta description and title for SEO */}
          <meta name="description" content="Your website description goes here." />
          <title>Youtubedownload-thumbnail</title>

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
        <body className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-sans">
          {/* Header Section */}
          <header className="bg-blue-700 text-white p-4">
            <div className="mb-4">
              <h1 className="text-4xl font-bold">Welcome to Thumbnail Website</h1>
              <p className="text-lg">By using this tool, you can easily get thumbnails from YouTube videos and then download them for free. This service works for computers, tablets, and mobile devices.</p>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto p-4">
            {/* Add your main content here */}
            {/* Example: */}
            <h2 className="text-2xl font-bold mb-4">Always find the thumbnails in the highest quality and with max resolution</h2>
            <p className="text-lg">To get the thumbnail, you need to copy the YouTube video URL into our tool.</p>
          </main>

          {/* Footer Section */}
          <footer className="bg-gray-900 text-white text-center p-4">
            &copy; {new Date().getFullYear()} youtubedownload-thumbnail
          </footer>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;


