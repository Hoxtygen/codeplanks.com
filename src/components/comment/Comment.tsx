import parse from "html-react-parser";
import React from "react";

import { SingleComment } from "../../typedefs";
import { formatDate } from "../../utils";

export default function Comment({ comment }: SingleComment) {
  return (
    <div data-testid="comment" className="border-b border-gray-100 mb-4 pb-4">
      <p data-testid="commenter-name" className="mb-4">
        <span data-testid="comment-date" className="font-semibold">
          {comment.name}
        </span>{" "}
        on {formatDate(comment.createdAt)}
      </p>
      <p data-testid="commenter-comment" className="whitespace-pre-line w-full">
        {parse(comment.comment)}
      </p>
    </div>
  );
}
