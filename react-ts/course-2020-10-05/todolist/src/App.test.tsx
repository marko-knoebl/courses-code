import React from "react";
import { render, within, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

it("renders a 'Todo' heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const headingElement = screen.getByRole("heading", {
    name: /todo/i,
  });
  expect(headingElement).toBeInTheDocument();
});

it("deletes a todo item", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const lis = screen.getAllByRole("listitem");
  const numLis = lis.length;
  const thirdLi = lis[2];
  const thirdLiDeleteBtn = within(thirdLi).getByRole("button");
  fireEvent.click(thirdLiDeleteBtn);
  const newLis = screen.getAllByRole("listitem");
  expect(newLis.length).toEqual(numLis - 1);
});
