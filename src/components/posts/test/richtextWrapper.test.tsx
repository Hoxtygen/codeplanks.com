import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RichTextWrapper from "../RichTextWrapper";
import { singlePost } from "../../../test-data/posts";

describe("RichTextWrapper", () => {
  const content = singlePost.content;
  it("renders RichTextWrapper component", () => {
    const { container } = render(<RichTextWrapper content={content} />);
    expect(container).toMatchSnapshot();
  });

  it("should render HTML elements", () => {
    render(<RichTextWrapper content={content} />);
    const blogLinks = screen.getAllByRole("link");
    const headings = screen.getAllByRole("heading");
    const orderedList = screen.getByTestId("ordered list");
    const listItems = screen.getAllByRole("listitem");
    const codeBlocks = screen.getAllByTestId("code-block");

    expect(blogLinks.length).toBeGreaterThanOrEqual(1);
    expect(blogLinks).toBeDefined();
    expect(blogLinks).toMatchSnapshot();
    expect(headings.length).toBeGreaterThanOrEqual(1);
    expect(headings).toMatchSnapshot();

    expect(orderedList).toBeDefined();
    expect(orderedList).toMatchSnapshot();
    expect(orderedList).toBeInTheDocument();
    expect(listItems).toBeDefined();
    expect(listItems).toMatchSnapshot();
    expect(listItems.length).toBeGreaterThanOrEqual(2);
    expect(codeBlocks).toBeDefined();
    expect(codeBlocks).toMatchSnapshot();
  });
});
