import React from "react";

import { CommentListProp, CommentProp } from "../../typedefs";
import Comment from "./Comment";

export default function CommentList({ postComments }: CommentListProp) {
  return (
    <div className="bg-white dark:bg-slate-800 bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
      <h3
        data-testid="comments-heading"
        className="text-xl mb-8 font-semibold border-b pb-4"
      >
        {postComments.length} Comments
      </h3>
      {postComments.map((comment: CommentProp) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}
