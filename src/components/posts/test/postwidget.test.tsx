import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import PostWidget from "../PostWidget";

describe("PostWidget", () => {
  it("should render the PostWidget", () => {
    const { container } = render(<PostWidget />);

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
