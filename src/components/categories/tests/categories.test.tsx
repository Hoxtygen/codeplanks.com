import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Categories } from "../..";

describe("Categories", () => {
  it("should render the Categories component", () => {
    const { container } = render(<Categories />);
    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
