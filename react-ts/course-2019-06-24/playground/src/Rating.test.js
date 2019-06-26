import React from "react";
import TestRenderer from "react-test-renderer";

import Rating from "./Rating";

describe("general rendering", () => {
  it("renders without crashing", () => {
    const instance = TestRenderer.create(<Rating stars={1} />).root;
  });

  it("renders 5 spans", () => {
    const instance = TestRenderer.create(<Rating stars={3} />).root;
    const spans = instance.findAllByType("span");
    expect(spans.length).toEqual(5);
    expect(spans).toHaveLength(5);
  });

  it("renders 3 active stars", () => {
    const instance = TestRenderer.create(<Rating stars={3} />).root;
    const activeStars = instance.findAllByProps({ className: "star active" });
    expect(activeStars).toHaveLength(3);
  });
});

describe("events", () => {
  it("triggers an onStarsChange event", () => {
    const mockFn = jest.fn();
    const instance = TestRenderer.create(
      <Rating stars={3} onStarsChange={mockFn} />
    ).root;
    const fourthStar = instance.findAllByType("span")[3];
    // simuliere einen Mausklick
    fourthStar.props.onClick();
    expect(mockFn).toBeCalledWith(4);
  });
});

describe("errors", () => {
  it("throws an error if the number of stars is negative", () => {
    const errorThrowingFunction = () => {
      TestRenderer.create(<Rating stars={-1} />);
    };
    expect(errorThrowingFunction).toThrow();
  });
});

describe("snapshot tests", () => {
  it("renders correctly", () => {
    const tree = TestRenderer.create(<Rating stars={2} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
