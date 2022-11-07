import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { testComments } from "../../../data/comments";
import Comment from "../Comment";
import CommentList from "../CommentList";

describe("Comment", () => {
  it("should render commentlist component", () => {
    render(<CommentList postComments={testComments.comments} />);

    expect(screen.getByTestId("comments-heading")).toBeInTheDocument();
    expect(screen.getByTestId("comments-heading")).toMatchSnapshot();
    expect(screen.getAllByTestId("comment")).toMatchSnapshot();
  });

  it("should render the comment component", () => {
    const comment = {
      id: "cl9ptdgr712um0alp2qqae0rg",
      name: "Machiavelli",
      email: "nacuabjkj dfd",
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ex commodi voluptatibus laboriosam est? Soluta, odio natus vel blanditiis mollitia impedit expedita temporibus sit cum dolores enim eveniet eaque dolorum repellat labore hic magnam non assumenda laboriosam.\n",
      createdAt: "2022-10-30T16:25:30.706593+00:00",
    };
    render(<Comment comment={comment} />);
    expect(screen.getByTestId("commenter-name")).toBeInTheDocument();
    expect(screen.getByTestId("commenter-comment")).toBeInTheDocument();
    expect(screen.getByTestId("commenter-name")).toMatchSnapshot();
    expect(screen.getByTestId("commenter-comment")).toMatchSnapshot();
    expect(screen.getByTestId("comment-date")).toBeInTheDocument();
    expect(screen.getByTestId("comment-date")).toMatchSnapshot();
  });
});
