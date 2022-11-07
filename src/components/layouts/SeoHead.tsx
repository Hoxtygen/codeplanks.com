import Head from "next/head";
import siteMetadata from "../../data/siteMetadata";
import { SeoHeadInt } from "../../typedefs";

const SeoHead = ({
  title,
  description,
  canonicalUrl,
  ogTwitterImage,
  ogType,
  ogImageUrl,
  children,
}: SeoHeadInt) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width, initial-scale" />
      <meta name="description" content={description} />
      <meta name="author" content="Wasiu Idowu" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={siteMetadata.twitterHandle} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogTwitterImage} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={siteMetadata.companyName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:url" content={canonicalUrl} />
      {children}
    </Head>
  );
};

export default SeoHead;
