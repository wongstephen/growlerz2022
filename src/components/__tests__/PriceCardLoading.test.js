import { render, screen, cleanup, getAllByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { PriceCardLoading } from "../PriceCardLoading";

describe("Tests for Price Card Loading Skeleton", () => {
  it("should test if price skeleton loads", () => {
    render(<PriceCardLoading />);
    const el = screen.getByTestId("price-loading");
    expect(el).toBeInTheDocument();
  });
});
