import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";

import Rating from "./Rating";

it("renders a Rating component", () => {
  const instance = render(<Rating stars={3} />);
});

it("renders three full stars", () => {
  const instance = render(<Rating stars={3} />);
  const fullStars = instance.getAllByText("★");
  expect(fullStars).toHaveLength(3);
  for (let fullStar of fullStars) {
    expect(fullStar).toHaveClass("active");
  }
});

it("reacts to click on the fourth star", () => {
  const mockFn = jest.fn();
  const instance = render(<Rating stars={3} onChange={mockFn} />);
  const firstEmptyStar = instance.getAllByText("☆")[0];
  fireEvent.click(firstEmptyStar);
  expect(mockFn).toHaveBeenCalledWith(4);
});

afterEach(cleanup);
