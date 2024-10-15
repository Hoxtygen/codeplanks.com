import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const clarityServerCode = process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_CODE
  ? `${process.env.NEXT_PUBLIC_MICROSOFT_CLARITY_CODE}`
  : "";

const clarityCode = `
<script type="text/javascript">
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", ${clarityServerCode});
</script>
`;
function Document() {
  return (
    <Html lang="en-us" className="dark">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="robots" content="index, follow" />
        <Script id="ms-clarity" strategy="beforeInteractive">
          {clarityCode}
        </Script>
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
