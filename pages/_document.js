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
            
            {/* Additional Text */}
            <p>Save YT Video Thumbnails</p>
            <p>Get free thumbnail image of any YouTube videos in Full HD(1080), HD (720), SD, and also in small size. it's currently supported formats: YouTube (HD, HQ, 1080p, 4K) videos</p>

            <p>What is the use of this YouTube Thumbnail Grabber website?</p>
            <p>People use this YouTube thumbnail downloader website for getting a thumbnail from any YouTube videos. That can be used in presentation, animation work, or many other activities.</p>

            <p>How to use this YouTube thumbnail downloader website?</p>
            <p>It's quite easy first step is you just copy any YouTube link whose thumbnail you want. YouTube cover download Easily you can download YouTube cover.</p>
            <p>Now paste that URL in the input box, the moment you paste that link it's automatically going to generate different sizes of thumbnails for you. Now click on the thumbnail download button and it's going to automatically download in your system. If you are using an Android phone then you have to save those images, and if you are using iPhone then I don't know how you can do it?</p>

            <p>Is it legal to download YouTube thumbnails?</p>
            <p>Of course it's 100% legal you can download any YouTube video's thumbnails but as you know thumbnail and video are copyrighted products you should take author permissions 1st in order to reuse that.</p>

            <p>Compatibility of this YT thumbnail grabber website</p>
            <p>This YouTube thumbnail downloader website is going to work well in all devices except iPhone because iPhone doesn't allow images to be saved in iPhone. But if you are using a jailbroken iPhone then there is no problem. On the other hand, it's going to work fine on almost all kinds of Android devices and laptop or desktop systems.</p>

            <p>Is there any Copyright risk on YouTube Thumbnails?</p>
            <p>Whatever YouTube screenshot you are downloading is copyrighted by the respective owner of that video. If you want to use it in your work then you should ask for permission.</p>
            <p>Especially if you are reusing it on YouTube then it can create a problem but if your plan is outside of YouTube, like using it on a website for creating logos or any Photoshop types of stuff then there is no problem. You will hardly receive any DMCA complaints related to that particular YouTube thumbnail.</p>

            <p>Is reusing YouTube thumbnails SEO-friendly?</p>
            <p>Nope, it's not. In short, the answer is it's not SEO-friendly because almost all thumbnails which are on YouTube are indexed by Google. So which one is unique and which one is duplicate, Google knows it. So it's not SEO-friendly as you know. But you can do some stuff on that thumbnail, I mean getting some unique effects using Photoshop or any other software that can make your thumbnail unique again so that can be reused and make that SEO-friendly again.</p>
          </div>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;





