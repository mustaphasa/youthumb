import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add meta description and title for SEO */}
          <meta name="description" content="Your website description goes here." />
          <title>Your Website Title</title>

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
        <body className="bg-gray-100 font-sans">
          {/* Header Section */}
          <header className="bg-blue-500 text-white p-4">
            {/* Move the title and text here */}
            <h1 className="text-2xl font-bold">Welcome to Thumbnail Website</h1>
            <p>By using this tool you can easily get thumbnails from YouTube videos and then download them for free. This service works for computer, tablets, and mobile devices.</p>

            {/* Input for YouTube video URL */}
            <input
              type="text"
              placeholder="Enter YouTube video URL"
              className="bg-white p-2 mt-4 rounded-md"
            />
          </header>

          {/* Main Content */}
          <main className="container mx-auto p-4">
            {/* Add your main content here */}
            {/* Example: */}
            <h2 className="text-xl font-bold mb-4">Always find the thumbnails in the highest quality and with max resolution</h2>
            <p>To get the thumbnail you need to copy the YouTube video URL into our tool.</p>
          </main>

          {/* Footer Section */}
          <footer className="bg-gray-800 text-white text-center p-4">
            &copy; {new Date().getFullYear()} youtubedownload-thumbnail
          </footer>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;


