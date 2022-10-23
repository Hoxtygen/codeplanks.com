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

export const categories = gql`
  query GetCategories {
    categories {
      id
      name
      slug
    }
  }
`;

export const categoryPost = gql`
  query GetCategoryPost($slug: String!) {
    posts(where: { categories_some: { slug: $slug } }) {
      title
      slug
      id
      excerpt
      createdAt
      categories {
        id
        name
        slug
      }
      featuredImage {
        url
        height
        width
      }
      author {
        bio
        id
        name
        photo {
          url
        }
      }
    }
  }
`;
