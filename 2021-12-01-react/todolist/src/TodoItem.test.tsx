import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import TodoItem from "./TodoItem";

test("renders a list item with a given text", () => {
  const title = "test-title";
  render(
    <TodoItem
      item={{ id: 1, title: title, completed: false }}
      onRemove={() => {}}
      onStatusChange={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveTextContent(new RegExp(title));
});

test("renders a completed todo with prefix 'DONE:'", () => {
  render(
    <TodoItem
      item={{ id: 1, title: "foo", completed: true }}
      onRemove={() => {}}
      onStatusChange={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveTextContent(/DONE:/i);
});

test("triggers an 'onStatusChange' event when the user interacts with it", () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      item={{ id: 1, title: "foo", completed: true }}
      onRemove={() => {}}
      onStatusChange={mockFn}
    />
  );
  const toggleButton = screen.getByRole("button", {name: /toggle/i})
  userEvent.click(toggleButton)
  expect(mockFn).toHaveBeenCalledWith(false);
});
