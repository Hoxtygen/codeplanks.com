import type { GetStaticProps, NextPage } from "next";
import { PostCard, Categories, PostWidget } from "../components";
import SeoHead from "../components/layouts/SeoHead";
import siteMetadata from "../data/siteMetadata";
import { getCategories, getPosts } from "../services";
import { BlogPostData, BlogPost, PostCategory } from "../typedefs";

const Home: NextPage<BlogPostData> = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <SeoHead
        title="Talks of Code"
        description="Break down complex topics into digestible bits"
        canonicalUrl={siteMetadata.siteUrl}
        ogTwitterImage={siteMetadata.siteLogoSquare}
        ogType={"website"}
        ogImageUrl="placeholder"
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => {
            return <PostCard post={post} key={post.id} />;
          })}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts: BlogPost[] = (await getPosts()) || [];
  const categories: PostCategory[] = (await getCategories()) || [];
  return {
    props: { posts, categories },
  };
};
