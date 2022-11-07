import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../../../pages";
import { testPosts } from "../../../data/posts";
import PostCard from "../PostCard";

describe("Blog posts", () => {
  describe("Home", () => {
    it("renders the Home component", () => {
      const { container } = render(<Home posts={testPosts.posts} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe("PostCard component", () => {
    const post = testPosts.posts[0];
    it("should render PostCard component", () => {
      const { container } = render(<PostCard post={post} />);
      expect(container).toBeInTheDocument();
      expect(container).toMatchSnapshot();
    });

    it("should render a post", () => {
      render(<PostCard post={post} />);
      const excerpt = screen.getByTestId("excerpt");
      const heading = screen.getByRole("heading");
      const images = screen.getAllByRole("img");
      const link = screen.getByRole("link");
      const postDate = screen.getByTestId("postDate");
      const postTitle = screen.getByText(post.title);
      const readMore = screen.getByTestId("readmore");
      const readMoreText = screen.getByText(/Continue reading/i);

      expect(excerpt).toBeInTheDocument();
      expect(excerpt).toMatchSnapshot();
      expect(heading).toBeInTheDocument();
      expect(heading).toMatchSnapshot();
      expect(images).toHaveLength(2);
      expect(images).toMatchSnapshot();
      expect(link).toBeInTheDocument();
      expect(link).toMatchSnapshot();
      expect(postDate).toBeInTheDocument();
      expect(postDate).toMatchSnapshot();
      expect(postTitle).toBeInTheDocument();
      expect(postTitle).toMatchSnapshot();
      expect(postTitle.textContent).toBe("Promises");
      expect(readMore).toBeInTheDocument();
      expect(readMore).toMatchSnapshot();
      expect(readMoreText).toBeInTheDocument();
      expect(readMoreText).toMatchSnapshot();
    });
  });
});
