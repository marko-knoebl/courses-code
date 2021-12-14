import { render, screen } from "@testing-library/react";
import App from "./App";

it("matches the snapshot", () => {
  render(<App />);
  const ul = screen.getByRole("list");
  expect(ul).toMatchSnapshot();
});
