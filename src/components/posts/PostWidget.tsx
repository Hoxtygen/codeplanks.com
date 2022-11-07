import Link from "next/link";
import React, { useState, useEffect } from "react";
import { getRecentPosts, getSimilarPosts } from "../../services";
import { BlogError, PostWidgetProps, PWidget } from "../../typedefs";
import { formatDate } from "../../utils";

export default function PostWidget({ categories, slug }: PostWidgetProps) {
  const [relatedPosts, setRelatedPosts] = useState<PWidget[]>([]);
  const [error, setError] = useState<BlogError | null>(null);
  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories!, slug)
        .then((result) => setRelatedPosts(result))
        .catch((err: BlogError) => setError(err));
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
        .catch((err: BlogError) => setError(err));
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-2xl mb-4 font-semibold border-b pb-4">
        {slug ? "Related Posts" : "Recent Posts"}{" "}
      </h3>
      {error && <p>{error.error}</p>}
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-center w-full">
          <div className="w-16 flex-none">
            <img
              src={post.featuredImage.url}
              alt=""
              height="60px"
              width="60px"
              className="align-middle rounded-full"
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {formatDate(post.createdAt)}
            </p>
            <Link
              key={post.title}
              href={`/post/${post.slug}`}
              className="text-md"
            >
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
