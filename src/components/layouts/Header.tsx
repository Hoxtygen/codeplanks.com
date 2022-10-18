import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-blue">
              TalksofCode
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
