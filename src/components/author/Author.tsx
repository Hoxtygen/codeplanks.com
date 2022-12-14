import Image from "next/image";
import React from "react";
import { AuthorProp } from "../../typedefs";

export default function Author({ author }: AuthorProp) {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          alt={author.name}
          className="align-middle rounded-full"
          height="100px"
          src={author.photo.url}
          width="100px"
        />
      </div>
      <h3 className="text-white my-4 text-xl font-bold">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
}
