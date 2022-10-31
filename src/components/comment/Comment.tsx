import moment from "moment";
import React from "react";
import { SingleComment } from "../../typedefs";
import parse from "html-react-parser";

export default function Comment({ comment }: SingleComment) {
  return (
    <div data-testid="comment" className="border-b border-gray-100 mb-4 pb-4">
      <p data-testid="commenter-name" className="mb-4">
        <span data-testid="comment-date" className="font-semibold">
          {comment.name}
        </span>{" "}
        on {moment(comment.createdAt).format("MMM DD, YYYY")}
      </p>
      <p
        data-testId="commenter-comment"
        className="whitespace-pre-line text-gray-600 w-full"
      >
        {parse(comment.comment)}
      </p>
    </div>
  );
}
