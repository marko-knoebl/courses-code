import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import puppeteer from "puppeteer";

test("renders learn react link", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/load Todos from API/i);
  expect(linkElement).toBeInTheDocument();
});

// describe("Tests with puppeteer", () => {
//   let browser: puppeteer.Browser;
//   let page: puppeteer.Page;
//   beforeAll(async () => {
//     browser = await puppeteer.launch();
//   });
//   beforeEach(async () => {
//     page = await browser.newPage();
//     await page.goto("http://localhost:3000");
//   });
//   afterAll(async () => {
//     await browser.close();
//   });

//   test("displays page with title 'React App'", async () => {
//     const pageTitle = await page.title();
//     expect(pageTitle).toEqual("React App");
//   });

//   test("displays 3 li elements", async () => {
//     const numElements = await page.$$eval("li", (elements) => elements.length);

//     expect(numElements).toEqual(3);
//   });
// });
