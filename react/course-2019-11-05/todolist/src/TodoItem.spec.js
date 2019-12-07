import React from "react";
import TestRenderer from "react-test-renderer";

import TodoItem from "./TodoItem";

it("renders a TodoItem without crashing", () => {
  const instance = TestRenderer.create(
    <TodoItem todo={{ title: "test", completed: true }} />
  ).root;
});

describe("rendering", () => {
  it("renders a div starting with 'TODO:'", () => {
    const instance = TestRenderer.create(
      <TodoItem todo={{ title: "a", completed: false }} />
    ).root;
    const div = instance.findByType("div");
    const firstTextNode = div.children[0];
    expect(firstTextNode).toEqual("TODO: ");
  });

  it("renders a div containing the todo title", () => {
    const renderedTitle = "abc";
    const instance = TestRenderer.create(
      <TodoItem todo={{ title: renderedTitle, completed: false }} />
    ).root;
    const secondNode = instance.findByType("div").children[1];
    expect(secondNode).toEqual(renderedTitle);
  });
});

describe("events", () => {
  it("fires a toggleTodo event if the todo is clicked", () => {
    const mockFn = jest.fn();
    const instance = TestRenderer.create(
      <TodoItem
        todo={{ id: 1, title: "a", completed: false }}
        toggleTodo={mockFn}
      />
    ).root;
    // trigger the click event on the div in the instance
    const divNode = instance.findByType("div");
    divNode.props.onClick();
    // check if mockFn was called with id 1
    expect(mockFn).toHaveBeenCalledWith(1);
  });
});

describe("errors", () => {
  it("throws if title was not provided", () => {
    const functionThatShouldThrow = () => {
      TestRenderer.create(<TodoItem todo={{ id: 1, completed: false }} />);
    };
    expect(functionThatShouldThrow).toThrow("invalid / missing prop 'todo'");
  });
});

it("matches snapshot", () => {
  const tree = TestRenderer.create(
    <TodoItem todo={{ id: 1, completed: true, title: "a" }} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
