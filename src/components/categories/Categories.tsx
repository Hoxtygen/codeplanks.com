import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../services";
import { BlogError, PostCategory } from "../../typedefs";

export default function Categories() {
  const [categories, setCategories] = useState<PostCategory[]>([]);
  const [error, setError] = useState<BlogError | null>(null);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
      .catch((err: BlogError) => setError(err));
  }, []);
  return (
    <div className=" shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-2xl mb-4 font-semibold border-b pb-4">Categories</h3>
      {error && <p>{error.error}</p>}
      {categories.map((category) => (
        <Link key={category.id} href={`/category/${category.slug}`}>
          <span
            data-testid="link"
            className="cursor-pointer block pb-3 mb-3 text-lg"
          >
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
