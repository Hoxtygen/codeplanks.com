import { ElementNode } from "@graphcms/rich-text-types";

export interface LayoutProps {
  children: React.ReactNode;
}

export interface Post {
  post: {
    id: string;
    title: string;
    slug: string;
    createdAt: string;
    excerpt: string;
    featuredImage: {
      url: string;
      height: number;
      width: number;
    };
    author: {
      bio: string;
      name: string;
      photo: {
        url: string;
      };
    };
    content: {
      raw: {
        children: ElementNode | any;
      };
    };
  };
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  excerpt: string;
  featuredImage: {
    url: string;
    height: number;
    width: number;
  };
  author: {
    bio: string;
    name: string;
    photo: {
      url: string;
    };
  };
  content: {
    raw: {
      children: ElementNode | any;
    };
  };
}

export interface BlogPostData {
  posts: BlogPost[];
}

interface BlogError {
  message: string;
}

export interface PostsError {
  errors: BlogError[];
}
