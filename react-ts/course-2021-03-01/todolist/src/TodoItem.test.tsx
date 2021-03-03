import TodoItem from "./TodoItem";
import { screen, render } from "@testing-library/react";

it("matches the snapshot", () => {
  render(
    <TodoItem
      todo={{ id: 1, title: "abc", completed: false }}
      onCheckedChange={() => {}}
      onDelete={() => {}}
    />
  );
  const li = screen.getByRole("listitem");
  expect(li).toMatchSnapshot();
});
