import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("Home", () => {
  it("renders a heading", () => {
    const { container } = render(<Home />);

    const heading = screen.getByRole("heading", {
      name: /welcome to Talksofcode/i,
    });

    expect(heading).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});