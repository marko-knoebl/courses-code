import React from "react";
import TestRenderer from "react-test-renderer";
import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css";

it("renders a component without crashing", () => {
  const instance = TestRenderer.create(
    <TodoItem title="a" completed={true} onToggle={() => {}} />
  ).root;
});

it("renders a single li element", () => {
  const instance = TestRenderer.create(
    <TodoItem title="a" completed={true} onToggle={() => {}} />
  ).root;
  expect(instance.findByType("li").props["d-completed"]).toEqual("true");
  expect(instance.findAllByType("li")).toHaveLength(1);
});

it("renders an li element with correct text and class", () => {
  const liElement = TestRenderer.create(
    <TodoItem title="a" completed={true} onToggle={() => {}} />
  ).root.findByType("li");
  expect(liElement.props["d-completed"]).toEqual("true");
  expect(liElement.props.children.join("")).toEqual("DONE: a");
  expect(liElement.props.className).toEqual(styles.todoitem);
});

it("renders correctly", () => {
  const tree = TestRenderer.create(
    <TodoItem title="a" completed={true} onToggle={() => {}} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
