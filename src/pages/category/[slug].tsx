import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { Categories, PostCard } from "../../components";
import { getCategories, getCategoryPosts } from "../../services";
import { BlogPostData } from "../../typedefs";

export default function CategoryPosts({ posts }: BlogPostData) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = (params as ParsedUrlQuery).slug as string;
  const posts = await getCategoryPosts(slug);
  return {
    props: { posts },
  };
};
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
