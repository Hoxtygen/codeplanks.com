import React from "react";
import { LayoutProps } from "../../typedefs";
import Header from "./Header";

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
