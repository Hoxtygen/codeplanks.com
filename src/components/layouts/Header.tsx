import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../services";
import { BlogError, PostCategory } from "../../typedefs";

export default function Header() {
  const [categories, setCategories] = useState<PostCategory[]>([]);
  const [error, setError] = useState<BlogError | null>(null);

  useEffect(() => {
    getCategories()
      .then((categories) => setCategories(categories))
      .catch((err: BlogError) => setError(err));
  }, []);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-black py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-blue">
              TalksofCode
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {error && <p>{error.error}</p>}
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <span
                data-testid="header-link"
                className="md:float-right mt-2 align-middle text-blue ml-4 font-semibold cursor-pointer"
              >
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
