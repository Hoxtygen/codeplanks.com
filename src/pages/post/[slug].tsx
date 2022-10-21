import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { PostDetail } from "../../components";
import { getPostDetails, getPosts } from "../../services";
import { Post } from "../../typedefs";

export default function PostDetailSlug({ post }: Post) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
        </div>
      </div>
    </div>
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
