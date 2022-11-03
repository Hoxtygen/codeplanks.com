import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Author from "../Author";

describe("Author Component", () => {
  it("should render Author component", () => {
    const author = {
      name: "Mathias Schleiden",
      bio: "Mathias was a great scientist",
      photo: {
        url: "http:fakephoto.com",
      },
    };
    const { container } = render(<Author author={author} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByRole("img")).toMatchSnapshot();
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Mathias Schleiden" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Mathias Schleiden" })
    ).toMatchSnapshot();
    expect(screen.getByText("Mathias Schleiden")).toBeInTheDocument();
    expect(screen.getByText("Mathias Schleiden")).toMatchSnapshot();
    expect(
      screen.getByText("Mathias was a great scientist")
    ).toBeInTheDocument();
    expect(screen.getByText("Mathias was a great scientist")).toMatchSnapshot();
  });
});
