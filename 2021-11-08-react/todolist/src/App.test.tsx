import { render, screen, within } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

beforeEach(() => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const titleInput = screen.getByRole("textbox", {
    name: /title/i,
  });
  const addButton = screen.getByRole("button", {
    name: "add",
  });
  for (let title of ["first", "second", "third"]) {
    userEvent.type(titleInput, title);
    userEvent.click(addButton);
  }
});

test("toggling a todo", () => {
  const todoList = screen.getByRole("list");
  const firstTodoItem = within(todoList).getAllByRole("listitem")[0];
  const firstTodoItemCheckbox = within(firstTodoItem).getByRole("checkbox");
  expect(firstTodoItem).toHaveTextContent(/TODO: /);
  userEvent.click(firstTodoItemCheckbox);
  expect(firstTodoItem).toHaveTextContent(/DONE: /);
});
