import { useFormik } from "formik";
import React from "react";
import { CommentFormProps } from "../../typedefs";

import { commentFormInitialValues } from "./formUtils/initialValues";
import { validationSchema } from "./formUtils/validationSchema";

export default function CommentForm({
  slug,
  handlePostSubmission,
  showSuccessMessage,
}: CommentFormProps) {
  const formik = useFormik({
    initialValues: commentFormInitialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.slug = slug;
      handlePostSubmission(values);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="bg-white dark:bg-slate-800 bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
        <h3 className="text-xl mb-8 font-semibold border-b pb-4">
          Leave a Reply
        </h3>

        <div className="grid grid-cols-1 gap-4 mb-4">
          <input
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            name="name"
            onChange={formik.handleChange}
            placeholder="Name"
            type="text"
            value={formik.values.name}
            onBlur={formik.handleBlur}
            data-testid="name"
          />
          <p className="text-xs text-red-500">
            {formik.touched.name && Boolean(formik.errors.name)
              ? formik.errors.name
              : null}
          </p>

          <input
            className="py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            name="email"
            onChange={formik.handleChange}
            placeholder="Email"
            type="email"
            onBlur={formik.handleBlur}
            value={formik.values.email}
            data-testid="email"
          />
          <p className="text-xs text-red-500">
            {formik.touched.email && Boolean(formik.errors.email)
              ? formik.errors.email
              : null}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <textarea
            className="p-4 outline-none w-full rounded-lg h-40 focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700"
            cols={30}
            id="comment"
            name="comment"
            placeholder="Comment"
            rows={10}
            value={formik.values.comment}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            data-testid="comment"
          />
          <p className="text-xs text-red-500">
            {formik.touched.comment && Boolean(formik.errors.comment)
              ? formik.errors.comment
              : null}
          </p>
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer"
            disabled={!(formik.isValid && formik.dirty)}
          >
            Post Comment
          </button>
          {showSuccessMessage && (
            <span className="text-xl float-right font-semibold mt-3 text-green-500">
              Comment submitted for review
            </span>
          )}
        </div>
      </div>
    </form>
  );
}
