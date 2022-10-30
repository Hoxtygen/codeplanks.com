import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import CommentForm from "../CommentForm";
import userEvent from "@testing-library/user-event";

describe("CommentForm", () => {
  it("should render comment form", () => {
    const handleSubmit = jest.fn();
    const slug = "promises";
    render(
      <CommentForm
        showSuccessMessage={true}
        slug={slug}
        handlePostSubmission={handleSubmit}
      />
    );

    expect(screen.getByTestId("email")).toBeInTheDocument();
    expect(screen.getByTestId("email")).toMatchSnapshot();
    expect(screen.getByTestId("comment")).toBeInTheDocument();
    expect(screen.getByTestId("comment")).toMatchSnapshot();
    expect(
      screen.getByRole("button", { name: /Post comment/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId("name")).toBeInTheDocument();
    expect(screen.getByTestId("name")).toMatchSnapshot();
    expect(
      screen.getByRole("button", { name: /Post comment/i })
    ).toMatchSnapshot();
  });

  it("should submit comment form", async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();
    const slug = "promises";
    render(
      <CommentForm
        showSuccessMessage={true}
        slug={slug}
        handlePostSubmission={handleSubmit}
      />
    );
    await userEvent.type(screen.getByTestId("name"), "Mark Anderson");
    await userEvent.type(screen.getByTestId("email"), "Anderson@example.com");
    await userEvent.type(
      screen.getByTestId("comment"),
      "Lorem ipsum dolor sit amet adipscing consectetur"
    );

    await user.click(screen.getByRole("button", { name: /Post comment/i }));
    await waitFor(() =>
      expect(handleSubmit).toHaveBeenCalledWith({
        name: "Mark Anderson",
        email: "Anderson@example.com",
        comment: "Lorem ipsum dolor sit amet adipscing consectetur",
        slug: slug,
      })
    );
  });

  it("should not submit comment when email is invalid", async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();
    const slug = "promises";
    render(
      <CommentForm
        showSuccessMessage={true}
        slug={slug}
        handlePostSubmission={handleSubmit}
      />
    );
    await userEvent.type(screen.getByTestId("name"), "Mark Anderson");
    await userEvent.type(screen.getByTestId("email"), "Anderson@example");
    await userEvent.type(
      screen.getByTestId("comment"),
      "Lorem ipsum dolor sit amet adipscing consectetur"
    );

    await user.click(screen.getByRole("button", { name: /Post comment/i }));
    expect(screen.getByRole("button")).toBeDisabled();
    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it("should not submit comment when name is less than 2 characters", async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();
    const slug = "promises";
    render(
      <CommentForm
        showSuccessMessage={true}
        slug={slug}
        handlePostSubmission={handleSubmit}
      />
    );
    await userEvent.type(screen.getByTestId("name"), "M");
    await userEvent.type(screen.getByTestId("email"), "Anderson@example.com");
    await userEvent.type(
      screen.getByTestId("comment"),
      "Lorem ipsum dolor sit amet adipscing consectetur"
    );

    await user.click(screen.getByRole("button", { name: /Post comment/i }));
    expect(screen.getByRole("button")).toBeDisabled();
    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });

  it("should not submit comment when comment is less than 5 characters", async () => {
    const handleSubmit = jest.fn();
    const user = userEvent.setup();
    const slug = "promises";
    render(
      <CommentForm
        showSuccessMessage={true}
        slug={slug}
        handlePostSubmission={handleSubmit}
      />
    );
    await userEvent.type(screen.getByTestId("name"), "Mark Anderson");
    await userEvent.type(screen.getByTestId("email"), "Anderson@example.com");
    await userEvent.type(screen.getByTestId("comment"), "Lore");

    await user.click(screen.getByRole("button", { name: /Post comment/i }));
    expect(screen.getByRole("button")).toBeDisabled();
    await waitFor(() => expect(handleSubmit).not.toHaveBeenCalled());
  });
});
