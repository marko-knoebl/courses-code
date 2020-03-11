import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

it("renders playground heading", () => {
  const instance = render(<App />);
  const playgroundHeading = instance.getByText(/playground/i);
  expect(playgroundHeading).toBeInTheDocument();
});
