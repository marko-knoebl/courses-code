import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("renders heading 'Todo'", () => {
  render(<App />);
  const heading = screen.getByRole("heading", { name: "Todo" });
  expect(heading).toBeInTheDocument();
});

test("adding a todo", () => {
  // initial state: 2 todos
  render(<App />);
  const titleInput = screen.getByRole("textbox", { name: "title" });
  userEvent.type(titleInput, "foo");
  userEvent.type(titleInput, "{enter}");
  const allListItems = screen.getAllByRole("listitem");
  expect(allListItems).toHaveLength(3);
});
