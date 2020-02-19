import React from "react";
import { render, cleanup } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/Playground/i);
  expect(headingElement).toBeInTheDocument();
});

afterEach(cleanup);
