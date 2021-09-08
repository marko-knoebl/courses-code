import React from 'react';
import { render, screen, within } from '@testing-library/react';
import App from './AppCls';

import exampleData from "../public/example.json";

test('renders a heading with text "Navbar"', () => {
  render(<App />);
  const navbarHeading = screen.getByRole("heading", {name: /Navbar/i});
  expect(navbarHeading).toBeInTheDocument();
});

function double(n: number) {
  return n * 2;
}

test("doubles a number", () => {
  expect(double(3)).toEqual(6);
});

test("renders a table", () => {
  render(<App />);
  const table = screen.getByRole("table");
  expect(table).toBeInTheDocument();
});

test("renders a table header row", () => {
  render(<App />);
  const tableRows = screen.getAllByRole("row");
  const headerRow = tableRows[0];
  const statusHeader = within(headerRow).getByRole(
    "columnheader", {name: /status/i}
  );
  expect(statusHeader).toBeInTheDocument();
});

// test("loads and renders first row", async () => {
//   const data = {
//     value: 'Chuck Norris counted to infinity. Twice.',
//   };
//   globalThis.fetch = () =>
//     Promise.resolve({ json: () => Promise.resolve(exampleData) });
//   render(<App />);
//   const tableBody = screen.getAllByRole("rowgroup")[1];
//   const topRow = await within(tableBody).findByRole("row", {}, {timeout: 3000});
//   expect(topRow).toBeInTheDocument();
// });

test('matches the snapshot', () => {
  render(
    <App />
  );
  const app = screen.getByTestId('app');
  expect(app).toMatchSnapshot();
});
