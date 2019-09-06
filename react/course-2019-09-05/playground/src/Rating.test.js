import React from "react";
import Rating from "./Rating";

import TestRenderer from "react-test-renderer";

it("renders a component without crashing", () => {
  const instance = TestRenderer.create(<Rating stars={3} />).root;
});

it("renders a div with 5 children", () => {
  const instance = TestRenderer.create(<Rating stars={3} />).root;
  expect(instance.children[0].children).toHaveLength(5);
});

it("renders 5 spans", () => {
  const instance = TestRenderer.create(<Rating stars={3} />).root;
  expect(instance.findAllByType("span")).toHaveLength(5);
});

it("renders 3 active stars", () => {
  const instance = TestRenderer.create(<Rating stars={3} />).root;
  expect(instance.findAllByProps({ className: "star active" })).toHaveLength(3);
});

it("reacts to click on star 4", () => {
  const mockFn = jest.fn();
  const instance = TestRenderer.create(<Rating stars={3} onChange={mockFn} />)
    .root;
  const star4 = instance.children[0].children[3];
  // click simulieren
  star4.props.onClick();
  expect(mockFn).toBeCalledWith(4);
});

it("renders 3 active stars to snapshot", () => {
  const tree = TestRenderer.create(<Rating stars={3} />).toJSON();
  expect(tree).toMatchSnapshot();
});
