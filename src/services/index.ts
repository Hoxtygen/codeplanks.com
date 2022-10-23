import { request } from "graphql-request";
import { graphqlAPI } from "../constants";
import { allPosts, categories, categoryPost, postDetails } from "../graphql";
import {
  BlogPostData,
  BlogPost,
  Post,
  PostWithContent,
  PostCategory,
  PostCategories,
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
