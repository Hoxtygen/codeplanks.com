import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import Layout from "../Layout";

describe("Header", () => {
  it("renders Header component", () => {
    const view = render(<Header />);
    const headerText = screen.getByText("TalksofCode");
    expect(view).toMatchSnapshot();
    expect(headerText).toBeInTheDocument();
    expect(headerText).toMatchSnapshot();
  });

  it("renders layout", () => {
    const sub = <button data-testid="btn">Child component</button>;
    const { container } = render(<Layout>{sub}</Layout>);
    expect(container).toMatchSnapshot();
  });
});
