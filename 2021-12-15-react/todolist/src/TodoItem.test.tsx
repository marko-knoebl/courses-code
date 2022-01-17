import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "./TodoItem";

it("renders a list item with a given text", () => {
  render(
    <TodoItem
      todo={{ id: 1, title: "foo", completed: false }}
      onDelete={() => {}}
      onChangeCompleted={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveTextContent(/foo/);
});

it("triggers the changeCompleted event", () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      todo={{ id: 1, title: "foo", completed: false }}
      onDelete={() => {}}
      onChangeCompleted={mockFn}
    />
  );
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
  userEvent.click(checkbox);
  expect(mockFn).toHaveBeenCalledWith(1, true);
});
