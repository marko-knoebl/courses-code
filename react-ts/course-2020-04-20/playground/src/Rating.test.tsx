import React from "react";
import { render, fireEvent } from "@testing-library/react";

import Rating from "./Rating";

test("renders three active stars", () => {
  const instance = render(<Rating stars={3} onStarsChange={() => {}} />);
  const fullStars = instance.getAllByText("★");
  expect(fullStars.length).toEqual(3);
});

test("reacts to click on the fourth star", () => {
  const mockFn = jest.fn();
  const instance = render(<Rating stars={3} onStarsChange={mockFn} />);
  const firstEmptyStar = instance.getAllByText("☆")[0];
  fireEvent.click(firstEmptyStar);
  expect(mockFn).toHaveBeenCalledWith(4);
});

it("matches the snapshot", () => {
  const instance = render(<Rating stars={3} onStarsChange={() => {}} />);
  expect(instance.baseElement).toMatchSnapshot();
});
