import { request } from "graphql-request";
import { graphqlAPI } from "../constants";
import { allPosts } from "../graphql";
import { BlogPostData, BlogPost } from "../typedefs";

export const getPosts = async (): Promise<BlogPost[]> => {
  const results: BlogPostData = await request(graphqlAPI, allPosts);
  return results.posts;
};
