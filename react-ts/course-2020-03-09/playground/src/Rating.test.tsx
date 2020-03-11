import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Rating from "./Rating";
import ThemeContext, { ThemeName } from "./ThemeContext";

it("renders three full stars", () => {
  const instance = render(
    <ThemeContext.Provider value="default">
      <Rating stars={3} />
    </ThemeContext.Provider>
  );
  const fullStars = instance.getAllByText("★");
  expect(fullStars).toHaveLength(3);
  for (let fullStar of fullStars) {
    expect(fullStar).toHaveStyle("color: gold;");
  }
});

it("triggers an event when the fourth star is clicked", () => {
  const mockFn = jest.fn();
  const instance = render(<Rating stars={3} onStarsChange={mockFn} />);
  const firstEmptyStar = instance.getAllByText("☆")[0];
  fireEvent.click(firstEmptyStar);
  expect(mockFn).toHaveBeenCalledWith(4);
});

it("throws an error if the number of stars is 0", () => {
  const testFn = () => {
    render(<Rating stars={0} />);
  };
  expect(testFn).toThrow("number of stars must be 1-5");
});

it("matches snapshot", () => {
  const instance = render(
    <ThemeContext.Provider value="default">
      <Rating stars={3} />
    </ThemeContext.Provider>
  );
  expect(instance.baseElement).toMatchSnapshot();
});
