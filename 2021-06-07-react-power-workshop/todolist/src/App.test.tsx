import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("displays heading 'Todo'", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = screen.getByRole("heading", { name: "Todo" });
  expect(heading).toBeInTheDocument();
});

