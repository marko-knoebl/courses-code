import TestRenderer from "react-test-renderer";

import TodoItem from "./TodoItem";

it("renders a component without crashing", () => {
  const instance = TestRenderer.create(
    <TodoItem
      completed={false}
      title="abc"
      onCompletedChange={() => {}}
      onDelete={() => {}}
    />
  ).root;
});

it("displays the todo title", () => {
  const instance = TestRenderer.create(
    <TodoItem
      completed={false}
      title="abc"
      onCompletedChange={() => {}}
      onDelete={() => {}}
    />
  ).root;
  const liElement = instance.children[0] as TestRenderer.ReactTestInstance;
  const text = liElement.children[2];
  expect(text).toMatch(/abc/);
});
