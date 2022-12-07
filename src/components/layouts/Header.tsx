import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getCategories } from "../../services";
import { BlogError, PostCategory } from "../../typedefs";

import { useTheme } from "next-themes";
import Image from "next/image";

export default function Header() {
  const [categories, setCategories] = useState<PostCategory[]>([]);
  const [error, setError] = useState<BlogError | null>(null);
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    getCategories()
      .then((categories) => setCategories(categories))
      .catch((err: BlogError) => setError(err));
  }, []);
  if (!mounted) return null;

  return (
    <div className="container mx-auto px-10 py-10">
      <div className="border-b w-full inline-block border-black py-4">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-blue">
              CodePlanks
            </span>
          </Link>
          <div className="inline-block">
            {currentTheme === "dark" ? (
              <button
                className="bg-black-700 rounded-md border-none border-2 p-4"
                onClick={() => setTheme("light")}
              >
                {" "}
                <Image src="/sun.svg" alt="logo" height="20px" width="20px" />
              </button>
            ) : (
              <button
                className="bg-gray-100 rounded-md border-none border-2 p-4"
                onClick={() => setTheme("dark")}
              >
                <Image src="/moon.svg" alt="logo" height="20px" width="20px" />
              </button>
            )}
          </div>
        </div>
        <div className="hidden md:float-left md:contents">
          {error && <p>{error.error}</p>}
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <span
                data-testid="header-link"
                className="md:float-right mt-2 align-middle text-blue ml-4 font-semibold cursor-pointer text-lg"
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
