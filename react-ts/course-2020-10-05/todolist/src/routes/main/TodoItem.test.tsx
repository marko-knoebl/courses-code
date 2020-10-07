import React from "react";
import TodoItem from "./TodoItem";
import { render } from "@testing-library/react";

it("matches the snapshot", () => {
  const instance = render(
    <TodoItem
      title="foo"
      completed={false}
      onToggle={() => {}}
      onDelete={() => {}}
    />
  );
  expect(instance.container).toMatchSnapshot();
});
