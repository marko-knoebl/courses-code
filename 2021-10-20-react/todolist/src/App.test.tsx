import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import puppeteer from "puppeteer";

let browser: puppeteer.Browser;
let page: puppeteer.Page;
beforeAll(async () => {
  browser = await puppeteer.launch();
});
beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("http://localhost:3000");
});
afterAll(async () => {
  await browser.close();
});

test("displays page with title 'React App'", async () => {
  const pageTitle = await page.title();
  expect(pageTitle).toEqual("React App");
});

test("renders 2 list items initially", async () => {
  const numLis = await page.$$eval("li", (elements) => elements.length);
  expect(numLis).toEqual(2);
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
