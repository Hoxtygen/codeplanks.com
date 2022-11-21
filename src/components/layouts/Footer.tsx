import React from "react";

export default function Footer() {
  return (
    <div className="footer-wrapper bg-black">
      <div className="container mx-auto px-10 py-10  text-white flex justify-center items-center">
        <p className="text-lg font-semibold">
          &copy; codeplanks 2020-2022. All code{" "}
          <a href="http://opensource.org/licenses/MIT">MIT License</a>
        </p>
      </div>
    </div>
  );
}
