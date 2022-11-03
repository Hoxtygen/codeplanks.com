import { ElementNode } from "@graphcms/rich-text-types";

export interface LayoutProps {
  children: React.ReactNode;
}

interface Author {
  bio: string;
  name: string;
  photo: {
    url: string;
  };
}
export interface AuthorProp {
  author: Author;
}

export interface Content {
  raw: {
    children: ElementNode[];
  };
}

export interface RichContextProps {
  content: Content;
}

export interface CommentProp {
  id: string;
  name: string;
  createdAt: string;
  comment: string;
  email: string;
}

export interface SingleComment {
  comment: CommentProp;
}

export interface CommentListProp {
  postComments: CommentProp[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  excerpt: string;
  comments: CommentProp[];
  featuredImage: {
    url: string;
    height: number;
    width: number;
  };
  author: Author;
  categories?: PostCategory[];
}

export interface PostWithContent extends BlogPost {
  content: Content;
}
export interface PostWithoutContent {
  post: BlogPost;
}

export interface Post {
  post: PostWithContent;
}

export interface BlogPostData {
  posts: BlogPost[];
}

export interface BlogError {
  error: string;
  status: number;
}

export interface PostsError {
  errors: BlogError[];
}

export interface PostCategory {
  id: string;
  name: string;
  slug: string;
}

export interface HomeProps {
  posts: BlogPostData;
  categories: PostCategory;
}

export interface PostCategories {
  categories: PostCategory[];
}

export interface PostWidgetProps {
  categories?: string[];
  slug?: string;
}

export interface PWidget {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  featuredImage: {
    url: string;
  };
}

export interface RecentOrSimilarPosts {
  posts: PWidget[];
}

export interface NewComment {
  name: string;
  email: string;
  comment: string;
  slug: string;
}

export interface CommentFormProps {
  slug: string;
  handlePostSubmission(values: NewComment): void;
  showSuccessMessage: boolean;
}
