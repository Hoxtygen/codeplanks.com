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
      comments {
        id
        name
        email
        comment
        createdAt
      }
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
      categories {
        id
        name
        slug
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

export const recentPosts = gql`
  query GetRecentPosts {
    posts(orderBy: createdAt_ASC, last: 3) {
      id
      title
      createdAt
      slug
      featuredImage {
        url
      }
    }
  }
`;

export const similarPosts = gql`
  query GetSimilarPosts($slug: String!, $categories: [String!]) {
    posts(
      where: {
        slug_not: $slug
        AND: { categories_some: { slug_in: $categories } }
      }
      last: 5
    ) {
      id
      title
      createdAt
      slug
      featuredImage {
        url
      }
    }
  }
`;

export const newCommentQuery = gql`
  mutation CreateComment(
    $name: String!
    $email: String!
    $comment: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        comment: $comment
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;
