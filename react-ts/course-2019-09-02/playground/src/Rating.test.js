import TestRenderer from "react-test-renderer";
import React from "react";

import Rating from "./Rating";

it("renders a component without crashing", () => {
  TestRenderer.create(<Rating stars={3} />);
});

describe("rendering of rating components", () => {
  it("renders 5 spans", () => {
    const instance = TestRenderer.create(<Rating stars={3} />).root;
    const allSpans = instance.findAllByType("span");
    expect(allSpans).toHaveLength(5);
  });

  it("renders 3 active stars", () => {
    const instance = TestRenderer.create(<Rating stars={3} />).root;
    const allActiveSpans = instance.findAllByProps({
      className: "star active"
    });
    expect(allActiveSpans).toHaveLength(3);
  });
});

describe("event processing", () => {
  it("reacts to click on the third star", () => {
    const mockFn = jest.fn();
    const instance = TestRenderer.create(<Rating stars={4} onChange={mockFn} />)
      .root;
    const thirdStar = instance.findAllByType("span")[2];
    thirdStar.props.onClick();
    expect(mockFn).toBeCalledWith(3);
  });
});

describe("errors", () => {
  it("throws an error if the number of stars is 0", () => {
    const testFn = () => {
      TestRenderer.create(<Rating stars={0} />);
    };
    expect(testFn).toThrow("number of stars must be one of 1, 2, 3, 4, 5");
  });
});

describe("snapshot tests", () => {
    it('renders a rating of 3', () => {
      const tree = TestRenderer
        .create(<Rating stars={3}/>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
})