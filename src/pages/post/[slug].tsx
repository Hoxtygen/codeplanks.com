import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

import {
  Author,
  Categories,
  CommentList,
  PostDetail,
  PostWidget,
  CommentFormWrapper,
} from "../../components";
// import CommentFormWrapper from "../../components";
import SeoHead from "../../components/layouts/SeoHead";
import siteMetadata from "../../data/siteMetadata";
import { getPostDetails, getPosts } from "../../services";
import { Post } from "../../typedefs";

export default function PostDetailSlug({ post }: Post) {
  return (
    <>
      <SeoHead
        title={`${post.title} | ${siteMetadata.companyName} `}
        description={post.excerpt}
        canonicalUrl={`${siteMetadata.siteUrl}/blog/${post.slug}`}
        ogImageUrl="placeholder imageurl"
        ogType={"article"}
        ogTwitterImage="placholder twitter image"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `{"@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": "${post.title}",
        
        "datePublished": "${post?.createdAt}",
        "author": [{
            "@type": "Person",
            "name": "${post.author.name}"
          }]
      }`,
          }}
        ></script>
      </SeoHead>
      <div className="bg-white dark:bg-slate-800 container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <Author author={post.author} />
            <CommentFormWrapper slug={post.slug} />
            {post.comments.length > 0 && (
              <CommentList postComments={post.comments} />
            )}
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget
                slug={post.slug}
                categories={post?.categories?.map((category) => category.slug)}
              />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params as ParsedUrlQuery).slug as string;
  const post = await getPostDetails(slug);
  return {
    props: { post },
  };
};

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
