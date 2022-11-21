import React from "react";

import { LayoutProps } from "../../typedefs";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
