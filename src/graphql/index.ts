import { gql } from "graphql-request";

const AUTHOR_FRAGMENT = gql`
  fragment AuthorInfo on Post {
    author {
      id
      bio
      name
      photo {
        url
      }
    }
  }
`;

const COMMENT_FRAGMENT = gql`
  fragment Comment on Post {
    comments {
      id
      name
      email
      comment
      createdAt
    }
  }
`;

const CATEGORY_FRAGMENT = gql`
  fragment Categories on Post {
    categories {
      id
      name
      slug
    }
  }
`;

const FEATURED_IMAGE_FRAGMENT = gql`
  fragment featuredImage on Post {
    featuredImage {
      url
      height
      width
    }
  }
`;

const POST_FRAGMENT = gql`
  fragment PostInfo on Post {
    createdAt
    excerpt
    id
    slug
    title
  }
`;

export const allPosts = gql`
  query GetPosts {
    posts(orderBy: publishedAt_DESC) {
      ...PostInfo
      ...AuthorInfo
      ...featuredImage
      content {
        raw
      }
    }
  }
  ${AUTHOR_FRAGMENT}
  ${FEATURED_IMAGE_FRAGMENT}
  ${POST_FRAGMENT}
`;

export const postDetails = gql`
  query GetPostDetails($slug: String!) {
    post(where: { slug: $slug }) {
      ...PostInfo
      ...AuthorInfo
      ...Comment
      ...Categories
      featuredImage {
        url
      }

      content {
        raw
      }
    }
  }
  ${AUTHOR_FRAGMENT}
  ${COMMENT_FRAGMENT}
  ${CATEGORY_FRAGMENT}
  ${POST_FRAGMENT}
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
      ...PostInfo
      ...AuthorInfo
      ...Categories
      ...featuredImage
    }
  }
  ${AUTHOR_FRAGMENT}
  ${CATEGORY_FRAGMENT}
  ${FEATURED_IMAGE_FRAGMENT}
  ${POST_FRAGMENT}
`;

export const recentPosts = gql`
  query GetRecentPosts {
    posts(orderBy: publishedAt_DESC, last: 5) {
      ...PostInfo
      featuredImage {
        url
      }
    }
  }
  ${POST_FRAGMENT}
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
      ...PostInfo
      featuredImage {
        url
      }
    }
  }
  ${POST_FRAGMENT}
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
