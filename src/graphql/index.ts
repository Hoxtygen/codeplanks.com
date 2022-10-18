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
