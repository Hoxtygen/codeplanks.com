import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { singlePost } from "../../../test-data/posts";
import PostDetail from "../PostDetail";

describe("Post Detail", () => {
  const post = singlePost;
  it("renders the PostDetail component", () => {
    const { container } = render(<PostDetail post={post} />);
    expect(container).toMatchSnapshot();
  });

  it("should show post details", () => {
    render(<PostDetail post={post} />);
    const heading = screen.getByTestId("post-title");
    const postDate = screen.getByTestId("published-date");
    const postTitle = screen.getByText(post.title);
    const authorName = screen.getByTestId("author-name");
    const authorImage = screen.getByTestId("author-image");
    const paragraphs = screen.getAllByTestId("paragraph");

    expect(authorImage).toBeInTheDocument();
    expect(authorImage).toMatchSnapshot();
    expect(authorName).toBeInTheDocument();
    expect(authorName).toHaveAccessibleName();
    expect(authorName).toHaveTextContent(post.author.name);
    expect(authorName).toMatchSnapshot();
    expect(heading).toBeInTheDocument();
    expect(heading).toMatchSnapshot();
    expect(paragraphs.length).toBeGreaterThan(1);
    expect(paragraphs).toMatchSnapshot();
    expect(postDate).toBeInTheDocument();
    expect(postDate).toHaveAccessibleName();
    expect(postDate).toMatchSnapshot();
    expect(postTitle).toBeInTheDocument();
    expect(postTitle).toHaveAccessibleName();
    expect(postTitle).toHaveTextContent(post.title);
    expect(postTitle).toMatchSnapshot();
  });
});
