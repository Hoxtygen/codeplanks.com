import { request } from "graphql-request";
import { graphqlAPI } from "../constants";
import { allPosts, postDetails } from "../graphql";
import { BlogPostData, BlogPost, Post, PostWithContent } from "../typedefs";

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
