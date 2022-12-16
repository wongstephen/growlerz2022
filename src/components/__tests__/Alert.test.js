import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Alert } from "../Alert";

afterEach(() => {
  cleanup();
});

test("Alert Component to Render", () => {
  const data = { Title: "Important Info", Body: "Snow Closures Today" };
  render(<Alert data={data} />);
  const el = screen.getByTestId("alert-section");
});
test("Alert Title and Body to render when data is passed", () => {
  const data = { Title: "Important Info", Body: "Snow Closures Today" };
  render(<Alert data={data} />);
  const elTitle = screen.getByTestId("alert-title");
  const elBody = screen.getByTestId("alert-body");
  expect(elTitle).toBeInTheDocument();
  expect(elBody).toBeInTheDocument();
  expect(elTitle).toHaveTextContent(/important info/i);
  expect(elBody).toHaveTextContent(/snow closures today/i);
});

test("Alert Title and Body to NOT render when NO data is passed", () => {
  const data = null;
  render(<Alert data={data} />);
  const elTitle = screen.getByTestId("alert-title");
  const elBody = screen.getByTestId("alert-title");
  expect(elTitle).not.toHaveTextContent();
  expect(elBody).not.toHaveTextContent();
});
