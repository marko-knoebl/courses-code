import React from "react";
import TestRenderer from "react-test-renderer";
import { TodoType } from "./TodoType";
import TodoList from "./TodoList";

const initialTodos: Array<TodoType> = [
  {
    id: 1,
    title: "abc",
    completed: false
  },
  {
    id: 2,
    title: "def",
    completed: true
  }
];

it("renders 2 li elements", () => {
  const liElements = TestRenderer.create(
    <TodoList todos={initialTodos} onToggle={() => {}} />
  ).root.findAllByType("li");

  console.log(liElements);

  expect(liElements[0].type).toEqual("li");

  expect(liElements).toHaveLength(2);
});

it("triggers an 'onToggle' event", () => {
  const mockFn = jest.fn();
  const instance = TestRenderer.create(
    <TodoList todos={initialTodos} onToggle={mockFn} />
  ).root;
  const secondTodo = instance.findAllByType("li")[1];
  // simulate click
  secondTodo.props.onClick();
  expect(mockFn).toBeCalledWith(2);
});
