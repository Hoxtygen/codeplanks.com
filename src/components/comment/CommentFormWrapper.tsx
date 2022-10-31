import React, { useState } from "react";
import { submitComment } from "../../services";
import { BlogError, NewComment } from "../../typedefs";
import CommentForm from "./CommentForm";

export default function CommentFormWrapper({ slug }: { slug: string }) {
  const [error, setError] = useState<BlogError | null>(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handlePostSubmission = (values: NewComment) => {
    submitComment(values)
      .then((result) => {
        if (result) {
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      })
      .catch((err: BlogError) => setError(err));
  };

  return (
    <div>
      {error && <p>{error.error}</p>}
      <CommentForm
        slug={slug}
        handlePostSubmission={handlePostSubmission}
        showSuccessMessage={showSuccessMessage}
      />
    </div>
  );
}
