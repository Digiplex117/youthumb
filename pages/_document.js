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
        </Head>
        <body>
          <Main />
          {/* Add your paragraph here */}
          <p>
            YouTube Thumbnail Downloader
            ▷ Save YT Video Thumbnails
            Get free thumbnail image of any youtube videos in Full HD(1080), HD
            (720), SD, and also in small size. it's currently supported formats:
            YouTube (HD, HQ, 1080p, 4K) videos
          </p>
          <p>
            What is the use of this YouTube Thumbnail Grabber website?
            People use this YouTube thumbnail downloader website for getting
            thumbnail from any youtube videos. That can be used in presentation,
            animation work or many other activities.
          </p>
          {/* ... and so on for the rest of the text */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

Make sure to add each paragraph as a separate `<p>` element within the `<body>` section of your custom document. After saving the changes, you can restart your Next.js development server to see the added text on your website.


export default MyDocument;
