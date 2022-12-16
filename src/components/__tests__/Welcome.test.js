import { render, screen, cleanup, getAllByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Welcome } from "../Welcome";

afterEach(() => {
  cleanup();
});

describe("Welcome Component Tests", () => {
  test("Should render welcome section component with section title", () => {
    render(<Welcome />);
    const el = screen.getByTestId("section-1");
    expect(el).toBeInTheDocument();
    expect(el).toHaveTextContent(/welcome!/i);
  });

  test("Should render welcome section component with tagline", () => {
    render(<Welcome />);
    const el = screen.getByTestId("section-1");
    expect(el).toHaveTextContent(/DOGS. BEER. COMMUNITY./i);
  });

  test("Should render hero image", () => {
    render(<Welcome />);
    const el = screen.getByTestId("hero-img");
    expect(el).toBeInTheDocument();
  });
});
