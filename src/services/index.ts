import { request } from "graphql-request";
import { graphqlAPI } from "../constants";
import {
  allPosts,
  categories,
  categoryPost,
  postDetails,
  recentPosts,
  similarPosts,
} from "../graphql";
import {
  BlogPostData,
  BlogPost,
  Post,
  PostWithContent,
  PostCategory,
  PostCategories,
  RecentOrSimilarPosts,
  PWidget,
} from "../typedefs";

export const getPosts = async (): Promise<BlogPost[]> => {
  const results: BlogPostData = await request(graphqlAPI, allPosts);
  return results.posts;
};

export const getPostDetails = async (
  slug: string
): Promise<PostWithContent> => {
  const postResult: Post = await request(graphqlAPI, postDetails, { slug });
  return postResult.post;
};

export const getCategories = async (): Promise<PostCategory[]> => {
  const results: PostCategories = await request(graphqlAPI, categories);
  return results.categories;
};

export const getCategoryPosts = async (slug: string): Promise<BlogPost[]> => {
  const categoryPosts: BlogPostData = await request(graphqlAPI, categoryPost, {
    slug,
  });
  return categoryPosts.posts;
};

export const getRecentPosts = async (): Promise<PWidget[]> => {
  const result: RecentOrSimilarPosts = await request(graphqlAPI, recentPosts);
  return result.posts;
};

export const getSimilarPosts = async (
  categories: string[],
  slug: string
): Promise<PWidget[]> => {
  const result: RecentOrSimilarPosts = await request(graphqlAPI, similarPosts, {
    categories,
    slug,
  });
  return result.posts;
};
