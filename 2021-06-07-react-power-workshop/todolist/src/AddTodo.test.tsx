import AddTodo from "./AddTodo";

import { screen, render } from "@testing-library/react";

test("render test", () => {
  const mockOnAddition = jest.fn();
  render(<AddTodo onAddition={mockOnAddition} />);
  const textbox = screen.getByRole("textbox");
  const button = screen.getByRole("button");
  textbox.setAttribute("value", "foobar");
  button.click();
  expect(mockOnAddition).toBeCalledTimes(1);
});
