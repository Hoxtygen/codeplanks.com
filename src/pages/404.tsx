import Link from "next/link";
import React from "react";

export default function FourOhFour() {
  return (
    <div className="container mx-auto wrap flex flex-col justify-center items-center">
      <div className="flex justify">
        <div className="px-10">
          <h1 className="mb-4 text-4xl font-semibold">
            You seem to have missed your way
          </h1>
          <h2 className="text-2xl pb-3">
            The page you&apos;re looking for does not exist
          </h2>
          <Link href="/">
            <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-black text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">
              Go back home
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
