import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { ToTop } from "../ToTop";

afterEach(() => {
  cleanup();
});

const noop = () => {};
Object.defineProperty(window, "scrollTo", { value: noop, writable: true });

describe("Test top button", () => {
  it.todo(
    "Button click scrolls to top"

    // , () => {
    //   render(<ToTop />);
    //   const buttonElement = screen.getByTestId("scroll-top-btn");
    //   fireEvent.click(buttonElement);
    //   // expect(window.scrollTo).toHaveBeenCalled(0, 0);
    // }
  );
});
