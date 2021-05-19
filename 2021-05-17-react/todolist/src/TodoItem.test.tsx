import TodoItem from "./TodoItem";

import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders a list item with a given text", () => {
  const title = "test-title";
  render(
    <TodoItem
      title={title}
      completed={false}
      onToggle={() => {}}
      onDelete={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  expect(listItem).toHaveTextContent(new RegExp(title));
});

test("triggers the toggle event", () => {
  const mockFn = jest.fn();
  render(
    <TodoItem
      title="foo"
      completed={false}
      onToggle={mockFn}
      onDelete={() => {}}
    />
  );
  const listItem = screen.getByRole("listitem");
  const toggleBtn = within(listItem).getByRole("checkbox");
  userEvent.click(toggleBtn);
  expect(mockFn).toHaveBeenCalled();
});

test("matches the snapshot", () => {
  render(
    <TodoItem
      title="foo"
      completed={false}
      onToggle={() => {}}
      onDelete={() => {}}
    />
  );
  const li = screen.getByRole("listitem");
  expect(li).toMatchSnapshot();
});
