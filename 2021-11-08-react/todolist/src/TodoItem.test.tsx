import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "./TodoItem";

test("renders a list item with a given text", () => {
  const title = "test-title";
  render(
    <TodoItem
      todo={{ id: 1, title: title, completed: false }}
      onCompletedChange={() => {}}
      onDeleteTodo={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveTextContent(new RegExp(title));
});

test("triggers the delete event", () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      todo={{ id: 1, title: "foo", completed: false }}
      onCompletedChange={() => {}}
      onDeleteTodo={mockFn}
    />
  );
  const listItem = screen.getByRole("listitem");
  const deleteBtn = within(listItem).getByRole("button", { name: /delete/i });
  userEvent.click(deleteBtn);
  expect(mockFn).toHaveBeenCalled();
});

test("matches the snapshot", () => {
  render(
    <TodoItem
      todo={{ id: 1, title: "foo", completed: false }}
      onCompletedChange={() => {}}
      onDeleteTodo={() => {}}
    />
  );
  const li = screen.getByRole("listitem");
  expect(li).toMatchSnapshot();
});
