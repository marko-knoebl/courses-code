import React from "react";
import TodoItem from "./TodoItem";
import { render, screen } from "@testing-library/react";

it("matches the snapshot", () => {
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
