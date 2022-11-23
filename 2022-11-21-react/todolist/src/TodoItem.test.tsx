import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "./TodoItem";

const exampleTodo = { title: "foo", id: 1, completed: false };

test("renders a list item with a given text", () => {
  render(
    <TodoItem
      todo={exampleTodo}
      onChangeCompleted={() => {}}
      onDelete={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveTextContent(/foo/i);
});

test("function call", () => {
  const mockFn = jest.fn();
  mockFn("foo");
  expect(mockFn).toHaveBeenCalled();
  const mockFn2 = jest.fn();
  [1, 2, 3].map(mockFn2);
  expect(mockFn2).toHaveBeenCalledTimes(3);
});
