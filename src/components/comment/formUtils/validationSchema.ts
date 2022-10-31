import { object, string } from "yup";

export const validationSchema = object().shape({
  name: string()
    .min(2, "Name must be at least 2 characters long")
    .required("Name is required"),
  email: string().email().required("Email is required"),
  comment: string()
    .min(5, "Comment must be at least 5 characters long")
    .required("Comment cannot be empty"),
});
