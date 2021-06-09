import TodoItem from "./TodoItem";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders a list item with a given text", () => {
  const title = "test-title";
  render(
    <TodoItem
      title={title}
      isCompleted={false}
      onDelete={() => {}}
      onCompletedChange={() => {}}
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
      isCompleted={false}
      onCompletedChange={mockFn}
      onDelete={() => {}}
    />
  );
  const listItem = screen.getByRole("checkbox");
  userEvent.click(listItem);
  expect(mockFn).toHaveBeenCalled();
});
