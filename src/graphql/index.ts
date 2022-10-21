import { gql } from "graphql-request";

export const allPosts = gql`
  query GetPosts {
    posts {
      id
      slug
      title
      excerpt
      createdAt
      author {
        bio
        name
        photo {
          url
        }
      }
      featuredImage {
        url
        height
        width
      }
      content {
        raw
      }
    }
  }
`;

export const postDetails = gql`
  query GetPostDetails($slug: String!) {
    post(where: { slug: $slug }) {
      id
      createdAt
      slug
      title
      excerpt
      author {
        id
        bio
        name
        photo {
          url
        }
      }
      featuredImage {
        url
      }
      content {
        raw
      }
    }
  }
`;
