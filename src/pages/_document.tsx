import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en-us" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="index, follow" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="dark:bg-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
